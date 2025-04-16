"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { format } from "date-fns";

export function SummaryCard({ summary, expanded, onExpand }: { summary: any; expanded: boolean; onExpand: (id: string | null) => void }) {
  // Calculate half the summary length (rounded up)
  const halfLength = Math.ceil(summary.summary.length / 2);
  const preview = summary.summary.slice(0, halfLength);

  return (
    <div
      className={`relative transition-all duration-300 ${
        expanded ? "z-20 scale-105 shadow-2xl" : ""
      }`}
      onClick={() => onExpand(expanded ? null : summary.id)}
      tabIndex={0}
      role="button"
      style={{ cursor: "pointer" }}
    >
      <Card
        className={`bg-white border-rose-200 shadow-sm hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 flex flex-col group ${
          expanded ? "scale-105 border-rose-400 ring-2 ring-rose-300" : ""
        }`}
      >
        <CardHeader className="pb-2 flex flex-row items-center justify-between">
          <div>
            <CardTitle className="text-lg text-rose-700 truncate">
              {summary.pdfName}
            </CardTitle>
            <div className="text-xs text-rose-400 mt-1 flex flex-col gap-1">
              <span>
                Created: {format(new Date(summary.createdAt), "PPP p")}
              </span>
              <span>
                Updated: {format(new Date(summary.updatedAt), "PPP p")}
              </span>
            </div>
          </div>
          <span className="ml-2 px-2 py-1 text-xs font-semibold rounded-full bg-rose-100 text-rose-700 border border-rose-200 shadow group-hover:bg-rose-200 transition">
            Saved
          </span>
        </CardHeader>
        <CardContent className="flex-1 flex flex-col">
          <div
            className={`prose prose-sm max-w-none text-rose-900 mb-4 overflow-y-auto transition-all duration-300 ${
              expanded ? "max-h-[400px]" : "max-h-[90px]"
            }`}
            style={{
              whiteSpace: "pre-line",
            }}
          >
            {expanded ? summary.summary : preview + (summary.summary.length > halfLength ? "..." : "")}
          </div>
          <Link
            href={summary.pdfUrl ?? "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto text-sm text-rose-600 hover:underline"
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
            }}
          >
            View PDF
          </Link>
        </CardContent>
        {expanded && (
          <button
            className="absolute top-2 right-2 px-2 py-1 bg-rose-100 text-rose-700 rounded-full text-xs shadow hover:bg-rose-200 transition"
            onClick={(e) => {
              e.stopPropagation();
              onExpand(null);
            }}
          >
            Close
          </button>
        )}
      </Card>
    </div>
  );
}