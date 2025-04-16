import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import prisma from "@/lib/db";
import { Plus } from "lucide-react";
import { SummaryCardGrid } from "@/components/ui/summary-card-grid";

export default async function DashboardPage() {
  const { userId } = await auth();
  if (!userId) {
    return <div className="text-center mt-10 text-rose-700">Please sign in to view your summaries.</div>;
  }

  const summaries = await prisma.summary.findMany({
    where: { userId },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="min-h-screen bg-rose-50 py-10 px-4 sm:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-rose-700">Your PDF Summaries</h1>
          <Link
            href="/upload"
            className="inline-flex items-center gap-2 px-4 py-2 bg-rose-600 text-white font-semibold rounded-lg shadow hover:bg-rose-700 transition"
          >
            <Plus className="w-5 h-5" /> New Summary
          </Link>
        </div>
        <SummaryCardGrid summaries={summaries} />
        {summaries.length === 0 && (
          <div className="text-center text-rose-400 mt-12 text-lg">
            No summaries found. Click <Link href="/upload" className="underline text-rose-600">here</Link> to create your first summary!
          </div>
        )}
      </div>
    </div>
  );
}