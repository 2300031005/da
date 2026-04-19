import { CheckCircle, Clock, HeadphonesIcon, CreditCard, ChevronRight } from 'lucide-react'

export default function HowItWorks() {
  const trustBadges = [
    { icon: CheckCircle, text: 'Verified Helpers' },
    { icon: Clock, text: 'Fast Quotes' },
    { icon: HeadphonesIcon, text: 'Support Team' },
    { icon: CreditCard, text: 'Secure Payments' },
  ]

  const steps = [
    {
      number: 1,
      title: 'Post your task',
      description: 'Post your task on DailyAlly to check your task.',
    },
    {
      number: 2,
      title: 'Receive quotes',
      description: 'Receive quotes to choose quotes on-inclusive quotes.',
    },
    {
      number: 3,
      title: 'Choose, chat, relax',
      description: 'Choose your teams and choose chat, relax.',
    },
  ]

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 dark:text-white text-center mb-12">
          How It Works
        </h2>

        {/* Top Illustrations */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 mb-10">
          {[1, 2, 3].map((num) => (
            <div
              key={num}
              className="aspect-[4/5] w-full bg-gray-100 dark:bg-slate-800 border-2 border-dashed border-gray-300 dark:border-slate-600 rounded-xl flex items-center justify-center text-sm font-medium text-gray-400 dark:text-slate-400"
            >
              Step {num} Illustration
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 py-6 mb-10">
          {trustBadges.map((badge, index) => (
            <div
              key={index}
              className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 rounded-full border border-slate-200 dark:border-slate-700"
            >
              <badge.icon className="w-4 h-4 text-emerald-500" />
              <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
                {badge.text}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom Section - How It Works Heading */}
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 dark:text-white text-center mb-12">
          How It Works
        </h2>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 items-start">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center relative">
              {/* Step Icon Placeholder */}
              <div className="relative mb-6">
                <div className="aspect-square w-24 bg-gray-100 dark:bg-slate-800 border-2 border-dashed border-gray-300 dark:border-slate-600 rounded-xl flex items-center justify-center text-sm font-medium text-gray-400 dark:text-slate-400">
                  Step Icon
                </div>
                {/* Step Number */}
                <div className="absolute -top-2 -left-2 w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {step.number}
                </div>
              </div>

              {/* Arrow (not on last step) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 right-0 translate-x-1/2">
                  <ChevronRight className="w-6 h-6 text-slate-300 dark:text-slate-600" />
                </div>
              )}

              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 max-w-[200px]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
