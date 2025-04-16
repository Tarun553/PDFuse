"use client";
import { useState } from "react";
import { SummaryCard } from "./summary-card";
import Link from "next/link";
import { Plus } from "lucide-react";

export function SummaryCardGrid({ summaries }: { summaries: any[] }) {
  const [expanded, setExpanded] = useState<string | null>(null);

  const handleExpand = (id: string | null) => {
    setExpanded(id);
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
        <SummaryCard
          key={summary.id}
          summary={summary}
          expanded={summary.id === expanded}
          onExpand={handleExpand}
        />
      ))}
    </div>
  );
}