import React from 'react';
import { motion } from 'framer-motion';
import { Scale, Award, ShieldCheck, MapPin, Globe, CheckCircle2 } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="bg-slate-950 text-slate-300 pt-32 pb-20 overflow-hidden min-h-screen">
      {/* Background Decorative Glows */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* 1. Header & Introduction Section */}
        <div className="text-center mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6"
          >
            Your Trusted Partner in Marriage Legal Services
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter">
            Legal Expertise, <span className="text-blue-500">Sacred Bonds.</span>
          </h1>
          <p className="max-w-4xl mx-auto text-lg md:text-xl text-slate-400 leading-relaxed">
            Welcome to <strong>CourtMarriage.site</strong>, the premier legal platform for navigating the intricate landscape of marriage legalities in Pakistan. We understand the sanctity and significance of marriage, and our mission is to make every legal aspect seamless, discreet, and stress-free for you.
          </p>
        </div>

        {/* 2. Detailed Service Explanation (Keyword Rich) */}
        <div className="grid md:grid-cols-2 gap-12 mb-32 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white">Why Choose CourtMarriage.site?</h2>
            <p className="text-slate-400 leading-relaxed">
              With decades of experience in matrimonial legal services, our team of skilled professionals deeply understands the nuances of <strong>Pakistani Family Law</strong> and <strong>Islamic traditions</strong>. Whether you are in Karachi, Lahore, Islamabad, or abroad, we bring legal excellence to your doorstep.
            </p>
            <div className="space-y-4 mt-8">
              {[
                { title: "Online Nikah Specialists", desc: "Facilitating Sharia-compliant ceremonies globally with qualified Nikah Khawans." },
                { title: "NADRA Marriage Registration", desc: "Fast-track acquisition of NADRA Marriage Certificates without bureaucratic delays." },
                { title: "Legal Compliance", desc: "Ensuring all affidavits and documentation are 100% accurate and legally binding." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 p-4 rounded-2xl bg-slate-900/40 border border-slate-800">
                  <CheckCircle2 className="text-blue-500 shrink-0" size={24} />
                  <div>
                    <h4 className="text-white font-bold">{item.title}</h4>
                    <p className="text-sm text-slate-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-8 rounded-[2rem] bg-gradient-to-br from-blue-600/20 to-transparent border border-blue-500/20">
              <Globe className="text-blue-400 mb-4" size={32} />
              <h3 className="text-xl font-bold text-white mb-2">Overseas Support</h3>
              <p className="text-xs text-slate-500">Helping Overseas Pakistanis with lawful Online Nikah and proxy marriage solutions.</p>
            </div>
            <div className="p-8 rounded-[2rem] bg-slate-900 border border-slate-800">
              <ShieldCheck className="text-blue-400 mb-4" size={32} />
              <h3 className="text-xl font-bold text-white mb-2">Absolute Privacy</h3>
              <p className="text-xs text-slate-500">Your information and legal matters are handled with 100% confidentiality.</p>
            </div>
            <div className="p-8 rounded-[2rem] bg-slate-900 border border-slate-800 sm:col-span-2">
              <h3 className="text-xl font-bold text-white mb-2 text-center underline decoration-blue-500">Nationwide Coverage</h3>
              <div className="flex flex-wrap justify-center gap-4 mt-4">
                {["Karachi", "Islamabad", "Lahore", "Faisalabad", "Multan", "Rawalpindi"].map((city) => (
                  <span key={city} className="px-3 py-1 bg-slate-800 rounded-full text-[10px] font-bold text-slate-400 uppercase tracking-widest border border-slate-700">
                    {city}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 3. Office Locations Section */}
        <div className="bg-slate-900/30 border border-slate-800 rounded-[3rem] p-8 md:p-16">
          <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-3 justify-center md:justify-start">
            <MapPin className="text-blue-500" /> Visit Our Chambers
          </h2>
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="border-l-2 border-blue-600/30 pl-6 space-y-3">
              <h4 className="text-blue-400 font-bold uppercase text-xs tracking-widest">Karachi Head Office</h4>
              <p className="text-sm text-slate-500">A-1937/B, Metroville III Colony, Scheme 33, Gulzar e Hijri, Karachi.</p>
              <p className="text-white font-bold text-sm">+92 333 2317861</p>
            </div>
            <div className="border-l-2 border-blue-600/30 pl-6 space-y-3">
              <h4 className="text-blue-400 font-bold uppercase text-xs tracking-widest">Islamabad Office</h4>
              <p className="text-sm text-slate-500">Office No. 5, 2nd Floor, Laraib Plaza, Karachi Company, G-9 Markaz.</p>
              <p className="text-white font-bold text-sm">+92 333 2316871</p>
            </div>
            <div className="border-l-2 border-blue-600/30 pl-6 space-y-3">
              <h4 className="text-blue-400 font-bold uppercase text-xs tracking-widest">Lahore Office</h4>
              <p className="text-sm text-slate-500">Office No.2, 1st Floor, Al-Mairaj Arcade, Chauburji Chowk, Lahore.</p>
              <p className="text-white font-bold text-sm">+92 333 1127836</p>
            </div>
          </div>
        </div>

        {/* 4. Final CTA Section */}
        <div className="mt-32 text-center p-12 rounded-[3rem] bg-gradient-to-t from-blue-600/10 to-transparent border border-blue-500/10">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">Let us accompany you on your married journey.</h2>
          <p className="text-slate-400 mb-10 max-w-2xl mx-auto">
            Experience matrimonial legal services that truly understand your needs and values. Contact us today for a free consultation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="tel:+923166644789" 
              className="px-10 py-5 bg-blue-600 hover:bg-blue-500 text-white font-black rounded-2xl transition-all shadow-2xl shadow-blue-600/30 inline-block transform hover:-translate-y-1 no-underline"
            >
              Consult Now
            </a>
            <a 
              href="https://wa.me/923322908556" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 bg-slate-900 border border-slate-800 text-white font-black rounded-2xl hover:bg-slate-800 transition-all no-underline"
            >
              WhatsApp Support
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;