import React from 'react';
import { Routes, Route } from 'react-router'; 
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './components/Pages/Home.jsx';
import Procedure from './components/Pages/Procedure.jsx';
import Contact from './components/Pages/Contact.jsx';

import CourtMarriageKarachi from './components/Pages/Services/CourtMarriageKarachi.jsx';
import CourtMarriageIslamabad from './components/Pages/Services/CourtMarriageIslamabad.jsx';
import CourtMarriageRawalpindi from './components/Pages/Services/CourtMarriageRawalpindi.jsx';
import CourtMarriagePunjab from './components/Pages/Services/CourtMarriagePunjab.jsx';
import AboutUs from './components/AboutUs.jsx';
import OnlineNikah from './components/Pages/OnlineNikkah.jsx'
function App() {
  return (
    <div className="bg-slate-950 min-h-screen"> 
      <Navbar />
      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/procedure" element={<Procedure />} />
        <Route path="/online-nikah-navigating-the-digital-path-to-marriage" element={<OnlineNikah/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/about-us' element={<AboutUs/>}/>
        <Route/>
        {/* City Specific Service Routes */}
        <Route path="/services/court-marriage-karachi" element={<CourtMarriageKarachi />} />
        <Route path="/services/court-marriage-islamabad" element={<CourtMarriageIslamabad />} />
        <Route path="/services/court-marriage-rawalpindi" element={<CourtMarriageRawalpindi />} />
        <Route path="/services/court-marriage-punjab" element={<CourtMarriagePunjab/>} />
        
        {/* Agar koi wrong URL daale toh Home par bhej de */}
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;