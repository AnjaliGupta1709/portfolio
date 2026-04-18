'use client'

import { Mail, MapPin, Send, Github, Linkedin } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)

    setTimeout(() => {
      window.location.reload()
    }, 2000)
  }

  return (
    <section id="contact" className="bg-[#0a0a0a] py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* HEADING */}
        <div className="text-center mb-16">
<h2 className="text-4xl font-bold mb-8">
            Get In <span className="text-orange-500">Touch</span>
          </h2>
         
        </div>

        {/* MAIN CARD */}
<div className="grid lg:grid-cols-2 border border-gray-800 rounded-2xl p-10">
          {/* LEFT SIDE */}
          <div className="flex items-center justify-center">
            <div className="space-y-8 w-full max-w-sm">

              <div className="space-y-3">
                <h1 className="text-lg font-semibold">Contact Info</h1>
                <p className="text-gray-400 text-sm">
                  I’m currently open for freelance work, collaborations, and full-time opportunities.
                </p>
              </div>

              <div className="space-y-4">

                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[#1a1a1a] border border-gray-700 text-orange-500">
                    <Mail size={16} />
                  </div>
                  <span className="text-gray-300 text-sm">
                    anjaligupta6105@email.com
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[#1a1a1a] border border-gray-700 text-orange-500">
                    <MapPin size={16} />
                  </div>
                  <span className="text-gray-300 text-sm">India</span>
                </div>

              </div>

            

            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <form onSubmit={handleSubmit} className="space-y-6 pl-10">

            <div className="space-y-1">
              <label className="text-sm text-gray-400">Your Name</label>
              <input className="w-full px-4 py-3 bg-black border border-gray-800 rounded-lg text-white focus:border-orange-500 outline-none" />
            </div>

            <div className="space-y-1">
              <label className="text-sm text-gray-400">Email</label>
              <input className="w-full px-4 py-3 bg-black border border-gray-800 rounded-lg text-white focus:border-orange-500 outline-none" />
            </div>

            <div className="space-y-1">
              <label className="text-sm text-gray-400">Message</label>
              <textarea rows="4" className="w-full px-4 py-3 bg-black border border-gray-800 rounded-lg text-white focus:border-orange-500 outline-none" />
            </div>

            <button className="w-full py-3 bg-orange-500 text-black rounded-lg font-semibold flex justify-center items-center gap-2">
              Send Message <Send size={16} />
            </button>

            {sent && (
              <p className="text-green-500 text-sm text-center">
                Message Sent!
              </p>
            )}

          </form>

        </div>

      </div>
    </section>
  )
}