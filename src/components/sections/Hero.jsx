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
      className="min-h-screen flex items-center overflow-hidden bg-white dark:bg-gray-900 section-padding pt-24"
    >
      <div className="max-w-7xl mx-auto container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center py-16">

          {/* Left Content */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="flex flex-col gap-6 py-12 lg:py-0"
          >
            {/* Badge */}
            <motion.div variants={fadeUp}>
              <Badge className="bg-violet-50 dark:bg-violet-950/40 text-violet-600 dark:text-violet-300">
                <span className="mr-1">✨</span> No.1 Medical Service
              </Badge>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-gray-900 dark:text-white leading-[1.15] tracking-tight"
            >
              Get Premium{' '}
              <span className="text-violet-600 dark:text-violet-400">medical care</span>{' '}
              for your best health
            </motion.h1>

            {/* Subtext */}
            <motion.p
              variants={fadeUp}
              className="text-gray-550 dark:text-gray-400 text-lg hero-subtext max-w-md"
            >
              Medicare provides a wide range of services to help you stay healthy. Get the care you deserve from our 24/7 online consultation.
            </motion.p>

            {/* CTA */}
            <motion.div variants={fadeUp} className="flex flex-wrap items-center hero-cta-wrapper gap-4">
              <Button size="lg" className="flex items-center gap-2 group shrink-0">
                Book Appointment
                <span className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-violet-600 group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </Button>
              <button className="flex items-center gap-2.5 px-6 py-3.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 font-semibold rounded-full hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors shadow-sm cursor-pointer shrink-0">
                <span className="w-6 h-6 bg-violet-100 dark:bg-violet-900/50 rounded-full flex items-center justify-center text-violet-600 dark:text-violet-400 text-xs">
                  ▶
                </span>
                Watch Video
              </button>
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
              className="relative w-full max-w-md h-[500px] rounded-3xl overflow-hidden shadow-2xl"
              style={{
                background: 'linear-gradient(135deg, #F3E8FF 0%, #FCE7F3 50%, #EDE9FE 100%)'
              }}
            >
              {/* Doctor Image */}
              <img
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&auto=format&fit=crop&q=80"
                alt="Doctor"
                className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[92%] object-cover object-top"
              />
            </motion.div>

            {/* Floating Card — Video Call */}
            <motion.div
              animate={floatAnimation}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute bottom-16 -left-4 lg:-left-12 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-3 flex items-center gap-3 w-48 border border-gray-100 dark:border-gray-700"
            >
              <div className="w-10 h-10 bg-violet-100 dark:bg-violet-900/40 rounded-xl flex items-center justify-center shrink-0">
                <span className="text-lg">📹</span>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-900 dark:text-white">
                  Medicare
                </p>
                <p className="text-[10px] text-gray-500 dark:text-gray-400">
                  Video Consultation
                </p>
                <div className="flex gap-1.5 mt-1">
                  <span className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-sm cursor-pointer">✓</span>
                  <span className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-sm cursor-pointer">✕</span>
                </div>
              </div>
            </motion.div>

            {/* Floating Card — Rating */}
            <motion.div
              animate={{ ...floatAnimation, transition: { ...floatAnimation.transition, delay: 0.5 } }}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="absolute top-16 -right-4 lg:-right-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-3 w-44 border border-gray-100 dark:border-gray-700"
            >
              <div className="flex items-center gap-2 mb-1">
                <img
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=doc&backgroundColor=b6e3f4"
                  alt="Doctor"
                  className="w-8 h-8 rounded-full bg-gray-100"
                />
                <div>
                  <p className="text-xs font-semibold text-gray-900 dark:text-white">Dr. Sarah</p>
                  <p className="text-[10px] text-gray-500">Cardiologist</p>
                </div>
              </div>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xs">★</span>
                ))}
              </div>
              <p className="text-[10px] text-gray-500 dark:text-gray-400 mt-1">4.9 · 200+ reviews</p>
            </motion.div>

            {/* Floating Card — Active Patients Chart */}
            <motion.div
              animate={{ ...floatAnimation, transition: { ...floatAnimation.transition, delay: 1 } }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="absolute bottom-6 -right-4 lg:-right-12 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-3 w-44 border border-gray-100 dark:border-gray-700"
            >
              <div className="flex items-center justify-between mb-1">
                <p className="text-[10px] font-semibold text-gray-500 dark:text-gray-400">Active Patients</p>
                <span className="text-[9px] text-green-500 font-bold bg-green-50 dark:bg-green-950/40 px-1 py-0.5 rounded">
                  +24%
                </span>
              </div>
              <p className="text-sm font-bold text-gray-900 dark:text-white">1,200+</p>
              
              {/* Mini Sparkline Chart */}
              <div className="h-8 w-full mt-1.5">
                <svg className="w-full h-full" viewBox="0 0 100 30">
                  <defs>
                    <linearGradient id="sparklineGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="#7C3AED" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M 0 25 Q 15 20, 30 22 T 60 10 T 90 5 L 100 8"
                    fill="none"
                    stroke="#7C3AED"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 0 25 Q 15 20, 30 22 T 60 10 T 90 5 L 100 8 L 100 30 L 0 30 Z"
                    fill="url(#sparklineGrad)"
                  />
                  <circle cx="100" cy="8" r="2" fill="#7C3AED" />
                </svg>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  )
}