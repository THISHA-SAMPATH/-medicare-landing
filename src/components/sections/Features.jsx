import { motion } from 'framer-motion'
import Badge from '../ui/Badge'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } }
}

const FEATURES = [
  {
    id: 1,
    title: 'Mobile Health Apps',
    description: 'Tools for patients to track symptoms, medications, and manage appointments easily.',
    emoji: '📱',
    bg: 'bg-violet-50/30 dark:bg-violet-950/10',
    mockup: 'phone',
  },
  {
    id: 2,
    title: 'Secure Messaging Systems',
    description: 'HIPAA-compliant platforms for safe and private doctor-patient communication.',
    emoji: '💬',
    bg: 'bg-blue-50/30 dark:bg-blue-950/10',
    mockup: 'chat',
  },
  {
    id: 3,
    title: 'Personal Health Dashboard & Appointment Booking System',
    description: 'Track your wellness metrics and schedule appointments at your convenience with detailed stats.',
    emoji: '📊',
    bg: 'bg-green-50/30 dark:bg-green-950/10',
    mockup: 'dashboard',
  },
  {
    id: 4,
    title: 'Online Prescription Services',
    description: 'Facilitate easy ordering and renewal of prescriptions from home.',
    emoji: '💊',
    bg: 'bg-orange-50/30 dark:bg-orange-950/10',
    mockup: 'prescription',
  },
  {
    id: 5,
    title: 'Online Global Service',
    description: 'Online global service we provide from any country worldwide.',
    emoji: '🌍',
    bg: 'bg-purple-50/30 dark:bg-purple-950/10',
    mockup: 'global',
  },
  {
    id: 6,
    title: 'Explore our more amazing services',
    description: 'Discover additional resources, virtual care services, and advanced treatment options.',
    emoji: '✨',
    bg: 'bg-violet-650 text-white',
    mockup: null,
    isCta: true,
  },
]

function PhoneMockup() {
  return (
    <div className="relative mt-6 self-center w-[180px] h-[200px] bg-white dark:bg-gray-800 rounded-t-3xl border-t-8 border-x-8 border-gray-900 dark:border-gray-950 shadow-2xl overflow-hidden flex flex-col pt-3 px-3 transition-all duration-300 group-hover:scale-[1.02] group-hover:-translate-y-1">
      {/* Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-3 bg-gray-900 rounded-b-lg z-20" />
      
      {/* Header */}
      <div className="flex justify-between items-center mb-2 mt-1">
        <span className="text-[9px] font-bold text-gray-900 dark:text-white">Active Doctor</span>
        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
      </div>

      {/* Doctor card */}
      <div className="bg-violet-50 dark:bg-violet-950/40 rounded-xl p-2 mb-2 border border-violet-100/40 dark:border-violet-900/20">
        <div className="flex items-center gap-1.5 mb-1.5">
          <img
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=doc&backgroundColor=b6e3f4"
            alt="Doctor"
            className="w-6 h-6 rounded-full bg-white border border-violet-100"
          />
          <div>
            <p className="text-[8px] font-bold text-gray-900 dark:text-white leading-none">Dr. Sarah</p>
            <p className="text-[6px] text-gray-500 dark:text-gray-400 mt-0.5">Cardiologist</p>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-md py-1 px-1.5 flex justify-between items-center text-[6px] text-gray-500 dark:text-gray-400">
          <span>18 June</span>
          <span className="text-violet-650 font-bold">10:00 AM</span>
        </div>
      </div>

      {/* Appointment schedule detail */}
      <div className="space-y-1 flex-1 overflow-hidden">
        <p className="text-[8px] font-bold text-gray-900 dark:text-white">Next Consultations</p>
        <div className="flex gap-1">
          <div className="flex-1 bg-gray-50 dark:bg-gray-700/50 rounded-lg p-1.5 border border-gray-100 dark:border-gray-800">
            <div className="h-1 bg-violet-400 rounded w-3/4 mb-1" />
            <div className="h-1 bg-gray-200 dark:bg-gray-600 rounded w-1/2" />
          </div>
        </div>
      </div>
    </div>
  )
}

