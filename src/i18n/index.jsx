import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

import en from "./locales/en.js";
import ja from "./locales/ja.js";
import es from "./locales/es.js";
import fr from "./locales/fr.js";
import de from "./locales/de.js";
import it from "./locales/it.js";
import ru from "./locales/ru.js";
import ko from "./locales/ko.js";
import zhHans from "./locales/zh-Hans.js";
import ca from "./locales/ca.js";

export const LOCALES = {
  en: { name: "English", dict: en, htmlLang: "en" },
  ja: { name: "日本語", dict: ja, htmlLang: "ja" },
  es: { name: "Español", dict: es, htmlLang: "es" },
  fr: { name: "Français", dict: fr, htmlLang: "fr" },
  de: { name: "Deutsch", dict: de, htmlLang: "de" },
  it: { name: "Italiano", dict: it, htmlLang: "it" },
  ru: { name: "Русский", dict: ru, htmlLang: "ru" },
  ko: { name: "한국어", dict: ko, htmlLang: "ko" },
  "zh-Hans": { name: "简体中文", dict: zhHans, htmlLang: "zh-Hans" },
  ca: { name: "Català", dict: ca, htmlLang: "ca" },
};

export const DEFAULT_LOCALE = "en";
const STORAGE_KEY = "vros.locale";

function normalize(code) {
  if (!code) return null;
  const lower = code.toLowerCase();
  if (lower.startsWith("zh")) {
    if (lower.includes("hant") || lower.includes("tw") || lower.includes("hk")) return null;
    return "zh-Hans";
  }
  const base = lower.split("-")[0];
  return LOCALES[base] ? base : null;
}

function detectLocale() {
  if (typeof window === "undefined") return DEFAULT_LOCALE;
  const params = new URLSearchParams(window.location.search);
  const fromQuery = normalize(params.get("lang"));
  if (fromQuery) return fromQuery;
  const stored = normalize(window.localStorage.getItem(STORAGE_KEY));
  if (stored) return stored;
  for (const code of navigator.languages || [navigator.language]) {
    const match = normalize(code);
    if (match) return match;
  }
  return DEFAULT_LOCALE;
}

function lookup(dict, key) {
  return key.split(".").reduce((acc, part) => (acc && typeof acc === "object" ? acc[part] : undefined), dict);
}

const I18nContext = createContext(null);

export function I18nProvider({ children }) {
  const [locale, setLocaleState] = useState(() => detectLocale());

  useEffect(() => {
    document.documentElement.lang = LOCALES[locale].htmlLang;
    window.localStorage.setItem(STORAGE_KEY, locale);
  }, [locale]);

  const setLocale = useCallback((next) => {
    if (LOCALES[next]) setLocaleState(next);
  }, []);

  const t = useCallback(
    (key) => {
      const value = lookup(LOCALES[locale].dict, key);
      if (value !== undefined) return value;
      const fallback = lookup(LOCALES[DEFAULT_LOCALE].dict, key);
      return fallback !== undefined ? fallback : key;
    },
    [locale],
  );

  const value = useMemo(() => ({ locale, setLocale, t, locales: LOCALES }), [locale, setLocale, t]);
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used inside I18nProvider");
  return ctx;
}
