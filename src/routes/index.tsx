import { useMutation } from 'convex/react'
import React, { useState } from 'react'

export function HomePage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const createLead = useMutation("leads:create" as any)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); setIsSubmitting(true);
    try { await createLead(formData); setSubmitted(true); setFormData({ name: '', email: '', phone: '', message: '' }); }
    catch (error) { console.error(error); alert('Something went wrong. Please try again.'); }
    finally { setIsSubmitting(false); }
  }

  return (
    <div className="flex flex-col min-h-screen font-sans text-slate-900 bg-[#f8fffd]">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 border-b border-teal-100 bg-white sticky top-0 z-50 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="relative w-10 h-10 flex items-center justify-center">
             <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-[6px]" style={{ stroke: 'url(#logo-gradient)' }}>
                <defs>
                  <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#2d4a53', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#48c9b0', stopOpacity: 1 }} />
                  </linearGradient>
                </defs>
                <path d="M10,45 L50,10 L90,45 L90,85 L10,85 Z" />
                <circle cx="45" cy="50" r="15" />
                <line x1="55" y1="60" x2="65" y2="70" />
             </svg>
          </div>
          <div className="flex flex-col leading-none text-left">
            <span className="text-xl font-bold tracking-tight text-[#2d4a53]">Golden Team</span>
            <span className="text-xs font-semibold tracking-wider text-[#48c9b0] uppercase">Mold Testing</span>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-6 font-semibold text-sm uppercase tracking-wider text-[#2d4a53]">
          <a href="#services" className="hover:text-[#48c9b0] transition-colors">Services</a>
          <a href="#faq" className="hover:text-[#48c9b0] transition-colors">FAQ</a>
          <a href="#contact-form" className="px-6 py-2 bg-[#2d4a53] text-white rounded-full hover:bg-[#48c9b0] transition-all text-xs">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="px-6 pt-12 pb-20 text-center max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-[#2d4a53] mb-4">
          Mold in your home? Don't ignore it! <br className="hidden md:block" /> 
          <span className="text-teal-600">Your health is at risk!</span>
        </h2>
        
        <div className="my-12 relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white max-w-4xl mx-auto">
           <img src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1000" alt="Inspection" className="w-full h-[500px] object-cover object-center" />
           <div className="absolute top-8 left-8 bg-white/95 backdrop-blur px-6 py-4 rounded-2xl shadow-2xl border border-teal-50">
              <div className="flex items-center gap-4">
                 <div className="w-12 h-12 flex items-center justify-center text-[#2d4a53]">
                    <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-[8px]" style={{ stroke: 'url(#badge-gradient)' }}>
                      <defs>
                        <linearGradient id="badge-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" style={{ stopColor: '#2d4a53', stopOpacity: 1 }} />
                          <stop offset="100%" style={{ stopColor: '#48c9b0', stopOpacity: 1 }} />
                        </linearGradient>
                      </defs>
                      <path d="M10,45 L50,10 L90,45 L90,85 L10,85 Z" />
                      <circle cx="45" cy="50" r="15" />
                      <line x1="55" y1="60" x2="65" y2="70" />
                    </svg>
                 </div>
                 <div className="flex flex-col text-left">
                    <span className="font-black text-2xl text-[#2d4a53] tracking-tighter leading-none uppercase">Golden</span>
                    <span className="font-black text-2xl text-[#2d4a53] tracking-tighter leading-none uppercase">Team</span>
                 </div>
              </div>
           </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-black text-[#2d4a53] tracking-tight mb-12 uppercase">
          Professional <br /> Mold Testing
        </h1>

        <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
          {["Air Quality Testing", "Microbial Testing", "Thermal Imaging"].map((label, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white rounded-full shadow-md flex items-center justify-center mb-3 border border-teal-50 text-2xl">
                {i === 0 ? "🌬️" : i === 1 ? "🔬" : "🌡️"}
              </div>
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-[#2d4a53] leading-tight text-center">{label}</span>
            </div>
          ))}
        </div>
      </header>

      {/* Services Section */}
      <section id="services" className="px-6 py-20 bg-white border-y border-teal-50">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">
          <div className="text-left">
            <h3 className="text-xl font-black uppercase tracking-widest text-[#2d4a53] mb-6 border-b-4 border-[#48c9b0] inline-block pb-1">Consequences of Mold</h3>
            <div className="grid grid-cols-3 gap-6">
              {[{l: "Odor Issues", i: "👃"}, {l: "Structural Damage", i: "🏚️"}, {l: "Health Problems", i: "🩺", s: "(Asthma, Allergies)"}].map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-4 text-2xl">{item.i}</div>
                  <span className="text-[10px] font-bold uppercase text-[#2d4a53]">{item.l}</span>
                  {item.s && <span className="text-[8px] font-medium text-slate-500">{item.s}</span>}
                </div>
              ))}
            </div>
            <p className="mt-16 text-[#48c9b0] font-black text-4xl uppercase tracking-tighter drop-shadow-sm">Results in 24 hours</p>
          </div>

          <div className="bg-[#f0f9f7] p-8 md:p-12 rounded-[2rem] shadow-sm text-[#2d4a53] text-left">
            <h3 className="text-xl font-black uppercase tracking-widest mb-8">Why Choose Us?</h3>
            <ul className="space-y-4 font-bold text-sm">
              {["Expert Team", "Advanced Technology", "Accredited Laboratory", "Detailed Report & Recommendations", "Fast & Reliable Service", "Nationwide"].map((text, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#48c9b0] rounded-full shrink-0"></span> {text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="px-6 py-24 bg-[#2d4a53] text-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-[#48c9b0] uppercase tracking-widest mb-3">Common Questions</h2>
            <h3 className="text-4xl font-black uppercase">FAQ</h3>
          </div>
          <div className="space-y-6">
            {[
              { q: "Is mold testing necessary if I can't see it?", a: "Yes. Many mold issues are hidden behind walls or under flooring. Air quality testing can detect high spore counts even when mold isn't visible." },
              { q: "How long does the testing process take?", a: "A typical inspection takes 1-2 hours. Lab results and your final report are delivered within 24 hours." },
              { q: "What should I do if mold is found?", a: "Our report includes specific remediation recommendations to help you understand the next steps for safe removal." },
              { q: "Can mold affect my health?", a: "Exposure to mold can cause respiratory issues, allergic reactions, and other health complications for sensitive individuals." }
            ].map((item, i) => (
              <div key={i} className="p-8 bg-white/5 border border-white/10 rounded-2xl text-left">
                <h4 className="text-lg font-bold text-[#48c9b0] mb-3">{item.q}</h4>
                <p className="text-slate-300 leading-relaxed text-sm">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Form Section */}
      <section id="contact-form" className="px-6 py-24 max-w-4xl mx-auto">
        <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-teal-50 p-8 md:p-16">
          <h3 className="text-3xl font-black text-[#2d4a53] uppercase mb-12 text-center">Request a Free Quote</h3>
          {submitted ? (
            <div className="bg-teal-50 p-12 rounded-3xl text-center">
              <div className="w-20 h-20 bg-[#48c9b0] rounded-full flex items-center justify-center text-white text-4xl mx-auto mb-6">✓</div>
              <h4 className="text-2xl font-bold text-[#2d4a53] mb-2 text-center">Success!</h4>
              <p className="text-slate-600 text-center">We will contact you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 text-left">
              <div className="grid md:grid-cols-2 gap-6">
                <input required placeholder="Name" className="w-full px-6 py-4 bg-slate-50 rounded-2xl border-none outline-none focus:ring-2 focus:ring-teal-500" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                <input required type="tel" placeholder="Phone" className="w-full px-6 py-4 bg-slate-50 rounded-2xl border-none outline-none focus:ring-2 focus:ring-teal-500" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
              </div>
              <textarea rows={4} placeholder="How can we help?" className="w-full px-6 py-4 bg-slate-50 rounded-2xl border-none outline-none focus:ring-2 focus:ring-teal-500 resize-none" value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})}></textarea>
              <button disabled={isSubmitting} className="w-full py-5 bg-[#2d4a53] text-white rounded-2xl font-black uppercase tracking-widest hover:bg-[#48c9b0] transition-all shadow-xl">
                {isSubmitting ? 'Sending...' : 'Request My Free Quote'}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Sticky Call Bar */}
      <div className="bg-[#2d4a53] text-white py-6 px-6 text-center sticky bottom-0 z-40 shadow-[0_-10px_30px_rgba(0,0,0,0.1)]">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-4">
          <span className="text-sm md:text-lg font-black uppercase tracking-[0.2em]">Book Your Test Now!</span>
          <div className="flex items-center gap-4 text-lg md:text-xl font-bold">
             <a href="tel:8184577214" className="hover:text-[#48c9b0] transition-colors">(818) 457-7214</a>
             <span className="text-slate-500">•</span>
             <a href="tel:4244765050" className="hover:text-[#48c9b0] transition-colors">(424) 476-5050</a>
          </div>
        </div>
      </div>

      <footer className="bg-white py-12 px-6 text-center border-t border-teal-50 text-xs font-bold text-[#2d4a53] space-y-4">
        <a href="https://www.Goldenteammold.com" className="uppercase tracking-widest block">www.Goldenteammold.com</a>
        <a href="mailto:Goldmoldtest1@gmail.com" className="underline decoration-[#48c9b0] block">Goldmoldtest1@gmail.com</a>
      </footer>
    </div>
  )
}
