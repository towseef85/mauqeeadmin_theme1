import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
i18n
.use(LanguageDetector)
.use(initReactI18next)
.init({
    
    resources:{
        en:{
            translations:{
                "dashboard":"Dashboard",
                "catalog":"Catalog",
                "wishlist":"Wishlist",
                "login":"Login",
                "register":"Register",
                "logout":"Logout"
            }
       
        },
        ar:{
            translations:{
                "dashboard":"بيت",
                "catalog":"حسابي",
                "wishlist":"المفضلة",
                "login":"الدخول",
                "register":"يسجل",
                "logout":"الخروج"
            }
        }
    },
    fallbackLng: "en",
        debug: true,

        // have a common namespace used around the full app
        ns: ["translations"],
        defaultNS: "translations",

        keySeparator: false, // we use content as keys

        interpolation: {
            escapeValue: false
        }
});

export default i18n;
