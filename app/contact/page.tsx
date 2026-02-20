import type { Metadata } from "next";
import { MapPin, Mail, Phone, Clock, Linkedin, Twitter, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Ryan Judy | Free Website Audit — Columbus, Ohio",
  description:
    "Get a free website audit or start a conversation about your digital marketing. Based in Columbus, OH.",
};

const services = [
  "Website Design & Development",
  "AI Integration & Automation",
  "Search Engine Marketing (SEM)",
  "SEO & Content Strategy",
  "Digital Marketing Strategy",
  "Analytics & Reporting",
  "General Inquiry / Not Sure Yet",
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient pt-36 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 text-white/80 text-sm font-semibold px-4 py-2 rounded-full mb-8">
              <MessageCircle className="w-4 h-4 text-[#D4AF37]" />
              Let&apos;s Talk
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
              Start the conversation.
              <br />
              <span className="text-[#D4AF37]">No pressure, ever.</span>
            </h1>
            <p className="text-white/70 text-xl leading-relaxed">
              Whether you want a free website audit or just want to talk through
              your digital marketing situation — I&apos;m happy to have an honest,
              no-pitch conversation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact section */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-[#0A1628] mb-2">
                  Get in touch
                </h2>
                <p className="text-[#475569] leading-relaxed">
                  I respond to all inquiries within one business day. For a free
                  website audit, include your URL in the form and I&apos;ll deliver
                  a detailed report within 48 hours.
                </p>
              </div>

              {/* Contact details */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-100">
                  <div className="w-10 h-10 rounded-lg bg-[#EFF6FF] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-[#1D4ED8]" />
                  </div>
                  <div>
                    <div className="text-[#475569] text-xs font-medium uppercase tracking-wider">
                      Email
                    </div>
                    <a
                      href="mailto:ryan@ryanjudy.com"
                      className="text-[#0A1628] font-semibold hover:text-[#1D4ED8] transition-colors"
                    >
                      ryan@ryanjudy.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-100">
                  <div className="w-10 h-10 rounded-lg bg-[#EFF6FF] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-[#1D4ED8]" />
                  </div>
                  <div>
                    <div className="text-[#475569] text-xs font-medium uppercase tracking-wider">
                      Phone
                    </div>
                    <a
                      href="tel:+16145550100"
                      className="text-[#0A1628] font-semibold hover:text-[#1D4ED8] transition-colors"
                    >
                      (614) 555-0100
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-100">
                  <div className="w-10 h-10 rounded-lg bg-[#EFF6FF] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#1D4ED8]" />
                  </div>
                  <div>
                    <div className="text-[#475569] text-xs font-medium uppercase tracking-wider">
                      Location
                    </div>
                    <div className="text-[#0A1628] font-semibold">
                      Columbus, Ohio
                    </div>
                    <div className="text-[#475569] text-sm">
                      Serving Columbus &amp; beyond
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-100">
                  <div className="w-10 h-10 rounded-lg bg-[#EFF6FF] flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-[#1D4ED8]" />
                  </div>
                  <div>
                    <div className="text-[#475569] text-xs font-medium uppercase tracking-wider">
                      Response Time
                    </div>
                    <div className="text-[#0A1628] font-semibold">
                      Within 1 business day
                    </div>
                    <div className="text-[#475569] text-sm">
                      Free audit: within 48 hours
                    </div>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div>
                <div className="text-[#475569] text-sm font-semibold uppercase tracking-wider mb-3">
                  Connect
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href="https://linkedin.com/in/rjudy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-white hover:bg-[#1D4ED8] text-[#0A1628] hover:text-white border border-gray-200 hover:border-[#1D4ED8] font-medium text-sm px-4 py-2.5 rounded-lg transition-all duration-200"
                  >
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </a>
                  <a
                    href="https://twitter.com/ryanjudy"
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
                <h2 className="text-2xl font-bold text-[#0A1628] mb-2">
                  Send me a message
                </h2>
                <p className="text-[#475569] text-sm mb-8">
                  Tell me about your business and what you&apos;re looking to
                  accomplish. The more context you give, the more useful my
                  response will be.
                </p>

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
                      <label className="block text-sm font-semibold text-[#374151] mb-1.5">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        placeholder="Acme Co."
                        className="w-full border border-gray-200 text-[#0A1628] placeholder-gray-400 text-sm px-4 py-3 rounded-xl focus:outline-none focus:border-[#1D4ED8] focus:ring-2 focus:ring-[#1D4ED8]/10 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#374151] mb-1.5">
                        Website URL
                      </label>
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
                      What can I help you with?{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="service"
                      required
                      className="w-full border border-gray-200 text-[#0A1628] text-sm px-4 py-3 rounded-xl focus:outline-none focus:border-[#1D4ED8] focus:ring-2 focus:ring-[#1D4ED8]/10 transition-colors bg-white"
                    >
                      <option value="" disabled>
                        Select a service...
                      </option>
                      {services.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#374151] mb-1.5">
                      Tell me about your business and goals{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      placeholder="Describe your business, what you're currently doing for marketing, and what you're hoping to achieve..."
                      className="w-full border border-gray-200 text-[#0A1628] placeholder-gray-400 text-sm px-4 py-3 rounded-xl focus:outline-none focus:border-[#1D4ED8] focus:ring-2 focus:ring-[#1D4ED8]/10 transition-colors resize-none"
                    />
                  </div>

                  {/* Free audit checkbox */}
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
                      <div className="text-[#0A1628] font-semibold text-sm">
                        Yes, I&apos;d like a free website audit
                      </div>
                      <div className="text-[#475569] text-xs mt-0.5">
                        I&apos;ll analyze your site and send a detailed report within 48 hours.
                      </div>
                    </div>
                  </label>

                  <button
                    type="submit"
                    className="w-full bg-[#1D4ED8] hover:bg-[#1e40af] text-white font-bold text-base px-8 py-4 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-blue-200"
                  >
                    Send Message
                  </button>

                  <p className="text-[#475569] text-xs text-center">
                    No spam, ever. Your information is kept private and I respond
                    to every message personally.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
