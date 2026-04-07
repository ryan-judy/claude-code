import type { Metadata } from "next";
import { Suspense } from "react";
import ReportViewer from "./ReportViewer";

export const metadata: Metadata = {
  title: "Website Audit Report | Spark Street Digital",
  robots: { index: false, follow: false },
};

function LoadingFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: "#F1F5F9" }}>
      <div className="text-center space-y-3">
        <div className="w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto" />
        <p className="text-sm text-slate-500">Loading report…</p>
      </div>
    </div>
  );
}

export default function ReportsPage() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <ReportViewer />
    </Suspense>
  );
}
