import React from 'react';
import { motion } from 'framer-motion';
import { Scale, Award, ShieldCheck, MapPin } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="bg-slate-950 text-slate-300 pt-32 pb-20 overflow-hidden min-h-screen">
      {/* Background Glows for Premium Look */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* 1. Header Section */}
        <div className="text-center mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6"
          >
            Senior Advocates & Legal Consultants
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter">
            Our Legacy, Your <span className="text-blue-500">Legal Protection</span>
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-slate-400 leading-relaxed">
            Founded by <strong>Mohsin Ali Shah (Senior Advocate)</strong>, we are a premier legal network 
            providing expert solutions for Court Marriage, Online Nikah, and Family Law matters across Pakistan. 
            With over 40 years of standing, we blend traditional values with modern legal expertise.
          </p>
        </div>

        {/* 2. Core Values Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-32">
          {[
            { 
              icon: <Scale className="text-blue-500" size={32} />, 
              title: "Legal Expertise", 
              desc: "Professional handling of marriage certificates, affidavits, and NADRA registration." 
            },
            { 
              icon: <ShieldCheck className="text-blue-500" size={32} />, 
              title: "Absolute Privacy", 
              desc: "We ensure 100% confidentiality for all couples and families seeking our services." 
            },
            { 
              icon: <Award className="text-blue-500" size={32} />, 
              title: "Sharia Validity", 
              desc: "Our Online Nikah services are conducted under strict Islamic principles by qualified scholars." 
            }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="p-10 rounded-[2.5rem] bg-slate-900/50 border border-slate-800 hover:border-blue-500/50 transition-all group"
            >
              <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* 3. Office Locations Section */}
        <div className="bg-slate-900/30 border border-slate-800 rounded-[3rem] p-12">
          <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-3 justify-center md:justify-start">
            <MapPin className="text-blue-500" /> Our Nationwide Presence
          </h2>
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="border-l-2 border-blue-600/30 pl-6">
              <h4 className="text-blue-400 font-bold mb-3 uppercase text-xs tracking-widest">Karachi Office</h4>
              <p className="text-sm text-slate-500 mb-2">Metroville III Colony, Scheme 33, Gulzar e Hijri.</p>
              <p className="text-white font-bold">+92 316 6644789</p>
            </div>
            <div className="border-l-2 border-blue-600/30 pl-6">
              <h4 className="text-blue-400 font-bold mb-3 uppercase text-xs tracking-widest">Islamabad Office</h4>
              <p className="text-sm text-slate-500 mb-2">Laraib Plaza, G-9 Markaz, Islamabad.</p>
              <p className="text-white font-bold">+92 333 2316871</p>
            </div>
            <div className="border-l-2 border-blue-600/30 pl-6">
              <h4 className="text-blue-400 font-bold mb-3 uppercase text-xs tracking-widest">Lahore Office</h4>
              <p className="text-sm text-slate-500 mb-2">Al-Mairaj Arcade, Chauburji Chowk, Lahore.</p>
              <p className="text-white font-bold">+92 333 1127836</p>
            </div>
          </div>
        </div>

        {/* 4. CTA Section */}
        <div className="mt-32 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Discuss Your Case with Shah Sahib</h2>
          <a 
            href="tel:+923166644789" 
            className="px-12 py-5 bg-blue-600 hover:bg-blue-500 text-white font-black rounded-2xl transition-all shadow-2xl shadow-blue-600/30 inline-block transform hover:-translate-y-1"
          >
            Get Legal Consultation
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;