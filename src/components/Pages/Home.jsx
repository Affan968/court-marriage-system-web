import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, CheckCircle, HelpCircle, Shield, Globe, Scale } from 'lucide-react';
import heroNikahImage from '../../assets/weddingpic.png';

const Home = () => {
  const revealVariants = {
    hidden: { clipPath: 'inset(0 100% 0 0)' },
    visible: { 
      clipPath: 'inset(0 0% 0 0)', 
      transition: { duration: 1.5, ease: "easeInOut" } 
    }
  };

  const services = [
    { title: "Online Nikah", desc: "Shari’a-compliant Nikah conducted remotely with proper consent and witnesses.", icon: <Globe /> },
    { title: "Court Marriages", desc: "Legally recognised services ensuring documentation and confidentiality under Pakistani law.", icon: <Scale /> },
    { title: "Nikah Khawan", desc: "Qualified and experienced scholars to conduct ceremonies with religious correctness.", icon: <Shield /> },
    { title: "Marriage Registration", desc: "Complete support for NADRA computerized records and official certificates.", icon: <CheckCircle /> },
    { title: "Online Marriages", desc: "Designed for overseas couples, combining legal compliance with Islamic requirements.", icon: <Globe /> },
    { title: "Family Law", desc: "Expert representation for divorce, Khula, and child custody matters.", icon: <Shield /> }
  ];

  return (
    <div className="bg-slate-950 text-slate-300 font-sans">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute top-0 -left-20 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-blue-500 font-bold uppercase tracking-widest text-xs mb-6">
              #1 Registered Family Law Firm in Pakistan
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.1] mb-8 tracking-tighter">
              <motion.span variants={revealVariants} initial="hidden" animate="visible" className="block">Court Marriage &</motion.span>
              <motion.span variants={revealVariants} initial="hidden" animate="visible" transition={{ delay: 0.5 }} className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 block">
                Online Nikah Services
              </motion.span>
            </h1>
            <p className="text-xl text-slate-400 mb-10 max-w-xl leading-relaxed">
              Legal precision, sensitivity, and trust. Providing discreet solutions for court marriage and family law across Pakistan for over 40 years.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="tel:+923166644789" className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl shadow-lg shadow-blue-600/20 transition-all transform hover:-translate-y-1">Call Now</a>
              <button className="px-8 py-4 bg-slate-900 border border-slate-800 text-white font-bold rounded-xl hover:bg-slate-800 transition-all">Our Legal Services</button>
            </div>
          </div>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className="hidden lg:block relative">
             <div className="rounded-[3rem] overflow-hidden border-2 border-white/10 shadow-2xl relative group">
                <img src={heroNikahImage} alt="Legal Marriage" className="w-full h-full object-cover transform scale-105 group-hover:scale-100 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
             </div>
             {/* 40+ Years Badge */}
             <div className="absolute -bottom-6 -right-6 bg-slate-900 border border-slate-700 p-6 rounded-3xl shadow-2xl">
                <p className="text-3xl font-black text-white leading-none">40+</p>
                <p className="text-[10px] text-blue-500 font-bold uppercase tracking-widest mt-1">Years Experience</p>
             </div>
          </motion.div>
        </div>
      </section>

      {/* 2. ABOUT & INTRODUCTION SECTION */}
      <section className="py-24 bg-slate-900/30">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 tracking-tight">Reliable Lawful Solutions</h2>
          <p className="text-lg text-slate-400 leading-relaxed mb-6">
            <strong>Court-Marriage.Site</strong> provides reliable, lawful, and discreet solutions for court marriage, online marriage, and Online Nikah e Shari’a. Our approach combines religious understanding with statutory compliance, ensuring care, legality, and respect.
          </p>
          <p className="text-slate-500">
            Whether you are planning a court marriage or need documentation support like a <strong>Duplicate Nikah Nama</strong>, our professionals are here to guide you.
          </p>
        </div>
      </section>

      {/* 3. SERVICES GRID */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div key={i} className="p-10 rounded-[2.5rem] bg-slate-900 border border-slate-800 hover:border-blue-500/50 transition-all group relative overflow-hidden">
              <div className="text-blue-500 mb-6 group-hover:scale-110 transition-transform duration-300">
                {React.cloneElement(service.icon, { size: 32 })}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. URDU SECTION (Very Important for Local SEO) */}
      <section className="py-24 bg-blue-600/5 border-y border-white/5" dir="rtl">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="text-right">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-8">کورٹ میرج اور آن لائن نکاح</h2>
            <div className="space-y-8">
              <div className="border-r-4 border-blue-600 pr-6">
                <h4 className="text-xl font-bold text-white mb-2">قانونی تحفظ</h4>
                <p className="text-slate-400">پاکستانی قانون کے تحت مکمل رجسٹریشن اور قانونی دستاویزات کی فراہمی۔</p>
              </div>
              <div className="border-r-4 border-blue-600 pr-6">
                <h4 className="text-xl font-bold text-white mb-2">آن لائن نکاح</h4>
                <p className="text-slate-400">بیرونِ ملک مقیم افراد کے لیے مکمل شرعی اور قانونی تقاضوں کے مطابق نکاح۔</p>
              </div>
            </div>
          </div>
          <div className="p-10 bg-slate-900 rounded-[2rem] border border-slate-800 text-right">
            <p className="text-xl text-slate-300 leading-loose">
              ہماری خدمات میں کورٹ میرج، نکاح رجسٹریشن، نکاح خواں، اور فیملی لا سے متعلق تمام قانونی معاملات شامل ہیں۔ ہم اسلام آباد، لاہور، کراچی اور راولپنڈی میں اپنی خدمات فراہم کرتے ہیں۔
            </p>
          </div>
        </div>
      </section>

      {/* 5. FAQ SECTION */}
      <section className="py-24 max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-12 text-center flex items-center justify-center gap-3">
          <HelpCircle className="text-blue-500" /> Service-Wise FAQs
        </h2>
        <div className="space-y-4">
          {[
            { q: "What is Online Nikah e Shari’a?", a: "It is a Shari’a-compliant Nikah conducted remotely, fulfilling Islamic requirements such as Ijab-o-Qabool, witnesses, and Mahr." },
            { q: "Is court marriage confidential?", a: "Yes, court marriage is conducted discreetly and lawfully, ensuring privacy and legal protection for consenting adults." },
            { q: "Can a marriage be registered later?", a: "Yes, delayed registration of Nikah is possible through lawful procedures and we provide full assistance for it." }
          ].map((faq, i) => (
            <details key={i} className="group p-6 bg-slate-900 border border-slate-800 rounded-2xl">
              <summary className="text-white font-bold cursor-pointer list-none flex justify-between items-center">
                {faq.q} <span className="text-blue-500 group-open:rotate-180 transition-transform">+</span>
              </summary>
              <p className="mt-4 text-slate-500 text-sm leading-relaxed">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* 6. OFFICE LOCATIONS SECTION */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-16 text-center">Our Nationwide Offices</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 bg-slate-900/50 border border-slate-800 rounded-3xl hover:bg-slate-900 transition-all">
              <MapPin className="text-blue-500 mb-4" />
              <h3 className="text-white font-bold mb-2">Karachi Head Office</h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-4">A-1937/B, Metroville III Colony, Scheme 33, Gulzar e Hijri, Karachi.</p>
              <p className="text-blue-400 font-bold">+92 333 2317861</p>
            </div>
            <div className="p-8 bg-slate-900/50 border border-slate-800 rounded-3xl hover:bg-slate-900 transition-all">
              <MapPin className="text-blue-500 mb-4" />
              <h3 className="text-white font-bold mb-2">Islamabad Office</h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-4">Office No. 5, 2nd Floor, Laraib Plaza, Karachi Company, G-9 Markaz.</p>
              <p className="text-blue-400 font-bold">+92 333 2316871</p>
            </div>
            <div className="p-8 bg-slate-900/50 border border-slate-800 rounded-3xl hover:bg-slate-900 transition-all">
              <MapPin className="text-blue-500 mb-4" />
              <h3 className="text-white font-bold mb-2">Lahore Office</h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-4">Office No.2, 1st Floor, Al-Mairaj Arcade, Chauburji Chowk.</p>
              <p className="text-blue-400 font-bold">+92 333 1127836</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;