import { Check } from 'lucide-react'

export default function WhyDailyAlly() {
  const benefits = [
    'Verified providers',
    'Ratings from real jobs',
    'In-app support',
    'Replacement guarantee',
    'Transparent pricing',
    'Local community focused',
  ]

  return (
    <section id="safety" className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left - Shield Illustration */}
          <div className="flex justify-center">
            <div className="aspect-square w-[280px] bg-gray-100 dark:bg-slate-800 border-2 border-dashed border-gray-300 dark:border-slate-600 rounded-xl flex items-center justify-center text-sm font-medium text-gray-400 dark:text-slate-400">
              Shield Illustration
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 dark:text-white mb-8">
              Why DailyAlly
            </h2>

            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <span className="text-base text-slate-700 dark:text-slate-300">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
