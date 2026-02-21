import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getIcon } from "@/lib/iconMap";

export interface ServiceCard {
  icon?: string;
  title: string;
  description: string;
  highlights: string[];
  href: string;
  color?: string;
}

const defaultServices: ServiceCard[] = [
  { icon: "Globe", title: "Website Design & Development", description: "Custom websites built for performance, conversion, and beauty. From strategy and UX through development and launch — your website should be your best salesperson.", highlights: ["Custom design", "Mobile-first", "Speed optimized", "CMS-powered"], href: "/services#websites", color: "bg-blue-50 text-blue-600" },
  { icon: "Bot", title: "AI Integration & Automation", description: "Put AI to work for your business. From intelligent chatbots and content workflows to customer journey automation — leverage AI to do more with less.", highlights: ["AI chatbots", "Content automation", "Lead qualification", "Workflow AI"], href: "/services#ai", color: "bg-purple-50 text-purple-600" },
  { icon: "Search", title: "Search Engine Marketing", description: "Strategic paid search campaigns that put your business in front of buyers at exactly the right moment. Every dollar tracked, every campaign optimized.", highlights: ["Google Ads", "Bing Ads", "Remarketing", "Landing pages"], href: "/services#sem", color: "bg-green-50 text-green-600" },
  { icon: "TrendingUp", title: "SEO & Content Strategy", description: "Sustainable organic growth through technical SEO, strategic content, and authoritative link building. Rank for the terms that actually drive revenue.", highlights: ["Technical SEO", "Keyword strategy", "Content creation", "Link building"], href: "/services#seo", color: "bg-orange-50 text-orange-600" },
  { icon: "Megaphone", title: "Digital Marketing Strategy", description: "A clear, data-driven roadmap that aligns your marketing to your business goals. No fluff — just honest strategy and a plan you can actually execute.", highlights: ["Competitive analysis", "Channel planning", "Budget allocation", "Roadmaps"], href: "/services#strategy", color: "bg-pink-50 text-pink-600" },
  { icon: "BarChart2", title: "Analytics & Reporting", description: "Turn data into decisions. Clear dashboards and monthly reports that show exactly what's working, what isn't, and where to focus next.", highlights: ["GA4 setup", "Custom dashboards", "Monthly reports", "Attribution"], href: "/services#analytics", color: "bg-amber-50 text-amber-600" },
];

export default function Services({ data }: { data?: ServiceCard[] | null }) {
  const services = data?.length ? data : defaultServices;

  return (
    <section id="services" className="section-padding bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#EFF6FF] text-[#1D4ED8] text-sm font-semibold px-4 py-2 rounded-full mb-4">
            What I Do
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A1628] mb-4">
            Full-stack digital marketing,{" "}
            <span className="text-[#1D4ED8]">start to finish</span>
          </h2>
          <p className="text-[#475569] text-lg leading-relaxed">
            Whether you need one thing done right or a complete digital
            transformation, I bring deep expertise across every channel that
            matters for your business.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = getIcon(service.icon);
            return (
              <Link
                key={i}
                href={service.href}
                className="card-lift group bg-white rounded-2xl p-8 border border-gray-100 hover:border-[#1D4ED8]/20 flex flex-col"
              >
                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl ${service.color ?? "bg-blue-50 text-blue-600"} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                >
                  {Icon && <Icon className="w-6 h-6" />}
                </div>

                <h3 className="text-[#0A1628] font-bold text-xl mb-3">{service.title}</h3>
                <p className="text-[#475569] text-sm leading-relaxed mb-5 flex-1">{service.description}</p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.highlights.map((h) => (
                    <span
                      key={h}
                      className="bg-[#F1F5F9] text-[#475569] text-xs font-medium px-3 py-1 rounded-full"
                    >
                      {h}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-1.5 text-[#1D4ED8] font-semibold text-sm group-hover:gap-2.5 transition-all duration-200">
                  Learn more
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 bg-[#0A1628] hover:bg-[#1a2a45] text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 hover:shadow-lg"
          >
            View All Services
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
