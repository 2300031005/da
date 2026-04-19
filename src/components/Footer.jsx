import IconPlaceholder from './IconPlaceholder'

export default function Footer() {
  const footerLinks = {
    Company: ['Company', 'Contact us', 'Contact'],
    Services: ['Abouto', 'Services', 'Providers', 'Surivers Help', 'Testimonial'],
    Providers: ['About us', 'Press', 'Advertisers'],
    Support: ['Contact us', 'Gonametolity'],
    Legal: ['About us', 'Contact us', 'Legal', 'Privacy Policy'],
  }

  return (
    <footer className="bg-slate-100 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-4">
                {category}
              </h3>
              <ul className="space-y-2">
                {links.map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center">
                <IconPlaceholder className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm text-slate-600 dark:text-slate-400">
                © DailyAlly | Dutt for everyday India.
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
