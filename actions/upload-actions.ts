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
    const pdfText = await extractPdfText(uploadResponse[0].file.url);
    console.log({pdfText});

    try {
      const summarizeText = async (text: string) => {
        const res = await fetch("/api/summarize", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ pdfText: text }),
        });

        const data = await res.json();
        console.log({data});
        return data.summary;
        
      };
        
      const summary = await summarizeText(pdfText);
      console.log({summary});

      return {
        success: true,
        message: "Summary generated successfully",
        data: summary,
      };

      //summaries the pdf using ai

      // save the summary to the neonDB
      // redirect to [id] summary page
     
    } catch (error) {
      console.error("Error summarizing text:", error);
      return {
        success: false,
        message: "Failed to summarize text",
        data: null,
      };
    }
  } catch (error) {
    console.error("Error generating summary:", error);
    return {
      success: false,
      message: "Failed to generate summary",
      data: null,
    };
  }
}


