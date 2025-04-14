import { SignUp } from '@clerk/nextjs'

export default function Page() {
  return(
     <section className="min-h-screen w-full bg-gray-50 flex items-center justify-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute right-0 top-0 -z-10 h-full w-1/2 bg-gradient-to-l from-rose-50 to-transparent" />
      <div className="absolute right-10 top-1/4 -z-10 h-64 w-64 rounded-full bg-gradient-to-tl from-rose-200 to-rose-100 blur-3xl opacity-60" />
      <div className="absolute right-0 bottom-0 -z-10 h-96 w-96 rounded-full bg-gradient-to-tr from-rose-300 to-rose-100 blur-3xl opacity-40" />

      <div className="container px-4 md:px-6 mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left side: Sign-up form */}
          <div className="flex flex-col space-y-8">
            <div className="flex flex-col space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900">
                Join PDFuse Today
              </h1>
              <p className="text-gray-500 md:text-xl">
                Transform your PDFs into actionable insights. Sign up now to get started.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white/80 backdrop-blur-sm p-4 shadow-lg sm:p-6 lg:p-8">
              <SignUp />
            </div>
          </div>

          {/* Right side: Decorative illustration */}
          <div className="hidden md:flex items-center justify-center relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-rose-100 to-rose-50 rounded-3xl opacity-80" />
            <div className="relative p-8">
              <svg
                className="w-full h-full max-w-lg"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 18H17V16H7V18Z"
                  fill="#BE185D"
                />
                <path
                  d="M17 14H7V12H17V14Z"
                  fill="#BE185D"
                />
                <path
                  d="M7 10H11V8H7V10Z"
                  fill="#BE185D"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 4C4 2.89543 4.89543 2 6 2H14L20 8V20C20 21.1046 19.1046 22 18 22H6C4.89543 22 4 21.1046 4 20V4ZM13 4L18 9H14C13.4477 9 13 8.55228 13 8V4ZM6 4V20H18V10H14C12.3431 10 11 8.65685 11 7V4H6Z"
                  fill="#E11D48"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  ) 
}