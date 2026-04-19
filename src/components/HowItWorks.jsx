import IconPlaceholder from './IconPlaceholder'
import paintingPersonImage from '../../img/man-paint.png'
import cleaningWomanImage from '../../img/woman-clean1.png'
import twoManImage from '../../img/man-woman.png'
import womanClickImage from '../../img/woman-click1.png'
import quoteImage from '../../img/quote.png'
import chatImage from '../../img/chat.png'
import shieldIcon from '../../img/shield-icon.png'
import timerIcon from '../../img/timer-icon.png'
import headsetIcon from '../../img/headset-icon.png'

export default function HowItWorks() {
  const topIllustrations = {
    1: cleaningWomanImage,
    2: paintingPersonImage,
    3: twoManImage,
  }

  const trustBadges = [
    { text: 'Verified Helpers', icon: shieldIcon },
    { text: 'Fast Quotes', icon: timerIcon },
    { text: 'Support Team', icon: headsetIcon },
    { text: 'Secure Payments', icon: shieldIcon },
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

  const stepImages = {
    1: womanClickImage,
    2: quoteImage,
    3: chatImage,
  }

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-semibold text-slate-900 dark:text-white text-center mb-12">
          How It Works
        </h2>

        {/* Top Illustrations */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 mb-10">
          {[1, 2, 3].map((num) => (
            <div
              key={num}
              className="aspect-[4/5] w-full overflow-hidden rounded-xl"
            >
              <img
                src={topIllustrations[num]}
                alt={`Step ${num} illustration`}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 py-6 mb-10">
          {trustBadges.map((badge, index) => (
            <div key={index} className="relative flex items-center gap-2.5 px-4 py-2 bg-white dark:bg-slate-800 rounded-full">
              <div className="relative w-6 h-6 flex items-center justify-center">
                {badge.icon ? (
                  <img
                    src={badge.icon}
                    alt={`${badge.text} icon`}
                    className="absolute inset-0 w-full h-full object-contain scale-[2.5] z-0"
                  />
                ) : (
                  <IconPlaceholder className="absolute inset-0 w-full h-full text-emerald-500 z-0" />
                )}
                <div className="w-full h-full" />
              </div>

              <span className="relative z-10 text-sm font-medium text-slate-600 dark:text-slate-400">
                {badge.text}
              </span>

              <div className="pointer-events-none absolute inset-0 z-20 rounded-full border border-slate-200 dark:border-slate-700" />
            </div>
          ))}
        </div>

        {/* Bottom Section - How It Works Heading */}
        <h2 className="text-4xl md:text-4xl font-semibold text-slate-900 dark:text-white text-center mb-12">
          How It Works
        </h2>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 items-start">
  {steps.map((step, index) => (
    <div key={index} className="flex flex-col items-center text-center">

      {/* Wrapper */}
      <div className="relative mb-6 flex items-center justify-center">

        {/* Image Container (controlled box) */}
        <div className="w-36 h-36 flex items-center justify-center">
          {stepImages[step.number] ? (
            <img
              src={stepImages[step.number]}
              alt={step.title}
              className="max-w-full max-h-full object-contain scale-125"
            />
          ) : (
            <div className="w-24 h-24 bg-gray-100 dark:bg-slate-800 border-2 border-dashed border-gray-300 dark:border-slate-600 rounded-xl flex items-center justify-center text-sm font-medium text-gray-400 dark:text-slate-400">
              Step Icon
            </div>
          )}
        </div>

        {/* Badge */}
        <div
          className="absolute z-20 top-3 left-3 w-10 h-10 bg-indigo-900 text-lg rounded-full flex items-center justify-center text-white font-bold"
        >
          {step.number}
        </div>

      </div>

              {/* Arrow (not on last step) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 right-0 translate-x-1/2">
                  <IconPlaceholder className="w-6 h-6 text-slate-300 dark:text-slate-600" />
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
