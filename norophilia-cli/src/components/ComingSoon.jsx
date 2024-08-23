import React from 'react';
import { useTranslation } from 'react-i18next';
import './i18n';

const ComingSoon = () => {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/background.jpg')" }}>
      <div className="text-center bg-white bg-opacity-50 p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl md:text-4xl font-bold text-navy mb-6">{t('heading')}</h1>
        <input 
          type="email" 
          placeholder={t('placeholder')} 
          className="p-2 rounded border border-gray-300 mb-4 w-full max-w-xs" 
        />
        <div className="flex justify-center space-x-4 mb-4">
          {/* Icônes de réseaux sociaux */}
          <a href="https://facebook.com" className="text-gray-600 hover:text-gray-900"><i className="fab fa-facebook"></i></a>
          <a href="https://twitter.com" className="text-gray-600 hover:text-gray-900"><i className="fab fa-twitter"></i></a>
          <a href="https://instagram.com" className="text-gray-600 hover:text-gray-900"><i className="fab fa-instagram"></i></a>
        </div>
        <select onChange={handleLanguageChange} className="p-2 rounded border border-gray-300">
          <option value="en">English</option>
          <option value="fr">Français</option>
          <option value="es">Español</option>
          <option value="ar">العربية</option>
          <option value="tr">Türkçe</option>
          {/* Ajouter d'autres langues ici */}
        </select>
      </div>
      <footer className="mt-8 text-sm text-gray-600">
        © 2024 Norophilia. Tous droits réservés.
      </footer>
    </div>
  );
};

export default ComingSoon;
