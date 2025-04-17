"use client"

export default function MarqueeBanner() {
  return (
    <div className="overflow-hidden w-full bg-rose-100 py-2">
      <div className="flex whitespace-nowrap animate-marquee">
        <span className="mx-4 font-bold text-6xl text-rose-700 flex items-center gap-2">
           <span className="text-rose-500">This is the beta version of PDFuse</span> 🚧
        </span>
        {/* Duplicate for seamless loop */}
        <span className="mx-4 font-bold text-6xl text-rose-700 flex items-center gap-2">
           <span className="text-rose-500">More features will be added soon 🚀</span> 
        </span>
      </div>
      <style jsx>{`
        .animate-marquee {
          animation: marquee 15s linear infinite;
         
          animation-timing-function: ease-in-out;

        }
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
}