import React from 'react';
import { motion } from 'framer-motion';

const ServiceLayout = ({ city, title, description, jurisdiction, courtName }) => {
  const revealVariants = {
    hidden: { clipPath: 'inset(0 100% 0 0)' },
    visible: { 
      clipPath: 'inset(0 0% 0 0)', 
      transition: { duration: 1.5, ease: "easeInOut" } 
    }
  };

  return (
    <div className="relative min-h-screen bg-slate-950 overflow-hidden pt-32 pb-20">
      {/* Glows */}
      <div className="absolute top-0 -left-20 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 -right-20 w-96 h-96 bg-blue-900/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Content */}
          <div className="max-w-2xl">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-blue-500 font-bold uppercase tracking-widest text-sm mb-4">
              Legal Services in {city}
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-8">
              <motion.span variants={revealVariants} initial="hidden" animate="visible" className="block">
                Court Marriage
              </motion.span>
              <motion.span variants={revealVariants} initial="hidden" animate="visible" transition={{ delay: 0.5 }} 
                className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 block">
                In {city}
              </motion.span>
            </h1>

            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="text-slate-400 text-lg mb-10 leading-relaxed">
              {description}
            </motion.p>

            {/* Jurisdiction Details Card */}
            <div className="p-8 rounded-3xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm mb-10">
              <h3 className="text-xl font-bold text-white mb-4">Legal Jurisdiction</h3>
              <p className="text-slate-400 mb-6">Our lawyers facilitate the process directly at the <span className="text-blue-400 font-semibold">{courtName}</span>.</p>
              <ul className="space-y-3">
                {jurisdiction.map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-slate-300">
                    <div className="h-1.5 w-1.5 rounded-full bg-blue-500" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: Required Documents Section */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8 }}
            className="bg-gradient-to-br from-slate-900 to-slate-950 p-10 rounded-[2.5rem] border border-slate-800 shadow-2xl"
          >
            <h2 className="text-2xl font-bold text-white mb-8">Required Documents</h2>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="h-10 w-10 rounded-full bg-blue-600/20 flex items-center justify-center text-blue-500 font-bold shrink-0">1</div>
                <div>
                  <h4 className="text-white font-bold">Groom & Bride</h4>
                  <p className="text-sm text-slate-400 mt-1">Original CNIC, 4 Passport size photos, and Age Proof (18+).</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="h-10 w-10 rounded-full bg-blue-600/20 flex items-center justify-center text-blue-500 font-bold shrink-0">2</div>
                <div>
                  <h4 className="text-white font-bold">Witnesses</h4>
                  <p className="text-sm text-slate-400 mt-1">2 Adult witnesses with valid Original CNICs.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="h-10 w-10 rounded-full bg-blue-600/20 flex items-center justify-center text-blue-500 font-bold shrink-0">3</div>
                <div>
                  <h4 className="text-white font-bold">NADRA Status</h4>
                  <p className="text-sm text-slate-400 mt-1">Assistance in updating marital status and MRC issuance.</p>
                </div>
              </div>
            </div>

            <button className="w-full mt-10 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-2xl transition-all">
              Book Appointment in {city}
            </button>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default ServiceLayout;