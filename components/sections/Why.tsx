import { ShieldCheck, Users, Lightbulb, LineChart, MapPin, Clock } from "lucide-react";

const reasons = [
  {
    icon: MapPin,
    title: "Ohio-First Mindset",
    description:
      "I live here, I work here, I know Ohio markets. Local knowledge means better strategies, better connections, and a genuine investment in your success.",
  },
  {
    icon: ShieldCheck,
    title: "No Fluff, Just Results",
    description:
      "I'm not selling you a retainer to run basic reports. Every hour goes toward moving your business forward with honest, transparent communication.",
  },
  {
    icon: Lightbulb,
    title: "Strategy Meets Execution",
    description:
      "Most consultants strategize. Most agencies execute. I do both — bringing senior-level thinking and hands-on implementation without the overhead.",
  },
  {
    icon: LineChart,
    title: "Data-Driven Everything",
    description:
      "Decisions based on data, not gut feelings or trends. I set up proper measurement from day one so you always know what's actually working.",
  },
  {
    icon: Users,
    title: "Real Partnership",
    description:
      "You get direct access to me — not account managers or junior staff. I treat your business like I'm a member of your team, not a vendor.",
  },
  {
    icon: Clock,
    title: "10+ Years, No Fluff",
    description:
      "A decade of experience means I've already made (and learned from) the mistakes you don't want to pay for. You get senior expertise from day one.",
  },
];

export default function Why() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 bg-[#EFF6FF] text-[#1D4ED8] text-sm font-semibold px-4 py-2 rounded-full mb-6">
              Why Ryan Judy
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A1628] mb-6 leading-tight">
              Senior expertise
              <br />
              without the{" "}
              <span className="text-[#1D4ED8]">agency markup</span>
            </h2>
            <p className="text-[#64748B] text-lg leading-relaxed mb-8">
              Big agencies have big overhead — account managers, layers of
              approvals, junior staff executing on your account. With me, you
              get a seasoned digital marketing veteran working directly on your
              business. Period.
            </p>
            <blockquote className="border-l-4 border-[#F59E0B] pl-5 py-2">
              <p className="text-[#0A1628] font-medium italic text-lg">
                &ldquo;I started this business because I kept seeing Ohio companies
                underserved by agencies that were too big to care and too busy
                to listen.&rdquo;
              </p>
              <footer className="text-[#64748B] text-sm mt-2">
                — Ryan Judy, Founder
              </footer>
            </blockquote>
          </div>

          {/* Right: Reasons grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {reasons.map((reason, i) => {
              const Icon = reason.icon;
              return (
                <div
                  key={i}
                  className="bg-[#F8FAFC] hover:bg-[#EFF6FF] border border-gray-100 hover:border-[#BFDBFE] rounded-xl p-5 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <Icon className="w-5 h-5 text-[#1D4ED8] group-hover:scale-110 transition-transform duration-200 shrink-0" />
                    <h3 className="text-[#0A1628] font-semibold text-sm">
                      {reason.title}
                    </h3>
                  </div>
                  <p className="text-[#64748B] text-xs leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
