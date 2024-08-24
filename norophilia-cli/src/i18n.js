import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      heading: "A new experience is being wrapped up... Don’t miss the unboxing!",
      label: "Be the first to know",
      submit: "Submit",
      placeholder: "Your email here"
    }
  },
  fr: {
    translation: {
      heading: "Une nouvelle expérience est en cours d'emballage... Ne manquez pas le déballage !",
      label: "Soyez le(la) premier(ère) informé(e)",
      submit: "Soumettre",
      placeholder: "Votre email ici"
    }
  },
  es: {
    translation: {
      heading: "Una nueva experiencia se está envolviendo... ¡No te pierdas el desembalaje!",
      label: "Sé el(la) primero(a) en saberlo",
      submit: "Enviar",
      placeholder: "Tu correo aquí"
    }
  },
  ar: {
    translation: {
      heading: "تجربة جديدة قيد التحضير... لا تفوتوا فرصة الكشف عنها!",
      label: "كن أول من يعلم",
      submit: "إرسال",
      placeholder: "بريدك الإلكتروني هنا"
    }
  },
  tr: {
    translation: {
      heading: "Yeni bir deneyim hazırlanıyor... Açılışı kaçırmayın!",
      label: "İlk bilen siz olun",
      submit: "Gönder",
      placeholder: "Email'iniz burada"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'fr', // Default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    }
  });

export default i18n;
