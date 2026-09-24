import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export function NavBar({ items, className }) {
  const [activeTab, setActiveTab] = useState(items[0]?.name)
  const [isMobile, setIsMobile] = useState(false)

  // Responsive check
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Scroll spy to automatically highlight current section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 160

      if (window.scrollY < 100) {
        if (items[0]) setActiveTab(items[0].name)
        return
      }

      for (let i = items.length - 1; i >= 0; i--) {
        const item = items[i]
        const targetId = item.url.replace("#", "")
        if (!targetId || targetId === "top") continue

        const section = document.getElementById(targetId)
        if (section) {
          const top = section.offsetTop
          if (scrollPosition >= top) {
            setActiveTab(item.name)
            return
          }
        }
      }

      if (items[0]) setActiveTab(items[0].name)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [items])

  return (
    <div
      className={cn(
        "fixed bottom-4 sm:bottom-auto sm:top-5 left-1/2 -translate-x-1/2 z-50 mb-0 sm:pt-0 max-w-[calc(100vw-1rem)]",
        className,
      )}
    >
      <div className="flex items-center gap-1 sm:gap-2 bg-ink/85 border border-white/10 backdrop-blur-xl py-1 sm:py-1.5 px-1.5 sm:px-2 rounded-full shadow-2xl shadow-black/80 ring-1 ring-gold/20 overflow-x-auto no-scrollbar">
        {items.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.name

          return (
            <a
              key={item.name}
              href={item.url}
              onClick={() => setActiveTab(item.name)}
              className={cn(
                "relative cursor-pointer text-xs sm:text-sm font-medium px-2.5 sm:px-5 py-1.5 rounded-full transition-colors duration-200 select-none flex items-center justify-center gap-2 whitespace-nowrap shrink-0",
                "text-bone/80 hover:text-ivory",
                isActive && "bg-white/10 text-gold font-semibold",
              )}
            >
              <span className="hidden md:inline whitespace-nowrap">{item.name}</span>
              <span className="md:hidden flex items-center justify-center p-0.5">
                {Icon && <Icon size={17} strokeWidth={2.2} />}
              </span>
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full bg-gold/10 rounded-full -z-10"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-8 h-1 bg-gold rounded-t-full shadow-[0_0_12px_rgba(198,161,91,0.8)]">
                    <div className="absolute w-12 h-6 bg-gold/30 rounded-full blur-md -top-2 -left-2" />
                    <div className="absolute w-8 h-6 bg-gold/30 rounded-full blur-md -top-1" />
                    <div className="absolute w-4 h-4 bg-gold/40 rounded-full blur-sm top-0 left-2" />
                  </div>
                </motion.div>
              )}
            </a>
          )
        })}
      </div>
    </div>
  )
}
