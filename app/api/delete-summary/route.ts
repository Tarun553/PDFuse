import { NextResponse, NextRequest } from "next/server";
import { prisma } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";

export async function DELETE(req: NextRequest) {
  const { userId } = await auth();
  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { summaryId } = await req.json();
  if (!summaryId) {
    return NextResponse.json({ error: "Summary ID is required" }, { status: 400 });
  }

  try {
    const summary = await prisma.summary.delete({
      where: { id: summaryId },
    });
    return NextResponse.json({ summary }, { status: 200 });
  } catch (error) {
    console.error("Error deleting summary:", error);
    return NextResponse.json({ error: "Failed to delete summary" }, { status: 500 });
  }
}

