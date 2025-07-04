import React from "react";
import SectionHeader from "./sectionHeader";
import ConnectButton from "./connectButton";

const services = [
  {
    id: "/001",
    title: "Branding & Digital Design",
    description: "Strategic Visual Identities Crafted For Digital-First Audiences",
    image: "/service1.png", 
  },
  {
    id: "/002",
    title: "Web & App Development",
    description: "Seamless Digital Experiences Engineered For Performance",
    image: "/service2.png",
  },
  {
    id: "/003",
    title: "Performance Marketing",
    description: "Data-Optimized Campaigns That Scale Your Growth",
    image: "/service3.png",
  },
];

export default function ServicesSection() {
  return (
    <section className="px-6 md:px-10 lg:px-16 py-20">
      {/* Header */}
      <div className="flex justify-between items-center mb-10">
        <div>
          <SectionHeader title="services" />
          <h2 className="text-3xl lg:text-4xl font-bold text-[var(--color-dark)] mt-2 leading-snug">
            Precision–Crafted Digital Services
          </h2>
 <p
  className="mt-2 text-base lg:text-2xl text-[var(--color-soft-gray)] leading-snug font-thin"
>
  We Deliver Specialized Solutions, Not Templates. Every Strategy <br />
  Is Built For Your Brand&apos;s Unique Needs
</p>


        </div>

        <ConnectButton label="KNOW MORE" to="/services" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-[#f9f9f9] p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <p className="text-sm text-[var(--color-soft-gray)] mb-1">{service.id}</p>
            <h3 className="text-xl font-semibold text-[var(--color-dark)] mb-2">
              {service.title}
            </h3>
            <p className="text-sm text-[var(--color-soft-gray)] mb-4 font-medium">
              {service.description}
            </p>
            <img src={service.image} alt={service.title} className="w-auto h-24 mx-auto" />
          </div>
        ))}
      </div>
    </section>
  );
}
