import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Globe, Clock, FileText, CheckCircle, Users, Scale, PhoneCall } from 'lucide-react';

const OnlineNikah = () => {
  // WhatsApp Configuration
  const waNumber = "923322908556";
  const waMessage = encodeURIComponent("Assalam-o-Alaikum Shah Sahib, mujhe Online Nikah ke process aur fees ke bare mein maloomat chahiye.");
  const waUrl = `https://wa.me/${waNumber}?text=${waMessage}`;

  const revealVariants = {
    hidden: { clipPath: 'inset(0 100% 0 0)' },
    visible: { 
      clipPath: 'inset(0 0% 0 0)', 
      transition: { duration: 1.5, ease: "easeInOut" } 
    }
  };

  const features = [
    { icon: <Globe size={14} />, text: "Overseas Support" },
    { icon: <ShieldCheck size={14} />, text: "Sharia Compliant" },
    { icon: <Scale size={14} />, text: "Legal NADRA Process" },
  ];

  const documents = [
    { title: "Original CNIC", desc: "Valid Identity Cards of Bride & Groom" },
    { title: "Witnesses", desc: "Two adult male witnesses with CNIC copies" },
    { title: "Photographs", desc: "Passport-size photographs of the Bride" },
    { title: "Divorce/Death Certificate", desc: "Legal proof of previous status (if applicable)" },
    { title: "Passport/Visa", desc: "Required for Foreigners or Overseas Pakistanis" }
  ];

  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-300 overflow-hidden pt-24 md:pt-32 pb-20">
      {/* Background Decorative Glows */}
      <div className="absolute top-0 -left-20 w-72 md:w-96 h-72 md:h-96 bg-blue-600/10 rounded-full blur-[100px] md:blur-[120px]" />
      <div className="absolute bottom-0 -right-20 w-72 md:w-96 h-72 md:h-96 bg-blue-900/10 rounded-full blur-[100px] md:blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left Side: Information Section */}
          <div className="space-y-8">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-wrap gap-2 md:gap-4">
              {features.map((f, i) => (
                <span key={i} className="flex items-center gap-1.5 text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-blue-400 bg-blue-400/5 px-3 py-1 rounded-full border border-blue-400/20">
                  {f.icon} {f.text}
                </span>
              ))}
            </motion.div>

            <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tighter">
                <motion.span variants={revealVariants} initial="hidden" animate="visible" className="block">
                    Online Nikah
                </motion.span>
                <motion.span variants={revealVariants} initial="hidden" animate="visible" transition={{ delay: 0.5 }} 
                    className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 block">
                    Process & Fee 2026
                </motion.span>
                </h1>
                <p className="text-slate-500 font-medium text-sm md:text-base">
                    Official Services for Karachi, Islamabad, Lahore, Rawalpindi & Overseas.
                </p>
            </div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }} className="space-y-6 text-slate-400 text-base md:text-lg leading-relaxed">
              <p>
                <strong>Online Nikah</strong> in Pakistan is a legal and Sharia-compliant way to solemnize marriage via video link. This service is ideal for <strong>Overseas Pakistanis</strong> or couples who cannot be physically present in the same city.
              </p>
              <p>
                Our registered Nikah Khawans ensure that all requirements, including Ijab-o-Qabool and presence of witnesses, are fulfilled according to Islamic laws and the Family Courts Act.
              </p>
            </motion.div>

            {/* Fees & Charges Card */}
            <div className="p-6 md:p-8 rounded-3xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm space-y-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <FileText className="text-blue-500" /> Fee Structure
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 hover:border-blue-500/50 transition-colors">
                  <p className="text-[10px] text-blue-400 font-bold uppercase tracking-widest">Nikah Khawan Fee</p>
                  <p className="text-white font-medium mt-1">Sermon & Sharia Services</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 hover:border-blue-500/50 transition-colors">
                  <p className="text-[10px] text-blue-400 font-bold uppercase tracking-widest">Documentation</p>
                  <p className="text-white font-medium mt-1">NADRA Marriage Certificate</p>
                </div>
              </div>
              <p className="text-xs text-slate-500 italic">
                *Fees may vary based on location (Local vs International) and specific legal requirements.
              </p>
            </div>
          </div>

          {/* Right Side: Sticky Documents & CTA Card */}
          <div className="lg:sticky lg:top-32 w-full">
            <motion.div 
              initial={{ opacity: 0, x: 30 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ delay: 0.8 }}
              className="bg-gradient-to-br from-slate-900 to-slate-950 p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] border border-slate-800 shadow-2xl"
            >
              <h2 className="text-2xl font-bold text-white mb-6 md:mb-8 border-b border-slate-800 pb-4">Legal Requirements</h2>
              
              <ul className="space-y-5 md:space-y-6">
                {documents.map((doc, index) => (
                  <li key={index} className="flex gap-4 group cursor-default"> 
                    <div className="h-6 w-6 rounded-full bg-blue-600/10 flex items-center justify-center shrink-0 mt-1 border border-blue-500/20 group-hover:bg-blue-600 group-hover:border-blue-600 transition-all duration-300">
                      <CheckCircle size={14} className="text-blue-500 group-hover:text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-sm group-hover:text-blue-400 transition-colors">
                        {doc.title}
                      </h4>
                      <p className="text-[11px] md:text-xs text-slate-500 mt-1">{doc.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Fully Responsive CTA Button */}
              <div className="mt-8 md:mt-10">
                <a 
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 md:py-5 bg-blue-600 hover:bg-blue-500 text-white font-black text-sm md:text-base rounded-xl md:rounded-2xl transition-all duration-300 shadow-xl shadow-blue-600/20 hover:shadow-blue-600/40 transform hover:-translate-y-1 active:scale-[0.98] flex items-center justify-center gap-3 no-underline text-center"
                >
                  <Users size={18} />
                  <span>Schedule Online Nikah Now</span>
                </a>
                
                <div className="flex items-center justify-center gap-4 mt-6">
                    <div className="h-[1px] flex-1 bg-slate-800"></div>
                    <span className="text-[10px] text-slate-600 font-bold uppercase tracking-[0.2em]">Quick Contact</span>
                    <div className="h-[1px] flex-1 bg-slate-800"></div>
                </div>

                <div className="grid grid-cols-2 gap-3 mt-6">
                    <a href="tel:+923322908556" className="flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-800/30 border border-slate-800 text-[11px] font-bold text-slate-300 hover:bg-slate-800 transition-all no-underline">
                        <PhoneCall size={14} /> Call Now
                    </a>
                    <div className="flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-800/30 border border-slate-800 text-[11px] font-bold text-slate-500 cursor-default">
                        24/7 Available
                    </div>
                </div>
              </div>

              <p className="text-center text-[9px] md:text-[10px] text-slate-600 mt-8 uppercase tracking-[0.15em] font-medium">
                Verified Registration in Karachi • Islamabad • Lahore • Rawalpindi
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default OnlineNikah;