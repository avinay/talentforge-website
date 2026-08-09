"use client";

import type { ReactNode } from "react";
import { I18nProvider } from "@/lib/i18n";
import { Footer } from "./Footer";
import { Header } from "./Header";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <I18nProvider>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </I18nProvider>
  );
}
