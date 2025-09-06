import HeroSection from "../component/HeroSection";
import StatsSection from "../component/StatsSection";
import ClientSection from "../component/ClientSection";
import TestimonialSection from "../component/TestimonialSection";
import ServicesSection from "../component/ServicesSection";
import ImpactCardSection from "../component/ImpactCardSection";
import TeamSection from "../component/TeamSection";
import StudyCaseSection from "../component/StudyCaseSection";
import CTASection from "../component/CTASection";
import Footer from "../component/Footer";

export default function Home() {
  return (
    <div className="relative">
      <div id="hero-section" className="scroll-mt-20">
        <HeroSection />
      </div>
      <div className="animate-fade-in-up">
        <StatsSection />
      </div>
      <div className="animate-fade-in-up">
        <ClientSection />
      </div>
      <div id="about-section" className="scroll-mt-20">
        <TestimonialSection />
      </div>
      <div id="services-section" className="scroll-mt-20">
        <ServicesSection />
      </div>
      <div id="industry-section" className="scroll-mt-20">
        <ImpactCardSection />
      </div>
      <div id="team-section" className="scroll-mt-20">
        <TeamSection />
      </div>
      <div className="animate-fade-in-up">
        <StudyCaseSection />
      </div>
      <div id="resources-section" className="scroll-mt-20">
        <CTASection />
      </div>
      <div id="contact-section" className="scroll-mt-20">
        <Footer />
      </div>
    </div>
  );
}
