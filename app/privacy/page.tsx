import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Spark Street Digital",
  description: "Privacy policy for Spark Street Digital.",
};

export default function PrivacyPage() {
  return (
    <article className="pt-36 pb-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-[#0A1628] mb-4">Privacy Policy</h1>
        <p className="text-[#475569] text-sm mb-12">Last updated: March 2025</p>

        <div className="prose-content space-y-8 text-[#374151] leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-[#0A1628] mb-3">Overview</h2>
            <p>
              Spark Street Digital (&ldquo;I,&rdquo; &ldquo;me,&rdquo; or &ldquo;my&rdquo;) operates this
              website. I respect your privacy and am committed to protecting any personal information you
              share with me. This policy explains what information I collect, how I use it, and your rights
              regarding that information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0A1628] mb-3">Information I Collect</h2>
            <p className="mb-3">I collect information you voluntarily provide when you:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Fill out the contact form (name, email, business name, website, message)</li>
              <li>Request a free website audit</li>
              <li>Subscribe to the newsletter</li>
            </ul>
            <p className="mt-3">
              I also collect standard analytics data (pages visited, time on site, referral source)
              through Google Analytics to understand how people use this site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0A1628] mb-3">How I Use Your Information</h2>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>To respond to your inquiries and deliver requested audits or services</li>
              <li>To send newsletters you opted into (you can unsubscribe at any time)</li>
              <li>To improve the website experience based on usage data</li>
            </ul>
            <p className="mt-3">I do not sell, rent, or share your personal information with third parties for marketing purposes.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0A1628] mb-3">Cookies</h2>
            <p>
              This site uses cookies through Google Analytics to collect anonymous usage data. You can
              disable cookies in your browser settings at any time. No personal information is stored
              in cookies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0A1628] mb-3">Data Retention</h2>
            <p>
              I retain contact form submissions and audit requests only as long as needed to complete
              the requested service and any follow-up communication. You can request deletion of your
              data at any time by emailing me directly.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0A1628] mb-3">Your Rights</h2>
            <p>
              You have the right to access, correct, or delete any personal information I hold about
              you. To exercise these rights, contact me at{" "}
              <a href="mailto:ryan@sparkstreet.digital" className="text-[#1D4ED8] hover:underline">
                ryan@sparkstreet.digital
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0A1628] mb-3">Third-Party Services</h2>
            <p>
              This site uses Google Analytics (governed by{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1D4ED8] hover:underline"
              >
                Google&rsquo;s Privacy Policy
              </a>
              ). No other third-party tracking or advertising services are used.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0A1628] mb-3">Changes to This Policy</h2>
            <p>
              I may update this policy occasionally. Changes will be posted on this page with an
              updated date. Continued use of the site after changes constitutes acceptance of the
              updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0A1628] mb-3">Contact</h2>
            <p>
              Questions about this policy? Email me at{" "}
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
