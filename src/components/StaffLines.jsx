import { motion } from 'framer-motion'

// A five-line musical staff rendered as thin SVG rules.
// Used as a recurring decorative + structural motif across sections.
export default function StaffLines({
  className = '',
  lineCount = 5,
  color = '#C6A15B',
  opacity = 0.5,
  animate = true,
  gap = 10,
}) {
  const lines = Array.from({ length: lineCount })

  return (
    <svg
      className={className}
      viewBox={`0 0 400 ${gap * (lineCount - 1) + 4}`}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {lines.map((_, i) => (
        <motion.line
          key={i}
          x1="0"
          x2="400"
          y1={2 + i * gap}
          y2={2 + i * gap}
          stroke={color}
          strokeWidth="0.6"
          strokeOpacity={opacity}
          initial={animate ? { pathLength: 0 } : false}
          whileInView={animate ? { pathLength: 1 } : undefined}
          viewport={{ once: true }}
          transition={{ duration: 1.4, delay: i * 0.08, ease: 'easeInOut' }}
        />
      ))}
    </svg>
  )
}
