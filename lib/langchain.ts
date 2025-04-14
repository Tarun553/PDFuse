import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";

export async function extractPdfText(pdfUrl: string) {
  try {
    // Ensure the URL is properly formatted
    const url = new URL(pdfUrl);

    const response = await fetch(url.toString());
    if (!response.ok) {
      throw new Error(
        `Failed to fetch PDF: ${response.status} ${response.statusText}`
      );
    }

    const blob = await response.blob();
    const arrayBuffer = await blob.arrayBuffer();

    const loader = new PDFLoader(new Blob([arrayBuffer]));
    const documents = await loader.load();
    const text = documents.map((d) => d.pageContent).join("\n");
    console.log(text);
    return text;
  } catch (error) {
    console.error("Error in extractPdfText:", error);
    throw error;
  }
}
