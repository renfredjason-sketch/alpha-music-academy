import { useState, useEffect } from 'react'
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
} from 'lucide-react'
import { GradientMenu } from '@/components/ui/gradient-menu'
import { CurvedMenu } from '@/components/ui/curved-menu'
import logo from '../assets/logo.png'

const NAV_ITEMS = [
  { name: 'Home',    url: '#top',          icon: Home,      subheading: 'Start here' },
  { name: 'About',   url: '#about',        icon: Info,      subheading: 'Who we are' },
  { name: 'History', url: '#history',      icon: Clock,     subheading: 'Our journey' },
  { name: 'Courses', url: '#courses',      icon: BookOpen,  subheading: 'What we teach' },
  { name: 'Stats',   url: '#statistics',   icon: BarChart2, subheading: 'By the numbers' },
  { name: 'Why Us',  url: '#why-us',       icon: Sparkles,  subheading: 'Our edge' },
  { name: 'Gallery', url: '#gallery',      icon: Image,     subheading: 'See our space' },
  { name: 'Voices',  url: '#testimonials', icon: Quote,     subheading: 'What students say' },
  { name: 'Contact', url: '#contact',      icon: Mail,      subheading: 'Get in touch' },
]

export default function Navbar() {
  return (
    <>
      {/* Brand logo — top-left floating badge, always visible */}
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

      {/* Desktop gradient pill nav — hidden on mobile */}
      <GradientMenu items={NAV_ITEMS} className="hidden md:block" />

      {/* Top-right area */}
      <div className="fixed top-5 right-4 sm:right-8 z-50 pointer-events-auto flex items-center gap-3">
        {/* Desktop CTA */}
        <a
          href="#admission"
          className="hidden md:inline-flex items-center rounded-full border border-gold/70 bg-ink/70 backdrop-blur-md px-4 py-1.5 text-xs font-semibold text-gold shadow-lg hover:bg-gold hover:text-ink transition-colors"
        >
          Apply Now
        </a>

        {/* Mobile curved menu — self-contained toggle + panel */}
        <div className="md:hidden">
          <CurvedMenu navItems={NAV_ITEMS} />
        </div>
      </div>
    </>
  )
}

