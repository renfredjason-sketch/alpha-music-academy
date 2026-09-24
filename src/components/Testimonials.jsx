import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

const TESTIMONIALS = [
  {
    quote:
      'My daughter went from her first scale to a Grade 5 distinction in under two years. The faculty noticed exactly what she needed at each stage.',
    name: 'Meera Nair',
    role: 'Parent, Piano Grade 5',
    img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
  },
  {
    quote:
      'I came in as a hobbyist guitarist and left with a place at a conservatory. The mentorship here is unlike anything I found elsewhere.',
    name: 'Rohan Verma',
    role: 'Alumnus, Guitar Performance',
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
  },
  {
    quote:
      'The vocal studio rebuilt my technique from the ground up. I now perform professionally, something I never thought possible at 34.',
    name: 'Anjali Krishnan',
    role: 'Adult Learner, Vocal Studio',
    img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative bg-ink py-28 lg:py-36">
      <div className="container-page">
        <div className="max-w-2xl">
          <h1 className="font-display text-4xl sm:text-5xl text-ivory leading-tight">
            Voices from the studio
          </h1>
          <p className="text-bone text-lg mt-6 leading-relaxed">
            Students and parents on what changed after their first term at
            Alpha.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="border-t border-gold/40 pt-8"
            >
              <Quote size={28} className="text-gold/60" />
              <blockquote className="mt-6 font-display text-lg text-ivory leading-relaxed italic">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-4">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-11 h-11 object-cover rounded-full grayscale"
                />
                <div>
                  <p className="text-ivory text-sm">{t.name}</p>
                  <p className="text-bone text-xs mt-0.5">{t.role}</p>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
