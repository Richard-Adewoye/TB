import HeroSection from "./sections/FirstSection";
import MarriageAssessment from "./sections/SecondSection";
import RelationshipFramework from "./sections/ThirdSection";
import FreeResources from "./sections/FourthSection";
import ServiceGrid from "./sections/FifthSection";
import CommunityCTA from "./sections/SixthSection";
import PortraitSection from "./sections/PortraitSection";
import TestimonialSection from "./sections/Testimonial";

export default function Home() {
  return (
    <>
      <PortraitSection />
      <HeroSection
        headline="Marriage Counselling That Works"
        subtext="Transform your relationship with evidence-based therapy tailored for lasting change."
        imageSrc={["/pic-1.jpg", "/pic-2.jpg", "/pic-3.jpg"]}
      />
      <TestimonialSection />
      <MarriageAssessment />
      <RelationshipFramework />
      <FreeResources />
      <ServiceGrid />
      <CommunityCTA /> 
    </>
  );
}