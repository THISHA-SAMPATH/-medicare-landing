import { motion } from 'framer-motion'
import Badge from '../ui/Badge'
import Button from '../ui/Button'

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
    bg: 'bg-gray-50 dark:bg-gray-800',
    size: 'col-span-1',
    mockup: 'phone',
  },
  {
    id: 2,
    title: 'Secure Messaging Systems',
    description: 'HIPAA-compliant platforms for safe and private doctor-patient communication.',
    emoji: '💬',
    bg: 'bg-blue-50 dark:bg-blue-950/30',
    size: 'col-span-1',
    mockup: 'chat',
  },
  {
    id: 3,
    title: 'Personal Health Dashboard & Appointment Booking System',
    description: 'Track your wellness metrics and schedule appointments at your convenience.',
    emoji: '📊',
    bg: 'bg-green-50 dark:bg-green-950/30',
    size: 'col-span-1 md:col-span-2',
    mockup: 'dashboard',
  },
  {
    id: 4,
    title: 'Online Prescription Services',
    description: 'Facilitate easy ordering and renewal of prescriptions from home.',
    emoji: '💊',
    bg: 'bg-orange-50 dark:bg-orange-950/30',
    size: 'col-span-1',
    mockup: null,
  },
  {
    id: 5,
    title: 'Online Global Service',
    description: 'Online global service we provide from any country worldwide.',
    emoji: '🌍',
    bg: 'bg-purple-50 dark:bg-purple-950/30',
    size: 'col-span-1',
    mockup: null,
  },
  {
    id: 6,
    title: 'Explore our more amazing services',
    description: '',
    emoji: '✨',
    bg: 'bg-violet-600',
    size: 'col-span-1',
    mockup: null,
    isCta: true,
  },
]

function PhoneMockup() {
  return (
    <div className="mt-4 bg-white dark:bg-gray-700 rounded-2xl p-3 shadow-md w-36 mx-auto">
      <div className="bg-violet-100 dark:bg-violet-900/40 rounded-xl p-2 mb-2">
        <div className="h-2 bg-violet-300 rounded mb-1 w-3/4" />
        <div className="h-2 bg-violet-200 rounded w-1/2" />
      </div>
      <div className="space-y-1.5">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex items-center gap-2">
            <div className="w-6 h-6 bg-violet-100 dark:bg-violet-900/40 rounded-lg shrink-0" />
            <div className="flex-1 space-y-1">
              <div className="h-1.5 bg-gray-200 dark:bg-gray-600 rounded w-full" />
              <div className="h-1.5 bg-gray-100 dark:bg-gray-700 rounded w-2/3" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function ChatMockup() {
  return (
    <div className="mt-4 space-y-2 px-2">
      <div className="flex justify-end">
        <div className="bg-violet-600 text-white text-xs rounded-2xl rounded-tr-sm px-3 py-2 max-w-[70%]">
          Is it safe to take ibuprofen?
        </div>
      </div>
      <div className="flex justify-start">
        <div className="bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 text-xs rounded-2xl rounded-tl-sm px-3 py-2 max-w-[70%] shadow-sm">
          Yes, with food. Avoid if you have kidney issues.
        </div>
      </div>
      <div className="flex justify-end">
        <div className="bg-violet-600 text-white text-xs rounded-2xl rounded-tr-sm px-3 py-2 max-w-[70%]">
          Thank you doctor!
        </div>
      </div>
    </div>
  )
}

function DashboardMockup() {
  return (
    <div className="mt-4 grid grid-cols-3 gap-2 px-2">
      {['Heart Rate', 'Blood Pressure', 'Sleep'].map((label, i) => (
        <div key={i} className="bg-white dark:bg-gray-700 rounded-xl p-2 shadow-sm text-center">
          <div className="text-lg">{['❤️', '🩺', '😴'][i]}</div>
          <p className="text-xs font-semibold text-gray-700 dark:text-gray-200 mt-1">
            {['72 bpm', '120/80', '7.5h'][i]}
          </p>
          <p className="text-xs text-gray-400">{label}</p>
        </div>
      ))}
      <div className="col-span-3 bg-white dark:bg-gray-700 rounded-xl p-2 shadow-sm">
        <p className="text-xs font-semibold text-gray-700 dark:text-gray-200 mb-1">Upcoming Appointment</p>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-violet-100 rounded-full" />
          <div>
            <p className="text-xs text-gray-600 dark:text-gray-300">Dr. Sarah — Today 3:00 PM</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <Badge className="mb-4">Features</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mt-3">
            Discover Our Benefits &<br />Features
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {FEATURES.map(feature => (
            <motion.div
              key={feature.id}
              variants={fadeUp}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className={`
                ${feature.size} ${feature.bg}
                rounded-2xl p-6 border border-gray-100 dark:border-gray-700
                ${feature.isCta ? 'border-violet-500' : ''}
                overflow-hidden relative
              `}
            >
              {/* Icon */}
              <div className={`
                w-10 h-10 rounded-xl flex items-center justify-center text-xl mb-3
                ${feature.isCta ? 'bg-white/20' : 'bg-white dark:bg-gray-700 shadow-sm'}
              `}>
                {feature.emoji}
              </div>

              {/* Text */}
              <h3 className={`
                font-semibold text-sm leading-snug mb-1
                ${feature.isCta ? 'text-white' : 'text-gray-900 dark:text-white'}
              `}>
                {feature.title}
              </h3>
              {feature.description && (
                <p className={`
                  text-xs leading-relaxed
                  ${feature.isCta ? 'text-violet-200' : 'text-gray-500 dark:text-gray-400'}
                `}>
                  {feature.description}
                </p>
              )}

              {/* Mockups */}
              {feature.mockup === 'phone' && <PhoneMockup />}
              {feature.mockup === 'chat' && <ChatMockup />}
              {feature.mockup === 'dashboard' && <DashboardMockup />}

              {/* CTA card button */}
              {feature.isCta && (
                <div className="mt-6">
                  <button className="bg-white text-violet-600 text-xs font-semibold px-4 py-2 rounded-full hover:bg-violet-50 transition-colors">
                    Explore More →
                  </button>
                </div>
              )}

              {/* Decorative blob for CTA */}
              {feature.isCta && (
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-white/10 rounded-full" />
              )}
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}