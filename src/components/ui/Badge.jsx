export default function Badge({ children, className = '' }) {
    return (
      <span
        className={`
          inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full
          text-xs font-semibold bg-violet-100 text-violet-700
          dark:bg-violet-900/40 dark:text-violet-300
          ${className}
        `}
      >
        {children}
      </span>
    )
  }