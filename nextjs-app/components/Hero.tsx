export default function Hero() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <div className="max-w-xl">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight tracking-tight mb-6">
              Customer service software for customer-first teams
            </h1>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              The best customer service software for customer-first teams. Industry-leading email and live chat support.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <button className="flex items-center justify-center gap-2 bg-white border border-gray-300 hover:bg-gray-50 hover:border-gray-400 text-gray-900 font-semibold px-5 py-3 rounded-lg transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                </svg>
                Demo
              </button>
              <button className="bg-red-500 hover:bg-red-600 text-white font-semibold px-5 py-3 rounded-lg transition-all hover:shadow-lg hover:-translate-y-0.5">
                Sign up
              </button>
            </div>
          </div>

          {/* Right side - Image placeholder */}
          <div className="relative">
            <div className="w-full h-96 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl overflow-hidden shadow-xl">
              {/* Placeholder for hero image */}
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-full h-full bg-gradient-to-br from-purple-200/50 to-red-200/50"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
