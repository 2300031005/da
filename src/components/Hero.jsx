import { Search, MapPin, CheckCircle } from 'lucide-react'

export default function Hero() {
  const trustBadges = [
    { icon: CheckCircle, text: 'Verified Helpers' },
    { icon: CheckCircle, text: 'Fast Quotes' },
    { icon: CheckCircle, text: 'Secure Payments' },
  ]

  return (
    <section className="bg-white dark:bg-slate-950 pt-8 pb-24 md:pt-12 md:pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-slate-900 dark:text-white text-balance">
              Any Task? Khatam. Tata. Goodbye.
            </h1>
            <p className="mt-6 text-lg text-slate-600 dark:text-slate-400 max-w-xl">
              Book trusted local helpers for cleaning, repairs, moving, deliveries and more — right when you need them.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button className="px-6 py-3 text-base font-medium text-white bg-emerald-500 hover:bg-emerald-600 rounded-lg transition hover:scale-105">
                Post a Task
              </button>
              <button className="px-6 py-3 text-base font-medium text-emerald-600 dark:text-emerald-400 border-2 border-emerald-500 hover:bg-emerald-50 dark:hover:bg-emerald-950 rounded-lg transition hover:scale-105">
                Become a Provider
              </button>
            </div>

            {/* Trust Badges */}
            <div className="mt-8 flex flex-wrap gap-6">
              {trustBadges.map((badge, index) => (
                <div key={index} className="flex items-center gap-2">
                  <badge.icon className="w-5 h-5 text-emerald-500" />
                  <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
                    {badge.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Hero Illustration */}
          <div className="order-1 lg:order-2 relative">
            {/* Floating Icons */}
            <div className="absolute -top-4 left-4 lg:left-0 w-12 h-12 rounded-full bg-blue-100 dark:bg-slate-800 border-2 border-dashed border-blue-300 dark:border-slate-600 flex items-center justify-center text-xs font-medium text-blue-400 dark:text-slate-400 z-10">
              Icon
            </div>
            <div className="absolute top-8 right-4 lg:right-0 w-12 h-12 rounded-full bg-orange-100 dark:bg-slate-800 border-2 border-dashed border-orange-300 dark:border-slate-600 flex items-center justify-center text-xs font-medium text-orange-400 dark:text-slate-400 z-10">
              Icon
            </div>
            <div className="absolute bottom-16 -left-2 lg:-left-6 w-12 h-12 rounded-full bg-purple-100 dark:bg-slate-800 border-2 border-dashed border-purple-300 dark:border-slate-600 flex items-center justify-center text-xs font-medium text-purple-400 dark:text-slate-400 z-10">
              Icon
            </div>

            {/* Main Hero Image Placeholder */}
            <div className="aspect-square w-full max-w-[500px] mx-auto bg-gray-100 dark:bg-slate-800 border-2 border-dashed border-gray-300 dark:border-slate-600 rounded-xl flex items-center justify-center text-sm font-medium text-gray-400 dark:text-slate-400">
              Hero Image
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative -mt-8 lg:-mt-16 z-20">
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-4 md:p-6 border border-slate-200 dark:border-slate-700">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_auto] gap-4">
              {/* Task Input */}
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  What do you need help with?
                </label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Fix leaking tap"
                    className="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
              </div>

              {/* Location Input */}
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Location
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Alwal, Hyderabad"
                    className="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
              </div>

              {/* Search Button */}
              <div className="flex items-end">
                <button className="w-full md:w-auto px-8 py-3 text-base font-medium text-white bg-emerald-500 hover:bg-emerald-600 rounded-lg transition hover:scale-105">
                  Get Quotes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
