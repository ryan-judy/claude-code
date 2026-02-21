import { getIcon } from "@/lib/iconMap";

export interface PageHeroData {
  badge?: string;
  badgeIcon?: string;
  headline?: string;
  headlineHighlight?: string;
  subheadline?: string;
}

export default function PageHero({ data }: { data?: PageHeroData | null }) {
  const badge = data?.badge ?? "";
  const BadgeIcon = getIcon(data?.badgeIcon);
  const headline = data?.headline ?? "";
  const headlineHighlight = data?.headlineHighlight ?? "";
  const subheadline = data?.subheadline ?? "";

  return (
    <section className="hero-gradient pt-36 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {badge && (
            <div className="inline-flex items-center gap-2 bg-white/10 text-white/80 text-sm font-semibold px-4 py-2 rounded-full mb-8">
              {BadgeIcon && <BadgeIcon className="w-4 h-4 text-[#D4AF37]" />}
              {badge}
            </div>
          )}
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
            {headline}
            {headlineHighlight && (
              <>
                <br />
                <span className="text-[#D4AF37]">{headlineHighlight}</span>
              </>
            )}
          </h1>
          {subheadline && (
            <p className="text-white/70 text-xl leading-relaxed">{subheadline}</p>
          )}
        </div>
      </div>
    </section>
  );
}
