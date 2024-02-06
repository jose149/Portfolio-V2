import { createI18n } from "vue-i18n";

import EnglishTranslations from "@/libraries/helpers/languages/languages/en.json";
import { getDomain } from "../domain/DomainMapping";

const messages = {
  en: EnglishTranslations,
};

const numberFormats = {
  es: {
    currency: {
      style: "currency",
      currency: "EUR",
    },
  },
  en: {
    currency: {
      style: "currency",
      currency: "gbp",
    },
  },
};

type KnownLanguage = keyof typeof numberFormats;

export const i18n = createI18n({
  messages,
  locale: getDomain.getCurrentDomainSpec().Locale,
  fallbackLocale: "en",
  numberFormats,
  globalInjection: true,
  legacy: false,
  missingWarn: false,
});

function setI18nLanguage(lang: KnownLanguage): KnownLanguage {
  i18n.global.locale.value = lang;
  return lang;
}

export async function loadLanguageAsync(
  language: string,
): Promise<KnownLanguage> {
  return await import(
    /* webpackChunkName: "lang-[request]" */ `./lang/${language}.json`
  ).then((msgs) => {
    i18n.global.setLocaleMessage(language, msgs.default);
    return setI18nLanguage(language as KnownLanguage);
  });
}
