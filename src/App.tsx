import Layout from '@/components/shared/Layout';
import AboutUs from '@/pages/AboutUs';
import Contact from '@/pages/Contact';
import FAQ from '@/pages/FAQ';
import Home from '@/pages/Home';
import Services from '@/pages/Services';
import { Route, Routes } from 'react-router-dom';
import PageLoader from './components/shared/PageLoader';
import BusinessImpact from './pages/BusinessImpact';
import CaseStudyView from './pages/CaseStudyView';
import Portfolio from './pages/portfolio';
import ScrollToTop from './sections/scrollTop';
// import CustomCursor from './components/shared/CustomCursor';

export default function App() {
  return (
    <Layout>
      <PageLoader />
      {/* <CustomCursor /> */}
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/business-impact" element={<BusinessImpact />} />
        <Route path="/portfolios" element={<Portfolio />} />
        <Route path="/case-studies/:slug" element={<CaseStudyView />} />

        <Route path="/faq" element={<FAQ />} />

        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  );
}
