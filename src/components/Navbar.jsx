import { Home, Info, BookOpen, Sparkles, Image, Mail } from 'lucide-react'
import { NavBar } from '@/components/ui/tubelight-navbar'
import logo from '../assets/logo.png'

const NAV_ITEMS = [
  { name: 'Home', url: '#top', icon: Home },
  { name: 'About', url: '#about', icon: Info },
  { name: 'History', url: '#history', icon: BookOpen },
  { name: 'Courses', url: '#courses', icon: BookOpen },
  { name: 'Statistics', url: '#statistics', icon: BookOpen },
  { name: 'Why Us', url: '#why-us', icon: Sparkles },
  { name: 'Gallery', url: '#gallery', icon: Image },
  { name: 'Testimonials', url: '#testimonials', icon: Sparkles },
  { name: 'Contact', url: '#contact', icon: Mail },
]

export default function Navbar() {
  return (
    <>
      {/* Brand logo top-left floating badge */}
      <div className="fixed top-5 left-4 sm:left-8 z-50 pointer-events-auto">
        <a
          href="#top"
          className="flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-ink/70 border border-white/10 backdrop-blur-md shadow-lg transition-transform hover:scale-105"
        >
          <img
            src={logo}
            alt="Alpha Music Academy"
            className="w-6 h-6 sm:w-7 sm:h-7 object-contain shrink-0"
          />
          <span className="font-display text-sm sm:text-base tracking-wide text-ivory pr-1">
            <span className="text-gold">Alpha Music Academy</span>
          </span>
        </a>
      </div>

      {/* Tubelight floating navigation bar with scrollspy */}
      <NavBar items={NAV_ITEMS} />

      {/* Floating Apply CTA top-right badge */}
      <div className="hidden md:block fixed top-5 right-4 sm:right-8 z-50 pointer-events-auto">
        <a
          href="#admission"
          className="inline-flex items-center rounded-full border border-gold/70 bg-ink/70 backdrop-blur-md px-4 py-1.5 text-xs font-semibold text-gold shadow-lg hover:bg-gold hover:text-ink transition-colors"
        >
          Apply Now
        </a>
      </div>
    </>
  )
}
