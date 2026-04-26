import { useMutation } from 'convex/react'
import React, { useState } from 'react'
import { 
  Phone, Shield, Search, Wind, Thermometer,
  ChevronRight, CheckCircle, Clock, Mail
} from "lucide-react";

export function HomePage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  
  // Connect to the database
  const createLead = useMutation("leads:create" as any)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      await createLead(formData)
      setSubmitted(true)
      setFormData({ name: '', email: '', phone: '', message: '' })
    } catch (error) {
      console.error(error)
      alert('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="flex flex-col min-h-screen font-sans text-slate-900 bg-[#f8fffd]">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 border-b border-teal-100 bg-white sticky top-0 z-50 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#2d4a53]">
            <Shield className="h-6 w-6 text-white" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-xl font-bold tracking-tight text-[#2d4a53]">Golden Team</span>
            <span className="text-[10px] font-bold tracking-widest text-[#48c9b0] uppercase">Mold Testing</span>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-6 font-bold text-sm text-[#2d4a53]">
          <a href="#services" className="hover:text-[#48c9b0]">Services</a>
          <a href="#process" className="hover:text-[#48c9b0]">Process</a>
          <a href="#contact" className="rounded-full bg-[#2d4a53] px-6 py-2 text-white hover:bg-[#48c9b0]">FREE QUOTE</a>
        </div>
        <a href="tel:8184577214" className="md:hidden p-2 bg-[#48c9b0] text-white rounded-lg">
          <Phone className="h-5 w-5" />
        </a>
      </nav>

      {/* Hero Section */}
      <header className="px-6 py-16 md:py-24 bg-[#2d4a53] text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-center lg:text-left relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#48c9b0]/20 px-4 py-1 text-sm font-bold text-[#48c9b0]">
              <Clock className="h-4 w-4" /> RESULTS IN 24 HOURS
            </div>
            <h1 className="text-5xl md:text-7xl font-black leading-tight uppercase tracking-tight">
              Professional <br/>
              <span className="text-[#48c9b0]">Mold Testing</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0">
              Mold in your home? Don't ignore it! Your health is at risk. Protect your family with lab-backed results and detailed expert reports.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#contact" className="px-8 py-4 bg-[#48c9b0] text-white font-black rounded-xl text-lg hover:shadow-xl hover:shadow-[#48c9b0]/20 transition-all">
                Request Free Quote
              </a>
              <a href="tel:8184577214" className="px-8 py-4 bg-white/10 border border-white/20 backdrop-blur text-white font-black rounded-xl text-lg hover:bg-white/20 transition-all flex items-center justify-center gap-2">
                <Phone className="h-5 w-5" /> (818) 457-7214
              </a>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="aspect-square rounded-3xl overflow-hidden border-8 border-white/10 shadow-2xl">
              <img src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800" alt="Inspection" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-2xl flex items-center gap-4 border border-teal-50">
               <div className="w-12 h-12 bg-[#48c9b0]/10 flex items-center justify-center rounded-full">
                  <CheckCircle className="h-6 w-6 text-[#48c9b0]" />
               </div>
               <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Accuracy</p>
                  <p className="text-xl font-black text-[#2d4a53]">100% Certified</p>
               </div>
            </div>
          </div>
        </div>
      </header>

      {/* Services Icons Row */}
      <section className="bg-white py-12 px-6 border-b border-teal-50">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
           {[
             { icon: Wind, label: "Air Quality" },
             { icon: Search, label: "Microbial Testing" },
             { icon: Thermometer, label: "Thermal Imaging" },
             { icon: Shield, label: "Lab Certified" }
           ].map((s, i) => (
             <div key={i} className="flex flex-col items-center text-center space-y-3">
               <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-[#48c9b0] shadow-sm">
                 <s.icon className="h-8 w-8" />
               </div>
               <span className="text-sm font-black text-[#2d4a53] uppercase tracking-wider">{s.label}</span>
             </div>
           ))}
        </div>
      </section>

      {/* Main Content Sections */}
      <section id="services" className="py-24 px-6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
        <div className="space-y-8">
          <h2 className="text-sm font-black text-[#48c9b0] uppercase tracking-[0.3em]">Why it matters</h2>
          <h3 className="text-4xl md:text-5xl font-black text-[#2d4a53] leading-tight">Consequences of Mold</h3>
          <p className="text-lg text-slate-600 leading-relaxed">
            Mold isn't just an eye-sore; it causes long-term structural damage and serious health complications for families and businesses.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="p-6 bg-[#f0f9f7] rounded-2xl space-y-4">
              <Shield className="h-8 w-8 text-[#48c9b0]" />
              <h4 className="text-xl font-black text-[#2d4a53]">Health Problems</h4>
              <p className="text-sm text-slate-600">Exposure triggers asthma attacks, persistent allergies, and chronic respiratory issues.</p>
            </div>
            <div className="p-6 bg-[#f0f9f7] rounded-2xl space-y-4">
               <Shield className="h-8 w-8 text-[#48c9b0]" />
               <h4 className="text-xl font-black text-[#2d4a53]">Structural Damage</h4>
               <p className="text-sm text-slate-600">Mold feeds on organic materials like drywall and wood, compromising your home's integrity.</p>
            </div>
          </div>
        </div>
        <div className="bg-[#2d4a53] p-10 md:p-16 rounded-[3rem] text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#48c9b0]/10 rounded-full blur-2xl -mr-16 -mt-16"></div>
          <h3 className="text-3xl font-black uppercase mb-12 relative z-10">Why Choose Us?</h3>
          <ul className="space-y-6 relative z-10">
            {[
              "Expert Team with Years of Experience",
              "Advanced Thermal Imaging Technology",
              "Accredited Nationwide Laboratory",
              "Detailed Report & Recommendations",
              "Fast & Reliable Service",
              "Certified & Fully Insured"
            ].map((text, i) => (
              <li key={i} className="flex items-center gap-4 text-lg font-bold">
                <CheckCircle className="h-6 w-6 text-[#48c9b0] shrink-0" />
                {text}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Quote Form Section */}
      <section id="contact" className="py-24 px-6 bg-[#f0f9f7]">
        <div className="max-w-4xl mx-auto bg-white rounded-[3rem] shadow-2xl border border-teal-50 overflow-hidden grid md:grid-cols-2">
          <div className="p-10 md:p-16 bg-[#2d4a53] text-white space-y-6">
            <h3 className="text-3xl font-black uppercase">Get Your Quote</h3>
            <p className="text-slate-300">Fast, professional inspections across Southern California. Results in 24 hours.</p>
            <div className="space-y-4 pt-6">
              <a href="tel:8184577214" className="flex items-center gap-3 font-bold text-lg hover:text-[#48c9b0]">
                <Phone className="h-5 w-5 text-[#48c9b0]" /> (818) 457-7214
              </a>
              <a href="tel:4244765050" className="flex items-center gap-3 font-bold text-lg hover:text-[#48c9b0]">
                <Phone className="h-5 w-5 text-[#48c9b0]" /> (424) 476-5050
              </a>
              <a href="mailto:Goldmoldtest1@gmail.com" className="flex items-center gap-3 font-bold text-lg hover:text-[#48c9b0]">
                <Mail className="h-5 w-5 text-[#48c9b0]" /> Goldmoldtest1@gmail.com
              </a>
            </div>
          </div>
          <div className="p-10 md:p-16">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-[#48c9b0] text-white rounded-full flex items-center justify-center text-4xl mx-auto mb-6">✓</div>
                <h4 className="text-2xl font-black text-[#2d4a53]">Thank You!</h4>
                <p className="text-slate-600 mt-4">We will call you shortly to schedule your inspection.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Name</label>
                  <input required placeholder="Full Name" className="w-full px-5 py-4 rounded-xl bg-slate-50 border-none focus:ring-2 focus:ring-[#48c9b0] transition-all outline-none" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                </div>
                <div>
                  <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Phone</label>
                  <input required type="tel" placeholder="(818) 457-7214" className="w-full px-5 py-4 rounded-xl bg-slate-50 border-none focus:ring-2 focus:ring-[#48c9b0] transition-all outline-none" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
                </div>
                <button disabled={isSubmitting} className="w-full py-5 bg-[#2d4a53] text-white font-black uppercase tracking-widest rounded-xl hover:bg-[#48c9b0] transition-all shadow-lg disabled:opacity-50">
                  {isSubmitting ? "Sending..." : "Request My Free Quote"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Mobile Sticky Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#2d4a53] border-t border-white/10 px-4 py-3 md:hidden flex gap-3">
        <a href="tel:8184577214" className="flex-1 bg-[#48c9b0] text-white py-4 rounded-xl font-black text-center flex items-center justify-center gap-2">
           <Phone className="h-5 w-5" /> CALL NOW
        </a>
      </div>
    </div>
  )
}
