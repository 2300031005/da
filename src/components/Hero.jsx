import heroImage from '../../img/hero.jpeg'
import shieldIcon from '../../img/shield-icon.jpeg'
import timerIcon from '../../img/timer-icon.jpeg'
import { Search, MapPin } from 'lucide-react'

export default function Hero() {
  const trustBadges = [
    { text: 'Verified Helpers', icon: shieldIcon },
    { text: 'Fast Quotes', icon: timerIcon },
    { text: 'Secure Payments', icon: shieldIcon },
  ]

  return (
    <section className="bg-white dark:bg-slate-950 pt-8 pb-10 md:pt-12 md:pb-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-slate-900 dark:text-white">
              Any Task? Khatam. Tata. Goodbye.
            </h1>

            <p className="mt-6 text-lg text-slate-600 dark:text-slate-400 max-w-xl">
              Book trusted local helpers for cleaning, repairs, moving, deliveries and more — right when you need them.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button className="px-6 py-3 text-sm font-medium text-white bg-[#3b3b6d] hover:bg-[#2d2d5a] rounded-lg transition">
                Post a Task
              </button>

              <button className="px-6 py-3 text-base font-medium text-emerald-600 dark:text-emerald-400 border-2 border-emerald-500 hover:bg-emerald-50 dark:hover:bg-emerald-950 rounded-lg transition">
                Become a Provider
              </button>
            </div>

            {/* Trust Badges */}
            <div className="mt-6 mb-10 flex flex-wrap gap-8">
  {trustBadges.map((badge, index) => (
    <div key={index} className="relative flex items-center gap-2.5">
      
      {/* Icon wrapper */}
      <div className="relative w-6 h-6 flex items-center justify-center">
        
        {/* Image (scaled + behind) */}
        <img
          src={badge.icon}
          alt=""
          className="absolute inset-0 w-full h-full object-contain scale-[2.5] z-0"
        />

        {/* Invisible spacer to maintain layout */}
        <div className="w-full h-full" />

      </div>

      {/* Text (above image) */}
      <span className="relative z-10 text-sm font-medium text-slate-600 dark:text-slate-400">
        {badge.text}
      </span>

    </div>
  ))}
</div>
          </div>

          {/* Right Content */}
          <div className="order-1 lg:order-2 relative">

            {/* Hero Image */}
            <div className="aspect-square w-full max-w-[500px] mx-auto overflow-hidden rounded-xl">
              <img
                src={heroImage}
                alt="DailyAlly hero"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative -mt-6 md:-mt-10 z-20 mb-[-100px]">
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-4 md:p-6 border border-slate-200 dark:border-slate-700">
            
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

              {/* Button */}
              <div className="flex items-end">
                <button className="w-full md:w-auto px-8 py-3 text-base font-medium text-white bg-emerald-500 hover:bg-emerald-600 rounded-lg transition">
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