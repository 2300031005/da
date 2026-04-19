export default function ProviderCTA() {
  return (
    <section id="provider" className="py-16 md:py-24 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-gradient-to-r from-[#2d2d5a] to-[#3b3b6d] rounded-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-8 md:p-12 lg:p-16">
            {/* Left Content */}
            <div>
              <span className="text-emerald-400 text-sm font-medium mb-2 block">
                Provider Recruitment
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                Got Skills? Earn on Your Schedule.
              </h2>
              <p className="text-slate-300 mb-6 max-w-md">
                Boclt trocted local helpers for tan, moving and service ror rouning, when you need them.
              </p>
              <button className="px-6 py-3 text-base font-medium text-[#3b3b6d] bg-emerald-400 hover:bg-emerald-500 rounded-lg transition hover:scale-105">
                Join as Provider
              </button>
            </div>

            {/* Right - Provider Image Placeholder */}
            <div className="flex justify-center lg:justify-end">
              <div className="aspect-[4/5] w-[350px] bg-slate-700/50 border-2 border-dashed border-slate-500 rounded-xl flex items-center justify-center text-sm font-medium text-slate-400">
                Provider Image
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
