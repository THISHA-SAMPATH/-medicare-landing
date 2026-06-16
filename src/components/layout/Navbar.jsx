import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { useScrollY } from '../../hooks/useScrollY'
import { useTheme } from '../../context/ThemeContext'
import { NAV_LINKS } from '../../constants/data'
import Button from '../ui/Button'

export default function Navbar() {
  const scrollY = useScrollY()
  const { isDark, toggleTheme } = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('#home')

  const scrolled = scrollY > 50

  useEffect(() => {
    const handler = () => {
      if (window.innerWidth >= 768) setMenuOpen(false)
    }
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [])

  useEffect(() => {
    const sections = NAV_LINKS.map(l => l.href.replace('#', ''))
    const observers = sections.map(id => {
      const el = document.getElementById(id)
      if (!el) return null
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveLink('#' + id)
        },
        { threshold: 0.5 }
      )
      obs.observe(el)
      return obs
    })
    return () => observers.forEach(o => o && o.disconnect())
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={
          scrolled
            ? 'fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm border-b border-gray-100 dark:border-gray-800'
            : 'fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent'
        }
      >
        <div className="max-w-7xl mx-auto container-custom">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 cursor-pointer"
            >
              <div className="w-8 h-8 bg-violet-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-sm font-bold">M</span>
              </div>
              <span className="font-bold text-gray-900 dark:text-white text-lg">
                Medicare
              </span>
            </motion.div>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  className={
                    activeLink === link.href
                      ? 'text-sm font-medium text-violet-600 dark:text-violet-400 relative'
                      : 'text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 relative'
                  }
                >
                  {link.label}
                  {activeLink === link.href && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-violet-600 rounded-full"
                    />
                  )}
                </a>
              ))}
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-4">

              {/* Theme Toggle */}
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={toggleTheme}
                aria-label="Toggle dark mode"
                className={`
                  relative w-12 h-6 rounded-full transition-colors duration-300 cursor-pointer shrink-0
                  ${isDark ? 'bg-violet-600' : 'bg-gray-200'}
                `}
              >
                <div
                  className={`
                    absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow flex items-center justify-center transition-transform duration-300
                    ${isDark ? 'translate-x-6' : 'translate-x-0'}
                  `}
                >
                  {isDark
                    ? <Moon size={10} className="text-violet-600" />
                    : <Sun size={10} className="text-yellow-500" />
                  }
                </div>
              </motion.button>

              {/* Auth links — desktop */}
              <div className="hidden md:flex items-center gap-5">
                <a href="#login" className="text-sm font-semibold text-gray-600 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors">
                  Login
                </a>
                <Button size="sm" className="hover:bg-violet-750 font-semibold shadow-sm">
                  Sign Up
                </Button>
              </div>

              {/* Hamburger — mobile */}
              <button
                onClick={() => setMenuOpen(prev => !prev)}
                aria-label="Toggle menu"
                className="md:hidden p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                {menuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>

          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 shadow-lg md:hidden"
          >
            <div className="flex flex-col px-6 py-4 gap-4">
              {NAV_LINKS.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={
                    activeLink === link.href
                      ? 'text-sm font-medium py-2 border-b border-gray-50 dark:border-gray-800 text-violet-600 dark:text-violet-400'
                      : 'text-sm font-medium py-2 border-b border-gray-50 dark:border-gray-800 text-gray-700 dark:text-gray-300'
                  }
                >
                  {link.label}
                </a>
              ))}
              <div className="flex items-center justify-between gap-4 mt-2 pt-2 border-t border-gray-100 dark:border-gray-800">
                <a href="#login" onClick={() => setMenuOpen(false)} className="text-sm font-semibold text-gray-600 dark:text-gray-300 px-4 py-2 hover:text-violet-600">
                  Login
                </a>
                <Button size="sm" onClick={() => setMenuOpen(false)} className="flex-1 justify-center">
                  Sign Up
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}