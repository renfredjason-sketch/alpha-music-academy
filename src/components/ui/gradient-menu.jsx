import React, { useEffect, useState } from 'react'

/**
 * GradientMenu — desktop floating pill navbar with gold gradient glow + scrollspy.
 * All items use the site's gold palette gradient.
 * A semi-transparent encapsulating bar wraps all items and resizes dynamically
 * as the active tab expands.
 */

// Gold palette gradient — matches the site's #C6A15B / #E6D3A0 brand colours
const GOLD_FROM = '#8A6F3D'
const GOLD_MID  = '#C6A15B'
const GOLD_TO   = '#E6D3A0'

export function GradientMenu({ items = [], className = '' }) {
  const [activeTab, setActiveTab] = useState(items[0]?.name)

  // Scroll spy — highlights item whose section is in viewport
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 160

      if (window.scrollY < 100) {
        if (items[0]) setActiveTab(items[0].name)
        return
      }

      for (let i = items.length - 1; i >= 0; i--) {
        const item = items[i]
        const targetId = item.url.replace('#', '')
        if (!targetId || targetId === 'top') continue
        const section = document.getElementById(targetId)
        if (section && scrollPosition >= section.offsetTop) {
          setActiveTab(item.name)
          return
        }
      }

      if (items[0]) setActiveTab(items[0].name)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [items])

  return (
    <div className={'fixed top-5 left-1/2 -translate-x-1/2 z-50 ' + className}>
      {/*
        Encapsulating bar — semi-transparent frosted dark pill.
        It wraps all items and its width is naturally driven by the flex
        children (which expand on active), making it fully dynamic.
        bg-ink/60 = 60% opaque ink (#08090C) — not too transparent, not opaque.
      */}
      <div
        className="flex items-center gap-1.5 px-2 py-1.5 rounded-full transition-all duration-500"
        style={{
          background: 'rgba(8, 9, 12, 0.60)',
          backdropFilter: 'blur(14px)',
          WebkitBackdropFilter: 'blur(14px)',
          border: '1px solid rgba(198, 161, 91, 0.25)',
          boxShadow: '0 4px 24px rgba(0,0,0,0.5), 0 0 0 1px rgba(198,161,91,0.08) inset',
        }}
      >
        <ul className="flex gap-1 items-center">
          {items.map((item) => {
            const Icon = item.icon
            const isActive = activeTab === item.name

            return (
              <li
                key={item.name}
                className={[
                  'relative flex items-center justify-center cursor-pointer rounded-full',
                  'transition-all duration-500 ease-in-out',
                  isActive ? 'w-[120px]' : 'w-[40px] hover:w-[120px]',
                ].join(' ')}
              >
                <a
                  href={item.url}
                  onClick={() => setActiveTab(item.name)}
                  className="relative z-10 w-full h-[38px] flex items-center justify-center rounded-full overflow-visible select-none"
                  style={{ textDecoration: 'none' }}
                >
                  {/* Gold gradient fill — visible when active */}
                  <span
                    className="absolute inset-0 rounded-full transition-all duration-500"
                    style={{
                      background: `linear-gradient(45deg, ${GOLD_FROM}, ${GOLD_MID}, ${GOLD_TO})`,
                      opacity: isActive ? 1 : 0,
                    }}
                  />

                  {/* Subtle gold glow bloom under active pill */}
                  <span
                    className="absolute top-[5px] inset-x-0 h-full rounded-full -z-10 transition-all duration-500"
                    style={{
                      background: `linear-gradient(45deg, ${GOLD_FROM}, ${GOLD_TO})`,
                      filter: 'blur(12px)',
                      opacity: isActive ? 0.55 : 0,
                    }}
                  />

                  {/* Hover ghost fill for inactive items */}
                  <span
                    className="absolute inset-0 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
                    style={{
                      background: 'rgba(198,161,91,0.08)',
                    }}
                  />

                  {/* Icon — fades out when active, fades in when idle */}
                  <span
                    className="absolute inset-0 flex items-center justify-center transition-all duration-300"
                    style={{
                      opacity: isActive ? 0 : 1,
                      transform: isActive ? 'scale(0.3)' : 'scale(1)',
                      pointerEvents: 'none',
                    }}
                  >
                    <Icon
                      size={16}
                      strokeWidth={2}
                      style={{ color: '#C6A15B' }}
                    />
                  </span>

                  {/* Label — fades in when active */}
                  <span
                    className="relative z-10 text-ink font-semibold uppercase tracking-widest whitespace-nowrap transition-all duration-300"
                    style={{
                      fontSize: '10px',
                      letterSpacing: '0.12em',
                      opacity: isActive ? 1 : 0,
                      transform: isActive ? 'scale(1)' : 'scale(0.5)',
                      pointerEvents: 'none',
                      color: '#08090C',
                    }}
                  >
                    {item.name}
                  </span>
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}



