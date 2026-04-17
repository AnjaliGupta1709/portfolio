'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Sun, Moon } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [dark, setDark] = useState(true)

  // 🔥 initial theme set
  useEffect(() => {
    document.documentElement.classList.add('dark')
  }, [])

  // 🔥 FIXED TOGGLE
  const toggleTheme = () => {
    if (dark) {
      document.documentElement.classList.remove('dark')
      document.documentElement.classList.add('light')
    } else {
      document.documentElement.classList.remove('light')
      document.documentElement.classList.add('dark')
    }
    setDark(!dark)
  }

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav className="fixed top-0 w-full bg-white dark:bg-black backdrop-blur-md border-b border-gray-200 dark:border-gray-800 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <Link href="#" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-amber-500 rounded-full flex items-center justify-center font-bold text-white">
              AG
            </div>
            <span className="hidden sm:inline font-bold text-lg text-black dark:text-white">
              Anjali
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm text-black dark:text-white hover:text-orange-500 transition-colors duration-300"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            
            {/* 🌙 THEME TOGGLE */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg border border-gray-300 dark:border-gray-700 text-black dark:text-white hover:scale-105 transition"
            >
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Contact Button */}
            <Link
              href="#contact"
              className="hidden sm:inline px-4 py-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-lg hover:opacity-90 transition-opacity"
            >
              Contact Me
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-black dark:text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-gray-200 dark:border-gray-800">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-4 py-2 text-black dark:text-white hover:text-orange-500 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="#contact"
              className="block mx-4 mt-4 px-4 py-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-lg text-center hover:opacity-90 transition-opacity"
              onClick={() => setIsOpen(false)}
            >
              Contact Me
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}