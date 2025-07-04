import React from "react";
import SectionHeader from "./sectionHeader";
import ConnectButton from "./connectButton";

export default function AboutUsSection() {
  return (
    <section className="px-6 md:px-10 lg:px-16 py-20">
      <div className="flex flex-col md:flex-row gap-10 items-start">
        <div className="basis-[30%]">
          <SectionHeader title="About us" />
          <img
            src="/about-graphic.png"
            alt="About graphic"
            className="mt-6 w-full max-w-sm md:max-w-full"
          />
        </div>

        <div className="basis-[70%]">
          <p className="text-2xl lg:text-3xl font-medium text-[var(--color-dark)] leading-snug tracking-tight">
            NAVAYUG specializes in strategic digital solutions—from brand identity to
            performance–driven web development. We fuse{" "}
            <span className="font-[InstrumentSerifItalic] italic text-[var(--color-secondary)] font-medium ">design, technology,</span> and{" "}
            <span className="font-[InstrumentSerifItalic] italic text-[var(--color-secondary)] font-medium">marketing</span> into seamless
            experiences that cut through the digital noise and deliver measurable results.
          </p>

          <p className="mt-6 text-xl lg:text-2xl text-[var(--color-soft-gray)] leading-snug font-medium">
            What defines us is our ruthless focus on execution. We merge analytical precision
            with creative risk-taking, balancing data with intuition to craft solutions that
            don’t just follow trends—they set them.
          </p>

          <div className="mt-8">
            <ConnectButton label="MORE ABOUT US" to="/about" />
          </div>
        </div>
      </div>
    </section>
  );
}
