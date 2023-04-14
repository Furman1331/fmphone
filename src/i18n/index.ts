import { createI18n } from "vue-i18n";

// @ts-ignore
import pl_pl from "./pl-pl.json";
// @ts-ignore
import en_gb from "./en-gb.json";

const messages = {
    pl: {...pl_pl},
    en: {...en_gb}
}

export const i18n = createI18n({
    legacy: false,
    locale: "pl",
    fallbackLocale: "pl",
    globalInjection: true,
    messages: messages
})
