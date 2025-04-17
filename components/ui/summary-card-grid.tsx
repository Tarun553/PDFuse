"use client";
import { useState } from "react";
import { SummaryCard } from "./summary-card";
import Link from "next/link";
import { Plus, Trash2 } from "lucide-react";

export function SummaryCardGrid({ summaries: initialSummaries }: { summaries: any[] }) {
  const [expanded, setExpanded] = useState<string | null>(null);
  const [summaries, setSummaries] = useState(initialSummaries);

  const handleExpand = (id: string | null) => {
    setExpanded(id);
  };

  const handleDelete = async (id: string) => {
    // Optimistically update UI
    setSummaries((prev) => prev.filter((s) => s.id !== id));
    // Call API
    await fetch("/api/delete-summary", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
  };

  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {/* New Summary Card */}
      <Link
        href="/upload"
        className="flex items-center justify-center border-2 border-dashed border-rose-300 rounded-xl min-h-[200px] bg-white hover:bg-rose-50 transition group hover:animate-pulse"
      >
        <span className="flex flex-col items-center text-rose-400 group-hover:text-rose-600 transition">
          <Plus className="w-8 h-8 mb-2 animate-bounce group-hover:animate-none" />
          <span className="font-medium">Create New Summary</span>
        </span>
      </Link>
      {/* User Summaries */}
      {summaries.map((summary) => (
        <div className="relative" key={summary.id}>
          <button
            className="absolute top-2 right-2 z-30 bg-rose-100 text-rose-600 hover:bg-rose-200 rounded-full p-1 shadow transition"
            onClick={e => {
              e.stopPropagation();
              handleDelete(summary.id);
            }}
            title="Delete summary"
          >
            <Trash2 className="w-4 h-4" />
          </button>
          <SummaryCard
            summary={summary}
            expanded={summary.id === expanded}
            onExpand={handleExpand}
          />
        </div>
      ))}
    </div>
  );
}