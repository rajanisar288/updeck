import PageTitle from '@/components/shared/PageTitle';
import AboutSection from '@/sections/home/AboutSection';
import ContactFormSection from '@/sections/home/ContactFormSection';
import FAQSection from '@/sections/home/FAQSection';
import HeroSection from '@/sections/home/HeroSection';
import ProjectsSection from '@/sections/home/ProjectsSection';
import ServicesSection from '@/sections/home/ServicesSection';
import SolutionsSection from '@/sections/home/SolutionsSection';

export default function Home() {
  return (
    <>
      <PageTitle title="Home" description="Welcome to Updeck - Your trusted partner" />
      <HeroSection />
      <ServicesSection />
      {/* <LogoMarquee /> */}
      <AboutSection />
      <SolutionsSection />
      <ProjectsSection />
      {/* <StatsSection /> */}
      {/* <AwardsSection />
      <TestimonialsSection /> */}
      <FAQSection />
      <ContactFormSection />
      {/* <ResourceSection /> */}
      {/* <BlogSection /> */}
    </>
  );
}
