import React, { useState } from 'react';
import { NavLink, Link } from 'react-router'; 
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from "../assets/logo.jpeg"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false); 
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false); 

  const waNumber = "923322908556";
  const waMessage = encodeURIComponent("Assalam-o-Alaikum Shah Sahib, maine aapki website LEGAL MARRIAGE dekhi hai aur mujhe mazeed maloomat chahiye.");
  const waUrl = `https://wa.me/${waNumber}?text=${waMessage}`;

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Procedure', path: '/procedure' },
    { name: 'Online Nikah', path: '/online-nikah-navigating-the-digital-path-to-marriage' },
    { name: 'About Us', path: '/about-us' }
  ];
  
  const services = [
    { name: 'Court Marriage Karachi', path: '/services/court-marriage-karachi' },
    { name: 'Court Marriage Islamabad', path: '/services/court-marriage-islamabad' },
    { name: 'Court Marriage Punjab', path: '/services/court-marriage-punjab' },
    { name: 'Court Marriage Rawalpindi', path: '/services/court-marriage-rawalpindi' },
  ];

  // Fix 1: Color Contrast improved from slate-400 to slate-300 for better readability
  const activeStyle = ({ isActive }) => 
    `relative text-sm font-medium transition-all duration-300 ${
      isActive ? 'text-blue-500' : 'text-slate-300 hover:text-white'
    }`;

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/90 border-b border-slate-800 w-full" role="navigation">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        <Link to="/" className="flex items-center gap-3 group no-underline" aria-label="Legal Marriage - Home">
          <div className="relative flex-shrink-0">
            <img 
              src={logo} 
              alt="Legal Marriage Law Firm Logo" 
              // Fix 2: Added explicit width/height for LCP & Performance
              width="48"
              height="48"
              className="h-12 w-12 rounded-full object-cover border-2 border-blue-500/50 group-hover:border-blue-400 transition-all duration-300 shadow-[0_0_15px_rgba(59,130,246,0.3)]" 
            />
            <div className="absolute inset-0 rounded-full bg-blue-500/10 blur-md -z-10 group-hover:bg-blue-500/30 transition-all" />
          </div>

          <div className="flex flex-col">
            <h1 className="text-xl md:text-2xl font-black tracking-tighter text-white leading-none">
              Court <span className="text-yellow-500 mx-2">MARRIAGE</span> Site
            </h1>
            {/* Fix 3: Contrast improved (slate-500 to slate-400) */}
            <span className="text-[14px] text-white-600 mr-15">PROFESSIONAL</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <NavLink key={item.name} to={item.path} className={activeStyle}>
              {({ isActive }) => (
                <>
                  {item.name}
                  {isActive && (
                    <motion.div 
                      layoutId="activeTab"
                      className="absolute -bottom-[31px] left-0 right-0 h-[2px] bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}

          <div 
            className="relative py-4"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            {/* Contrast fix: slate-400 to slate-300 */}
            <button 
              className="flex items-center gap-1 text-sm font-medium text-slate-300 hover:text-white transition-colors"
              aria-expanded={isServicesOpen}
              aria-haspopup="true"
            >
              Services <ChevronDown size={14} className={`transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {isServicesOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-0 w-64 bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-2"
                >
                  {services.map((service) => (
                    <NavLink 
                      key={service.path}
                      to={service.path}
                      className={({ isActive }) => 
                        `block px-4 py-3 text-sm rounded-xl transition-all ${
                          isActive ? 'bg-yellow-500/20 text-yellow-500' : 'text-slate-300 hover:text-white hover:bg-white/5'
                        }`
                      }
                    >
                      {service.name}
                    </NavLink>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <a href={waUrl} target="_blank" rel="noopener noreferrer"
            className="hover:bg-yellow-600 bg-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-bold transition-all shadow-lg"
          >
            Get Started
          </a>
        </div>

        {/* Mobile Toggle - FIXED: aria-label for Screen Readers */}
      {/* Mobile Toggle - FIXED with aria-label */}
<div className="md:hidden flex items-center">
  <button 
    onClick={() => setIsOpen(!isOpen)} 
    className="text-white p-2 focus:outline-none"
    // Ye hai asli fix jo Lighthouse maang raha hai:
    aria-label={isOpen ? "Close menu" : "Open menu"} 
    aria-expanded={isOpen}
  >
    {isOpen ? (
      <X size={28} aria-hidden="true" />
    ) : (
      <Menu size={28} aria-hidden="true" />
    )}
  </button>
</div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-slate-950 border-b border-slate-800 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navItems.map((item) => (
                <NavLink key={item.name} to={item.path} onClick={() => setIsOpen(false)}
                  className={({ isActive }) => `text-lg font-medium ${isActive ? 'text-yellow-500' : 'text-slate-300'}`}
                >
                  {item.name}
                </NavLink>
              ))}

              <div className="flex flex-col gap-2">
                <button 
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                  className="flex items-center justify-between text-lg font-medium text-slate-300 w-full"
                  aria-expanded={isMobileServicesOpen}
                >
                  Services 
                  <ChevronDown size={20} className={`transition-transform duration-300 ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                <AnimatePresence>
                  {isMobileServicesOpen && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden flex flex-col gap-4 pl-4 border-l border-slate-800 mt-2"
                    >
                      {services.map((service) => (
                        <NavLink 
                          key={service.path} 
                          to={service.path} 
                          onClick={() => setIsOpen(false)}
                          className={({ isActive }) => `text-base ${isActive ? 'text-yellow-500 font-semibold' : 'text-slate-400'}`}
                        >
                          {service.name}
                        </NavLink>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <a href={waUrl} target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}
                className="bg-blue-600 text-white px-5 py-4 rounded-xl text-center text-sm font-bold mt-4 shadow-lg shadow-blue-500/20"
              >
                Contact Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;