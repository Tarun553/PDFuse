import { SparklesIcon } from "lucide-react";
import BgGradient from "../common/bg-gradient";
import { Badge } from "../ui/badge";

export default function UploadHeader() {
    return (
        <section className="min-h-[20vh] w-full relative">
          <BgGradient />
          <div className="container mx-auto px-4 py-16">
            <div className="flex flex-col items-center justify-center space-y-8 text-center">
              <div className="space-y-4">
                <Badge variant="rose" className="mb-4">
                  <SparklesIcon className="mr-1 h-3 w-3" />
                  AI Powered
                </Badge>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                  Start Uploading Your PDFs
                </h1>
                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Transform your PDFs into concise summaries. Our AI will analyze
                  your documents and extract the key insights instantly.
                </p>
              </div>
              </div>
    
    
            
          </div>
        </section>
      );
}