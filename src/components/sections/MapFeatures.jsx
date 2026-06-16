import { motion } from 'framer-motion'
import { ADDITIONAL_FEATURES } from '../../constants/data'
import Button from '../ui/Button'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

function MapCard() {
  return (
    <div className="relative w-full h-80 rounded-2xl overflow-hidden shadow-lg bg-gray-100 dark:bg-gray-800">
      <iframe
        title="Medical Centers Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30596552!2d-74.25986548248684!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="absolute inset-0"
      />

      {/* Floating appointment card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="absolute bottom-4 left-4 right-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=map&backgroundColor=b6e3f4"
              alt="Doctor"
              className="w-10 h-10 rounded-full bg-gray-100"
            />
            <div>
              <p className="text-sm font-semibold text-gray-900 dark:text-white">Dr. James</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">General Physician</p>
              <p className="text-xs text-violet-600 font-medium mt-0.5">Today · 2:30 PM</p>
            </div>
          </div>
          <button className="bg-violet-600 text-white text-xs font-semibold px-4 py-2 rounded-xl hover:bg-violet-700 transition-colors">
            Book Now
          </button>
        </div>
      </motion.div>
    </div>
  )
}

export default function MapFeatures() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left — Map */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <MapCard />
          </motion.div>

          {/* Right — Features List */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
                Additional Medical Features
              </h2>
              <p className="text-gray-500 dark:text-gray-400 mt-3 leading-relaxed">
                Offering comprehensive care solutions, secure, and state-of-the-art health with personalized programs.
              </p>
            </div>

            {/* Checklist grid */}
            <div className="grid grid-cols-2 gap-3">
              {ADDITIONAL_FEATURES.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  className="flex items-start gap-2"
                >
                  <div className="w-5 h-5 bg-violet-100 dark:bg-violet-900/40 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-violet-600 text-xs font-bold">✓</span>
                  </div>
                  <span className="text-sm text-gray-700 dark:text-gray-300 leading-snug">
                    {feature.label}
                  </span>
                </motion.div>
              ))}
            </div>

            <div>
              <Button size="md">
                Learn More →
              </Button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}