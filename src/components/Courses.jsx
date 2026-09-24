import { motion } from 'framer-motion'
import { Music3, Mic2, Guitar, Music4, Drum, Headphones } from 'lucide-react'
import coursesImg1 from '../assets/coursesimg1.jpeg'
import coursesImg2 from '../assets/coursesimg2.jpeg'
import coursesImg3 from '../assets/coursesimg3.jpeg'
import coursesImg4 from '../assets/coursesimg4.jpeg'
import coursesImg5 from '../assets/coursesimg5.jpeg'
import coursesImg6 from '../assets/coursesimg6.jpeg'

const COURSES = [
  {
    icon: Music3,
    title: 'Classical & Contemporary Piano',
    desc: 'From first scales to concerto repertoire, taught on concert-grade instruments.',
    level: 'Ages 6+',
    duration: 'Grades 1–8 + Diploma',
    img: coursesImg1,
  },
  {
    icon: Mic2,
    title: 'Vocal & Singing Studio',
    desc: 'Classical and contemporary technique, breath control and stage presence.',
    level: 'Ages 8+',
    duration: '3 proficiency tiers',
    img: coursesImg2,
  },
  {
    icon: Guitar,
    title: 'Acoustic & Electric Guitar',
    desc: 'Fingerstyle, chord theory and improvisation across genres and styles.',
    level: 'Ages 7+',
    duration: 'Beginner to Advanced',
    img: coursesImg3,
  },
  {
    icon: Music4,
    title: 'Violin & String Ensemble',
    desc: 'Posture, bowing and intonation, with chamber ensemble performance.',
    level: 'Ages 6+',
    duration: 'Grades 1–8',
    img: coursesImg4,
  },
  {
    icon: Drum,
    title: 'Drums & Percussion',
    desc: 'Rhythm foundations, kit technique and ensemble timing for every genre.',
    level: 'Ages 8+',
    duration: 'Beginner to Advanced',
    img: coursesImg5,
  },
  {
    icon: Headphones,
    title: 'Music Production & Theory',
    desc: 'Harmony, composition and modern studio production from first principles.',
    level: 'Ages 14+',
    duration: '2-year track',
    img: coursesImg6,
  },
]

export default function Courses() {
  return (
    <section id="courses" className="relative bg-blue-deep py-28 lg:py-36">
      <div className="container-page">
        <div className="max-w-2xl">
          <h1 className="font-display text-4xl sm:text-5xl text-ivory leading-tight">
            Programs built around your instrument
          </h1>
          <p className="text-bone text-lg mt-6 leading-relaxed">
            Six core disciplines, each with its own graded curriculum,
            dedicated faculty and performance milestones.
          </p>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
          {COURSES.map((course, i) => (
            <motion.article
              key={course.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
              className="group bg-blue-deep relative flex flex-col"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={course.img}
                  alt={course.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-deep via-blue-deep/10 to-transparent" />
                <div className="absolute top-4 left-4 w-10 h-10 flex items-center justify-center bg-ink/70 border border-gold/40">
                  <course.icon size={18} className="text-gold" />
                </div>
              </div>

              <div className="p-8 flex flex-col flex-1">
                <h3 className="font-display text-xl text-ivory">{course.title}</h3>
                <p className="text-bone text-sm mt-3 leading-relaxed flex-1">
                  {course.desc}
                </p>
                <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between text-xs text-bone/80">
                  <span>{course.level}</span>
                  <span className="text-gold">{course.duration}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
