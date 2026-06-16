import { motion } from 'framer-motion'
import { FOOTER_LINKS } from '../../constants/data'
import Button from '../ui/Button'

export default function Footer() {
  return (
    <footer id="blog" className="bg-gray-950 text-gray-400 border-t border-gray-900">
      <div className="max-w-7xl mx-auto container-custom py-16">
        
        {/* Top Connect Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-gray-800/60 footer-connect-row">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let's Connect with us
          </h2>
          <div className="flex flex-wrap gap-4">
            <Button size="md" className="hover:bg-violet-750 font-semibold shadow-lg hover:shadow-violet-500/20">
              Start Consultation
            </Button>
            <Button variant="outline" size="md" className="border-gray-800 text-white hover:border-gray-650 hover:bg-gray-900/40 font-semibold">
              Find Doctor
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">

          {/* Left — Brand */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-violet-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-sm font-bold">M</span>
              </div>
              <span className="font-bold text-white text-lg">Medicare</span>
            </div>

            <p className="text-sm leading-relaxed text-gray-400 max-w-xs">
              Customer service excellence for your health. Premium medical care accessible to everyone, everywhere.
            </p>

            {/* Newsletter */}
            <div className="relative flex items-center w-full max-w-sm footer-newsletter">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-gray-900 border border-gray-850 rounded-full pl-5 pr-32 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all"
              />
              <button className="absolute right-1.5 bg-violet-600 hover:bg-violet-750 text-white text-xs font-semibold px-7 py-2.5 rounded-full transition-colors cursor-pointer">
                Subscribe
              </button>
            </div>

            {/* App Store Badges */}
            <div className="flex flex-wrap footer-app-badges">
              <button className="flex items-center gap-2 bg-gray-900 hover:bg-gray-850 border border-gray-800 rounded-xl px-4 py-2 transition-colors cursor-pointer">
                <span className="text-lg">🍎</span>
                <div className="text-left">
                  <p className="text-[9px] text-gray-400 leading-none">Download on the</p>
                  <p className="text-xs font-semibold text-white leading-none mt-1">App Store</p>
                </div>
              </button>
              <button className="flex items-center gap-2 bg-gray-900 hover:bg-gray-850 border border-gray-800 rounded-xl px-4 py-2 transition-colors cursor-pointer">
                <span className="text-lg">🤖</span>
                <div className="text-left">
                  <p className="text-[9px] text-gray-400 leading-none">GET IT ON</p>
                  <p className="text-xs font-semibold text-white leading-none mt-1">Google Play</p>
                </div>
              </button>
            </div>
          </div>

          {/* Right — Link Columns */}
          <div className="lg:col-span-4 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {Object.entries(FOOTER_LINKS).map(([title, links]) => (
              <div key={title}>
                <h4 className="text-white font-semibold text-sm mb-4">{title}</h4>
                <ul className="space-y-3">
                  {links.map(link => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm text-gray-450 hover:text-violet-400 transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-900 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            © 2026 Medicare. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            {['Twitter', 'LinkedIn', 'Facebook', 'Instagram'].map(social => (
              <motion.a
                key={social}
                href="#"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social}
                className="w-8 h-8 bg-gray-900 hover:bg-violet-600 rounded-full flex items-center justify-center transition-colors text-xs font-bold text-gray-450 hover:text-white"
              >
                {social[0]}
              </motion.a>
            ))}
          </div>

          <div className="flex gap-4 text-xs text-gray-550">
            <a href="#" className="hover:text-violet-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-violet-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}