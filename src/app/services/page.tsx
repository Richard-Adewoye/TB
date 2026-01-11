import { ServiceSectionOne } from "../sections/ServiceSectionOne";
import { ServiceSectionTwo } from "../sections/ServiceSectionTwo";
import { ServiceSectionThree } from "../sections/ServiceSectionThree";

export default function AboutPage() {
  return (
    <main className="w-full overflow-x-hidden">
      <ServiceSectionOne />
      <ServiceSectionTwo />
      <ServiceSectionThree />
    </main>
  );
}
