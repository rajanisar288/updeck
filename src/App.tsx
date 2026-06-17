import { Routes, Route } from 'react-router-dom';
import Layout from '@/components/shared/Layout';
import Home from '@/pages/Home';
import AboutUs from '@/pages/AboutUs';
import Services from '@/pages/Services';
import FAQ from '@/pages/FAQ';
import Contact from '@/pages/Contact';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  );
}
