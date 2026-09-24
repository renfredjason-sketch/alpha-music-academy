import { motion } from 'framer-motion'
import StaffLines from './StaffLines'

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-end overflow-hidden bg-ink">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?auto=format&fit=crop&w=1800&q=80"
          alt="A grand piano keyboard lit dramatically on a concert stage"
          className="w-full h-full object-cover object-[center_30%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/85 to-ink/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-transparent to-transparent" />
      </div>

      {/* Staff line motif */}
      <StaffLines
        className="hidden md:block absolute top-28 right-10 w-[380px] h-[70px] opacity-70"
        gap={9}
      />

      <div className="relative container-page pb-24 pt-40 w-full">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-gold text-sm mb-6 tracking-wide"
        >
          "Play skillfully, and shout for joy" - Psalms 33:3
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-gold text-sm mb-6 tracking-wide"
        >
          Established 2017 · Affiliated with London College of Music
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.05] text-ivory max-w-3xl"
        >
          Music is learned in the presence of those who have mastered it.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-8 max-w-xl text-bone text-lg leading-relaxed"
        >
          Alpha Music Academy trains pianists, vocalists and instrumentalists
          through rigorous, personalised instruction — from a child's first
          scale to a professional's concert debut.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-11 flex flex-wrap items-center gap-5"
        >
          <a
            href="#admission"
            className="inline-flex items-center bg-gold text-ink px-8 py-3.5 text-sm font-medium hover:bg-gold-light transition-colors"
          >
            Go to Admissions
          </a>
          <a
            href="#courses"
            className="inline-flex items-center border border-white/30 text-ivory px-8 py-3.5 text-sm hover:border-gold hover:text-gold transition-colors"
          >
            Explore Courses
          </a>
        </motion.div>
      </div>
    </section>
  )
}
