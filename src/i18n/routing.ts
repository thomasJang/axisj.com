import { defineRouting } from "next-intl/routing";
import { createSharedPathnamesNavigation } from "next-intl/navigation";

export type LangType = "ko" | "en";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["ko", "en"],

  // Used when no locale matches
  defaultLocale: "ko",
  localePrefix: "always",
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter } = createSharedPathnamesNavigation(routing);
