import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Home,
  Info,
  Clock,
  BookOpen,
  BarChart2,
  Sparkles,
  Image,
  Quote,
  Mail,
  Menu,
  X,
} from 'lucide-react'
import { NavBar } from '@/components/ui/tubelight-navbar'
import logo from '../assets/logo.png'

const NAV_ITEMS = [
  { name: 'Home', url: '#top', icon: Home },
  { name: 'About', url: '#about', icon: Info },
  { name: 'History', url: '#history', icon: Clock },
  { name: 'Courses', url: '#courses', icon: BookOpen },
  { name: 'Stats', url: '#statistics', icon: BarChart2 },
  { name: 'Why Us', url: '#why-us', icon: Sparkles },
  { name: 'Gallery', url: '#gallery', icon: Image },
  { name: 'Voices', url: '#testimonials', icon: Quote },
  { name: 'Contact', url: '#contact', icon: Mail },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Prevent background scroll when mobile side menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  return (
    <>
      {/* Brand logo top-left floating badge */}
      <div className="fixed top-5 left-4 sm:left-8 z-50 pointer-events-auto">
        <a
          href="#top"
          className="flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-ink/80 border border-white/10 backdrop-blur-md shadow-lg transition-transform hover:scale-105"
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

      {/* Desktop Tubelight floating navigation bar with scrollspy */}
      <NavBar items={NAV_ITEMS} className="sm:left-[55%]" />

      {/* Top right container: Apply button on desktop, Menu trigger on mobile */}
      <div className="fixed top-5 right-4 sm:right-8 z-50 pointer-events-auto flex items-center gap-3">
        {/* Desktop CTA */}
        <a
          href="#admission"
          className="hidden md:inline-flex items-center rounded-full border border-gold/70 bg-ink/70 backdrop-blur-md px-4 py-1.5 text-xs font-semibold text-gold shadow-lg hover:bg-gold hover:text-ink transition-colors"
        >
          Apply Now
        </a>

        {/* Mobile Hamburger Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Open navigation menu"
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-ink/85 border border-white/15 text-gold shadow-xl backdrop-blur-md active:scale-95 transition-transform"
        >
          <Menu size={20} />
        </button>
      </div>

      {/* Mobile Slide-Over Side Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-[100] md:hidden">
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="absolute inset-0 bg-ink/80 backdrop-blur-sm"
            />

            {/* Slide-in sidebar from the right */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 280 }}
              className="absolute top-0 right-0 bottom-0 w-[290px] max-w-[85vw] bg-[#0c0d12] border-l border-white/10 shadow-2xl flex flex-col justify-between p-6 z-10"
            >
              <div>
                {/* Header inside side menu */}
                <div className="flex items-center justify-between pb-6 border-b border-white/10">
                  <div className="flex items-center gap-2.5">
                    <img
                      src={logo}
                      alt="Alpha Music Academy"
                      className="w-7 h-7 object-contain shrink-0"
                    />
                    <span className="font-display text-sm tracking-wide text-ivory">
                      Alpha <span className="text-gold">Music</span>
                    </span>
                  </div>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    aria-label="Close menu"
                    className="p-1.5 rounded-full text-bone hover:text-ivory hover:bg-white/10 transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Navigation items list */}
                <nav className="flex flex-col gap-1 mt-6">
                  {NAV_ITEMS.map((item) => {
                    const Icon = item.icon
                    return (
                      <a
                        key={item.name}
                        href={item.url}
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center gap-3.5 px-3.5 py-2.5 rounded-xl text-sm font-medium text-bone hover:text-gold hover:bg-white/5 active:bg-white/10 transition-colors"
                      >
                        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/5 text-gold shrink-0">
                          <Icon size={18} strokeWidth={2} />
                        </div>
                        <span>{item.name}</span>
                      </a>
                    )
                  })}
                </nav>
              </div>

              {/* Bottom Drawer CTA */}
              <div className="pt-6 border-t border-white/10">
                <a
                  href="#admission"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center rounded-xl bg-gold py-3 text-sm font-semibold text-ink shadow-lg shadow-gold/20 hover:bg-gold-light transition-colors"
                >
                  Apply for Admission
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}