function ChatMockup() {
  return (
    <div className="mt-6 self-center w-full max-w-[220px] bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700/60 rounded-2xl shadow-xl overflow-hidden p-3 transition-all duration-300 group-hover:scale-[1.02] group-hover:-translate-y-1">
      {/* Active Header */}
      <div className="flex items-center gap-2 pb-2 border-b border-gray-100 dark:border-gray-700/60 mb-2">
        <div className="relative">
          <img
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Nguyen&backgroundColor=ffdfbf"
            alt="Doctor"
            className="w-6 h-6 rounded-full bg-violet-50"
          />
          <span className="absolute bottom-0 right-0 w-1.5 h-1.5 rounded-full bg-green-500 border border-white dark:border-gray-800" />
        </div>
        <div>
          <p className="text-[8px] font-bold text-gray-900 dark:text-white leading-none">Dr. Nguyen</p>
          <p className="text-[6px] text-green-500 leading-none mt-0.5">Online</p>
        </div>
      </div>

      {/* Messages */}
      <div className="space-y-1.5 mb-2.5">
        <div className="flex justify-start">
          <div className="bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-200 text-[8px] rounded-xl rounded-tl-sm px-2.5 py-1 max-w-[85%] shadow-sm leading-snug">
            Is it safe to take ibuprofen daily?
          </div>
        </div>
        <div className="flex justify-end">
          <div className="bg-violet-600 text-white text-[8px] rounded-xl rounded-tr-sm px-2.5 py-1 max-w-[85%] shadow-sm leading-snug">
            Daily use is not recommended.
          </div>
        </div>
      </div>

      {/* Input row */}
      <div className="flex items-center gap-1.5 bg-gray-50 dark:bg-gray-900 rounded-full px-2.5 py-1.5 border border-gray-100 dark:border-gray-800">
        <div className="flex-1 text-[7px] text-gray-400">Type a message...</div>
        <div className="w-3.5 h-3.5 bg-violet-600 rounded-full flex items-center justify-center text-white text-[7px] cursor-pointer">
          ➔
        </div>
      </div>
    </div>
  )
}

function DashboardMockup() {
  return (
    <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 w-full">
      {/* Stat 1 */}
      <div className="bg-white dark:bg-gray-850 rounded-xl p-3 border border-gray-100 dark:border-gray-700/40 shadow-sm flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-red-50 dark:bg-red-950/20 flex items-center justify-center text-base shrink-0">❤️</div>
        <div>
          <p className="text-[9px] text-gray-400 dark:text-gray-500">Heart Rate</p>
          <p className="text-xs font-extrabold text-gray-900 dark:text-white">72 bpm</p>
        </div>
      </div>

      {/* Stat 2 */}
      <div className="bg-white dark:bg-gray-850 rounded-xl p-3 border border-gray-100 dark:border-gray-700/40 shadow-sm flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-950/20 flex items-center justify-center text-base shrink-0">🩺</div>
        <div>
          <p className="text-[9px] text-gray-400 dark:text-gray-500">Blood Pressure</p>
          <p className="text-xs font-extrabold text-gray-900 dark:text-white">120/80</p>
        </div>
      </div>

      {/* Stat 3 */}
      <div className="bg-white dark:bg-gray-850 rounded-xl p-3 border border-gray-100 dark:border-gray-700/40 shadow-sm flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-yellow-50 dark:bg-yellow-950/20 flex items-center justify-center text-base shrink-0">😴</div>
        <div>
          <p className="text-[9px] text-gray-400 dark:text-gray-500">Sleep Average</p>
          <p className="text-xs font-extrabold text-gray-900 dark:text-white">7.5 Hrs</p>
        </div>
      </div>

      {/* Large Chart visual */}
      <div className="sm:col-span-3 bg-white dark:bg-gray-850 rounded-xl p-4 border border-gray-100 dark:border-gray-700/40 shadow-sm">
        <div className="flex justify-between items-center mb-3">
          <span className="text-[10px] font-bold text-gray-900 dark:text-white">Health Activity Trend</span>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-600" />
            <span className="text-[8px] text-gray-450 dark:text-gray-400">Monthly Average</span>
          </div>
        </div>
        {/* Sparkline chart SVG */}
        <div className="h-16 w-full">
          <svg className="w-full h-full" viewBox="0 0 240 60" preserveAspectRatio="none">
            <defs>
              <linearGradient id="dashboardGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.01" />
              </linearGradient>
            </defs>
            <path
              d="M 0 45 C 20 40, 40 50, 60 30 C 80 10, 100 25, 120 20 C 140 15, 160 35, 180 20 C 200 5, 220 15, 240 10"
              fill="none"
              stroke="#7C3AED"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <path
              d="M 0 45 C 20 40, 40 50, 60 30 C 80 10, 100 25, 120 20 C 140 15, 160 35, 180 20 C 200 5, 220 15, 240 10 L 240 60 L 0 60 Z"
              fill="url(#dashboardGrad)"
            />
            <circle cx="240" cy="10" r="3" fill="#7C3AED" />
          </svg>
        </div>
      </div>
    </div>
  )
}

function PrescriptionMockup() {
  return (
    <div className="mt-6 self-center flex items-center justify-center gap-4 py-2 transition-all duration-300 group-hover:scale-[1.03]">
      <div className="relative w-10 h-14 bg-blue-100 dark:bg-blue-900/40 rounded-xl border border-blue-200/50 dark:border-blue-900/30 flex items-center justify-center shadow-md">
        <span className="text-xl">💊</span>
        <div className="absolute bottom-1 w-6 h-1 bg-white/60 dark:bg-gray-800/60 rounded" />
      </div>
      <div className="relative w-12 h-16 bg-violet-100 dark:bg-violet-900/40 rounded-xl border border-violet-200/50 dark:border-violet-900/30 flex items-center justify-center shadow-lg -translate-y-1">
        <span className="text-2xl font-bold text-violet-600 dark:text-violet-400">Rx</span>
        <div className="absolute bottom-1.5 w-8 h-1 bg-white/60 dark:bg-gray-800/60 rounded" />
      </div>
      <div className="relative w-10 h-14 bg-pink-100 dark:bg-pink-900/40 rounded-xl border border-pink-200/50 dark:border-pink-900/30 flex items-center justify-center shadow-md">
        <span className="text-xl">🧪</span>
        <div className="absolute bottom-1 w-6 h-1 bg-white/60 dark:bg-gray-800/60 rounded" />
      </div>
    </div>
  )
}

