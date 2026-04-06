import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | Spark Street Digital",
  description: "Terms of service for Spark Street Digital.",
};

export default function TermsPage() {
  return (
    <article className="pt-36 pb-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-[#0A1628] mb-4">Terms of Service</h1>
        <p className="text-[#475569] text-sm mb-12">Last updated: March 2025</p>

        <div className="prose-content space-y-8 text-[#374151] leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-[#0A1628] mb-3">Acceptance of Terms</h2>
            <p>
              By accessing this website, you agree to these Terms of Service. If you do not agree,
              please do not use this site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0A1628] mb-3">Services</h2>
            <p>
              Spark Street Digital provides digital marketing consulting services including
              website design and development, SEO, paid media management, AI integration, content
              strategy, and related services. Specific terms for any engagement are established in
              a separate client agreement or proposal.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0A1628] mb-3">Website Content</h2>
            <p>
              All content on this website — including text, graphics, and resources — is owned by
              Spark Street Digital and protected by applicable copyright laws. You may not
              reproduce, distribute, or use content from this site without written permission.
            </p>
            <p className="mt-3">
              Blog and resource articles are provided for informational purposes. Results described
              or implied are not guaranteed and will vary based on individual business circumstances.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0A1628] mb-3">Free Website Audit</h2>
            <p>
              The free website audit is an assessment provided at no charge and with no obligation.
              Audit findings are based on publicly available information and standard SEO/digital
              marketing analysis tools. Results are informational only and do not constitute a
              guarantee of any specific outcome.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0A1628] mb-3">Limitation of Liability</h2>
            <p>
              Spark Street Digital is not liable for any indirect, incidental, or consequential
              damages arising from use of this website or reliance on its content. This site is
              provided &ldquo;as is&rdquo; without warranty of any kind.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0A1628] mb-3">External Links</h2>
            <p>
              This site may link to third-party websites. These links are provided for convenience
              only. I am not responsible for the content or practices of any linked sites.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0A1628] mb-3">Governing Law</h2>
            <p>
              These terms are governed by the laws of the State of Ohio. Any disputes shall be
              resolved in the courts of Franklin County, Ohio.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0A1628] mb-3">Changes to Terms</h2>
            <p>
              I reserve the right to update these terms at any time. Changes will be posted on this
              page with an updated date. Continued use of the site after changes constitutes
              acceptance of the updated terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0A1628] mb-3">Contact</h2>
            <p>
              Questions about these terms? Email me at{" "}
              <a href="mailto:ryan@sparkstreet.digital" className="text-[#1D4ED8] hover:underline">
                ryan@sparkstreet.digital
              </a>
              .
            </p>
          </section>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-100">
          <Link href="/" className="text-[#1D4ED8] text-sm font-semibold hover:underline">
            &larr; Back to Home
          </Link>
        </div>
      </div>
    </article>
  );
}
