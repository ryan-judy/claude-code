import post from "./post";
import siteSettings from "./siteSettings";
import navigation from "./navigation";
import homePage from "./homePage";
import aboutPage from "./aboutPage";
import servicesPage from "./servicesPage";
import contactPage from "./contactPage";
import auditPage from "./auditPage";
import flexPage from "./flexPage";
import { sectionTypes } from "./sections";
import auditSection from "./auditSection";
import auditReport from "./auditReport";

export const schemaTypes = [
  // Singletons
  siteSettings,
  navigation,
  homePage,
  aboutPage,
  servicesPage,
  contactPage,
  auditPage,
  // Flexible pages
  flexPage,
  // Section types (shared across all page types)
  ...sectionTypes,
  // Documents
  post,
  // Audit reports
  auditSection,
  auditReport,
];
