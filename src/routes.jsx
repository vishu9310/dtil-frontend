import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages /Home';
import About from './pages /About';
import Services from './pages /Services';
import CSR from './pages /CSR';
import Header from './components/Header';
import GrowthAdvisary from './pages /GrowthAdvisary';
import ConsultingAndAdvisory from './pages /ConsultingAndAdvisory';
import TechnologyTransformation from './pages /TechnologyTransformation';
import NextGenServices from './pages /NextGenServices';
import TalentUnleashed from './pages /TalentUnleashed';
import Csr from './pages /CSR';
import OurSolutions from './pages /OurSolutions';

export default function AppRoutes() {
    return (
        <Router>
                <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                 <Route path="/growthAdvisary" element={<GrowthAdvisary />} />
                 <Route path="/ConsultingAndAdvisory" element={<ConsultingAndAdvisory />} />
                 <Route path="/TechnologyTransformation" element={<TechnologyTransformation />} />
                 <Route path="/Next-GenServices" element={<NextGenServices/>} />
                 <Route path="/TalentUnleashed" element={<TalentUnleashed/>} />
                 <Route path="/csr" element={<Csr/>} />  
                 <Route path="/OurSolutions" element={<OurSolutions/>} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                {/* <Route path="/talent" element={<Talent />} /> */}
               
               
                {/* <Route path="/contact" element={<Contact />} /> */}
            </Routes>
        </Router>
    );
}
