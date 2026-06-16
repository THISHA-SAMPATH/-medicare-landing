import { motion } from 'framer-motion'
import { ADDITIONAL_FEATURES } from '../../constants/data'
import Button from '../ui/Button'

function MapCard() {
  return (
    <div className="relative w-full h-[360px] rounded-3xl overflow-hidden shadow-2xl bg-violet-50/20 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-800 flex items-center justify-center p-6 group">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      
      {/* Abstract Map Nodes and Connectors */}
      <svg className="w-full h-full text-violet-200 dark:text-violet-900/40 relative z-0" viewBox="0 0 300 180" fill="none">
        {/* Connection lines */}
        <path d="M50 80 Q 90 40, 130 90 T 210 60 T 270 110" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" fill="none" />
        <path d="M90 120 Q 150 70, 210 120" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" fill="none" />
        
        {/* Normal Nodes */}
        <circle cx="50" cy="80" r="3" className="fill-violet-400 dark:fill-violet-700" />
        <circle cx="130" cy="90" r="4" className="fill-violet-400 dark:fill-violet-700" />
        <circle cx="210" cy="60" r="3" className="fill-violet-400 dark:fill-violet-700" />
        <circle cx="270" cy="110" r="4" className="fill-violet-400 dark:fill-violet-700" />
        <circle cx="90" cy="120" r="3" className="fill-violet-400 dark:fill-violet-700" />
        
        {/* Active Nodes with Pulsing Rings */}
        <g>
          <circle cx="170" cy="70" r="10" className="stroke-violet-500 fill-violet-500/10 animate-pulse" />
          <circle cx="170" cy="70" r="4" className="fill-violet-600" />
        </g>
        <g>
          <circle cx="220" cy="110" r="14" className="stroke-violet-550 fill-violet-500/5 animate-pulse" />
          <circle cx="220" cy="110" r="5" className="fill-violet-600" />
        </g>
      </svg>

      {/* Floating appointment card */}
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="absolute bottom-5 left-5 right-5 bg-white dark:bg-gray-800 border border-gray-150 dark:border-gray-700 rounded-2xl shadow-xl p-4 z-10 transition-transform duration-300 group-hover:translate-y-[-2px]"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <img
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=map&backgroundColor=b6e3f4"
                alt="Doctor"
                className="w-10 h-10 rounded-full bg-violet-50 border border-violet-100"
              />
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-green-500 border-2 border-white dark:border-gray-800" />
            </div>
            <div>
              <p className="text-sm font-extrabold text-gray-900 dark:text-white">Dr. James</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">General Physician</p>
              <p className="text-[10px] text-violet-600 font-bold mt-1 bg-violet-50 dark:bg-violet-950/40 px-4 py-1.5 rounded-full inline-block">
                Available Today · 2:30 PM
              </p>
            </div>
          </div>
          <button className="bg-violet-600 hover:bg-violet-750 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-all shadow-md hover:shadow-violet-600/10 cursor-pointer">
            Book Now
          </button>
        </div>
      </motion.div>
    </div>
  )
}

export default function MapFeatures() {
  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-gray-950 border-t border-gray-100 dark:border-gray-900">
      <div className="max-w-7xl mx-auto container-custom">
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
              <h2 className="section-title text-left">
                Additional Medical Features
              </h2>
              <p className="text-gray-500 dark:text-gray-400 mt-4 leading-relaxed text-base">
                Offering comprehensive care solutions, secure, and state-of-the-art health with personalized programs.
              </p>
            </div>

            {/* Checklist grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {ADDITIONAL_FEATURES.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-5.5 h-5.5 bg-violet-100 dark:bg-violet-950/65 rounded-full flex items-center justify-center shrink-0 mt-0.5 border border-violet-200 dark:border-violet-800">
                    <span className="text-violet-600 dark:text-violet-400 text-xs font-bold">✓</span>
                  </div>
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 leading-snug">
                    {feature.label}
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="mt-4">
              <Button size="md" className="hover:bg-violet-750">
                Learn More →
              </Button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}