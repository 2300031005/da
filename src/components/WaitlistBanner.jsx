export default function WaitlistBanner() {
  return (
    <section className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 dark:text-white mb-2">
            Launching First in Alwal, Hyderabad 🇮🇳
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-8">
            Book trusted local helpers for cleaning, repairs moving.
          </p>

          {/* Email Form */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Email"
              className="flex-1 px-4 py-3 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <button className="px-6 py-3 text-base font-medium text-white bg-[#3b3b6d] hover:bg-[#2d2d5a] rounded-lg transition hover:scale-105 whitespace-nowrap">
              Join Waitlist
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
