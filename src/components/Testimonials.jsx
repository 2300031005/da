import { Star } from 'lucide-react'
import people1 from '../../img/people1.jpg'
import people2 from '../../img/people2.jpg'
import people3 from '../../img/people3.jpg'

export default function Testimonials() {
  const peopleImages = [people1, people2, people3]
  const testimonials = [
    {
      name: 'Yamini Gupta',
      text: 'Lorem ipsum dolor sit ae omet, consectetot oniaiarm adipiscing elit, snunm ctuamod nosillum asparíi cocnaidut.',
      rating: 5,
    },
    {
      name: 'Raj Kumar',
      text: 'Lorem ipsum dolor sit ae omet, consectetut clinenum elit, suthran outam urcikeot dolors me naretoree cocuatat.',
      rating: 5,
    },
    {
      name: 'Abhishek Singh',
      text: 'Lorem ipsum dolor sit ae omet, consectetar adipiscing elit, sed rfd nonunantum non monxm qrc antgurrn nexxtot.',
      rating: 5,
    },
  ]
  const carouselItems = [...testimonials, ...testimonials]

  return (
    <section className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 dark:text-white text-center mb-12">
          Testimonials
        </h2>

        <div className="testimonials-carousel overflow-hidden">
          <div className="testimonials-track flex w-max gap-6">
            {carouselItems.map((testimonial, index) => (
            <div
              key={index}
              className="w-70 sm:w-80 md:w-90 shrink-0 bg-white dark:bg-slate-800 rounded-xl border border-slate-200/90 dark:border-slate-700 p-6 shadow-sm hover:shadow-lg transition"
            >
              {/* User Info */}
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={peopleImages[index % peopleImages.length]}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <span className="font-medium text-slate-900 dark:text-white">
                  {testimonial.name}
                </span>
              </div>

              {/* Testimonial Text */}
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                {testimonial.text}
              </p>

              {/* Star Rating */}
              <div className="flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
