import HeroSection from "./sections/FirstSection";
import MarriageAssessment from "./sections/SecondSection";
/*import RelationshipFramework from "./sections/RelationshipFramework";
import FreeResources from "./sections/FreeResources";
import ServiceGrid from "./sections/ServiceGrid";
import CommunityCTA from "./sections/CommunityCTA";
*/
export default function Home() {
  return (
    <>
      <HeroSection
        headline="Marriage Counselling That Works"
        subtext="Transform your relationship with evidence-based therapy tailored for lasting change."
        imageSrc="/TB_1.jfif"
      />
      <MarriageAssessment />
     {/* <RelationshipFramework />
      <FreeResources />
      <ServiceGrid />
      <CommunityCTA /> */ }
    </>
  );
}
