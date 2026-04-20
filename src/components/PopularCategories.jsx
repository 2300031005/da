import electricianIcon from '../../img/electrician-icon.jpeg'
import cleaningIcon from '../../img/Cleaning-icon.jpeg'
import plumbingIcon from '../../img/plumbing-icon.jpeg'
import furnitureIcon from '../../img/furniture-icon.jpeg'
import deliveryIcon from '../../img/delivery-icon.jpeg'
import paintingIcon from '../../img/painting-icon.jpeg'
import gardeningIcon from '../../img/gardening-icon.jpeg'
import applianceIcon from '../../img/appliance-icon.jpeg'

export default function PopularCategories() {
  const categories = [
    {
      name: 'Cleaning',
      color: 'bg-amber-100 dark:bg-amber-900/30 border-amber-300 dark:border-amber-700',
      icon: cleaningIcon,
    },
    {
      name: 'Electrician',
      color: 'bg-blue-100 dark:bg-blue-900/30 border-blue-300 dark:border-blue-700',
      icon: electricianIcon,
    },
    {
      name: 'Plumbing',
      color: 'bg-teal-100 dark:bg-teal-900/30 border-teal-300 dark:border-teal-700',
      icon: plumbingIcon,
    },
    {
      name: 'Furniture Assembly',
      color: 'bg-yellow-100 dark:bg-yellow-900/30 border-yellow-300 dark:border-yellow-700',
      icon: furnitureIcon,
    },
    {
      name: 'Delivery Help',
      color: 'bg-orange-100 dark:bg-orange-900/30 border-orange-300 dark:border-orange-700',
      icon: deliveryIcon,
    },
    {
      name: 'Painting',
      color: 'bg-rose-100 dark:bg-rose-900/30 border-rose-300 dark:border-rose-700',
      icon: paintingIcon,
    },
    {
      name: 'Gardening',
      color: 'bg-green-100 dark:bg-green-900/30 border-green-300 dark:border-green-700',
      icon: gardeningIcon,
    },
    {
      name: 'Appliance Repair',
      color: 'bg-slate-100 dark:bg-slate-800 border-slate-300 dark:border-slate-600',
      icon: applianceIcon,
    },
  ]

  return (
    <section id="services" className="pt-12.5 pb-16 md:py-24 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 dark:text-white mb-10">
          Popular Categories
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6 hover:shadow-lg transition cursor-pointer"
            >
              <div className="flex flex-col items-center text-center gap-4">
                {/* Category Icon Placeholder */}
                <div
                  className={
                    category.icon
                      ? 'aspect-square w-20 overflow-hidden rounded-full'
                      : `aspect-square w-20 overflow-hidden rounded-full ${category.color} border-2 border-dashed flex items-center justify-center text-xs font-medium text-gray-500 dark:text-slate-400`
                  }
                >
                  {category.icon ? (
                    <img
                      src={category.icon}
                      alt={`${category.name} icon`}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    'Category Icon'
                  )}
                </div>
                <span className="text-sm font-medium text-slate-900 dark:text-white">
                  {category.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
