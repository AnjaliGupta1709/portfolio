'use client'

import { useEffect, useState } from 'react'
import { ExternalLink } from 'lucide-react'

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false)
  const [aiProjectsVisible, setAiProjectsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const section = document.getElementById('projects')
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const aiSection = document.getElementById('ai-projects-section')
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAiProjectsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (aiSection) observer.observe(aiSection)
    return () => observer.disconnect()
  }, [])

  const projects = [
    {
      title: 'AI Travel Planner',
      description: 'An intelligent travel planning application that uses AI to generate personalized itineraries and recommendations.',
      tech: ['React', 'Node.js', 'AI Integration', 'MongoDB'],
      link: 'https://horizon-hatch-ai.lovable.app',
      image: 'https://p16-seeyou-useast5.capcutcdn-us.com/tos-useast5-i-2zwwjm3azk-tx/2a137f8bb49e425d8f4c3da1d7ed59f0~tplv-2zwwjm3azk-image.image',
    },
    {
      title: 'Restaurant Billing System',
      description: 'A full-stack restaurant management system with order processing, billing, and invoice generation capabilities.',
      tech: ['React', 'Redux', 'Node.js', 'MongoDB'],
      link: 'https://jocular-begonia-83e6e6.netlify.app/',
      image: 'https://www.gofrugal.com/sites/gweb/files/gofrugal/images/restaurant/restaurant-pos/billing-screen.webp',
    },
  ]

  const aiProjects = [
    {
      title: 'AI Code Reviewer',
      description: 'Automated code review tool powered by AI.',
      link: 'https://echo-code-coach.lovable.app',
      image: '/images/project 1.png'
    },
    {
      title: 'RecruitMail AI',
      description: 'AI-based recruitment communication tool.',
      link: 'https://connect-with-career.lovable.app',
      image: '/images/project 6.png'
    },
    {
      title: 'Career Compass AI',
      description: 'AI-powered career guidance system.',
      link: 'https://career-compass-ai-195.lovable.app',
      image: '/images/project 2.png'
    },
    {
      title: 'IdeaForge AI (Startup Idea Generator)',
      description: 'Startup idea generator.',
      link: 'https://spark-forge-jobs.lovable.app',
      image: '/images/project 4.png'
    },
    {
      title: 'Resume Analyzer (Talent Pulse AI)',
      description: 'AI resume analysis tool.',
      link: 'https://talent-pulse-ai-03.lovable.app',
      image: '/images/project 3.png'
    },
    {
      title: 'Dev Future Guide (Tech Roadmap Generator)',
      description: 'Tech roadmap generator.',
      link: 'https://dev-future-guide.lovable.app',
      image: '/images/project 5.png'
    },
  ]

  return (
    <section id="projects" className="relative py-32 mb-32 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl font-bold" style={{ marginBottom: '40px' }}>
            My <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">Projects</span>
          </h2>

          <p className="text-slate-400 text-lg" style={{ marginBottom: '60px' }}>
            Full-stack applications showcasing real-world implementations
          </p>
        </div>

        {/* Main Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <a key={index} href={project.link} target="_blank" rel="noopener noreferrer"
              className="group bg-[#111] rounded-3xl overflow-hidden border border-slate-800 hover:border-orange-500/40 transition-all duration-300 hover:-translate-y-2 h-[340px] flex flex-col justify-between">

              <div className="h-[200px] w-full overflow-hidden rounded-t-3xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center rounded-t-3xl group-hover:scale-105 transition duration-300"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-orange-500">{project.title}</h3>

                <div className="flex gap-4 text-sm text-orange-500 mb-4">
                  {project.tech.map((t, i) => <span key={i}>{t}</span>)}
                </div>

                <div className="flex items-center gap-2 text-orange-500 font-semibold text-sm">
                  View Project <ExternalLink size={16} />
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* AI Section */}
        <div id="ai-projects-section" style={{ marginTop: '80px' }}>
          <div className="text-center">
            <h2 className="text-4xl sm:text-5xl font-bold" style={{ marginBottom: '30px' }}>
              🚀 AI-Powered <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">Projects</span>
            </h2>

            <p className="text-slate-400 text-lg" style={{ marginBottom: '50px' }}>
              Exploring AI + Web Development
            </p>
          </div>

          {/* 🔥 UPDATED AI GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {aiProjects.map((project, index) => (
              <a key={index} href={project.link} target="_blank"
                className="group bg-[#111] rounded-3xl overflow-hidden border border-slate-800 hover:border-orange-500/40 transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between">

                {/* IMAGE */}
                <div className="h-[180px] w-full overflow-hidden rounded-t-3xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-300"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-5">
                  <h3 className="text-white font-semibold mb-2 group-hover:text-orange-500 transition">
                    {project.title}
                  </h3>

                  <div className="text-orange-500 text-sm font-medium flex items-center gap-1">
                    View Project <ExternalLink size={14} />
                  </div>
                </div>

              </a>
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}