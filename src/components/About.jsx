import { motion } from 'framer-motion'
import aboutImg from '../assets/aboutimg.jpeg'

export default function About() {
  return (
    <section id="about" className="relative bg-ink py-28 pb-20 lg:py-36 lg:pb-36">
      <div className="container-page grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 relative"
        >
          <div className="relative">
            <img
              src={aboutImg}
              alt="A violin instructor guiding a young student's bow hold"
              className="w-full h-[240px] sm:h-[380px] lg:h-[460px] object-cover"
            />

            {/* Stat box — hangs below the image bottom-right on all sizes */}
            <div className="absolute -bottom-8 right-3 sm:-bottom-6 sm:-right-6 bg-blue-deep border border-gold/40 px-5 py-4 sm:px-7 sm:py-5 z-10">
              <p className="font-display text-2xl sm:text-3xl text-gold">9</p>
              <p className="text-xs text-bone mt-1 max-w-[9rem]">
                Years shaping musicians across every discipline
              </p>
            </div>
          </div>
        </motion.div>


        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-6 lg:col-start-7"
        >
          <h1 className="font-display text-4xl sm:text-5xl text-ivory leading-tight">
            A conservatory approach to everyday learning
          </h1>
          <div className="w-16 h-px bg-gold mt-8 mb-8" />
          <p className="text-bone text-lg leading-relaxed">
            Alpha Music Academy was founded on a simple conviction: that
            serious musicianship should not be reserved for the few. Our
            faculty — concert performers, examiners and recording artists —
            bring conservatory-level rigour to students of every age and
            stage, from the first lesson to the audition room.
          </p>
          <p className="text-bone text-lg leading-relaxed mt-6">
            Each student follows a personal curriculum built around
            technique, theory and performance, culminating in graded
            examinations, recitals and, for many, a place at leading music
            colleges around the world.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-8 max-w-md">
            <div>
              <p className="font-display text-2xl text-gold">12</p>
              <p className="text-sm text-bone mt-1">Instruments taught, from oud to cello</p>
            </div>
            <div>
              <p className="font-display text-2xl text-gold">1-to-1</p>
              <p className="text-sm text-bone mt-1">Personal mentorship in every discipline</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
