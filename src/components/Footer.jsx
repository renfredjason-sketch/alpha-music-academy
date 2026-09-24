import { Instagram, Facebook, Youtube } from 'lucide-react'
import logo from '../assets/logo.png'
import StaffLines from './StaffLines'

const NAV = [
  { label: 'About', to: '#about' },
  { label: 'History', to: '#history' },
  { label: 'Courses', to: '#courses' },
  { label: 'Statistics', to: '#statistics' },
  { label: 'Why Us', to: '#why-us' },
  { label: 'Gallery', to: '#gallery' },
  { label: 'Voices', to: '#testimonials' },
  { label: 'Contact', to: '#contact' },
]

export default function Footer() {
  return (
    <footer className="relative bg-ink border-t border-white/10 pt-20 pb-10">
      <StaffLines
        className="absolute -top-6 left-0 w-full h-10 opacity-20"
        animate={false}
        gap={7}
      />
      <div className="container-page">
        <div className="grid md:grid-cols-12 gap-12 pb-14 border-b border-white/10">
          <div className="md:col-span-5">
            <a href="#top" className="flex items-center gap-3">
              <img
                src={logo}
                alt="Alpha Music Academy"
                className="w-[26px] h-[26px] object-contain"
              />
              <span className="font-display text-lg text-ivory">
                Alpha <span className="text-gold">Music</span> Academy
              </span>
            </a>
            <p className="text-bone text-sm mt-6 max-w-xs leading-relaxed">
              Conservatory-level music education for every age and stage,
              since 2009.
            </p>
            <div className="flex items-center gap-4 mt-7">
              <a href="#" aria-label="Instagram" className="text-bone hover:text-gold transition-colors"><Instagram size={18} /></a>
              <a href="#" aria-label="Facebook" className="text-bone hover:text-gold transition-colors"><Facebook size={18} /></a>
              <a href="#" aria-label="YouTube" className="text-bone hover:text-gold transition-colors"><Youtube size={18} /></a>
            </div>
          </div>

          <div className="md:col-span-3 md:col-start-7">
            <p className="text-ivory text-sm mb-5">Navigate</p>
            <ul className="flex flex-col gap-3">
              {NAV.map((item) => (
                <li key={item.to}>
                  <a href={item.to} className="text-bone text-sm hover:text-gold transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="text-ivory text-sm mb-5">Contact</p>
            <ul className="flex flex-col gap-3 text-bone text-sm">
              <li>24 Harmony Lane, Bandra West</li>
              <li>Mumbai 400050, India</li>
              <li>admissions@alphamusicacademy.in</li>
              <li>+91 98200 12345</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-bone/70">
          <p>© {new Date().getFullYear()} Alpha Music Academy. All rights reserved.</p>
          <p>Affiliated with London College of Music</p>
        </div>
      </div>
    </footer>
  )
}
