export default function WaitlistBanner() {
  return (
    <section className="py-16 md:pt-24 md:pb-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Only this should have color */}
        <div className="bg-gradient-to-r from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700 rounded-2xl border border-slate-200 dark:border-slate-700 p-8 md:p-10 text-center">
          
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 dark:text-white mb-2">
            Launching First in Alwal, Hyderabad 🇮🇳
          </h2>

          <p className="text-slate-600 dark:text-slate-400 mb-6">
            Book trusted local helpers for cleaning, repairs moving.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
            
            <input
              type="email"
              placeholder="Email"
              className="flex-1 px-4 py-3 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#3b3b6d]/30"
            />

            <button className="px-6 py-3 text-sm font-medium text-white bg-[#3b3b6d] hover:bg-[#2d2d5a] rounded-lg transition whitespace-nowrap">
              Join Waitlist
            </button>

          </div>
        </div>

      </div>
    </section>
  )
}