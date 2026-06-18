import HeroSection from '@/sections/home/HeroSection';
import ServicesSection from '@/sections/home/ServicesSection';
import LogoMarquee from '@/sections/home/LogoMarquee';
import AboutSection from '@/sections/home/AboutSection';
import SolutionsSection from '@/sections/home/SolutionsSection';
import ProjectsSection from '@/sections/home/ProjectsSection';
import StatsSection from '@/sections/home/StatsSection';
import FAQSection from '@/sections/home/FAQSection';
import ContactFormSection from '@/sections/home/ContactFormSection';
import ResourceSection from '@/sections/home/ResourceSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <LogoMarquee />
      <AboutSection />
      <SolutionsSection />
      <ProjectsSection />
      <StatsSection />
      {/* <AwardsSection />
      <TestimonialsSection /> */}
      <FAQSection />
      <ContactFormSection />
      <ResourceSection />
      {/* <BlogSection /> */}
    </>
  );
}
