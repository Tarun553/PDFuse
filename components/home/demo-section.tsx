
import dynamic from "next/dynamic";
import MarqueeBanner from "../ui/marquee-banner";
import StackedBarChart from "../ui/stacked-bar-chart";
import RecentHighlights from "../ui/TopSummarizedDoc";
import TopSummarizedDocs from "../ui/TopSummarizedDocs";


// const LastSummaryDemo = dynamic(() => import("./last-summary-demo"));

export default function DemoSection() {
  return (
    <section className="py-20">
      <div>
      <MarqueeBanner />
     
      </div>
  <div className="flex py-3.5 mt-8 flex-col lg:flex-row items-stretch justify-between gap-20 w-full">
    {/* Chart Section */}
    <div className="flex-1 flex justify-center items-center min-h-[340px]">
      <StackedBarChart />
    </div>
    {/* Top Docs Section */}
    <div className="flex-1 flex justify-center items-center min-h-[340px]">
      <TopSummarizedDocs />
    </div>
  </div>

      <div className="py-12 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <div className="text-4xl mb-6 sm:mb-8">
          🍕
        </div>
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
          Transform your PDFs with <span className="text-rose-500">powerful tools</span> for success
        </h3>
        <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold mt-4">
          Get a concise summary of your PDF in seconds.
        </p>
      </div>
    </section>
  );
}