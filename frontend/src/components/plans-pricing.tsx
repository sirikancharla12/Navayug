import ConnectButton from "../ui/connectButton";
import PricingCard from "../ui/PricingCards";
import SectionHeader from "../ui/sectionHeader";
import pricingPlans from "../data/plans-pricing.json";

export default function PricingSection() {
  return (
    <section className="px-6 md:px-10 lg:px-16 py-20">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-12">
        <div className="flex-1">
          <SectionHeader title="PLANS & PRICING" />
          <h2 className="text-xl lg:text-3xl font-display font-semibold text-[var(--color-dark)] mt-2 leading-tight tracking-tight">
            Plans That Scale With Your Ambition
          </h2>
          <p className="mt-2 text-base lg:text-xl font-text text-[var(--color-soft-gray)] tracking-tight leading-snug font-medium">
            Transparent Pricing For Measurable Results—No Hidden Fees, No Fluff
          </p>
        </div>

        <div className="w-full lg:w-auto">
          <ConnectButton label="KNOW MORE" to="/pricing" />
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {pricingPlans.map((plan, index) => (
          <PricingCard
            key={index}
            title={plan.title}
            price={plan.price}
            currency={plan.currency}
            period={plan.period}
            features={plan.features}
            buttonText={plan.buttonText}
          />
        ))}
      </div>
    </section>
  );
}
