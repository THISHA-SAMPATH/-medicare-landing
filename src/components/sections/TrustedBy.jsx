import { motion } from 'framer-motion'

const LillyLogo = () => (
  <div className="flex items-center gap-1.5 font-bold text-red-600 text-sm">
    <svg className="w-5 h-5 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 4v8M8 10h8" />
    </svg>
    <span className="font-serif italic tracking-wide">Lilly</span>
  </div>
)

const GskLogo = () => (
  <div className="flex items-center gap-1.5 font-bold text-orange-650 text-sm">
    <svg className="w-5 h-5 text-orange-500" viewBox="0 0 24 24" fill="currentColor">
      <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="5" />
    </svg>
    <span className="lowercase tracking-tighter">gsk</span>
  </div>
)

const PfizerLogo = () => (
  <div className="flex items-center gap-1.5 font-bold text-blue-600 text-sm">
    <svg className="w-5 h-5 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
      <ellipse cx="12" cy="12" rx="10" ry="6" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M10 9h4c1 0 2 .5 2 1.5s-1 1.5-2 1.5h-4v3h-1.5V9z" />
    </svg>
    <span className="tracking-tight">Pfizer</span>
  </div>
)

const RocheLogo = () => (
  <div className="flex items-center gap-1.5 font-bold text-cyan-600 text-sm">
    <svg className="w-5 h-5 text-cyan-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polygon points="12 2 22 7 22 17 12 22 2 17 2 7" />
    </svg>
    <span>Roche</span>
  </div>
)

const NovartisLogo = () => (
  <div className="flex items-center gap-1.5 font-bold text-amber-600 text-sm">
    <svg className="w-5 h-5 text-amber-500" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L9 9H2l5.5 4.5L5 20l7-4 7 4-2.5-6.5L22 9h-7z" />
    </svg>
    <span className="tracking-tight">Novartis</span>
  </div>
)

const SanofiLogo = () => (
  <div className="flex items-center gap-1.5 font-bold text-indigo-650 text-sm">
    <svg className="w-5 h-5 text-indigo-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 12a8 8 0 0116 0" />
      <circle cx="12" cy="12" r="4" />
    </svg>
    <span>Sanofi</span>
  </div>
)

const AbbvieLogo = () => (
  <div className="flex items-center gap-1 font-bold text-blue-800 text-sm">
    <svg className="w-6 h-5 text-blue-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
      <path d="M3 12c3-6 6 6 9 0s6-6 9 0" />
    </svg>
    <span className="lowercase">abbvie</span>
  </div>
)

const MerckLogo = () => (
  <div className="flex items-center gap-1.5 font-bold text-emerald-600 text-sm">
    <svg className="w-5 h-5 text-emerald-500" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm1 14h-2v-5h2v5zm0-7h-2V7h2v2z" />
    </svg>
    <span className="tracking-widest uppercase text-xs">Merck</span>
  </div>
)

const BRAND_LOGOS = [
  { name: 'Lilly', component: LillyLogo },
  { name: 'gsk', component: GskLogo },
  { name: 'Pfizer', component: PfizerLogo },
  { name: 'Roche', component: RocheLogo },
  { name: 'Novartis', component: NovartisLogo },
  { name: 'Sanofi', component: SanofiLogo },
  { name: 'AbbVie', component: AbbvieLogo },
  { name: 'Merck', component: MerckLogo },
]

function MarqueeRow({ reverse = false }) {
  return (
    <div className="flex overflow-hidden w-full relative mask-gradient">
      <motion.div
        animate={{ x: reverse ? ['-50%', '0%'] : ['0%', '-50%'] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        className="flex gap-6 shrink-0 py-2"
      >
        {[...BRAND_LOGOS, ...BRAND_LOGOS, ...BRAND_LOGOS].map((logo, i) => {
          const LogoComponent = logo.component
          return (
            <div
              key={i}
              className="flex items-center justify-center bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-750 rounded-2xl px-6 py-4.5 shadow-sm hover:shadow-md transition-shadow shrink-0 min-w-[140px]"
            >
              <LogoComponent />
            </div>
          )
        })}
      </motion.div>
    </div>
  )
}

export default function TrustedBy() {
  return (
    <section className="section-padding bg-gray-50 dark:bg-gray-950 overflow-hidden border-y border-gray-100 dark:border-gray-900">
      <div className="max-w-7xl mx-auto container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Trusted by 100+ Global top companies connected with us
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mt-4 max-w-lg mx-auto text-base">
            Brands are participants in health awareness campaigns, further sharing their values.
          </p>
        </motion.div>
      </div>

      <div className="flex flex-col gap-6 w-full max-w-8xl mx-auto">
        <MarqueeRow />
        <MarqueeRow reverse />
      </div>
    </section>
  )
}