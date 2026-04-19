import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import PopularCategories from './components/PopularCategories'
import HowItWorks from './components/HowItWorks'
import WhyDailyAlly from './components/WhyDailyAlly'
import ProviderCTA from './components/ProviderCTA'
import Testimonials from './components/Testimonials'
import WaitlistBanner from './components/WaitlistBanner'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import FloatingActions from './components/FloatingActions'

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window === 'undefined') return false

    const storedTheme = localStorage.getItem('theme')
    if (storedTheme === 'dark') return true
    if (storedTheme === 'light') return false

    return document.documentElement.classList.contains('dark')
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
    localStorage.setItem('theme', darkMode ? 'dark' : 'light')
  }, [darkMode])

  const toggleDarkMode = () => setDarkMode((prev) => !prev)

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Hero />
      <PopularCategories />
      <HowItWorks />
      <WhyDailyAlly />
      <ProviderCTA />
      <Testimonials />
      <WaitlistBanner />
      <FAQ />
      <Footer />
      <FloatingActions />
    </div>
  )
}

export default App
