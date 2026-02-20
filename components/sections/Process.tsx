const steps = [
  {
    number: "01",
    title: "Discovery & Audit",
    description:
      "We start with a deep dive into your business, goals, competition, and current digital presence. No cookie-cutter templates — I want to understand what actually makes your business tick and where the biggest opportunities live.",
    deliverable: "Free audit report + opportunity map",
  },
  {
    number: "02",
    title: "Strategy & Roadmap",
    description:
      "Based on the audit, I build a clear, prioritized roadmap. You'll know exactly what we're doing, why, and what success looks like. Strategy is worthless without execution clarity.",
    deliverable: "90-day roadmap + KPI framework",
  },
  {
    number: "03",
    title: "Build & Execute",
    description:
      "Hands-on execution — whether that's designing and launching a new website, standing up ad campaigns, implementing AI tools, or producing content. I do the work, not just the advising.",
    deliverable: "Monthly deliverables + progress tracking",
  },
  {
    number: "04",
    title: "Measure & Optimize",
    description:
      "Data drives everything. Monthly reporting shows exactly what's performing and what needs adjustment. I continuously test, iterate, and optimize to compound results over time.",
    deliverable: "Monthly reporting + optimization log",
  },
];

export default function Process() {
  return (
    <section className="section-padding bg-[#0A1628]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 text-white/80 text-sm font-semibold px-4 py-2 rounded-full mb-4">
            How I Work
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            A process built for{" "}
            <span className="text-[#F59E0B]">real results</span>
          </h2>
          <p className="text-white/60 text-lg leading-relaxed">
            No black boxes, no agency speak. A clear, transparent process that
            keeps you informed and in control at every step.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div key={i} className="relative group">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-[#1D4ED8] to-transparent z-0 -translate-y-1/2" />
              )}

              <div className="relative z-10 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#1D4ED8]/40 rounded-2xl p-6 transition-all duration-300 h-full flex flex-col">
                {/* Step number */}
                <div className="text-5xl font-bold text-[#1D4ED8]/30 group-hover:text-[#F59E0B]/50 transition-colors duration-300 mb-4 leading-none">
                  {step.number}
                </div>

                <h3 className="text-white font-bold text-lg mb-3">
                  {step.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed flex-1 mb-4">
                  {step.description}
                </p>

                {/* Deliverable */}
                <div className="bg-[#1D4ED8]/20 border border-[#1D4ED8]/30 rounded-lg px-3 py-2">
                  <p className="text-[#93C5FD] text-xs font-medium">
                    Deliverable: {step.deliverable}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
