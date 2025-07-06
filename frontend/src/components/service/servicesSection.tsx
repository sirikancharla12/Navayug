
import SectionHeader from "../sectionHeader";
import ConnectButton from "../connectButton";
import ServiceCard from "./serviceCard";
import services from "../../constants/utils/servicecards.json";

export default function ServicesSection() {
  return (
    <section className="px-6 md:px-10 lg:px-16 py-20">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-12">
        <div className="flex-1">
          <SectionHeader title="services" />
          <h2 className="text-3xl lg:text-4xl font-display font-semibold text-[var(--color-dark)] mt-2 leading-tight tracking-tight">
            Precision–Crafted Digital Services
          </h2>
          <p className="mt-2 text-base lg:text-2xl font-text text-[var(--color-soft-gray)] tracking-tight leading-snug font-medium">
            We Deliver Specialized Solutions, Not Templates. Every Strategy<br className="hidden sm:block" />
            Is Built For Your Brand&apos;s Unique Needs
          </p>
        </div>

        <div className="w-full lg:w-auto">
          <ConnectButton label="KNOW MORE" to="/services" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            id={service.id}
            title={service.title}
            description={service.description}
            image={service.image}
          />
        ))}
      </div>
    </section>
  );
}
