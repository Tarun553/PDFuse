import { Button } from "../ui/button";

export default function PricingSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Simple, <span className="text-rose-500">Transparent</span> Pricing
          </h2>
          <p className="text-gray-600 text-lg">
            Choose the plan that best fits your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Basic Plan */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold mb-4">Basic</h3>
            <div className="flex items-baseline mb-8">
              <span className="text-4xl font-bold">$9</span>
              <span className="text-gray-500 ml-2">/month</span>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center text-gray-600">
                <svg className="w-5 h-5 mr-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Up to 50 PDF summaries/month
              </li>
              <li className="flex items-center text-gray-600">
                <svg className="w-5 h-5 mr-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Basic AI analysis
              </li>
              <li className="flex items-center text-gray-600">
                <svg className="w-5 h-5 mr-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Standard support
              </li>
            </ul>
            <Button className="w-full py-3 px-6 rounded-lg bg-gray-100 text-gray-800 font-semibold hover:bg-gray-200 transition-colors duration-200 mt-9">
              Get Started
            </Button>
          </div>

          {/* Pro Plan */}
          <div className="bg-gradient-to-br from-rose-50 to-white rounded-2xl shadow-xl p-8 border-2 border-rose-200 hover:scale-105 hover:shadow-2xl transition-all duration-300 transform">
            <div className="absolute -top-4 right-4 bg-rose-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
              Popular
            </div>
            <h3 className="text-2xl font-bold mb-4">Pro</h3>
            <div className="flex items-baseline mb-8">
              <span className="text-4xl font-bold text-rose-500">$19</span>
              <span className="text-gray-500 ml-2">/month</span>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center text-gray-600">
                <svg className="w-5 h-5 mr-3 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Unlimited PDF summaries
              </li>
              <li className="flex items-center text-gray-600">
                <svg className="w-5 h-5 mr-3 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Advanced AI analysis
              </li>
              <li className="flex items-center text-gray-600">
                <svg className="w-5 h-5 mr-3 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Priority support
              </li>
              <li className="flex items-center text-gray-600">
                <svg className="w-5 h-5 mr-3 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Custom PDF templates
              </li>
            </ul>
            <Button className="w-full py-3 px-6 rounded-lg bg-rose-500 text-white font-semibold hover:bg-rose-600 transition-colors duration-200">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}