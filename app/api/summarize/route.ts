import { NextRequest, NextResponse } from "next/server";
import { extractPdfText } from "@/lib/langchain";
import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST(req: NextRequest) {
  try {
    const { pdfText, useGemini } = await req.json();
    console.log("Received PDF URL:", pdfText);
    console.log("Using Gemini:", useGemini);

    if (!pdfText) {
      return NextResponse.json({ error: "No URL provided" }, { status: 400 });
    }

    // Fetch and extract PDF text
    console.log("Extracting PDF text...");
    const pdfTextContent = await extractPdfText(pdfText);
    console.log("Extracted PDF text length:", pdfTextContent.length);

    // Truncate the text if it's too long
    const maxInputLength = 20000;
    const truncatedText =
      pdfTextContent.length > maxInputLength
        ? pdfTextContent.substring(0, maxInputLength) + "... [truncated]"
        : pdfTextContent;

    let summary;

    if (useGemini) {
      // Use Gemini model
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        console.error("Gemini API key not found");
        return NextResponse.json({ error: "Gemini API key not found" }, { status: 500 });
      }

      try {
        console.log("Initializing Gemini...");
        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({ 
          model: "gemini-1.5-pro-latest",
          generationConfig: {
            temperature: 0.7,
            topK: 40,
            topP: 0.95,
            maxOutputTokens: 1024,
          }
        });

        const prompt = `Please provide a concise summary of the following text:\n\n${truncatedText}`;
        console.log("Sending prompt to Gemini...");
        
        const result = await model.generateContent(prompt);
        console.log("Received response from Gemini");
        const response = result.response;
        summary = response.text();
        console.log("Gemini summary generated successfully");
      } catch (error: any) {
        console.error("Gemini API Error Details:", {
          message: error.message,
          stack: error.stack,
          name: error.name
        });
        return NextResponse.json(
          { error: `Failed to generate summary with Gemini: ${error.message || 'Unknown error'}` },
          { status: 500 }
        );
      }
    } else {
      // Use existing Llama model
      const apiKey = process.env.OPENROUTER_API_KEY;
      if (!apiKey) {
        console.error("OpenRouter API key not found");
        return NextResponse.json({ error: "OpenRouter API key not found" }, { status: 500 });
      }

      try {
        console.log("Sending request to OpenRouter...");
        const response = await fetch(
          "https://openrouter.ai/api/v1/chat/completions",
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${apiKey}`,
              "Content-Type": "application/json",
              "HTTP-Referer": "http://localhost:3000",
              "X-Title": "pdf-summary-app",
            },
            body: JSON.stringify({
              model: "meta-llama/llama-4-scout:free",
              temperature: 0.7,
              messages: [
                {
                  role: "user",
                  content: `Please provide a concise summary of the following text:\n\n${truncatedText}`,
                },
              ],
            }),
          }
        );

        if (!response.ok) {
          const errorText = await response.text();
          console.error("OpenRouter API Error Response:", errorText);
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        summary = data.choices[0].message.content;
        console.log("Llama summary generated successfully");
      } catch (error: any) {
        console.error("OpenRouter API Error Details:", {
          message: error.message,
          stack: error.stack,
          name: error.name
        });
        return NextResponse.json(
          { error: `Failed to generate summary with Llama: ${error.message || 'Unknown error'}` },
          { status: 500 }
        );
      }
    }

    return NextResponse.json({ summary });
  } catch (error: any) {
    console.error("Error in summarize route:", {
      message: error.message,
      stack: error.stack,
      name: error.name
    });
    return NextResponse.json(
      { error: `Failed to generate summary: ${error.message || 'Unknown error'}` },
      { status: 500 }
    );
  }
}
