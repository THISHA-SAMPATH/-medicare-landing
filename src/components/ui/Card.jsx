import { motion } from 'framer-motion'

export default function Card({
  children,
  className = '',
  hover = true,
  ...props
}) {
  return (
    <motion.div
      whileHover={hover ? { y: -4, shadow: 'lg' } : {}}
      transition={{ duration: 0.2 }}
      className={`
        bg-white dark:bg-gray-800
        rounded-2xl border border-gray-100 dark:border-gray-700
        shadow-sm hover:shadow-md transition-shadow duration-200
        ${className}
      `}
      {...props}
    >
      {children}
    </motion.div>
  )
}