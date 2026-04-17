'use client'

import { useEffect, useState } from 'react'
import { Code2, Zap, Brain } from 'lucide-react'

export default function About() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const section = document.getElementById('about')
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  const highlights = [
    {
      icon: Brain,
      title: 'Education',
      description: 'BCA Final Year at Vivekananda Global University',
    },
    {
      icon: Code2,
      title: 'Full Stack Developer',
      description: 'Specializing in MERN stack with modern web technologies',
    },
    {
      icon: Zap,
      title: 'AI Enthusiast',
      description: 'Passionate about AI-powered applications and automation',
    },
  ]

  return (
    <section id="about" className="relative py-32 mb-32 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        
        {/* Heading */}
        <div className="text-center">
          <h2
            className="text-4xl sm:text-5xl font-bold"
            style={{ marginBottom: '40px' }}
          >
            About <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">Me</span>
          </h2>

          {/* Description */}
          <p
            className="text-gray-400 max-w-5xl mx-auto text-lg leading-relaxed"
            style={{ marginBottom: '60px' }}
          >
            A passionate full-stack developer dedicated to building responsive, scalable web applications with cutting-edge technologies.
          </p>
        </div>

        {/* Cards */}
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon
            return (
              <div
                key={index}
                className="p-8 bg-black rounded-2xl border border-gray-800 hover:border-orange-500/50 transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="mb-5 inline-block p-3 bg-orange-500/20 rounded-lg group-hover:bg-orange-500/30 transition-colors">
                  <Icon className="w-6 h-6 text-orange-500" />
                </div>

                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-orange-500 transition-colors">
                  {highlight.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}