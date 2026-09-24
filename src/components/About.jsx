import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative bg-ink py-28 lg:py-36">
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
              src="https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=900&q=80"
              alt="A violin instructor guiding a young student's bow hold"
              className="w-full h-[460px] object-cover"
            />
            <div className="absolute -bottom-6 -right-6 hidden sm:block bg-blue-deep border border-gold/40 px-7 py-5">
              <p className="font-display text-3xl text-gold">9</p>
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
