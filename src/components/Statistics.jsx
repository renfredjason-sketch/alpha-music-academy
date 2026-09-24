import { motion } from 'framer-motion'
import useCountUp from '../hooks/useCountUp'

const STATS = [
  { target: 2400, suffix: '+', label: 'Students trained' },
  { target: 12, suffix: '', label: 'Instruments & disciplines' },
  { target: 9, suffix: '', label: 'Years of experience' },
  { target: 85, suffix: '+', label: 'Competition & exam honours' },
]

function Stat({ target, suffix, label }) {
  const { ref, value } = useCountUp(target)
  return (
    <div ref={ref} className="text-center sm:text-left">
      <p className="font-display text-5xl sm:text-6xl text-gold">
        {value.toLocaleString()}
        {suffix}
      </p>
      <div className="w-10 h-px bg-gold/50 my-4 mx-auto sm:mx-0" />
      <p className="text-bone text-sm">{label}</p>
    </div>
  )
}

export default function Statistics() {
  return (
    <section id="statistics" className="relative bg-ink py-28 lg:py-36 border-b border-white/10">
      <div className="container-page">
        <div className="max-w-2xl">
          <h1 className="font-display text-4xl sm:text-5xl text-ivory leading-tight">
            Alpha, by the numbers
          </h1>
          <p className="text-bone text-lg mt-6 leading-relaxed">
            Sixteen years of graded exams, recitals and quiet, steady
            progress — measured one student at a time.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8"
        >
          {STATS.map((stat) => (
            <Stat key={stat.label} {...stat} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
