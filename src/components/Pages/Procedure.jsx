import React from 'react';
import { motion } from 'framer-motion';

const Procedure = () => {
  // Aapka WhatsApp link taiyar hai
  const waNumber = "923322908556";
  const waMessage = encodeURIComponent("Assalam-o-Alaikum Shah Sahib, Procedure page dekh kar rabta kar raha hoon. Mujhe details chahiye.");
  const waUrl = `https://wa.me/${waNumber}?text=${waMessage}`;

  const steps = [
    {
      number: "01",
      title: "Free Will & Consent",
      description: "Both parties must be at least 18 years old. We ensure free will and legal eligibility under the Muslim Family Laws Ordinance of Pakistan.",
      tag: "Eligibility"
    },
    {
      number: "02",
      title: "Nikah Ceremony",
      description: "The official Nikah is solemnized by a government-registered Nikah Khwan. We arrange two witnesses as required by Sharia and Civil Law.",
      tag: "Religious Rite"
    },
    {
      number: "03",
      title: "Court Documentation",
      description: "Our lawyers draft an affidavit of free will and other necessary legal declarations, which are then attested by the Notary Public.",
      tag: "Legalization"
    },
    {
      number: "04",
      title: "NADRA Registration",
      description: "We facilitate the process of obtaining the NADRA Computerized Marriage Certificate (MRC), which is essential for legal status and visa processing.",
      tag: "Documentation"
    }
  ];

  return (
    <div className="bg-slate-950 min-h-screen py-24 px-6 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] -z-0" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-900/5 rounded-full blur-[100px] -z-0" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-6">
            Marriage <span className="text-blue-500 uppercase">Procedure</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            A transparent, step-by-step guide to your legal marriage process in Pakistan. 
            From legal consultation to NADRA registration, we handle everything.
          </p>
        </motion.div>

        {/* Timeline Section */}
        <div className="relative border-l-2 border-slate-800 ml-4 md:ml-12 space-y-16">
          {steps.map((s, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative pl-10 group"
            >
              <div className="absolute -left-[9px] top-2 h-4 w-4 rounded-full bg-slate-950 border-2 border-blue-500 group-hover:bg-blue-500 transition-all duration-300 shadow-[0_0_15px_rgba(59,130,246,0.3)]" />
              
              <div className="flex flex-col md:flex-row md:items-center gap-4 mb-2">
                <span className="text-5xl font-black text-slate-900 group-hover:text-blue-600/30 transition-all duration-500 leading-none">
                  {s.number}
                </span>
                <div className="inline-block px-3 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold uppercase tracking-widest w-fit">
                  {s.tag}
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                {s.title}
              </h3>
              
              <p className="text-slate-400 text-lg leading-relaxed max-w-2xl">
                {s.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Call to Action Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 p-8 md:p-12 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 text-center relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity" />
          
          <h4 className="text-2xl font-bold text-white mb-4 relative z-10">Confidential Legal Consultation</h4>
          <p className="text-slate-400 mb-8 relative z-10">Our legal experts are available to guide you through the process.</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            {/* Call Button */}
            <a href="tel:+923322908556" className="px-10 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all shadow-xl shadow-blue-600/20 transform hover:-translate-y-1 text-center">
              Call Now
            </a>
            {/* WhatsApp Button */}
            <a href={waUrl} target="_blank" rel="noopener noreferrer" className="px-10 py-4 bg-transparent border border-slate-700 hover:border-slate-500 text-white font-bold rounded-xl transition-all text-center">
              Message on WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Procedure;