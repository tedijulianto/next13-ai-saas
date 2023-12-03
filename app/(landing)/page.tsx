import { LandingHero } from "@/components/landing_hero";
import { LandingNavbar } from "@/components/landing_navbar";
import { LandingContent } from "@/components/landing_content";

const LandingPage = () => {
  return (
    <div className="h-full">
      <LandingNavbar />
      <LandingHero />
      <LandingContent />
    </div>
  );
};

export default LandingPage;
