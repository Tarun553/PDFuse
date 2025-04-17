"use client";
import {motion} from "framer-motion"
export default function TopSummarizedDocs() {
  return (
    <motion.div
      className="w-full lg:w-1/3 flex justify-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {" "}
      <motion.div
        whileHover={{
          scale: 1.02,
          boxShadow: "0px 15px 30px rgba(236, 72, 153, 0.15)",
        }}
        className="w-full max-w-sm h-full bg-white/30 backdrop-blur-lg rounded-3xl shadow-md p-6 flex flex-col justify-between border border-rose-100"
      >
        {" "}
        <div>
          {" "}
          <h2 className="text-2xl font-semibold text-rose-600 mb-5">
            {" "}
            📄 Top Summarized Docs{" "}
          </h2>{" "}
          <ul className="space-y-4 text-sm text-gray-800">
            {" "}
            <li className="flex justify-between items-center">
              {" "}
              <span className="font-medium">Project-Proposal.pdf</span>{" "}
              <span className="text-rose-500 text-xs">3 min read</span>{" "}
            </li>{" "}
            <li className="flex justify-between items-center">
              {" "}
              <span className="font-medium">Resume-Tips.pdf</span>{" "}
              <span className="text-rose-500 text-xs">1.5 min</span>{" "}
            </li>{" "}
            <li className="flex justify-between items-center">
              {" "}
              <span className="font-medium">AI-Research.pdf</span>{" "}
              <span className="text-rose-500 text-xs">4 min read</span>{" "}
            </li>{" "}
          </ul>{" "}
        </div>{" "}
        <button className="mt-6 text-sm font-medium text-rose-500 hover:underline hover:text-rose-600 transition-colors duration-200 self-start">
          {" "}
          View All Summaries →{" "}
        </button>{" "}
      </motion.div>{" "}
    </motion.div>
  );
};

