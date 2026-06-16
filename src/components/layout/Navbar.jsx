import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { useScrollY } from '../../hooks/useScrollY'
import { useTheme } from '../../hooks/useTheme'
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <div className="flex items-center gap-3">

              {/* Theme Toggle */}
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={toggleTheme}
                aria-label="Toggle dark mode"
                className={
                  isDark
                    ? 'relative w-14 h-7 rounded-full transition-colors duration-300 cursor-pointer bg-violet-600'
                    : 'relative w-14 h-7 rounded-full transition-colors duration-300 cursor-pointer bg-gray-200'
                }
              >
                <motion.div
                  animate={{ x: isDark ? 28 : 4 }}
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  className="absolute top-1 w-5 h-5 bg-white rounded-full shadow flex items-center justify-center"
                >
                  {isDark
                    ? <Moon size={10} className="text-violet-600" />
                    : <Sun size={10} className="text-yellow-500" />
                  }
                </motion.div>
              </motion.button>

              {/* Get Started — desktop */}
              <div className="hidden md:block">
                <Button size="sm">Get Started</Button>
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
              <Button size="sm" className="w-full justify-center mt-2">
                Get Started
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}