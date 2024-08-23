import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Les fichiers de traduction pour chaque langue
const resources = {
  en: {
    translation: {
      heading: "A new experience is being wrapped up... Don’t miss the unboxing!",
      placeholder: "Be the first to know",
    }
  },
  fr: {
    translation: {
      heading: "Une nouvelle expérience est en cours d'emballage... Ne manquez pas le déballage !",
      placeholder: "Soyez le(la) premier(ère) informé(e)",
    }
  },
  es: {
    translation: {
      heading: "Una nueva experiencia se está envolviendo... ¡No te pierdas el desembalaje!",
      placeholder: "Sé el(la) primero(a) en saber",
    }
  },
  ar: {
    translation: {
      heading: "تجربة جديدة قيد التحضير... لا تفوتوا الفرصة!",
      placeholder: "كن أول من يعلم",
    }
  },
  tr: {
    translation: {
      heading: "Yeni bir deneyim hazırlanıyor... Açılışı kaçırmayın!",
      placeholder: "İlk öğrenen siz olun",
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'fr', // Langue par défaut
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    }
  });

export default i18n;
