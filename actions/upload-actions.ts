import prisma from "@/lib/db";
import { extractPdfText } from "@/lib/langchain";
import { auth, currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";


// MAIN FUNCTION TO GENERATE + SAVE SUMMARY
export async function generatePdfSummary(
  uploadResponse:
    | [
        {
          userId: string;
          file: {
            url: string;
            name: string;
          };
        }
      ]
    | null
) {
  if (!uploadResponse) {
    return {
      success: false,
      message: "File not uploaded successfully",
      data: null,
    };
  }

  const {
    userId,
    file: { url: pdfUrl, name: fileName },
  } = uploadResponse[0];

  if (!pdfUrl || !fileName) {
    return {
      success: false,
      message: "File not uploaded successfully",
      data: null,
    };
  }

  try {
    const pdfText = await extractPdfText(pdfUrl);
    console.log({ pdfText });

    const summarizeText = async (text: string) => {
      const res = await fetch("/api/summarize", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ pdfText: text }),
      });

      const data = await res.json();
      console.log({ data });
      return data.summary;
    };

    const summary = await summarizeText(pdfText);
    console.log({ summary });


    // ✅ Save summary to database
    const storeResult = await storePdfSummary(summary, fileName, pdfUrl);
    if (!storeResult.success) {
      return storeResult;
    }

    return {
      success: true,
      message: "Summary generated and saved successfully",
      data: { summary, pdfName: fileName, pdfUrl, userId },
    };
  } catch (error) {
    console.error("Error generating summary:", error);
    return {
      success: false,
      message: "Failed to generate and save summary",
      data: null,
    };
  }
}

// SAVE TO DATABASE
export async function storePdfSummary(summary: string, fileName: string, pdfUrl: string) {
  try {
    const { userId } = await auth();

    if (!userId) {
      return {
        success: false,
        message: "User not authenticated",
        data: null,
      };
    }

    const user = await currentUser();
    if (!user) {
      return {
        success: false,
        message: "User not authenticated",
        data: null,
      };
    }

    // Upsert user
    await prisma.user.upsert({
      where: { id: userId },
      update: {},
      create: {
        id: userId,
        email: user.emailAddresses[0]?.emailAddress ?? "",
        name: user.fullName ?? "",
        password: "",
        role: "user",
      },
    });

    if (!summary) {
      return {
        success: false,
        message: "Summary not generated",
        data: null,
      };
    }

    // Create summary entry
    const summaryData = await prisma.summary.create({
      data: {
        summary,
        pdfName: fileName,
        pdfUrl,
        user: {
          connect: {
            id: userId,
          },
        },
      },
    });

   

    console.log("Summary saved to database:", summaryData);

    return {
      success: true,
      message: "Summary saved successfully",
      data: summaryData,
    };
    

   
  } catch (error) {
    console.error("Error saving summary:", error);
    return {
      success: false,
      message: "Failed to store summary",
      data: null,
    };
  }
}