import { MapPin, Mail, Phone, Clock, Linkedin, Twitter } from "lucide-react";

export interface ContactFormData {
  contactInfoHeadline?: string;
  contactInfoSubheadline?: string;
  formHeadline?: string;
  formSubheadline?: string;
  serviceOptions?: string[];
  submitText?: string;
  auditCheckboxLabel?: string;
  auditCheckboxSub?: string;
  formFinePrint?: string;
  // From siteSettings
  email?: string;
  phone?: string;
  phoneHref?: string;
  location?: string;
  locationSubtext?: string;
  responseTime?: string;
  auditDeliveryTime?: string;
  linkedin?: string;
  twitter?: string;
}

const defaultServiceOptions = [
  "Website Design & Development",
  "AI Integration & Automation",
  "Search Engine Marketing (SEM)",
  "SEO & Content Strategy",
  "Digital Marketing Strategy",
  "Analytics & Reporting",
  "General Inquiry / Not Sure Yet",
];

export default function ContactForm({ data }: { data?: ContactFormData | null }) {
  const contactInfoHeadline = data?.contactInfoHeadline ?? "Get in touch";
  const auditDeliveryTime = data?.auditDeliveryTime ?? "within 48 hours";
  const contactInfoSubheadline =
    data?.contactInfoSubheadline ??
    `I respond to all inquiries within one business day. For a free website audit, include your URL in the form and I'll deliver a detailed report ${auditDeliveryTime}.`;
  const formHeadline = data?.formHeadline ?? "Send me a message";
  const formSubheadline =
    data?.formSubheadline ??
    "Tell me about your business and what you're looking to accomplish. The more context you give, the more useful my response will be.";
  const serviceOptions = data?.serviceOptions?.length ? data.serviceOptions : defaultServiceOptions;
  const submitText = data?.submitText ?? "Send Message";
  const auditCheckboxLabel = data?.auditCheckboxLabel ?? "Yes, I'd like a free website audit";
  const auditCheckboxSub =
    data?.auditCheckboxSub ??
    `I'll analyze your site and send a detailed report ${auditDeliveryTime}.`;
  const formFinePrint =
    data?.formFinePrint ??
    "No spam, ever. Your information is kept private and I respond to every message personally.";
  const email = data?.email ?? "ryan@ryanjudy.com";
  const phone = data?.phone ?? "(614) 555-0100";
  const phoneHref = data?.phoneHref ?? "tel:+16145550100";
  const location = data?.location ?? "Columbus, Ohio";
  const locationSubtext = data?.locationSubtext ?? "Serving Columbus & beyond";
  const responseTime = data?.responseTime ?? "Within 1 business day";
  const linkedin = data?.linkedin ?? "https://linkedin.com/in/rjudy";
  const twitter = data?.twitter ?? "https://twitter.com/ryanjudy";

  return (
    <section className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-[#0A1628] mb-2">{contactInfoHeadline}</h2>
              <p className="text-[#475569] leading-relaxed">{contactInfoSubheadline}</p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-100">
                <div className="w-10 h-10 rounded-lg bg-[#EFF6FF] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-[#1D4ED8]" />
                </div>
                <div>
                  <div className="text-[#475569] text-xs font-medium uppercase tracking-wider">Email</div>
                  <a href={`mailto:${email}`} className="text-[#0A1628] font-semibold hover:text-[#1D4ED8] transition-colors">
                    {email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-100">
                <div className="w-10 h-10 rounded-lg bg-[#EFF6FF] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-[#1D4ED8]" />
                </div>
                <div>
                  <div className="text-[#475569] text-xs font-medium uppercase tracking-wider">Phone</div>
                  <a href={phoneHref} className="text-[#0A1628] font-semibold hover:text-[#1D4ED8] transition-colors">
                    {phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-100">
                <div className="w-10 h-10 rounded-lg bg-[#EFF6FF] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[#1D4ED8]" />
                </div>
                <div>
                  <div className="text-[#475569] text-xs font-medium uppercase tracking-wider">Location</div>
                  <div className="text-[#0A1628] font-semibold">{location}</div>
                  <div className="text-[#475569] text-sm">{locationSubtext}</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-100">
                <div className="w-10 h-10 rounded-lg bg-[#EFF6FF] flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-[#1D4ED8]" />
                </div>
                <div>
                  <div className="text-[#475569] text-xs font-medium uppercase tracking-wider">Response Time</div>
                  <div className="text-[#0A1628] font-semibold">{responseTime}</div>
                  <div className="text-[#475569] text-sm">Free audit: {auditDeliveryTime}</div>
                </div>
              </div>
            </div>

            <div>
              <div className="text-[#475569] text-sm font-semibold uppercase tracking-wider mb-3">Connect</div>
              <div className="flex items-center gap-3">
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white hover:bg-[#1D4ED8] text-[#0A1628] hover:text-white border border-gray-200 hover:border-[#1D4ED8] font-medium text-sm px-4 py-2.5 rounded-lg transition-all duration-200"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
                <a
                  href={twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white hover:bg-[#0A1628] text-[#0A1628] hover:text-white border border-gray-200 hover:border-[#0A1628] font-medium text-sm px-4 py-2.5 rounded-lg transition-all duration-200"
                >
                  <Twitter className="w-4 h-4" />
                  Twitter / X
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl p-8 md:p-10 border border-gray-100 shadow-sm">
              <h2 className="text-2xl font-bold text-[#0A1628] mb-2">{formHeadline}</h2>
              <p className="text-[#475569] text-sm mb-8">{formSubheadline}</p>

              <form className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-[#374151] mb-1.5">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      required
                      placeholder="Jane"
                      className="w-full border border-gray-200 text-[#0A1628] placeholder-gray-400 text-sm px-4 py-3 rounded-xl focus:outline-none focus:border-[#1D4ED8] focus:ring-2 focus:ring-[#1D4ED8]/10 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#374151] mb-1.5">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      required
                      placeholder="Smith"
                      className="w-full border border-gray-200 text-[#0A1628] placeholder-gray-400 text-sm px-4 py-3 rounded-xl focus:outline-none focus:border-[#1D4ED8] focus:ring-2 focus:ring-[#1D4ED8]/10 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#374151] mb-1.5">
                    Business Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="you@yourbusiness.com"
                    className="w-full border border-gray-200 text-[#0A1628] placeholder-gray-400 text-sm px-4 py-3 rounded-xl focus:outline-none focus:border-[#1D4ED8] focus:ring-2 focus:ring-[#1D4ED8]/10 transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-[#374151] mb-1.5">Company Name</label>
                    <input
                      type="text"
                      name="company"
                      placeholder="Acme Co."
                      className="w-full border border-gray-200 text-[#0A1628] placeholder-gray-400 text-sm px-4 py-3 rounded-xl focus:outline-none focus:border-[#1D4ED8] focus:ring-2 focus:ring-[#1D4ED8]/10 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#374151] mb-1.5">Website URL</label>
                    <input
                      type="url"
                      name="website"
                      placeholder="https://yourbusiness.com"
                      className="w-full border border-gray-200 text-[#0A1628] placeholder-gray-400 text-sm px-4 py-3 rounded-xl focus:outline-none focus:border-[#1D4ED8] focus:ring-2 focus:ring-[#1D4ED8]/10 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#374151] mb-1.5">
                    What can I help you with? <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="service"
                    required
                    className="w-full border border-gray-200 text-[#0A1628] text-sm px-4 py-3 rounded-xl focus:outline-none focus:border-[#1D4ED8] focus:ring-2 focus:ring-[#1D4ED8]/10 transition-colors bg-white"
                  >
                    <option value="" disabled>Select a service...</option>
                    {serviceOptions.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#374151] mb-1.5">
                    Tell me about your business and goals <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="Describe your business, what you're currently doing for marketing, and what you're hoping to achieve..."
                    className="w-full border border-gray-200 text-[#0A1628] placeholder-gray-400 text-sm px-4 py-3 rounded-xl focus:outline-none focus:border-[#1D4ED8] focus:ring-2 focus:ring-[#1D4ED8]/10 transition-colors resize-none"
                  />
                </div>

                <label className="flex items-start gap-3 cursor-pointer group">
                  <div className="relative mt-0.5">
                    <input type="checkbox" name="wantAudit" className="sr-only peer" />
                    <div className="w-5 h-5 border-2 border-gray-300 rounded peer-checked:bg-[#1D4ED8] peer-checked:border-[#1D4ED8] transition-colors" />
                    <svg
                      className="absolute top-0.5 left-0.5 w-4 h-4 text-white opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[#0A1628] font-semibold text-sm">{auditCheckboxLabel}</div>
                    <div className="text-[#475569] text-xs mt-0.5">{auditCheckboxSub}</div>
                  </div>
                </label>

                <button
                  type="submit"
                  className="w-full bg-[#1D4ED8] hover:bg-[#1e40af] text-white font-bold text-base px-8 py-4 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-blue-200"
                >
                  {submitText}
                </button>

                <p className="text-[#475569] text-xs text-center">{formFinePrint}</p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
