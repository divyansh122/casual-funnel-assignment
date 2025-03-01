// components/ClientWrapper.js
"use client"; // Mark this as a Client Component

import { AppProvider as PolarisProvider } from "@shopify/polaris";
import enTranslations from "@shopify/polaris/locales/en.json";
import "@shopify/polaris/build/esm/styles.css";

export default function ClientWrapper({ children }) {
  return <PolarisProvider i18n={enTranslations}>{children}</PolarisProvider>;
}
