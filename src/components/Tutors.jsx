import { motion } from 'framer-motion'

const TUTORS = [
  {
    name: 'Arjun Mehta',
    instrument: 'Violin & Viola',
    description:
      'A Berklee alumnus with 15 years of performance experience, Arjun blends classical rigour with expressive modern technique to inspire students of every level.',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
  },
  {
    name: 'Priya Nair',
    instrument: 'Carnatic Vocal',
    description:
      'Trained under Vidushi Sudha Raghunathan, Priya brings authentic South Indian classical tradition into the classroom with warmth and precision.',
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face',
  },
  {
    name: 'Sebastian Cole',
    instrument: 'Classical Guitar',
    description:
      'A former soloist with the Royal Philharmonic, Sebastian focuses on tone, phrasing and the intimate language of solo guitar repertoire.',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face',
  },
  {
    name: 'Layla Hassan',
    instrument: 'Oud & Arabic Maqam',
    description:
      'Layla studied at the Cairo Conservatoire and specialises in maqam improvisation, bringing rare depth to the Arabic modal tradition.',
    photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face',
  },
  {
    name: 'David Osei',
    instrument: 'Piano & Music Theory',
    description:
      'David holds a Masters from the Royal Academy and teaches both practical piano and rigorous music theory with patience and clarity.',
    photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face',
  },
  {
    name: 'Meera Krishnan',
    instrument: 'Bharatanatyam & Rhythm',
    description:
      'A nationally acclaimed dancer-musician, Meera integrates rhythmic training with expressive storytelling, rooting students in classical form.',
    photo: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400&h=400&fit=crop&crop=face',
  },
  {
    name: 'Thomas Brennan',
    instrument: 'Drums & Percussion',
    description:
      'Thomas has toured with jazz and rock acts across Europe. His sessions fuse groove, independence and musicality for drummers of all styles.',
    photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face',
  },
  {
    name: 'Aisha Patel',
    instrument: 'Flute & Woodwinds',
    description:
      'Trained in both Western and Hindustani flute, Aisha guides students through breath control, ornamentation and cross-cultural repertoire.',
    photo: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=400&fit=crop&crop=face',
  },
  {
    name: 'Rafael Santos',
    instrument: 'Bass Guitar & Jazz Harmony',
    description:
      'Rafael studied jazz at Berklee and has recorded with leading artists across Latin America. He teaches walking bass, harmony and improvisation.',
    photo: 'https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=400&h=400&fit=crop&crop=face',
  },
  {
    name: 'Yuki Tanaka',
    instrument: 'Cello',
    description:
      'Yuki is a chamber musician and ABRSM examiner who brings meticulous attention to bow technique, intonation and ensemble playing.',
    photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
  },
  {
    name: 'Omar Khalil',
    instrument: 'Trumpet & Brass',
    description:
      'A big-band veteran and music educator, Omar covers everything from classical etudes to jazz lead trumpet with infectious enthusiasm.',
    photo: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=400&h=400&fit=crop&crop=face',
  },
  {
    name: 'Siona George',
    instrument: 'Western Vocal',
    description:
      'Siona trained at Trinity Laban and specialises in voice development, repertoire coaching and performance preparation for classical and contemporary singers.',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face',
  },
]

function TutorCard({ tutor, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: (index % 4) * 0.1 }}
      className="group flex flex-col"
    >
      {/* Photo */}
      <div className="relative overflow-hidden aspect-[3/4]">
        <img
          src={tutor.photo}
          alt={tutor.name}
          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />
        {/* Gold shimmer overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-80" />

        {/* Instrument badge */}
        <div className="absolute bottom-3 left-3 px-3 py-1 border border-gold/50 bg-ink/70 backdrop-blur-sm">
          <p className="text-[10px] uppercase tracking-widest text-gold font-medium">
            {tutor.instrument}
          </p>
        </div>
      </div>

      {/* Text */}
      <div className="pt-4 pb-2">
        <h3 className="font-display text-lg text-ivory leading-snug">{tutor.name}</h3>
        <div className="w-8 h-px bg-gold/60 my-2" />
        <p className="text-bone text-sm leading-relaxed">{tutor.description}</p>
      </div>
    </motion.div>
  )
}

export default function Tutors() {
  return (
    <section id="tutors" className="relative bg-ink py-28 lg:py-36 border-b border-white/10">
      <div className="container-page">
        {/* Section header */}
        <div className="max-w-2xl mb-16 lg:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs uppercase tracking-[0.2em] text-gold mb-4"
          >
            Our Faculty
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl text-ivory leading-tight"
          >
            Meet the tutors behind every breakthrough
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-16 h-px bg-gold mt-8 origin-left"
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-bone text-lg mt-6 leading-relaxed"
          >
            Each member of our faculty is a working musician and dedicated
            educator — bringing stage experience, examination expertise and
            genuine passion into every lesson.
          </motion.p>
        </div>

        {/* Tutor grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
          {TUTORS.map((tutor, i) => (
            <TutorCard key={tutor.name} tutor={tutor} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
