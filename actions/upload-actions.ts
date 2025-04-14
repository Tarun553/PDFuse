import { extractPdfText } from "@/lib/langchain";

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


  if(!pdfUrl || !fileName) {
    return {
      success: false,
      message: "File not uploaded successfully",
      data: null,
    };
  }


  try {
    const pdfText = await extractPdfText(pdfUrl);
    console.log({pdfText});
  } catch (error) {
    console.error("Error generating summary:", error);
    return {
      success: false,
      message: "Failed to generate summary",
      data: null,
    };
  }
}


