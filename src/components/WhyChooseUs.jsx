import { motion } from 'framer-motion'
import { Award, UserCheck, Building2, CalendarCheck, Clock, Sparkles } from 'lucide-react'

const REASONS = [
  {
    icon: Award,
    title: 'Faculty of performing professionals',
    desc: 'Every instructor performs, records or examines professionally — not only teaches.',
  },
  {
    icon: UserCheck,
    title: 'A curriculum built around you',
    desc: 'Lesson plans are set individually, adjusted each term to your pace and goals.',
  },
  {
    icon: Building2,
    title: 'Purpose-built practice studios',
    desc: 'Acoustically treated rooms, concert-grade pianos and a recital hall on site.',
  },
  {
    icon: CalendarCheck,
    title: 'Regular performance opportunities',
    desc: 'Termly recitals and public showcases so stage confidence grows early.',
  },
  {
    icon: Clock,
    title: 'Scheduling that fits real life',
    desc: 'Evening and weekend slots, with make-up lessons for missed sessions.',
  },
  {
    icon: Sparkles,
    title: 'Recognised examinations',
    desc: 'Certification pathways through Trinity College London and ABRSM.',
  },
]

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="relative bg-blue-deep py-28 lg:py-36">
      <div className="container-page grid lg:grid-cols-12 gap-16">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-32">
            <h1 className="font-display text-4xl sm:text-5xl text-ivory leading-tight">
              Why families choose Alpha
            </h1>
            <p className="text-bone text-lg mt-6 leading-relaxed">
              Serious music education is a partnership. Here is what that
              partnership looks like in practice.
            </p>
            <div className="w-16 h-px bg-gold mt-10" />
          </div>
        </div>

        <div className="lg:col-span-8">
          <div className="divide-y divide-white/10 border-t border-white/10">
            {REASONS.map((reason, i) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                className="flex items-start gap-6 py-8"
              >
                <div className="w-12 h-12 shrink-0 border border-gold/40 flex items-center justify-center">
                  <reason.icon size={20} className="text-gold" />
                </div>
                <div>
                  <h3 className="font-display text-xl text-ivory">{reason.title}</h3>
                  <p className="text-bone text-sm mt-2 leading-relaxed max-w-md">
                    {reason.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
