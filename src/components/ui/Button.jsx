import { motion } from 'framer-motion'
import { cn } from '../../utils/cn'

const variants = {
  primary: 'bg-violet-600 hover:bg-violet-700 text-white',
  outline: 'border-2 border-violet-600 text-violet-600 hover:bg-violet-50 dark:hover:bg-violet-950',
  white: 'bg-white text-violet-600 hover:bg-gray-100',
  dark: 'bg-gray-900 text-white hover:bg-gray-800',
}

const sizes = {
  sm: 'px-6 py-3 text-sm',
  md: 'px-8 py-4 text-sm',
  lg: 'px-10 py-4.5 text-base',
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  ...props
}) {
  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      className={cn(
        'inline-flex items-center gap-2 rounded-full font-medium transition-colors duration-200 cursor-pointer',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  )
}