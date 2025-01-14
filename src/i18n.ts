import i18n from "i18next";
import Backend from "i18next-fs-backend";
import { join } from "path";

i18n.use(Backend).init({
  fallbackLng: "en",
  lng: "en",
  backend: {
    loadPath: join(__dirname, "locales", "{{lng}}", "{{ns}}.json"),
  },
  ns: ["common"],
  defaultNS: "common",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

export function changeLanguage(language: string) {
  i18n.changeLanguage(language);
}
