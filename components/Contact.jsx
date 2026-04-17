'use client'

import { Mail, Github, Linkedin, Send } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
  e.preventDefault()
  setSent(true)

  setTimeout(() => {
    window.location.reload()   // 🔥 reload
  }, 2000) // 2 sec baad
}

  return (
    <section className="bg-black py-32 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center">
          <h2
            className="text-4xl sm:text-5xl font-bold"
            style={{ marginBottom: '40px' }}
          >
            Get In <span className="text-orange-500">Touch</span>
          </h2>

          <p
            className="text-gray-400 text-lg max-w-6xl mx-auto"
            style={{ marginBottom: '60px' }}
          >
            I'm always open to discussing new projects, opportunities, or collaborations. Let’s connect and build something amazing 🚀
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT FORM */}
          <form
            onSubmit={handleSubmit}
            className="bg-black p-8 rounded-2xl border border-gray-800 hover:border-orange-500/30 transition-all shadow-lg"
          >

            <div className="space-y-6">

              <input
                type="text"
                placeholder="Your Name"
                required
                className="w-full px-5 py-4 rounded-xl bg-[#1a1a1a] text-white placeholder-gray-400 outline-none border border-gray-700 focus:border-orange-500 transition-all"
              />

              <input
                type="email"
                placeholder="Your Email"
                required
                className="w-full px-5 py-4 rounded-xl bg-[#1a1a1a] text-white placeholder-gray-400 outline-none border border-gray-700 focus:border-orange-500 transition-all"
              />

              <textarea
                rows="5"
                placeholder="Your Message"
                required
                className="w-full px-5 py-4 rounded-xl bg-[#1a1a1a] text-white placeholder-gray-400 outline-none border border-gray-700 focus:border-orange-500 transition-all resize-none"
              ></textarea>

              {/* BUTTON */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-4 rounded-xl border border-orange-500 font-semibold transition-all hover:scale-[1.03]"
              >
                <Send size={18} />

                {/* 🔥 SAME GRADIENT AS TOUCH */}
                <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                  Send Message
                </span>
              </button>

              {/* ✅ SUCCESS MESSAGE */}
              {sent && (
                <p className="text-green-500 text-center font-medium">
                  ✅ Message Sent Successfully!
                </p>
              )}

            </div>
          </form>

          {/* RIGHT SIDE */}
          <div className="space-y-8">
            <p className="text-gray-400 text-lg leading-relaxed">
              Feel free to reach out through any platform. I’ll try to respond as quickly as possible.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}