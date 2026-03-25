import { Zap } from "lucide-react";

export default function AuditForm() {
  return (
    <form
      name="audit"
      method="POST"
      action="/thank-you"
      data-netlify="true"
      className="space-y-5"
    >
      <input type="hidden" name="form-name" value="audit" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-[#0A1628] mb-2">
            Your name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            required
            placeholder="Jane Smith"
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#0A1628] placeholder-gray-400 focus:outline-none focus:border-[#1D4ED8] focus:ring-1 focus:ring-[#1D4ED8] transition-colors"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-[#0A1628] mb-2">
            Email address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            required
            placeholder="jane@yourbusiness.com"
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#0A1628] placeholder-gray-400 focus:outline-none focus:border-[#1D4ED8] focus:ring-1 focus:ring-[#1D4ED8] transition-colors"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-[#0A1628] mb-2">
          Business name
        </label>
        <input
          type="text"
          name="business"
          placeholder="Your Business Name"
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#0A1628] placeholder-gray-400 focus:outline-none focus:border-[#1D4ED8] focus:ring-1 focus:ring-[#1D4ED8] transition-colors"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-[#0A1628] mb-2">
          Website URL <span className="text-red-500">*</span>
        </label>
        <input
          type="url"
          name="url"
          required
          placeholder="https://yourbusiness.com"
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#0A1628] placeholder-gray-400 focus:outline-none focus:border-[#1D4ED8] focus:ring-1 focus:ring-[#1D4ED8] transition-colors"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-[#0A1628] mb-2">
          What does your business do?
        </label>
        <textarea
          name="description"
          rows={3}
          placeholder="Brief description of your business, who your customers are, and what you're hoping to improve online..."
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#0A1628] placeholder-gray-400 focus:outline-none focus:border-[#1D4ED8] focus:ring-1 focus:ring-[#1D4ED8] transition-colors resize-none"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-[#0A1628] mb-2">
          Biggest challenge online right now?
        </label>
        <select
          name="challenge"
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#0A1628] focus:outline-none focus:border-[#1D4ED8] focus:ring-1 focus:ring-[#1D4ED8] transition-colors bg-white"
        >
          <option value="">Select one...</option>
          <option>Not showing up on Google</option>
          <option>Getting traffic but no leads</option>
          <option>Website is outdated or broken</option>
          <option>Not sure what&apos;s working</option>
          <option>Competitors are outranking me</option>
          <option>Just getting started online</option>
          <option>Other</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full inline-flex items-center justify-center gap-2 bg-[#1D4ED8] hover:bg-[#1e40af] text-white font-bold text-base px-8 py-4 rounded-xl transition-all duration-200 hover:shadow-lg"
      >
        <Zap className="w-5 h-5 fill-current" />
        Request My Free Audit
      </button>
      <p className="text-center text-xs text-[#94A3B8]">
        No spam, no sales pitch. We respond to every request personally within one business day.
      </p>
    </form>
  );
}
