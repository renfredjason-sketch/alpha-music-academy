import React, { useState, useRef, useEffect } from 'react'
import { motion, useMotionValue, AnimatePresence } from 'framer-motion'
import {
  Instagram,
  Facebook,
  Youtube,
  Music2,
} from 'lucide-react'

/**
 * CurvedMenu — animated slide-in mobile navigation with a curved SVG edge.
 * Adapted from the curved-menu UI component for Vite + React (no Next.js).
 * Props:
 *   navItems  – array of { name, url, subheading? }
 *   isOpen    – boolean, controls visibility
 *   onClose   – callback to close the menu
 */

// ─── Slide animation for the panel ───────────────────────────────────────────
const MENU_SLIDE = {
  initial: { x: 'calc(100% + 120px)' },
  enter:   { x: '0', transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },
  exit:    { x: 'calc(100% + 120px)', transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },
}

// ─── Individual nav link with letter spring animation ────────────────────────
function NavLink({ heading, subheading, href, index, onClose }) {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const handleMouseMove = (e) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    x.set(e.clientX - rect.left)
    y.set(e.clientY - rect.top)
  }

  return (
    <motion.div
      initial="initial"
      whileHover="whileHover"
      className="group relative flex flex-col border-b py-2.5 uppercase cursor-pointer"
      style={{ borderColor: 'rgba(198,161,91,0.20)' }}
    >
      <a
        ref={ref}
        href={href}
        onMouseMove={handleMouseMove}
        onClick={onClose}
        className="relative flex items-center no-underline"
        style={{ textDecoration: 'none' }}
      >
        {/* Index number */}
        <span
          className="text-base font-thin mr-2.5 w-6 shrink-0 transition-colors duration-300"
          style={{ color: '#8A6F3D' }}
        >
          {String(index).padStart(2, '0')}.
        </span>

        <div className="flex flex-col">
          {/* Animated letters */}
          <motion.span
            variants={{
              initial: { x: 0 },
              whileHover: { x: -8 },
            }}
            transition={{ type: 'spring', staggerChildren: 0.03, delayChildren: 0.05 }}
            className="flex text-xl font-extralight tracking-wide"
            style={{ color: '#F4F1E9' }}
          >
            {heading.split('').map((letter, i) => (
              <motion.span
                key={i}
                variants={{
                  initial: { x: 0 },
                  whileHover: { x: 8 },
                }}
                transition={{ type: 'spring', stiffness: 200, damping: 16 }}
                className="inline-block"
              >
                {letter === ' ' ? '\u00A0' : letter}
              </motion.span>
            ))}
          </motion.span>

          {/* Subheading */}
          {subheading && (
            <span
              className="text-[10px] tracking-wider font-light opacity-50 transition-opacity duration-300 group-hover:opacity-90 normal-case"
              style={{ color: '#C6A15B' }}
            >
              {subheading}
            </span>
          )}
        </div>
      </a>
    </motion.div>
  )
}


// ─── Curved SVG edge on the left of the panel ────────────────────────────────
function Curve() {
  const [height, setHeight] = useState(window.innerHeight)

  useEffect(() => {
    const onResize = () => setHeight(window.innerHeight)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const initialPath = `M100 0 L200 0 L200 ${height} L100 ${height} Q-100 ${height / 2} 100 0`
  const targetPath  = `M100 0 L200 0 L200 ${height} L100 ${height} Q100 ${height / 2} 100 0`

  return (
    <svg
      className="absolute top-0 -left-[99px] w-[100px] h-full"
      style={{ fill: '#0c0d12', stroke: 'none' }}
    >
      <motion.path
        variants={{
          initial: { d: initialPath },
          enter:   { d: targetPath,  transition: { duration: 1,   ease: [0.76, 0, 0.24, 1] } },
          exit:    { d: initialPath, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },
        }}
        initial="initial"
        animate="enter"
        exit="exit"
      />
    </svg>
  )
}

// ─── Footer row inside the menu panel ────────────────────────────────────────
function MenuFooter({ onClose }) {
  return (
    <div
      className="flex w-full justify-between items-center px-6 py-3 border-t"
      style={{ borderColor: 'rgba(198,161,91,0.20)' }}
    >
      <a
        href="#admission"
        onClick={onClose}
        className="text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full transition-colors duration-200"
        style={{
          background: 'linear-gradient(45deg, #8A6F3D, #C6A15B, #E6D3A0)',
          color: '#08090C',
        }}
      >
        Apply Now
      </a>
      <div className="flex items-center gap-5">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: '#C6A15B' }}>
          <Instagram size={18} strokeWidth={1.5} />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: '#C6A15B' }}>
          <Facebook size={18} strokeWidth={1.5} />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" style={{ color: '#C6A15B' }}>
          <Youtube size={18} strokeWidth={1.5} />
        </a>
        <a href="#top" onClick={onClose} style={{ color: '#C6A15B' }}>
          <Music2 size={18} strokeWidth={1.5} />
        </a>
      </div>
    </div>
  )
}

