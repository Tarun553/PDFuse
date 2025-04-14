import { Button } from "../ui/button";
export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Transform Your <span className="text-rose-500">PDF Experience</span> Today
          </h2>
          <p className="text-gray-600 text-lg sm:text-xl mb-12">
            Join thousands of users who are already saving time with our AI-powered PDF summarization
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Benefit 1 */}
            <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-rose-500 text-2xl mb-4">⏱</div>
              <h3 className="font-semibold mb-2">Save Time</h3>
              <p className="text-gray-600">Get summaries in seconds, not hours</p>
            </div>

            {/* Benefit 2 */}
            <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-rose-500 text-2xl mb-4">🤖</div>
              <h3 className="font-semibold mb-2">AI-Powered</h3>
              <p className="text-gray-600">Advanced algorithms for accurate summaries</p>
            </div>

            {/* Benefit 3 */}
            <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-rose-500 text-2xl mb-4">📈</div>
              <h3 className="font-semibold mb-2">Boost Productivity</h3>
              <p className="text-gray-600">Focus on what matters most</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="inline-block animate-bounce-gentle">
            <Button 
              className="px-8 py-6 bg-rose-500 hover:bg-rose-600 text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl animate-bounce transition-all duration-300 group"
            >
              Get Started Now <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
            </Button>
          </div>
          <p className="mt-6 text-gray-500">No credit card required • Free trial available</p>
        </div>
      </div>
    </section>
  );
}