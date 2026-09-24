import { motion } from 'framer-motion'

const MotionLink = motion.a

const STEPS = [
  { n: '01', title: 'Enquire', desc: 'Tell us the instrument and your current level.' },
  { n: '02', title: 'Trial class', desc: 'A one-on-one session with a faculty instructor.' },
  { n: '03', title: 'Enrol', desc: 'Begin your graded curriculum the following week.' },
]

export default function AdmissionCTA() {
  return (
    <section id="admission" className="relative bg-ink py-28 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-radial-fade" />
      <div className="container-page relative">
        <div className="grid lg:grid-cols-12 gap-14 items-center">
          <div className="lg:col-span-7">
            <h1 className="font-display text-4xl sm:text-5xl text-ivory leading-tight max-w-xl">
              Admissions for the new term are now open
            </h1>
            <p className="text-bone text-lg mt-6 max-w-lg leading-relaxed">
              Limited studio slots remain across piano, vocal, guitar, violin,
              percussion and production. Begin with a trial class — no
              commitment required.
            </p>
            <MotionLink
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              href="#contact"
              className="mt-9 inline-flex items-center bg-gold text-ink px-9 py-4 text-sm font-medium hover:bg-gold-light transition-colors"
            >
              Apply for Admission
            </MotionLink>
          </div>

          <div className="lg:col-span-5 grid gap-6">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.n}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-center gap-5 border-l-2 border-gold/50 pl-5 py-1"
              >
                <span className="font-display text-2xl text-gold/80">{step.n}</span>
                <div>
                  <p className="text-ivory">{step.title}</p>
                  <p className="text-bone text-sm mt-0.5">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
