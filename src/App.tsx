import { Routes, Route } from 'react-router-dom';
import Layout from '@/components/shared/Layout';
import Home from '@/pages/Home';
import AboutUs from '@/pages/AboutUs';
import Services from '@/pages/Services';
import FAQ from '@/pages/FAQ';
import Contact from '@/pages/Contact';
import ScrollToTop from './sections/scrollTop';
import Portfolio from './pages/portfolio';
import BusinessImpact from './pages/BusinessImpact';


export default function App() {
  return (
    <Layout>


      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/business-impact" element={<BusinessImpact />} />
        <Route path="/portfolios" element={<Portfolio />} />


        <Route path="/faq" element={<FAQ />} />
        <Route path="/faq" element={<FAQ />} />

        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  );
}
