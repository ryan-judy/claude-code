"use client";

import { useState } from "react";
import { Zap, CheckCircle2 } from "lucide-react";

export default function AuditForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(false);
    const formData = new FormData(e.currentTarget);
    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    }
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-12 gap-4">
        <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center">
          <CheckCircle2 className="w-8 h-8 text-green-500" />
        </div>
        <h3 className="text-2xl font-bold text-[#0A1628]">Audit request received!</h3>
        <p className="text-[#475569] max-w-sm">
          I'll personally review your site and send a detailed report within 48 hours.
        </p>
      </div>
    );
  }

  return (
    <form
      name="audit"
      method="POST"
      data-netlify="true"
      className="space-y-5"
      onSubmit={handleSubmit}
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

      {error && (
        <p className="text-red-500 text-sm text-center">
          Something went wrong. Please try again or email me at ryan@sparkstreet.digital.
        </p>
      )}

      <button
        type="submit"
        className="w-full inline-flex items-center justify-center gap-2 bg-[#1D4ED8] hover:bg-[#1e40af] text-white font-bold text-base px-8 py-4 rounded-xl transition-all duration-200 hover:shadow-lg group"
      >
        <Zap className="w-5 h-5 fill-current" />
        Request My Free Audit
      </button>
      <p className="text-center text-xs text-[#94A3B8]">
        No spam, no sales pitch. I respond to every request personally within one business day.
      </p>
    </form>
  );
}
