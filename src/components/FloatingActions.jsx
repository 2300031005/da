import whatsappImage from '../../img/whatsapp.png'

export default function FloatingActions() {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-3">
      {/* WhatsApp Button */}
      <button
        className="w-12 h-12 bg-emerald-500 hover:bg-emerald-600 rounded-full flex items-center justify-center text-white shadow-lg transition hover:scale-105"
        aria-label="WhatsApp Support"
      >
        <img src={whatsappImage} alt="WhatsApp" className="w-6 h-6 object-contain" />
      </button>

      {/* Mobile CTA Button */}
      <button
        className="px-4 py-2 bg-[#3b3b6d] hover:bg-[#2d2d5a] rounded-full text-white text-sm font-medium shadow-lg transition hover:scale-105"
        aria-label="Mobile CTA"
      >
        SutAy mobile CTA
      </button>
    </div>
  )
}
