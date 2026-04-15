import { Link } from 'react-router';
import logo from '../assets/logo.jpeg'
const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          {/* Brand Section */}
          <div className="space-y-4">
            <Link
              to="/"
              className="flex items-center gap-3 group no-underline"
            >
              <div className="relative flex-shrink-0">
                <img
                  src={logo}
                  alt="Legal Marriage Logo"
                  className="h-12 w-12 rounded-full object-cover border-2 border-blue-500/50 group-hover:border-blue-400 transition-all duration-300 shadow-[0_0_15px_rgba(59,130,246,0.3)]"
                />
                {/* Background Glow */}
                <div className="absolute inset-0 rounded-full bg-blue-500/10 blur-md -z-10 group-hover:bg-blue-500/30 transition-all" />
              </div>

              <div className="flex flex-col">
                <h1 className="text-xl md:text-2xl font-black tracking-tighter text-white leading-none">
                  LEGAL<span className="text-blue-500">MARRIAGE</span>
                </h1>
                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em] mt-1">
                  Law Firm
                </span>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Providing premier legal services for court marriages and Nikah registrations across Pakistan with complete legal protection.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Quick Navigation</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><Link to="/" className="hover:text-blue-500 transition-colors">Home</Link></li>
              <li><Link to="/procedure" className="hover:text-blue-500 transition-colors">Marriage Procedure</Link></li>
              <li><Link to="/documents" className="hover:text-blue-500 transition-colors">Required Documents</Link></li>
              <li><Link to="/contact" className="hover:text-blue-500 transition-colors">Contact Expert</Link></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Contact Details</h4>
            <div className="space-y-3">
              <p className="text-slate-400 text-sm flex items-center gap-2">
                <span className="text-blue-500">📞</span> 021-37451359
              </p>
              <p className="text-slate-400 text-sm flex items-start gap-2">
                <span className="text-blue-500">📍</span>
                Supreme Corner Apartments, Johar Chowrangi, Block 18, Gulistan-e-Johar

              </p>
              <div className="pt-2">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-[10px] font-bold uppercase">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse"></span>
                  Available on WhatsApp
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] md:text-xs text-slate-600 uppercase font-bold tracking-[0.2em]">
          <p>© 2026 Court Marriage in Pakistan. All Rights Reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;