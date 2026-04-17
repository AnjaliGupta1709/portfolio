'use client'

import { Github, Linkedin, Mail, Download } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="home" className="relative min-h-screen pt-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center overflow-hidden bg-black">
      
      {/* Background */}
      <div className="absolute inset-0 bg-black"></div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
        
        {/* Left Content */}
        <div className={`space-y-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          <div className="inline-block px-4 py-2 bg-black border border-orange-500/30 rounded-full">
            <span className="text-orange-500 text-sm font-medium">✨ Available for work</span>
          </div>

          <div>
            <h1 className="text-5xl sm:text-6xl font-bold mb-4">
              Hi, I&apos;m <span style={{ color: 'var(--primary)' }}>Anjali Gupta</span>
            </h1>
            <h2 className="text-2xl sm:text-3xl text-slate-300 font-semibold">
              MERN Stack Developer
            </h2>
          </div>

          <p className="text-slate-400 text-lg max-w-xl">
            Full-stack developer with passion for building scalable web applications. Proficient in React, Node.js, and MongoDB.
          </p>

          <div className="flex pt-4">
            <a
              href="/resume.pdf"
              target="_blank"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold rounded-lg hover:opacity-90 transition-all duration-300 shadow-lg hover:scale-105"
            >
              <Download size={20} />
              Download Resume
            </a>
          </div>

          <div className="flex gap-4 pt-4">
            <a href="https://github.com/AnjaliGupta1709" target="_blank" className="p-3 bg-black border border-gray-700 hover:bg-orange-500 text-white rounded-lg transition-all">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/in/anjali-gupta-255a342b5" target="_blank" className="p-3 bg-black border border-gray-700 hover:bg-orange-500 text-white rounded-lg transition-all">
              <Linkedin size={20} />
            </a>
            <a href="mailto:anjaligupta6105@gmail.com" className="p-3 bg-black border border-gray-700 hover:bg-orange-500 text-white rounded-lg transition-all">
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* 🔥 BIGGER CARD */}
        <div className={`hidden lg:flex justify-center transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="relative w-full max-w-lg">   {/* 🔥 bigger width */}
            
            <div className="w-full h-[420px] bg-black rounded-3xl border border-gray-700 flex items-center justify-center overflow-hidden hover:border-orange-500/50 transition-all duration-300">
              
              <svg viewBox="0 0 200 200" className="w-4/5 h-4/5 text-orange-500 animate-float" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="100" cy="50" r="25" />
                <path d="M 75 85 Q 75 100 100 100 Q 125 100 125 85" strokeLinecap="round" />
                <path d="M 75 100 L 60 150 M 125 100 L 140 150" />
                <path d="M 70 150 L 65 180 M 130 150 L 135 180" />
                <path d="M 75 110 L 50 130 M 125 110 L 150 130" />
              </svg>

            </div>
          </div>
        </div>

      </div>
    </section>
  )
}