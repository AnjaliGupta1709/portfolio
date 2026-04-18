'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Menu, X, Sun, Moon } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [dark, setDark] = useState(true)
  const [active, setActive] = useState(0)

  const navRefs = useRef([])
  const containerRef = useRef(null)

  const [style, setStyle] = useState({
    width: 0,
    left: 0,
  })

  useEffect(() => {
    document.documentElement.classList.add('dark')
  }, [])

  // 🔥 FIXED HIGHLIGHT SIZE (padding included)
  useEffect(() => {
    const current = navRefs.current[active]
    const container = containerRef.current

    if (current && container) {
      const rect = current.getBoundingClientRect()
      const parentRect = container.getBoundingClientRect()

      setStyle({
        width: rect.width + 16, // 🔥 थोड़ा extra padding
        left: rect.left - parentRect.left - 8,
      })
    }
  }, [active])

  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark')
    setDark(!dark)
  }

  const navItems = ['Home', 'About', 'Skills', 'Projects', 'Contact']

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl">

      <div className="relative backdrop-blur-2xl bg-black/50 border border-white/10 rounded-full px-6 py-3 shadow-xl shadow-orange-500/10 flex items-center justify-between">

        {/* LOGO */}
        <div className="w-11 h-11 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center text-black font-bold">
          AG
        </div>

        {/* NAV */}
        <div ref={containerRef} className="relative flex items-center gap-6">

          {/* 🔥 FIXED HIGHLIGHT */}
          <div
            className="absolute top-1/2 -translate-y-1/2 h-10 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full transition-all duration-300"
            style={{
              width: style.width,
              left: style.left,
            }}
          ></div>

          {navItems.map((item, index) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              ref={(el) => (navRefs.current[index] = el)}
              onClick={() => setActive(index)}
              className={`relative z-10 px-4 py-2 text-sm font-medium ${
                active === index
                  ? 'text-white'
                  : 'text-gray-300 hover:text-orange-400'
              }`}
            >
              {item}
            </Link>
          ))}

        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-3">

        
         

          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

        </div>
      </div>
    </nav>
  )
}