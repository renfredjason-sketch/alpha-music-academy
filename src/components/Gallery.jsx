import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Maximize2, X } from 'lucide-react'

const IMAGES = [
  {
    src: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=1200&q=80',
    caption: 'One-on-one violin instruction in Studio 3',
    span: 'sm:col-span-2 sm:row-span-2',
  },
  {
    src: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?auto=format&fit=crop&w=900&q=80',
    caption: 'The recital hall, set for an evening performance',
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80',
    caption: 'A vocal studio warm-up session',
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=900&q=80',
    caption: 'Guitar technique class, intermediate level',
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1200&q=80',
    caption: 'The production suite during a mixing workshop',
    span: 'sm:col-span-2',
  },
  {
    src: 'https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?auto=format&fit=crop&w=900&q=80',
    caption: 'Percussion ensemble rehearsal',
    span: '',
  },
]

export default function Gallery() {
  const [active, setActive] = useState(null)

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setActive(null)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <section id="gallery" className="relative bg-ink py-28 lg:py-36">
      <div className="container-page">
        <div className="max-w-2xl">
          <h1 className="font-display text-4xl sm:text-5xl text-ivory leading-tight">
            Life inside the academy
          </h1>
          <p className="text-bone text-lg mt-6 leading-relaxed">
            Lessons, rehearsals and performances from across our studios and
            recital hall.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 auto-rows-[160px] sm:auto-rows-[180px] gap-3">
          {IMAGES.map((img, i) => (
            <motion.button
              key={img.src}
              type="button"
              onClick={() => setActive(img)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: (i % 6) * 0.06 }}
              className={`group relative overflow-hidden text-left ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/0 to-ink/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-ivory text-sm leading-snug">{img.caption}</p>
              </div>
              <div className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center bg-ink/70 border border-gold/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Maximize2 size={14} className="text-gold" />
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-ink/95 backdrop-blur-sm flex items-center justify-center p-6"
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={active.src}
                alt={active.caption}
                className="w-full max-h-[75vh] object-contain"
              />
              <div className="flex items-center justify-between mt-4">
                <p className="text-bone text-sm">{active.caption}</p>
                <button
                  onClick={() => setActive(null)}
                  aria-label="Close"
                  className="text-ivory hover:text-gold transition-colors"
                >
                  <X size={22} />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
