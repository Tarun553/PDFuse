export default function HowItWorksSection() {
  return (
    <section className="relative overflow-hidden bg-gray-50 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xl sm:text-4xl font-bold mb-4">
            HOW IT <span className="text-rose-500">WORKS</span>
          </h2>
          <p className="text-gray-600 font-semibold text-lg sm:text-xl leading-relaxed">
            Transform any PDF into an easy-to-digest summary in three steps.
            <br />
            Let our AI-powered system do the heavy lifting for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr] gap-4 md:gap-0 max-w-5xl mx-auto items-center">
          {/* Upload PDF */}
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 mb-6 flex items-center justify-center rounded-full bg-gradient-to-r from-rose-400 to-rose-600 text-white text-2xl transform transition-all duration-300 hover:scale-110 hover:shadow-lg hover:rotate-6 cursor-pointer">
              📄
            </div>
            <h3 className="text-xl font-semibold mb-2">Upload PDF</h3>
            <p className="text-gray-600">Simply upload your PDF document to our secure platform</p>
          </div>

          {/* Arrow 1 */}
          <div className="hidden md:flex justify-center text-rose-300 text-4xl font-bold">
            →
          </div>

          {/* AI Analysis */}
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 mb-6 flex items-center justify-center rounded-full bg-gradient-to-r from-rose-400 to-rose-600 text-white text-2xl transform transition-all duration-300 hover:scale-110 hover:shadow-lg hover:rotate-6 cursor-pointer">
              🤖
            </div>
            <h3 className="text-xl font-semibold mb-2">AI Analysis</h3>
            <p className="text-gray-600">Our AI processes and analyzes your document content</p>
          </div>

          {/* Arrow 2 */}
          <div className="hidden md:flex justify-center text-rose-300 text-4xl font-bold">
            →
          </div>

          {/* Get Summary */}
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 mb-6 flex items-center justify-center rounded-full bg-gradient-to-r from-rose-400 to-rose-600 text-white text-2xl transform transition-all duration-300 hover:scale-110 hover:shadow-lg hover:rotate-6 cursor-pointer">
              📝
            </div>
            <h3 className="text-xl font-semibold mb-2">Get Summary</h3>
            <p className="text-gray-600">Receive a concise, well-structured summary instantly</p>
          </div>
        </div>
      </div>
    </section>
  );
}