import Link from "next/link";
import { CheckCircle2, ArrowRight, Zap } from "lucide-react";

const plans = [
  {
    name: "Starter",
    tagline: "For businesses ready to get online right",
    price: "Let's talk",
    priceNote: "Scoped to your needs",
    color: "border-gray-200",
    badge: null,
    features: [
      "Custom 5-page website",
      "Mobile-first design",
      "Basic on-page SEO",
      "Google Analytics setup",
      "Contact form + CRM integration",
      "1 strategy session / month",
      "Email support",
    ],
    cta: "Start the Conversation",
    ctaVariant: "outline",
  },
  {
    name: "Growth",
    tagline: "For businesses ready to compete and scale",
    price: "Let's talk",
    priceNote: "Tailored engagement",
    color: "border-[#1D4ED8]",
    badge: "Most Popular",
    features: [
      "Custom website (up to 10 pages)",
      "Full SEO campaign",
      "Google Ads management",
      "Monthly reporting dashboard",
      "AI automation audit",
      "Bi-weekly strategy sessions",
      "Priority support",
      "Competitor monitoring",
    ],
    cta: "Get a Growth Plan",
    ctaVariant: "primary",
  },
  {
    name: "Scale",
    tagline: "For businesses ready to dominate their market",
    price: "Custom",
    priceNote: "Enterprise-level scope",
    color: "border-gray-200",
    badge: null,
    features: [
      "Everything in Growth",
      "Full digital marketing suite",
      "AI integration & automation",
      "Content marketing program",
      "Social media management",
      "Dedicated strategy partner",
      "Weekly sessions",
      "White-glove onboarding",
    ],
    cta: "Discuss Your Needs",
    ctaVariant: "outline",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="section-padding bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#EFF6FF] text-[#1D4ED8] text-sm font-semibold px-4 py-2 rounded-full mb-4">
            Packages
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A1628] mb-4">
            Honest pricing,{" "}
            <span className="text-[#1D4ED8]">real results</span>
          </h2>
          <p className="text-[#475569] text-lg leading-relaxed">
            Every engagement is scoped to your specific business and goals.
            These packages are a starting framework — your actual plan will be
            custom-built for you.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative bg-white rounded-2xl p-8 border-2 ${plan.color} flex flex-col ${
                plan.badge ? "shadow-xl shadow-blue-100" : ""
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 bg-[#1D4ED8] text-white text-xs font-bold px-4 py-1.5 rounded-full">
                    <Zap className="w-3 h-3" fill="currentColor" />
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-[#0A1628] font-bold text-2xl mb-1">
                  {plan.name}
                </h3>
                <p className="text-[#475569] text-sm">{plan.tagline}</p>
              </div>

              <div className="mb-6 pb-6 border-b border-gray-100">
                <div className="text-3xl font-bold text-[#0A1628]">
                  {plan.price}
                </div>
                <div className="text-[#475569] text-sm mt-0.5">
                  {plan.priceNote}
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3 flex-1 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#16A34A] mt-0.5 shrink-0" />
                    <span className="text-[#475569] text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                href="/contact"
                className={`inline-flex items-center justify-center gap-2 font-semibold px-6 py-3 rounded-xl transition-all duration-200 group ${
                  plan.ctaVariant === "primary"
                    ? "bg-[#1D4ED8] hover:bg-[#1e40af] text-white hover:shadow-lg hover:shadow-blue-200"
                    : "bg-transparent border-2 border-[#E2E8F0] hover:border-[#1D4ED8] text-[#0A1628] hover:text-[#1D4ED8]"
                }`}
              >
                {plan.cta}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-[#475569] text-sm mt-8">
          All engagements include a free initial consultation and honest scoping.
          No lock-in contracts — I earn your business every month.
        </p>
      </div>
    </section>
  );
}
