import { motion } from 'framer-motion'
import Button from '../ui/Button'
import Badge from '../ui/Badge'

const floatAnimation = {
  y: [0, -10, 0],
  transition: { duration: 3, repeat: Infinity, ease: 'easeInOut' }
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } }
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

const AVATARS = [
  'https://api.dicebear.com/7.x/avataaars/svg?seed=a&backgroundColor=b6e3f4',
  'https://api.dicebear.com/7.x/avataaars/svg?seed=b&backgroundColor=ffdfbf',
  'https://api.dicebear.com/7.x/avataaars/svg?seed=c&backgroundColor=c0aede',
  'https://api.dicebear.com/7.x/avataaars/svg?seed=d&backgroundColor=d1d4f9',
]

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen pt-16 flex items-center overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center py-8 lg:py-0 min-h-[calc(100vh-4rem)]">

          {/* Left Content */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="flex flex-col gap-6 py-12 lg:py-0"
          >
            {/* Badge */}
            <motion.div variants={fadeUp}>
              <Badge>
                <span className="w-2 h-2 rounded-full bg-violet-500 animate-pulse" />
                The future of care is here
              </Badge>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight"
            >
              Get Premium{' '}
              <span className="text-violet-600">medical care</span>{' '}
              for your best health
            </motion.h1>

            {/* Subtext */}
            <motion.p
              variants={fadeUp}
              className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed max-w-md"
            >
              Our doctors are available 24/7. Get the care you deserve on your first visit.
              We are providing affordable and premium medical services.
            </motion.p>

            {/* CTA */}
            <motion.div variants={fadeUp}>
              <Button size="lg">
                Book Appointment
                <span className="ml-1">→</span>
              </Button>
            </motion.div>

            {/* Avatars + Happy Patients */}
            <motion.div
              variants={fadeUp}
              className="flex items-center gap-4 mt-2"
            >
              <div className="flex -space-x-3">
                {AVATARS.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt="Patient avatar"
                    className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-900 bg-gray-100"
                  />
                ))}
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900 dark:text-white">
                  50,000+ Happy Patients
                </p>
                <div className="flex gap-0.5 mt-0.5">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-sm">★</span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right — Doctor Image + Floating Cards */}
          <div className="relative flex justify-center items-center">

            {/* Gradient Background Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="relative w-full max-w-md h-[500px] rounded-3xl overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #F3E8FF 0%, #FCE7F3 50%, #EDE9FE 100%)'
              }}
            >
              {/* Doctor Image */}
              <img
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&auto=format&fit=crop&q=80"
                alt="Doctor"
                className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[90%] object-cover object-top"
              />
            </motion.div>

            {/* Floating Card — Video Call */}
            <motion.div
              animate={floatAnimation}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute bottom-16 -left-4 lg:-left-12 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-3 flex items-center gap-3 w-48"
            >
              <div className="w-10 h-10 bg-violet-100 dark:bg-violet-900/40 rounded-xl flex items-center justify-center shrink-0">
                <span className="text-lg">📹</span>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-900 dark:text-white">
                  Medicare
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Video Consultation
                </p>
                <div className="flex gap-1 mt-1">
                  <span className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-white text-xs">✓</span>
                  <span className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs">✕</span>
                </div>
              </div>
            </motion.div>

            {/* Floating Card — Rating */}
            <motion.div
              animate={{ ...floatAnimation, transition: { ...floatAnimation.transition, delay: 0.5 } }}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="absolute top-16 -right-4 lg:-right-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-3 w-44"
            >
              <div className="flex items-center gap-2 mb-1">
                <img
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=doc&backgroundColor=b6e3f4"
                  alt="Doctor"
                  className="w-8 h-8 rounded-full bg-gray-100"
                />
                <div>
                  <p className="text-xs font-semibold text-gray-900 dark:text-white">Dr. Sarah</p>
                  <p className="text-xs text-gray-500">Cardiologist</p>
                </div>
              </div>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xs">★</span>
                ))}
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">4.9 · 200+ reviews</p>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  )
}