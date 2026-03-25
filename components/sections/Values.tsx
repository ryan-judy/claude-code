import { getIcon } from "@/lib/iconMap";

export interface ValueItem {
  icon?: string;
  title: string;
  description: string;
}

export interface ValuesData {
  badge?: string;
  headline?: string;
  headlineHighlight?: string;
  items?: ValueItem[];
}

const defaultItems: ValueItem[] = [
  { icon: "Heart", title: "Genuine Care", description: "We treat every client\u2019s business like it\u2019s our own. Your success is our success \u2014 this isn\u2019t just a job." },
  { icon: "TrendingUp", title: "Results Over Activity", description: "We don\u2019t bill you for being busy. Every action connects to an outcome that matters to your business." },
  { icon: "Users", title: "True Partnership", description: "We\u2019re not a vendor. We\u2019re an extension of your team \u2014 available, responsive, and invested." },
  { icon: "Award", title: "Continuous Learning", description: "Digital marketing never stops evolving. We stay ahead of the curve so you don\u2019t have to." },
];

export default function Values({ data }: { data?: ValuesData | null }) {
  const badge = data?.badge ?? "How We Operate";
  const headline = data?.headline ?? "What we believe about";
  const headlineHighlight = data?.headlineHighlight ?? "great marketing";
  const items = data?.items?.length ? data.items : defaultItems;

  return (
    <section className="py-20 bg-[#0A1628]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 text-white/80 text-sm font-semibold px-4 py-2 rounded-full mb-4">
            {badge}
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">
            {headline}{" "}
            <span className="text-[#F59E0B]">{headlineHighlight}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((value, i) => {
            const Icon = getIcon(value.icon);
            return (
              <div
                key={i}
                className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#1D4ED8]/40 rounded-xl p-6 text-center transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#1D4ED8]/20 flex items-center justify-center mx-auto mb-4">
                  {Icon && <Icon className="w-6 h-6 text-[#F59E0B]" />}
                </div>
                <h3 className="text-white font-bold mb-2">{value.title}</h3>
                <p className="text-white text-sm leading-relaxed">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
