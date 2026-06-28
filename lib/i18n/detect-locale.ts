import { defaultLocale, LOCALE_STORAGE_KEY, type Locale } from "./types";

export function detectLocale(): Locale {
  if (typeof window === "undefined") {
    return defaultLocale;
  }

  try {
    const saved = localStorage.getItem(LOCALE_STORAGE_KEY);
    if (saved === "tr" || saved === "en") {
      return saved;
    }
  } catch {
    // localStorage unavailable
  }

  const navigatorLang = navigator.language.toLowerCase();

  if (navigatorLang.startsWith("en")) {
    return "en";
  }

  if (navigatorLang.startsWith("tr")) {
    return "tr";
  }

  return defaultLocale;
}

export function persistLocale(locale: Locale): void {
  try {
    localStorage.setItem(LOCALE_STORAGE_KEY, locale);
  } catch {
    // localStorage unavailable
  }
}
