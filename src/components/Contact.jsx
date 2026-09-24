import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, CheckCircle2 } from 'lucide-react'

const INFO = [
  { icon: MapPin, label: '24 Harmony Lane, Bandra West, Mumbai 400050' },
  { icon: Phone, label: '+91 98200 12345' },
  { icon: Mail, label: 'admissions@alphamusicacademy.in' },
  { icon: Clock, label: 'Mon–Sat, 9:00 AM – 8:00 PM' },
]

const INSTRUMENTS = ['Piano', 'Vocal / Singing', 'Guitar', 'Violin', 'Drums & Percussion', 'Music Production']

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', instrument: INSTRUMENTS[0], message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="relative bg-blue-deep py-28 lg:py-36">
      <div className="container-page grid lg:grid-cols-12 gap-14">
        <div className="lg:col-span-5">
          <h1 className="font-display text-4xl sm:text-5xl text-ivory leading-tight">
            Visit or write to us
          </h1>
          <p className="text-bone text-lg mt-6 leading-relaxed max-w-md">
            Come hear a lesson in progress, or send a note and a faculty
            member will reply within one working day.
          </p>

          <div className="mt-10 flex flex-col gap-5">
            {INFO.map((item) => (
              <div key={item.label} className="flex items-center gap-4">
                <div className="w-10 h-10 shrink-0 border border-gold/40 flex items-center justify-center">
                  <item.icon size={16} className="text-gold" />
                </div>
                <p className="text-bone text-sm">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-7">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="border border-gold/40 p-10 h-full flex flex-col items-start justify-center"
            >
              <CheckCircle2 className="text-gold" size={32} />
              <h3 className="font-display text-2xl text-ivory mt-5">
                Thank you, {form.name.split(' ')[0] || 'there'}.
              </h3>
              <p className="text-bone text-sm mt-3 max-w-sm">
                We've received your enquiry about {form.instrument.toLowerCase()}{' '}
                lessons and will be in touch within one working day.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-6">
              <div className="sm:col-span-1">
                <label className="text-xs text-bone" htmlFor="name">Full name</label>
                <input
                  id="name"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="mt-2 w-full bg-transparent border border-white/20 focus:border-gold px-4 py-3 text-ivory text-sm outline-none transition-colors"
                  placeholder="Jane Doe"
                />
              </div>
              <div className="sm:col-span-1">
                <label className="text-xs text-bone" htmlFor="email">Email address</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="mt-2 w-full bg-transparent border border-white/20 focus:border-gold px-4 py-3 text-ivory text-sm outline-none transition-colors"
                  placeholder="jane@email.com"
                />
              </div>
              <div className="sm:col-span-1">
                <label className="text-xs text-bone" htmlFor="phone">Phone number</label>
                <input
                  id="phone"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className="mt-2 w-full bg-transparent border border-white/20 focus:border-gold px-4 py-3 text-ivory text-sm outline-none transition-colors"
                  placeholder="+91 98xxxxxxx"
                />
              </div>
              <div className="sm:col-span-1">
                <label className="text-xs text-bone" htmlFor="instrument">Instrument of interest</label>
                <select
                  id="instrument"
                  name="instrument"
                  value={form.instrument}
                  onChange={handleChange}
                  className="mt-2 w-full bg-blue-deep border border-white/20 focus:border-gold px-4 py-3 text-ivory text-sm outline-none transition-colors"
                >
                  {INSTRUMENTS.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="text-xs text-bone" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  className="mt-2 w-full bg-transparent border border-white/20 focus:border-gold px-4 py-3 text-ivory text-sm outline-none transition-colors resize-none"
                  placeholder="Tell us about your (or your child's) musical background and goals."
                />
              </div>
              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="inline-flex items-center bg-gold text-ink px-9 py-3.5 text-sm font-medium hover:bg-gold-light transition-colors"
                >
                  Send Enquiry
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
