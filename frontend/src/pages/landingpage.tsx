import AboutUsSection from "../components/aboutSection";
import ConnectButton from "../components/connectButton";
import DottedLine from "../components/dottedline";
import HeroSection from "../components/heroSection";
import { Navbar } from "../components/navbar";
import SectionHeader from "../components/sectionHeader";
import ServicesSection from "../components/servicesSection";

export default function LandingPage() {
  return (
    <>

  
<HeroSection/>
   <DottedLine className="my-6" />
   <AboutUsSection/>
      <DottedLine className="my-6" />
      <ServicesSection/>
    </>
  );
}
