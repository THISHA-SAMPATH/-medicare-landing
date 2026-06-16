import { motion } from 'framer-motion'

const LOGOS = [
  'Pfizer', 'Apollo', 'Fortis', 'Medanta', 'Manipal',
  'Max Health', 'AIIMS', 'Narayana', 'Columbia', 'Aster',
]

function MarqueeRow({ reverse = false }) {
  return (
    <div className="flex overflow-hidden">
      <motion.div
        animate={{ x: reverse ? ['0%', '50%'] : ['0%', '-50%'] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="flex gap-8 shrink-0"
      >
        {[...LOGOS, ...LOGOS].map((logo, i) => (
          <div
            key={i}
            className="flex items-center gap-2 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-full px-6 py-3 shadow-sm shrink-0"
          >
            <div className="w-6 h-6 bg-violet-100 dark:bg-violet-900/40 rounded-full flex items-center justify-center">
              <span className="text-violet-600 text-xs font-bold">{logo[0]}</span>
            </div>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300 whitespace-nowrap">
              {logo}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default function TrustedBy() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            Trusted by 100+ Global top company
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mt-3 max-w-md mx-auto">
            Brands are participants in health awareness campaigns, further sharing their values.
          </p>
        </motion.div>
      </div>

      <div className="flex flex-col gap-4">
        <MarqueeRow />
        <MarqueeRow reverse />
      </div>
    </section>
  )
}