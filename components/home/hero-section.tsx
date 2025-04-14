"use client"

import { SparkleIcon } from "lucide-react";
import { Button } from "../ui/button";

export default function HeroSection() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center">
        <div className="max-w-3xl mx-auto text-center space-y-6 px-4">
            <button className="flex items-center justify-center gap-2 mx-auto text-lg font-medium group cursor-pointer rounded-full px-4 py-2 bg-white border border-red-200 hover:border-rose-300 hover:text-red-600 transition-all duration-200">
              Powered by AI
              <SparkleIcon className="w-5 h-5 text-rose-600 group-hover:text-rose-500 transition-colors" />
            </button>
            <h1 className="text-5xl font-bold text-center leading-tight">
              Transform PDF's into <span className="bg-rose-100 px-2 rounded-lg">concise</span> summaries
            </h1>
            <h2 className="text-2xl w-3/4 mx-auto bg-gray-200 rounded text-gray-600 font-medium">
              Get a beautiful reel of the document in seconds.
            </h2>
            <Button className="rounded-full bg-gradient-to-r from-red-800 to-rose-600 hover:from-red-700 hover:to-rose-500 text-white px-8 py-6 text-lg font-semibold transition-all duration-200 hover:scale-105">
              Try PDFuse
              <svg className="w-6 h-6 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </Button>
        </div>
    </section>
  );
}
