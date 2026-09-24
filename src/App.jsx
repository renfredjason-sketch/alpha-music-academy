import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './components/Hero'
import About from './components/About'
import History from './components/History'
import Courses from './components/Courses'
import Statistics from './components/Statistics'
import WhyChooseUs from './components/WhyChooseUs'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import AdmissionCTA from './components/AdmissionCTA'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="bg-ink">
      <Navbar />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        <Hero />
        <About />
        <History />
        <Courses />
        <Statistics />
        <WhyChooseUs />
        <Gallery />
        <Testimonials />
        <AdmissionCTA />
        <Contact />
      </motion.main>
      <Footer />
    </div>
  )
}
