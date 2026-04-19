import manImage from '../../img/man.png'

export default function ProviderCTA() {
  return (
    <section id="provider" className="py-16 md:py-24 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-linear-to-r from-accent-dark to-accent rounded-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-8 md:p-12 lg:p-16">
            {/* Left Content */}
<div className="max-w-[500px]">

  <span className="text-emerald-400 text-sm font-medium mb-3 block">
    Provider Recruitment
  </span>

  <h2 className="text-3xl md:text-6xl font-bold text-white leading-[1.15] mb-5">
    Got Skills? Earn <br />
    <span className="whitespace-nowrap">on Your Schedule.</span>
  </h2>

  <p className="text-slate-300 text-base md:text-lg leading-relaxed mb-8">
    Boclt trocted local helpers for tan, moving and service ror rouning, when you need them.
  </p>

  <button className="px-7 py-3.5 text-base font-medium text-accent bg-emerald-400 hover:bg-emerald-500 rounded-xl transition">
    Join as Provider
  </button>

</div>

          {/* Right - Provider Image */}
<div className="self-stretch flex justify-center lg:justify-end items-end -mb-8 md:-mb-12 lg:-mb-16">
  <div className="relative w-full max-w-[500px] min-h-[320px] flex items-end justify-center overflow-visible">

    {/* Green Card */}
    <div className="absolute bottom-0 w-[340px] h-[320px] rounded-3xl bg-[#73d08f]" />

    {/* Man Image */}
    <img
      src={manImage}
      alt="DailyAlly service provider"
      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[450px] object-contain z-10"
    />

  </div>
</div>
          </div>
        </div>
      </div>
    </section>
  )
}
