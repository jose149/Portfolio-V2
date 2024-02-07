import { type Locale, enGB, es } from 'date-fns/locale';

export function getLocale(langCode?: string): Locale {
  switch (langCode) {
    case 'en':
      return enGB;
    case 'es':
      return es;
    default:
      return enGB;
  }
}