// ─── The sliding panel ────────────────────────────────────────────────────────
function CurvedNavPanel({ navItems, onClose }) {
  return (
    <motion.div
      variants={MENU_SLIDE}
      initial="initial"
      animate="enter"
      exit="exit"
      className="fixed right-0 top-0 z-[90] h-[100dvh] w-full max-w-[320px] flex flex-col"
      style={{ background: '#0c0d12', borderLeft: '1px solid rgba(198,161,91,0.15)' }}
    >
      {/* Header label */}
      <div className="flex flex-col px-6 pt-14 pb-0 shrink-0">
        <div
          className="text-[10px] uppercase tracking-widest pb-3 border-b"
          style={{ color: '#8A6F3D', borderColor: 'rgba(198,161,91,0.25)' }}
        >
          Navigation
        </div>
      </div>

      {/* Nav links — scrollable so all 9 items always fit */}
      <nav className="flex-1 overflow-y-auto px-6 py-1 min-h-0">
        {navItems.map((item, i) => (
          <NavLink
            key={item.name}
            heading={item.name}
            subheading={item.subheading}
            href={item.url}
            index={i + 1}
            onClose={onClose}
          />
        ))}
      </nav>

      {/* Footer */}
      <div className="shrink-0">
        <MenuFooter onClose={onClose} />
      </div>

      {/* Curved left edge */}
      <Curve />
    </motion.div>
  )
}


// ─── Hamburger toggle button ──────────────────────────────────────────────────
export function CurvedMenuToggle({ isOpen, onClick }) {
  return (
    <button
      onClick={onClick}
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
      className="relative z-[100] flex items-center justify-center w-10 h-10 rounded-full transition-transform active:scale-95"
      style={{
        background: isOpen ? 'rgba(198,161,91,0.15)' : 'rgba(8,9,12,0.85)',
        border: '1px solid rgba(198,161,91,0.30)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
      }}
    >
      <div className="relative w-5 h-4 flex flex-col justify-between items-center">
        <span
          className="block h-[1.5px] w-5 transition-all duration-300 origin-center"
          style={{
            background: '#C6A15B',
            transform: isOpen ? 'rotate(45deg) translate(3px, 3px)' : 'none',
          }}
        />
        <span
          className="block h-[1.5px] w-5 transition-all duration-200"
          style={{
            background: '#C6A15B',
            opacity: isOpen ? 0 : 1,
            transform: isOpen ? 'scaleX(0)' : 'scaleX(1)',
          }}
        />
        <span
          className="block h-[1.5px] w-5 transition-all duration-300 origin-center"
          style={{
            background: '#C6A15B',
            transform: isOpen ? 'rotate(-45deg) translate(3px, -3px)' : 'none',
          }}
        />
      </div>
    </button>
  )
}

// ─── Backdrop ─────────────────────────────────────────────────────────────────
export function CurvedMenuBackdrop({ onClick }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClick}
      className="fixed inset-0 z-[80]"
      style={{ background: 'rgba(8,9,12,0.70)', backdropFilter: 'blur(4px)' }}
    />
  )
}

// ─── Main export — self-contained curved menu with toggle ─────────────────────
export function CurvedMenu({ navItems = [] }) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  const close = () => setIsOpen(false)

  return (
    <>
      <CurvedMenuToggle isOpen={isOpen} onClick={() => setIsOpen(p => !p)} />
      <AnimatePresence mode="wait">
        {isOpen && (
          <>
            <CurvedMenuBackdrop onClick={close} />
            <CurvedNavPanel navItems={navItems} onClose={close} />
          </>
        )}
      </AnimatePresence>
    </>
  )
}
