import React from 'react';
import { motion } from 'framer-motion';
import heroNikahImage from '../../assets/wedding pic.webp';
import MapPin from 'lucide-react/dist/esm/icons/map-pin';
import CheckCircle from 'lucide-react/dist/esm/icons/check-circle';
import Globe from 'lucide-react/dist/esm/icons/globe';
import Scale from 'lucide-react/dist/esm/icons/scale';
import Shield from 'lucide-react/dist/esm/icons/shield';
import Heart from 'lucide-react/dist/esm/icons/heart';
import Gavel from 'lucide-react/dist/esm/icons/gavel';
import Users from 'lucide-react/dist/esm/icons/users';
import FileText from 'lucide-react/dist/esm/icons/file-text';
import HelpCircle from 'lucide-react/dist/esm/icons/help-circle';

const Home = () => {
  const revealVariants = {
    hidden: { clipPath: 'inset(0 100% 0 0)' },
    visible: {
      clipPath: 'inset(0 0% 0 0)',
      transition: { duration: 1.5, ease: "easeInOut" }
    }
  };

  return (
    <main>
    <div className="bg-slate-950 text-slate-300 font-sans selection:bg-blue-500/30">

      {/* 1. HERO SECTION (Alignment Fixed) */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 lg:pt-0">
        <div className="absolute top-0 -left-20 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]" />

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Column: Text Content */}
          <div className="text-center lg:text-left">
            {/* H1 Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-black text-white leading-tight mb-8 mt-20 tracking-tighter">
              <motion.span variants={revealVariants} initial="hidden" animate="visible" className="block pb-2 ">
           <span className='text-white'>Court Marriage</span> 
              </motion.span>
              <motion.span
                variants={revealVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.5 }}
                className="text-transparent bg-clip-text  block pb-4"
              >
          <span className='text-blue-500'> & Online Nikkah Services in Karachi</span> 
              </motion.span>
            </h1>

            {/* H2 Heading */}
           <h2 className="text-2xl md:text-4xl font-bold mt-4 mb-6 leading-normal pb-2">
  <motion.span 
    variants={revealVariants} 
    initial="hidden" 
    animate="visible" 
    transition={{ delay: 0.8 }} 
    className="flex flex-wrap justify-center lg:justify-start gap-x-3 md:gap-x-4"
  >
    <span className="text-blue-400">Legal process for Court Marriage in Karachi </span>

  </motion.span>
</h2>

            {/* H3 Heading */}
            <h3 className="text-xl md:text-3xl mt-2 font-semibold text-white leading-normal pb-6">
              <motion.span variants={revealVariants} initial="hidden" animate="visible" transition={{ delay: 1.1 }} className="block">
                Same-Day Court Marriage and Nikah Registration services in Karachi
              </motion.span>
            </h3>

            {/* Paragraph */}
          <p className="text-base md:text-lg text-slate-400 mb-10 max-w-3xl mx-auto lg:mx-0 leading-relaxed">
          <strong>Court Marriage & Online Nikah Services in Karachi, Islamabad, Rawalpindi, and Lahore</strong> offer 
          discreet, lawful, and reliable solutions for couples seeking a smooth and legally recognized union. 
          Backed by <strong>40+ years of legal experience</strong>, our team comprises member family lawyers of 
          the <strong>Supreme Court Bar Association </strong>, the <strong>High Court Bar Association</strong>, 
          and the <strong>Karachi Bar Association</strong>, ensuring trusted, court-defensible legal support. 
          With expert guidance on court marriage fees and fully Shari’a-compliant online Nikah procedures, we provide 
          clarity, confidentiality, and complete legal validity at every step.
        </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a href="tel:+923322908556" className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl shadow-lg transition-all text-center no-underline">
                Call for Fee Details
              </a>
            </div>
          </div>

          {/* Right Column: Image (H1 ke barabar set kar di hai) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="hidden lg:flex justify-center items-center"
          >
            <div className="rounded-[3rem] overflow-hidden border border-white/5 shadow-2xl relative group w-full max-w-lg mb-40">
              <img
                src={heroNikahImage}
                alt="Court Marriage and Online Nikah in Pakistan"
                className="w-full h-auto object-cover transform scale-105 group-hover:scale-100 transition-transform duration-1000 mb-40"
             priority />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
            </div>
          </motion.div>

        </div>
      </section>

      {/* 2. DETAILED INTRODUCTION */}
      <section className="py-24 bg-slate-900/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Family Law & Marriage Experts</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full" />
          </div>
          <div className="grid md:grid-cols-2 gap-12 text-lg leading-relaxed text-slate-400">
            <p>
              <strong>Court-MarriageSite</strong> has been established to provide reliable, lawful, and discreet solutions for individuals seeking <strong>Court Marriage</strong>, <strong>Online Marriage</strong>, and <strong>Online Nikah e Shari’a</strong>. Our approach combines religious understanding with statutory compliance, ensuring every matter is handled with care and legality.
            </p>
            <p>
              Whether you require documentation support like a <strong>Duplicate Nikah Nama</strong>, or are facing family disputes such as <strong>Divorce, Khula, or Child Custody</strong>, our platform connects you with experienced family law professionals who understand both Islamic principles and Pakistani law.
            </p>
          </div>
        </div>
      </section>

      {/* 3. SERVICE DETAILS */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="p-8 bg-slate-900 rounded-[2rem] border border-slate-800">
            <Scale className="text-blue-500 mb-4" size={40} />
            <h3 className="text-2xl font-bold text-white mb-4">Court Marriage Process</h3>
            <p className="text-slate-400 mb-4">Court marriage is a civil process recognized under Pakistani law that provides legal protection. Our services ensure lawful completion of all formalities, including affidavits, <strong>Nikah registration</strong>, and <strong>NADRA marriage certificates</strong>.</p>
            <ul className="text-sm space-y-2 text-slate-500">
              <li>• Full legal recognition and official documentation.</li>
              <li>• Suitable for couples seeking enforceable legal rights.</li>
              <li>• 100% confidential and discreet procedure.</li>
            </ul>
          </div>

          <div className="p-8 bg-slate-900 rounded-[2rem] border border-slate-800">
            <Globe className="text-blue-500 mb-4" size={40} />
            <h3 className="text-2xl font-bold text-white mb-4">Online Nikah e Shari’a</h3>
            <p className="text-slate-400 mb-4">Ideal for overseas Pakistanis, our <strong>Online Nikah</strong> services allow couples to solemnize their marriage remotely while fully complying with Islamic principles (Ijab-o-Qabool, Witnesses, and Mahr).</p>
            <ul className="text-sm space-y-2 text-slate-500">
              <li>• Shari’a-compliant Nikah conducted by qualified Nikah Khawan.</li>
              <li>• Internationally recognized documentation.</li>
              <li>• Efficient and lawful religious union for distant couples.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 4. URDU SECTION */}
   {/* 4. URDU SECTION (Fixed Hierarchy & Contrast) */}
<section className="py-24 bg-blue-600/5" dir="rtl">
  <div className="max-w-7xl mx-auto px-6 text-right">
    <h2 className="text-4xl font-black text-white mb-12">کورٹ میرج اور فیملی لا سروسز</h2>
    <div className="grid md:grid-cols-3 gap-8">
      <div className="bg-slate-900 p-8 rounded-2xl border-r-4 border-blue-600">
        {/* h4 ko h3 kiya hierarchy ke liye */}
        <h3 className="text-xl font-bold text-white mb-3 text-blue-400">عدالتی نکاح (Court Marriage)</h3>
        <p className="text-slate-400 text-sm leading-relaxed">پاکستانی قانون کے تحت کورٹ میرج کا باقاعدہ طریقہ کار، جس میں مکمل قانونی تحفظ اور دستاویزات فراہم کی جاتی ہیں۔</p>
      </div>
      <div className="bg-slate-900 p-8 rounded-2xl border-r-4 border-blue-600">
        <h3 className="text-xl font-bold text-white mb-3 text-blue-400">آن لائن نکاح (Online Nikah)</h3>
        <p className="text-slate-400 text-sm leading-relaxed">بیرونِ ملک مقیم پاکستانیوں کے لیے شرعی اصولوں کے مطابق ایجاب و قبول اور نکاح رجسٹریشن کی سہولت۔</p>
      </div>
      <div className="bg-slate-900 p-8 rounded-2xl border-r-4 border-blue-600">
        <h3 className="text-xl font-bold text-white mb-3 text-blue-400">نکاح رجسٹریشن</h3>
        <p className="text-slate-400 text-sm leading-relaxed">نکاح نامہ، کمپیوٹرائزڈ میریج سرٹیفکیٹ، اور ڈپلیکیٹ نکاح نامہ کے حصول میں مکمل قانونی معاونت۔</p>
      </div>
    </div>
  </div>
</section>

      {/* 5. SERVICES LIST */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <h3 className="text-2xl font-bold text-white mb-12 text-center underline decoration-blue-500 underline-offset-8">Complete Marriage & Law Services</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs md:text-sm">
          {["Court Marriage in Lahore", "Court Marriage in Urdu", "Marriage in Islam", "Online Shadi in Pakistan", "Nikah Khawan in Karachi", "Nikah Khawan in Islamabad", "NADRA Marriage Certificate", "Divorce Certificate", "Duplicate Nikah Nama", "Child Custody Law", "Family Law Experts", "Khula Procedure"].map((item, idx) => (
            <div key={idx} className="p-4 bg-slate-900/50 border border-slate-800 rounded-xl text-slate-500 hover:text-blue-400 transition-colors">
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* 6. FAQ SECTION */}
      <section className="py-24 max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            { q: "What is the difference between Nikah and Marriage Registration?", a: "Nikah registration records the religious ceremony, while marriage registration provide formal legal and governmental documentation like the NADRA computerized certificate." },
            { q: "Can we perform Online Nikah without physical presence?", a: "Yes, Online Nikah is valid under Shari'a as long as Ijab-o-Qabool, witnesses, and Mahr are properly arranged via digital communication." },
            { q: "Is court marriage confidential in Pakistan?", a: "Yes, we prioritize the privacy and confidentiality of our clients, ensuring all legal steps are handled discreetly." },
            { q: "What are the requirements for a duplicate Nikah Nama?", a: "It typically requires an application to the relevant Union Council along with identification and proof of the original marriage." }
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

      {/* 7. CONTACT & OFFICES */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-slate-900 rounded-3xl border border-slate-800">
              <MapPin className="text-blue-500 mb-4" />
              <h4 className="text-white font-bold">Karachi Head Office</h4>
              <p className="text-xs text-slate-500 mt-2">Supreme Corner Apartments, Johar Chowrangi, Block 18, Gulistan-e-Johar</p>
              <p className="text-blue-400 font-bold mt-4">+92 331 6644789</p>
            </div>
            <div className="p-8 bg-slate-900 rounded-3xl border border-slate-800">
              <MapPin className="text-blue-500 mb-4" />
              <h4 className="text-white font-bold">Islamabad Office</h4>
              <p className="text-xs text-slate-500 mt-2">Laraib Plaza, Karachi Company, Near TCS Express Centre, G-9 Markaz, Mangla Road</p>
              <p className="text-blue-400 font-bold mt-4">+92 302 6644789</p>
            </div>
            <div className="p-8 bg-slate-900 rounded-3xl border border-slate-800">
              <MapPin className="text-blue-500 mb-4" />
              <h4 className="text-white font-bold">Lahore Office</h4>
              <p className="text-xs text-slate-500 mt-2">1st Floor, Al-Mairaj Arcade, Near Surayya Azeem Trust Hospital, Chauburji Chowk.</p>
              <p className="text-blue-400 font-bold mt-4">+92 316 6644789</p>
            </div>
          </div>
        </div>
      </section>
    </div>
    </main>
  );
};

export default Home;