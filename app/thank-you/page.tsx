import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Message Received | Spark Street Digital",
  description: "Thanks for reaching out. I'll be in touch shortly.",
};

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10 text-green-500" />
        </div>
        <h1 className="text-3xl font-bold text-[#0A1628] mb-3">You&apos;re all set!</h1>
        <p className="text-[#475569] text-lg leading-relaxed mb-8">
          Thanks for reaching out. I personally review every submission and will be in touch within one business day.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[#1D4ED8] font-semibold hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to home
        </Link>
      </div>
    </div>
  );
}
