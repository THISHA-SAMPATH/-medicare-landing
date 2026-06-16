import { motion } from 'framer-motion'
import Button from '../ui/Button'

export default function CTABanner() {
  return (
    <section className="section-padding container-custom">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl bg-violet-600 px-8 py-20 text-center shadow-2xl border border-violet-500"
        >
          {/* Animated blobs */}
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.4, 0.3] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-16 -left-16 w-64 h-64 bg-violet-400 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.3, 0.2] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
            className="absolute -bottom-16 -right-16 w-72 h-72 bg-purple-400 rounded-full blur-3xl"
          />

          {/* Left wireframe globe */}
          <motion.div
            animate={{ y: [0, -8, 0], rotate: 360 }}
            transition={{ y: { duration: 6, repeat: Infinity, ease: 'easeInOut' }, rotate: { duration: 40, repeat: Infinity, ease: 'linear' } }}
            className="absolute bottom-[-40px] left-[-30px] w-48 h-48 text-violet-400/25 z-0 select-none pointer-events-none"
          >
            <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.75">
              <circle cx="50" cy="50" r="45" />
              <ellipse cx="50" cy="50" rx="45" ry="15" />
              <ellipse cx="50" cy="50" rx="15" ry="45" />
              <line x1="5" y1="50" x2="95" y2="50" />
              <line x1="50" y1="5" x2="50" y2="95" />
            </svg>
          </motion.div>

          {/* Right wireframe globe */}
          <motion.div
            animate={{ y: [0, 8, 0], rotate: -360 }}
            transition={{ y: { duration: 7, repeat: Infinity, ease: 'easeInOut' }, rotate: { duration: 45, repeat: Infinity, ease: 'linear' } }}
            className="absolute top-[-30px] right-[-30px] w-52 h-52 text-violet-400/25 z-0 select-none pointer-events-none"
          >
            <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.75">
              <circle cx="50" cy="50" r="45" />
              <ellipse cx="50" cy="50" rx="45" ry="20" />
              <ellipse cx="50" cy="50" rx="20" ry="45" />
              <line x1="5" y1="50" x2="95" y2="50" />
              <line x1="50" y1="5" x2="50" y2="95" />
            </svg>
          </motion.div>

          {/* Content */}
          <div className="relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="section-title text-white max-w-2xl mx-auto"
            >
              Bring your customer services the next level of excellence.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-violet-100 mt-4 max-w-md mx-auto text-base sm:text-lg"
            >
              Join thousands of healthcare providers already using Medicare to transform patient care.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button variant="white" size="lg" className="text-violet-650 hover:bg-violet-50 font-bold shadow-xl">
                Get Started Today →
              </Button>
              <button className="text-white text-sm font-semibold underline underline-offset-4 hover:text-violet-200 transition-colors cursor-pointer">
                Learn more about our plans
              </button>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="cta-stats-row grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto border-t border-white/10"
            >
              {[
                { value: '100+', label: 'Global Companies' },
                { value: '50K+', label: 'Happy Patients' },
                { value: '200+', label: 'Expert Doctors' },
                { value: '15+', label: 'Countries' },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <p className="text-3xl font-extrabold text-white">{stat.value}</p>
                  <p className="text-violet-150 text-xs mt-1.5 font-medium">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}