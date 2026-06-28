import type { Dictionary, Locale } from "../types";
import { en } from "./en";
import { tr } from "./tr";

export const dictionaries: Record<Locale, Dictionary> = {
  tr,
  en,
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
