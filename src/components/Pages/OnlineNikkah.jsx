import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Globe, Clock, FileText, CheckCircle } from 'lucide-react';

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
    { icon: <Globe size={20} />, text: "Global Accessibility for Overseas" },
    { icon: <ShieldCheck size={20} />, text: "100% Sharia & Legal Compliant" },
    { icon: <Clock size={20} />, text: "Fast-Track Registration" },
  ];

  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-300 overflow-hidden pt-32 pb-20">
      {/* Background Glows */}
      <div className="absolute top-0 -left-20 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 -right-20 w-96 h-96 bg-blue-900/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Side: Main Content */}
          <div className="space-y-8">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex gap-4">
              {features.map((f, i) => (
                <span key={i} className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-blue-400 bg-blue-400/5 px-3 py-1 rounded-full border border-blue-400/20">
                  {f.icon} {f.text}
                </span>
              ))}
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight">
              <motion.span variants={revealVariants} initial="hidden" animate="visible" className="block">
                Online Nikah
              </motion.span>
              <motion.span variants={revealVariants} initial="hidden" animate="visible" transition={{ delay: 0.5 }} 
                className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 block">
                Process & Procedure
              </motion.span>
            </h1>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }} className="space-y-6 text-slate-400 text-lg leading-relaxed">
              <p>
                Online Nikah represents a contemporary adaptation of traditional Islamic marriage ceremonies, facilitating the union of couples through digital platforms. This innovative approach is the perfect response for individuals across Pakistan and Overseas.
              </p>
              <p>
                Through video conferencing tools and dedicated registration platforms, couples can now fulfill the essential components of the Nikah ceremony without the need for physical presence.
              </p>
            </motion.div>

            {/* Fees & Charges Section */}
            <div className="p-8 rounded-3xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <FileText className="text-blue-500" /> Fee Structure & Charges
              </h3>
              <p className="text-sm text-slate-400 mb-4">
                The online nikah fee structure is transparent and depends on the complexity of the documentation required (Local vs Overseas).
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                  <p className="text-xs text-blue-400 font-bold uppercase">Service Fee</p>
                  <p className="text-white font-medium mt-1">Platform & Officiant charges</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                  <p className="text-xs text-blue-400 font-bold uppercase">Admin Charges</p>
                  <p className="text-white font-medium mt-1">NADRA & Legal Documentation</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Documents Card */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ delay: 0.8 }}
            className="sticky top-32 bg-gradient-to-br from-slate-900 to-slate-950 p-10 rounded-[2.5rem] border border-slate-800 shadow-2xl"
          >
            <h2 className="text-2xl font-bold text-white mb-8 border-b border-slate-800 pb-4">Required Documents</h2>
            
           <ul className="space-y-6">
  {[
    { title: "Original CNIC", desc: "Valid Identity Cards of Bride & Groom" },
    { title: "Witnesses", desc: "Two adult male witnesses with CNIC copies" },
    { title: "Photographs", desc: "Passport-size photographs of the Bride" },
    { title: "Divorce/Death Certificate", desc: "If applicable, legal proof of previous status" },
    { title: "Passport/Visa", desc: "Only for foreigners or Overseas Pakistanis" }
  ].map((doc, index) => (
    // Yahan 'cursor-pointer' add kiya hai
    <li key={index} className="flex gap-4 group cursor-pointer"> 
      <div className="h-6 w-6 rounded-full bg-blue-600/20 flex items-center justify-center shrink-0 mt-1 group-hover:bg-blue-600 transition-colors">
        <CheckCircle size={14} className="text-blue-500 group-hover:text-white" />
      </div>
      <div>
        <h4 className="text-white font-bold text-sm group-hover:text-blue-400 transition-colors">
          {doc.title}
        </h4>
        <p className="text-xs text-slate-500 mt-1">{doc.desc}</p>
      </div>
    </li>
  ))}
</ul>

            {/* Functional WhatsApp Button */}
            <a 
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full mt-10 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-2xl transition-all shadow-xl shadow-blue-600/20 transform hover:-translate-y-1 flex items-center justify-center no-underline"
            >
              Start Online Nikah Process
            </a>
            
            <p className="text-center text-[10px] text-slate-600 mt-6 uppercase tracking-widest">
              Available in Karachi, Lahore, Islamabad & Rawalpindi
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default OnlineNikah;