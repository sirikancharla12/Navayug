import AboutUsSection from "../components/about/aboutSection";
import ConnectButton from "../components/connectButton";
import ContactForm from "../components/contact/contact";
import DottedLine from "../components/dottedline";
import Faq from "../components/Faq/faq";
import FeaturesSection from "../components/features/featuresSection";
import HeroSection from "../components/heroSection";
import { Navbar } from "../components/navigation/navbar";
import ProcessComponent from "../components/process/processSection";
import SectionHeader from "../components/sectionHeader";
import ServicesSection from "../components/service/servicesSection";
import ScrollingTestimonials from "../components/testimonials/testimonials";
import WorksSection from "../components/works/worksSection";

export default function LandingPage() {
  return (
    <>
<HeroSection/>
   <DottedLine className="my-4" />
   <AboutUsSection/>
      <DottedLine className="my-4" />
      <ServicesSection/>
      <DottedLine className="my-4" />
      <FeaturesSection/>
      <DottedLine className="my-4" />
      <WorksSection/>
      <DottedLine className="my-4" />
      <ProcessComponent/>
      <ScrollingTestimonials/>
      <Faq/>
      <ContactForm/>

    </>
  );
}
