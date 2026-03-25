export interface StatItem {
  value: string;
  label: string;
  description: string;
}

const defaultStats: StatItem[] = [
  { value: "10+", label: "Years in Digital Marketing", description: "Across agencies, in-house, and professional roles" },
  { value: "100%", label: "Senior-Level Execution", description: "You work directly with me — no junior handoffs, ever" },
  { value: "Ohio", label: "Locally Focused", description: "I live here, I know these markets, I'm invested in your win" },
  { value: "Any Size", label: "Any Local Business", description: "From solo operators to established Ohio businesses" },
];

export default function Stats({ data }: { data?: StatItem[] | null }) {
  const stats = data?.length ? data : defaultStats;

  return (
    <section className="bg-[#0A1628] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-[#0A1628] p-8 hover:bg-[#1a2a45] transition-colors duration-200 text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-[#F59E0B] mb-2">{stat.value}</div>
              <div className="text-white font-semibold text-sm md:text-base mb-1">{stat.label}</div>
              <div className="text-white/50 text-xs md:text-sm leading-snug">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
