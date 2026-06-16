import { motion } from 'framer-motion'
import { FOOTER_LINKS } from '../../constants/data'

export default function Footer() {
  return (
    <footer id="blog" className="bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
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
            <div className="flex gap-2 mt-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-gray-800 border border-gray-700 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-violet-500 transition-colors"
              />
              <button className="bg-violet-600 hover:bg-violet-700 text-white text-sm font-semibold px-4 py-2.5 rounded-xl transition-colors shrink-0">
                Subscribe
              </button>
            </div>

            {/* App Store Badges */}
            <div className="flex gap-3 mt-2">
              <button className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-xl px-4 py-2.5 transition-colors">
                <span className="text-lg">🍎</span>
                <div className="text-left">
                  <p className="text-xs text-gray-400 leading-none">Download on</p>
                  <p className="text-xs font-semibold text-white leading-none mt-0.5">App Store</p>
                </div>
              </button>
              <button className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-xl px-4 py-2.5 transition-colors">
                <span className="text-lg">▶️</span>
                <div className="text-left">
                  <p className="text-xs text-gray-400 leading-none">Get it on</p>
                  <p className="text-xs font-semibold text-white leading-none mt-0.5">Google Play</p>
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
                        className="text-sm text-gray-400 hover:text-violet-400 transition-colors"
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
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
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
                className="w-8 h-8 bg-gray-800 hover:bg-violet-600 rounded-full flex items-center justify-center transition-colors text-xs font-bold text-gray-400 hover:text-white"
              >
                {social[0]}
              </motion.a>
            ))}
          </div>

          <div className="flex gap-4 text-xs text-gray-500">
            <a href="#" className="hover:text-violet-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-violet-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}