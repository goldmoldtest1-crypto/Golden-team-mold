import { createFileRoute } from "@tanstack/react-router";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { useState } from "react";
import { 
  Phone, Mail, Instagram, Clock, CheckCircle, 
  AlertTriangle, Shield, Search, Wind, Thermometer,
  ChevronRight, MapPin, Menu, X
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const createLead = useMutation(api.leads.create);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    await createLead(formData);
    setStatus("success");
    setFormData({ name: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#2d4a53] text-white">
              <Shield className="h-6 w-6" />
            </div>
            <div>
              <span className="block text-xl font-bold tracking-tight text-[#2d4a53]">GOLDEN TEAM</span>
              <span className="block text-[10px] font-bold tracking-[0.2em] text-[#48c9b0]">MOLD TESTING</span>
            </div>
          </div>
          <div className="hidden items-center gap-6 md:flex">
            <a href="tel:8184577214" className="flex items-center gap-2 text-sm font-semibold text-[#2d4a53] transition-colors hover:text-[#48c9b0]">
              <Phone className="h-4 w-4" /> (818) 457-7214
            </a>
            <a href="#contact" className="rounded-full bg-[#48c9b0] px-6 py-2 text-sm font-bold text-white transition-all hover:bg-[#2d4a53] hover:shadow-lg">
              FREE QUOTE
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#2d4a53] py-20 text-white md:py-32">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(#48c9b0_1px,transparent_1px)] [background-size:20px_20px]"></div>
        </div>
        <div className="relative mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#48c9b0]/20 px-4 py-1 text-sm font-bold text-[#48c9b0]">
                <Clock className="h-4 w-4" /> RESULTS IN 24 HOURS
              </div>
              <h1 className="text-5xl font-black leading-tight tracking-tight md:text-7xl">
                PROFESSIONAL <br/>
                <span className="text-[#48c9b0]">MOLD TESTING</span>
              </h1>
              <p className="text-xl leading-relaxed text-slate-300">
                Protect your home and health with Southern California's trusted inspection experts. 
                Certified technicians, lab-backed results, and peace of mind.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <a href="#contact" className="flex items-center justify-center gap-2 rounded-xl bg-[#48c9b0] px-8 py-4 text-lg font-bold transition-all hover:translate-y-[-2px] hover:bg-[#3db29a] hover:shadow-xl">
                  Request Inspection <ChevronRight className="h-5 w-5" />
                </a>
                <a href="tel:8184577214" className="flex items-center justify-center gap-2 rounded-xl border-2 border-white/20 bg-white/5 px-8 py-4 text-lg font-bold backdrop-blur-sm transition-all hover:bg-white/10">
                  Call Now
                </a>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="aspect-square rounded-3xl bg-slate-800 p-2 shadow-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1000&auto=format&fit=crop" 
                  alt="Professional Inspection" 
                  className="h-full w-full object-cover rounded-2xl opacity-80"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 rounded-2xl bg-white p-6 shadow-2xl">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#48c9b0]/10 text-[#48c9b0]">
                    <CheckCircle className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-500 uppercase tracking-wider">Satisfaction</div>
                    <div className="text-2xl font-black text-[#2d4a53]">100% Guaranteed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mb-16 text-center">
            <h2 className="text-sm font-black tracking-[0.3em] text-[#48c9b0] uppercase mb-4">Our Expertise</h2>
            <p className="text-4xl font-black text-[#2d4a53]">Specialized Inspection Services</p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { icon: Wind, title: "Air Quality Testing", desc: "Detection of airborne spores and allergens that aren't visible to the eye." },
              { icon: Search, title: "Microbial Inspection", desc: "Detailed physical examination of surfaces and hard-to-reach areas." },
              { icon: Thermometer, title: "Thermal Imaging", desc: "Advanced moisture detection to find leaks behind walls without damage." }
            ].map((s, i) => (
              <div key={i} className="group relative rounded-3xl border border-slate-100 bg-slate-50 p-8 transition-all hover:bg-white hover:shadow-2xl hover:shadow-[#48c9b0]/10">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#2d4a53] text-white transition-transform group-hover:scale-110">
                  <s.icon className="h-7 w-7" />
                </div>
                <h3 className="mb-4 text-xl font-bold text-[#2d4a53]">{s.title}</h3>
                <p className="text-slate-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-[#2d4a53]">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="mb-8 text-4xl font-black text-white">Get Your Free Quote</h2>
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-3xl shadow-2xl text-left">
            {status === "success" ? (
              <div className="py-12 text-center">
                <CheckCircle className="mx-auto h-16 w-16 text-[#48c9b0] mb-4" />
                <h3 className="text-2xl font-bold text-[#2d4a53]">Message Sent!</h3>
                <p className="text-slate-600">We will call you shortly to schedule your inspection.</p>
              </div>
            ) : (
              <div className="grid gap-6">
                <div>
                  <label className="block text-sm font-bold text-[#2d4a53] mb-2">FULL NAME</label>
                  <input 
                    required
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-[#48c9b0] focus:ring-2 focus:ring-[#48c9b0]/20"
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#2d4a53] mb-2">PHONE NUMBER</label>
                  <input 
                    required
                    type="tel"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-[#48c9b0] focus:ring-2 focus:ring-[#48c9b0]/20"
                    value={formData.phone}
                    onChange={e => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
                <button 
                  disabled={status === "submitting"}
                  className="w-full rounded-xl bg-[#48c9b0] py-4 text-lg font-bold text-white transition-all hover:bg-[#2d4a53] active:scale-95"
                >
                  {status === "submitting" ? "SENDING..." : "REQUEST FREE QUOTE"}
                </button>
              </div>
            )}
          </form>
        </div>
      </section>

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 flex gap-2 bg-white/80 p-3 backdrop-blur-lg md:hidden border-t">
        <a href="tel:8184577214" className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-[#2d4a53] py-3 font-bold text-white">
          <Phone className="h-5 w-5" /> CALL
        </a>
        <a href="#contact" className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-[#48c9b0] py-3 font-bold text-white">
          <Mail className="h-5 w-5" /> QUOTE
        </a>
      </div>
    </div>
  );
}
