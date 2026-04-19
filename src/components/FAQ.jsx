import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: 'What is any boad local arrandoerks?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      question: 'Where we r imout our amanpayment?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      question: 'How can temeters help the tliols?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      question: 'What is ennome placevant at work?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  ]

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faqs" className="py-16 md:py-24 bg-white dark:bg-slate-950">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 dark:text-white mb-10">
          FAQs
        </h2>

        <div className="divide-y divide-slate-200 dark:divide-slate-700">
          {faqs.map((faq, index) => (
            <div key={index} className="py-4">
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center justify-between text-left"
              >
                <span className="text-base font-medium text-slate-900 dark:text-white">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-400 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
