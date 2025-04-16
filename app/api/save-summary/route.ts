// app/api/save-summary/route.ts
import { storePdfSummary } from "@/actions/upload-actions";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const { summary, fileName, pdfUrl } = body;

  const result = await storePdfSummary(summary, fileName, pdfUrl);

  return NextResponse.json(result);
}
