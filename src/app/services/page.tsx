import { ServiceSectionTwo } from "../sections/ServiceSectionTwo";
import { ServiceSectionOne } from "../sections/ServiceSectionOne";

export default function AboutPage() {
  return (
    <main className="w-full overflow-x-hidden">
      <ServiceSectionTwo />
      <ServiceSectionOne />
    </main>
  );
}
