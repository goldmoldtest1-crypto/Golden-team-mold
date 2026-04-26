import React, { useState } from "react";
import { 
  Phone, Shield, Search, Wind, Thermometer,
  ChevronRight, CheckCircle, Clock, AlertTriangle, Mail
} from "lucide-react";

export function HomePage() {
  const [status, setStatus] = useState("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("success");
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      {/* Top Banner */}
      <div className="bg-[#48c9b0] py-2 text-center text-xs font-bold tracking-widest text-[#2d4a53]">
        RESULTS IN 24 HOURS • CERTIFIED MOLD INSPECTORS
      </div>

      {/* Navigation */}
      <nav className="border-b bg-white/95 sticky top-0 z-50">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <div className="flex items-center gap-2">
            <Shield className="h-8 w-8 text-[#2d4a53]" />
            <div>
              <span className="block text-xl font-black text-[#2d4a53]">GOLDEN TEAM</span>
              <span className="block text-[10px] font-bold tracking-[0.2em] text-[#48c9b0]">MOLD TESTING</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:8184577214" className="hidden md:flex items-center gap-2 font-bold text-[#2d4a53]">
              <Phone className="h-4 w-4" /> (818) 457-7214
            </a>
            <a href="#contact" className="rounded-lg bg-[#2d4a53] px-5 py-2 text-sm font-bold text-white transition-colors hover:bg-[#48c9b0]">
              FREE QUOTE
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative bg-[#2d4a53] py-20 text-white md:py-32">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h1 className="mb-6 text-5xl font-black md:text-7xl">
            PROFESSIONAL <br/>
            <span className="text-[#48c9b0]">MOLD TESTING</span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-slate-300">
            Southern California's trusted experts for residential and commercial mold inspections. 
            Detailed reports and lab-backed results delivered in 24 hours.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a href="tel:8184577214" className="flex items-center justify-center gap-2 rounded-xl bg-[#48c9b0] px-8 py-4 text-lg font-bold text-white transition-transform hover:scale-105">
              Call (818) 457-7214
            </a>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 grid gap-12 md:grid-cols-3">
          {[
            { icon: Search, title: "Inspection", text: "Thorough visual search using moisture meters and thermal cameras." },
            { icon: Wind, title: "Air Sampling", text: "Lab-tested air samples to detect spores invisible to the human eye." },
            { icon: Shield, title: "Final Report", text: "Complete analysis and remediation plan provided within 24 hours." }
          ].map((item, i) => (
            <div key={i} className="text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100 text-[#2d4a53]">
                <item.icon className="h-8 w-8" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-[#2d4a53]">{item.title}</h3>
              <p className="text-slate-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Simple Form */}
      <section id="contact" className="bg-slate-50 py-20">
        <div className="mx-auto max-w-xl px-4">
          <div className="rounded-3xl bg-white p-8 shadow-2xl border border-slate-100">
            <h2 className="mb-6 text-center text-3xl font-black text-[#2d4a53]">Request Free Quote</h2>
            {status === "success" ? (
              <div className="text-center py-10">
                <CheckCircle className="mx-auto h-12 w-12 text-[#48c9b0] mb-4" />
                <p className="font-bold text-[#2d4a53]">Thank you! We will call you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input required placeholder="Full Name" className="w-full rounded-xl border p-4 bg-slate-50 focus:ring-2 focus:ring-[#48c9b0]/20 outline-none" />
                <input required type="tel" placeholder="Phone Number" className="w-full rounded-xl border p-4 bg-slate-50 focus:ring-2 focus:ring-[#48c9b0]/20 outline-none" />
                <button className="w-full rounded-xl bg-[#48c9b0] py-4 text-lg font-bold text-white hover:bg-[#2d4a53] transition-colors">
                  GET FREE QUOTE
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2d4a53] py-12 text-center text-white">
        <div className="mx-auto max-w-7xl px-4">
          <p className="mb-4 text-sm font-bold text-[#48c9b0]">GOLDEN TEAM MOLD TESTING</p>
          <div className="flex justify-center gap-6 text-slate-400">
            <a href="tel:8184577214" className="hover:text-white">(818) 457-7214</a>
            <a href="mailto:Goldmoldtest1@gmail.com" className="hover:text-white">Email Us</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
