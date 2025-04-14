import { NextResponse } from 'next/server';
import { extractPdfText } from '@/lib/langchain';

export async function POST(request: Request) {
  try {
    const { fileUrl } = await request.json();
    
    if (!fileUrl) {
      return NextResponse.json(
        { error: 'File URL is required' },
        { status: 400 }
      );
    }

    const text = await extractPdfText(fileUrl);
    
    return NextResponse.json({ text });
  } catch (error) {
    console.error('Error processing PDF:', error);
    return NextResponse.json(
      { error: 'Failed to process PDF' },
      { status: 500 }
    );
  }
}