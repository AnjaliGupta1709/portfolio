'use client'

import { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'

export default function Footer() {
  const [showScroll, setShowScroll] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <footer className="border-t border-slate-800 bg-slate-950 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <p className="text-slate-400 text-sm">
              © 2024 Anjali Gupta. All rights reserved. Built with React, Next.js, and Tailwind CSS.
            </p>
            <p className="text-slate-500 text-xs mt-2">
              Always learning, always building.
            </p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-lg hover:opacity-90 transition-all z-40 animate-fade-in"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </>
  )
}
