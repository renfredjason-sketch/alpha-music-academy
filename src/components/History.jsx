import { motion } from 'framer-motion'

const MILESTONES = [
  {
    year: '2017',
    title: 'A humble beginning',
    desc: 'Alpha Music Academy opens in one small studio room, teaching piano and violin to a handful of students under founder-led lessons.',
  },
  {
    year: '2013',
    title: 'Building a proper home for music',
    desc: 'The academy moves into a larger space with acoustically treated practice rooms and its first concert-grade piano.',
  },
  {
    year: '2015',
    title: 'A wider curriculum',
    desc: 'Guitar, woodwind and vocal programs are introduced, and Alpha becomes an affiliated exam centre for Trinity College London.',
  },
  {
    year: '2017',
    title: '1,000 students',
    desc: 'The academy reaches its first thousand students and adds evening and weekend batches to fit real family schedules.',
  },
  {
    year: '2019',
    title: 'Twelve disciplines, one philosophy',
    desc: 'The instrument roster grows to twelve, from oud to cello, alongside a need-based scholarship program for promising students.',
  },
  {
    year: '2021',
    title: 'Learning without walls',
    desc: 'Hybrid and online lesson formats are introduced, keeping students progressing without interrupting their training.',
  },
  {
    year: '2023',
    title: 'Recognition on bigger stages',
    desc: 'Alpha alumni begin winning national competitions and earning places at leading music colleges around the world.',
  },
  {
    year: 'Today',
    title: 'Sixteen years, one student at a time',
    desc: 'Over 2,400 students trained across twelve disciplines — and a faculty still built entirely around personal mentorship.',
  },
]

export default function History() {
  return (
    <section id="history" className="relative bg-ink py-28 lg:py-36 border-b border-white/10">
      <div className="container-page grid lg:grid-cols-12 gap-16">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-32">
            <h1 className="font-display text-4xl sm:text-5xl text-ivory leading-tight">
              Our history
            </h1>
            <p className="text-bone text-lg mt-6 leading-relaxed">
              From a single studio room to a full conservatory — the story of
              Alpha Music Academy has always been written one student, one
              lesson at a time.
            </p>
            <div className="w-16 h-px bg-gold mt-10" />
          </div>
        </div>

        <div className="lg:col-span-8">
          <div className="relative pl-10 sm:pl-12">
            <div className="absolute left-[7px] sm:left-[9px] top-2 bottom-2 w-px bg-white/10" />

            {MILESTONES.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
                className="relative pb-12 last:pb-0"
              >
                <span className="absolute -left-10 sm:-left-12 top-1.5 w-4 h-4 border border-gold bg-ink" />
                <p className="font-display text-sm tracking-wide2 uppercase text-gold">
                  {item.year}
                </p>
                <h3 className="font-display text-xl sm:text-2xl text-ivory mt-2">
                  {item.title}
                </h3>
                <p className="text-bone text-sm sm:text-base mt-2 leading-relaxed max-w-xl">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
