import {PDFLoader} from "@langchain/community/document_loaders/fs/pdf";

export async function extractPdfText(pdfUrl: string) {
  const response = await fetch(pdfUrl);
  const blob = await response.blob();
  const arrayBuffer = await blob.arrayBuffer();

  const loader = new PDFLoader(new Blob([arrayBuffer]));
  const documents = await loader.load();
  const text = documents.map(d => d.pageContent).join("\n");
  return text;
}
  

