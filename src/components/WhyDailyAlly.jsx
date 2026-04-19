import bigShield from '../../img/big-shield.png'

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
    <section id="safety" className="py-16 md:py-24 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-x-24 items-center">
          {/* Left - Shield Illustration */}
          <div className="flex justify-center">
            <img
              src={bigShield}
              alt="DailyAlly trust shield"
              className="w-full max-w-115 h-auto object-contain"
            />
          </div>

          {/* Right - Content */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-8 transition-colors">
              Why DailyAlly
            </h2>

            <ul className="list-disc pl-6 space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="text-base text-slate-700 dark:text-slate-300 transition-colors">
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