function GlobalMockup() {
  return (
    <div className="mt-6 self-center flex flex-col items-center justify-center gap-2.5 py-2 transition-all duration-300 group-hover:scale-[1.03]">
      <div className="flex gap-2">
        <span className="flex items-center gap-1 bg-white dark:bg-gray-800 text-[10px] font-semibold border border-gray-150 dark:border-gray-700 px-5 py-2.5 rounded-full shadow-sm">
          <span>🇺🇸</span> USA
        </span>
        <span className="flex items-center gap-1 bg-white dark:bg-gray-800 text-[10px] font-semibold border border-gray-150 dark:border-gray-700 px-5 py-2.5 rounded-full shadow-sm">
          <span>🇬🇧</span> UK
        </span>
      </div>
      <div className="flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 bg-violet-500 rounded-full animate-ping" />
        <span className="w-10 h-0.5 bg-violet-200 dark:bg-violet-900" />
        <span className="text-xs">🌐</span>
        <span className="w-10 h-0.5 bg-violet-200 dark:bg-violet-900" />
        <span className="w-1.5 h-1.5 bg-violet-500 rounded-full animate-ping" />
      </div>
      <div className="flex gap-2">
        <span className="flex items-center gap-1 bg-white dark:bg-gray-800 text-[10px] font-semibold border border-gray-150 dark:border-gray-700 px-5 py-2.5 rounded-full shadow-sm">
          <span>🇪🇸</span> Spain
        </span>
        <span className="flex items-center gap-1 bg-white dark:bg-gray-800 text-[10px] font-semibold border border-gray-150 dark:border-gray-700 px-5 py-2.5 rounded-full shadow-sm">
          <span>🇩🇪</span> Germany
        </span>
      </div>
    </div>
  )
}

export default function Features() {
  return (
    <section id="features" className="section-padding bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto container-custom">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge className="mb-4">Features</Badge>
          <h2 className="section-title">
            Discover Our Benefits & Features
          </h2>
        </motion.div>

        {/* Bento Grid (6 Columns) */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-6 gap-6"
        >
          {FEATURES.map(feature => {
            const isWide = feature.id === 3
            const isMedium = feature.id === 1 || feature.id === 2
            const isSmall = feature.id >= 4
            
            return (
              <motion.div
                key={feature.id}
                variants={fadeUp}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className={`
                  ${isMedium ? 'md:col-span-3' : ''}
                  ${isWide ? 'md:col-span-6' : ''}
                  ${isSmall ? 'md:col-span-2' : ''}
                  ${feature.bg}
                  bento-card-custom border border-gray-100 dark:border-gray-800/60
                  ${feature.isCta ? 'bg-violet-600 border-violet-500' : ''}
                  overflow-hidden relative flex flex-col justify-between group
                `}
              >
                <div>
                  {/* Icon */}
                  <div className={`
                    w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-4
                    ${feature.isCta ? 'bg-white/20' : 'bg-white dark:bg-gray-800 shadow-md border border-gray-100 dark:border-gray-700'}
                  `}>
                    {feature.emoji}
                  </div>

                  {/* Text */}
                  <h3 className={`
                    font-extrabold text-lg sm:text-xl leading-snug mb-2
                    ${feature.isCta ? 'text-white' : 'text-gray-900 dark:text-white'}
                  `}>
                    {feature.title}
                  </h3>
                  
                  {feature.description && (
                    <p className={`
                      text-sm leading-relaxed max-w-xl
                      ${feature.isCta ? 'text-violet-100' : 'text-gray-500 dark:text-gray-400'}
                    `}>
                      {feature.description}
                    </p>
                  )}
                </div>

                {/* Mockups */}
                {feature.mockup === 'phone' && <PhoneMockup />}
                {feature.mockup === 'chat' && <ChatMockup />}
                {feature.mockup === 'dashboard' && <DashboardMockup />}
                {feature.mockup === 'prescription' && <PrescriptionMockup />}
                {feature.mockup === 'global' && <GlobalMockup />}

                {/* CTA card button */}
                {feature.isCta && (
                  <div className="mt-8 z-10">
                    <button className="bg-white text-violet-600 text-sm font-bold px-9 py-4 rounded-full hover:bg-violet-50 transition-colors shadow-lg hover:shadow-violet-800/10 cursor-pointer">
                      Explore More →
                    </button>
                  </div>
                )}

                {/* Decorative blob for CTA */}
                {feature.isCta && (
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-white/10 rounded-full blur-xl" />
                )}
              </motion.div>
            )
          })}
        </motion.div>

      </div>
    </section>
  )
}