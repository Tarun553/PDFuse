import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import prisma from "@/lib/db";
import { Plus } from "lucide-react";
import {format} from 'date-fns';


export default async function DashboardPage() {
  const { userId } = await auth();
  if (!userId) {
    // Optionally redirect to sign-in or show a message
    return <div className="text-center mt-10 text-rose-700">Please sign in to view your summaries.</div>;
  }

  // Fetch summaries for the logged-in user
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
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {/* New Summary Card (mobile-friendly) */}
          <Link
            href="/upload"
            className="flex items-center justify-center border-2 border-dashed border-rose-300 rounded-xl min-h-[200px] bg-white hover:bg-rose-50 transition"
          >
            <span className="flex flex-col items-center text-rose-400">
              <Plus className="w-8 h-8 mb-2" />
              <span className="font-medium">Create New Summary</span>
            </span>
          </Link>
          {/* User Summaries */}
          {summaries.map((summary) => (
            <Card
              key={summary.id}
              className="bg-white border-rose-200 shadow-sm hover:shadow-lg transition flex flex-col"
            >
              <CardHeader className="pb-2">
                <CardTitle className="text-lg text-rose-700 truncate">{summary.pdfName}</CardTitle>
                <div className="text-xs text-rose-400 mt-1 flex flex-col gap-1">
                  <span>Created: {format(new Date(summary.createdAt), "PPP p")}</span>
                  <span>Updated: {format(new Date(summary.updatedAt), "PPP p")}</span>
                </div>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <div className="prose prose-sm max-w-none text-rose-900 mb-4 overflow-y-auto" style={{ maxHeight: 120 }}>
                  {summary.summary.length > 250
                    ? summary.summary.slice(0, 250) + "..."
                    : summary.summary}
                </div>
                <Link
                  href={summary.pdfUrl ?? "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto text-sm text-rose-600 hover:underline"
                >
                  View PDF
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
        {summaries.length === 0 && (
          <div className="text-center text-rose-400 mt-12 text-lg">
            No summaries found. Click <Link href="/upload" className="underline text-rose-600">here</Link> to create your first summary!
          </div>
        )}
      </div>
    </div>
  );
}