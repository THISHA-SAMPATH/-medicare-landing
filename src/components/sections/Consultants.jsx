cat > src/components/sections/Consultants.jsx << 'EOF'
import { motion } from 'framer-motion'
import { CONSULTANTS } from '../../constants/data'
import Badge from '../ui/Badge'
import Button from '../ui/Button'

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } }
}

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

export default function Consultants() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            Collaborate with our best<br />consultant by online
          </h2>
        </motion.div>

        {/* Doctor Cards */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {CONSULTANTS.map(doc => (
            <motion.div
              key={doc.id}
              variants={fadeUp}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-lg transition-shadow p-5"
            >
              {/* Top row */}
              <div className="flex items-start justify-between mb-4">
                <img
                  src={doc.avatar}
                  alt={doc.name}
                  className="w-14 h-14 rounded-full bg-gray-100 border-2 border-violet-100"
                />
                <span className={`
                  text-xs font-semibold px-3 py-1 rounded-full
                  ${doc.available
                    ? 'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-400'
                    : 'bg-gray-100 text-gray-500 dark:bg-gray-700 dark:text-gray-400'
                  }
                `}>
                  {doc.available ? '● Available' : '○ Busy'}
                </span>
              </div>

              {/* Info */}
              <h3 className="font-bold text-gray-900 dark:text-white text-base">{doc.name}</h3>
              <p className="text-violet-600 dark:text-violet-400 text-sm font-medium">{doc.specialty}</p>
              <p className="text-gray-400 text-xs mt-1">{doc.experience}</p>

              {/* Rating */}
              <div className="flex items-center gap-1 mt-3">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={i < Math.floor(doc.rating) ? 'text-yellow-400 text-sm' : 'text-gray-200 text-sm'}
                  >
                    ★
                  </span>
                ))}
                <span className="text-xs text-gray-500 dark:text-gray-400 ml-1">{doc.rating}</span>
              </div>

              {/* Book button */}
              <button className="mt-4 w-full py-2 rounded-xl border-2 border-violet-100 dark:border-violet-900/40 text-violet-600 dark:text-violet-400 text-sm font-semibold hover:bg-violet-50 dark:hover:bg-violet-900/20 transition-colors">
                Book Consultation
              </button>
            </motion.div>
          ))}
        </motion.div>

        {/* Telemedicine CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
            Patients can consult with healthcare providers from the comfort
            of their homes,{' '}
            <span className="text-violet-600 font-semibold">
              eliminating travel time and costs.
            </span>{' '}
            Reduced waiting times.
          </p>
          <Button size="lg">
            Start Consultation
            <span className="ml-1 w-5 h-5 bg-white/20 rounded-full flex items-center justify-center text-xs">→</span>
          </Button>
        </motion.div>

      </div>
    </section>
  )
}
EOF