/**
 * Sanity Studio embedded page
 * Access your content studio at /studio
 *
 * Make sure NEXT_PUBLIC_SANITY_PROJECT_ID is set in your .env.local
 */
"use client";

import { NextStudio } from "next-sanity/studio";
import config from "@/sanity/sanity.config";

export default function StudioPage() {
  return <NextStudio config={config} />;
}
