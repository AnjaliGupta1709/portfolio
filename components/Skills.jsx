'use client'

import { useEffect, useState } from 'react'

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false)
  const [animatedSkills, setAnimatedSkills] = useState({})

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          setTimeout(() => {
            setAnimatedSkills({
              'React.js': 90,
              'JavaScript': 85,
              'HTML5/CSS3': 90,
              'Node.js': 80,
              'Express.js': 80,
              'MongoDB': 85,
              'Redux': 85,
              'Git/GitHub': 90,
              'REST APIs': 85,
              'Responsive Design': 90,
            })
          }, 100)
        }
      },
      { threshold: 0.1 }
    )

    const section = document.getElementById('skills')
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  const skillCategories = [
    {
      name: 'Frontend',
      skills: ['React.js', 'JavaScript', 'HTML5/CSS3'],
    },
    {
      name: 'Backend',
      skills: ['Node.js', 'Express.js'],
    },
    {
      name: 'Database',
      skills: ['MongoDB'],
    },
    {
      name: 'Tools & Other',
      skills: ['Redux', 'Git/GitHub', 'REST APIs', 'Responsive Design'],
    },
  ]

  return (
    <section id="skills" className="relative py-32 mb-32 px-6 lg:px-12 bg-black">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center">
          <h2
            className="text-4xl sm:text-5xl font-bold"
            style={{ marginBottom: '40px' }}
          >
            My <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">Skills</span>
          </h2>
        </div>

        {/* GRID */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ marginTop: '40px' }}
        >
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="p-8 rounded-2xl bg-black border border-gray-800 transition-all duration-300 hover:scale-105"
            >
              <h3 className="text-xl font-bold mb-8 text-orange-500">
                {category.name}
              </h3>

              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-300">{skill}</span>
                      <span className="text-xs text-gray-400">
                        {animatedSkills[skill] || 0}%
                      </span>
                    </div>

                    <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-orange-500 to-amber-500 rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: `${animatedSkills[skill] || 0}%`,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}