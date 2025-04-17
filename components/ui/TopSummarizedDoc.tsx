"use client";

import { motion } from "framer-motion";
import { Flame, FileText, BarChart3 } from "lucide-react";

const highlights = [
  {
    icon: <Flame className="text-orange-500 w-5 h-5" />,
    title: "Top Document",
    desc: "AI-Research.pdf summarized in 4 mins",
  },
  {
    icon: <FileText className="text-rose-500 w-5 h-5" />,
    title: "Most Read",
    desc: "Resume-Tips.pdf opened 38 times",
  },
  {
    icon: <BarChart3 className="text-green-500 w-5 h-5" />,
    title: "Trending Summary",
    desc: "Project-Proposal.pdf rated 4.8/5",
  },
];

export default function RecentHighlights() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full lg:w-[360px] bg-white border shadow-xl rounded-2xl p-6 space-y-6"
    >
      <h2 className="text-xl font-semibold text-gray-800">📊 Recent Highlights</h2>

      <ul className="space-y-4">
        {highlights.map((item, index) => (
          <li key={index} className="flex gap-4 items-start">
            <div className="p-2 rounded-full bg-gray-100">{item.icon}</div>
            <div>
              <p className="font-medium text-gray-700">{item.title}</p>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          </li>
        ))}
      </ul>

      <button className="text-sm font-medium text-rose-500 hover:underline hover:text-rose-600 transition-colors duration-200">
        Explore all insights →
      </button>
    </motion.div>
  );
}
