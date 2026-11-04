import { HeroSection } from "@/components/home/HeroSection";
import { IntroductionSection } from "@/components/home/IntroductionSection";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { SkillsSection } from "@/components/home/SkillsSection";
import { ExperienceSection } from "@/components/home/ExperienceSection";
import { EducationCertificatesSection } from "@/components/home/EducationCertificatesSection";
import { WorkingProcessSection } from "@/components/home/WorkingProcessSection";
import { CallToActionSection } from "@/components/home/CallToActionSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <IntroductionSection />
      <ServicesPreview />
      <FeaturedProjects />
      <SkillsSection />
      <ExperienceSection />
      <EducationCertificatesSection />
      <WorkingProcessSection />
      <CallToActionSection />
    </>
  );
}

