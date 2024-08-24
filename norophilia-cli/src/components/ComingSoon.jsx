import React from "react";
import backgroundImage from "../pictures/Background.jpeg";
import { useTranslation } from "react-i18next";
import "../i18n";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';
import logo from "../pictures/LogoNph.png";

const ComingSoon = () => {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Email soumis!");
  };

  return (
    <div
      className="relative flex flex-col items-center justify-center h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})`, zIndex: 100 }}
    >
      {/* Sélecteur de langue en haut à droite */}
      <div className="absolute top-0 right-0 p-4 z-50">
        <select
          onChange={handleLanguageChange}
          className="p-2 rounded border border-gray-300 bg-white shadow-md hover:bg-gray-100"
        >
          <option value="fr">Français</option>
          <option value="en">English</option>
          <option value="es">Español</option>
          <option value="ar">العربية</option>
          <option value="tr">Türkçe</option>
        </select>
      </div>

      <div className="filtre absolute inset-0 bg-black bg-opacity-30 backdrop-blur-sm"></div>

      <div className="page-content relative flex-col z-10 text-center bg-white bg-opacity-60 p-8 w-full lg:w-8/12 rounded-lg shadow-lg">
        <header className="top-0 left-0 right-0 p-4 flex justify-center">
          <img src={logo} alt="Logo" className="h-logo" />
        </header>
        <h1 className="text-2xl md:text-2xl font-bold text-navy mb-6 text-blue-950">
          {t("heading")}
        </h1>
        <div className="form-label mb-2 text-blue-950 ">{t("label")}</div>
        <form
          onSubmit={handleSubmit}
          className="flex justify-center w-full items-center"
        >
            
          <div className="relative w-full max-w-xs mb-4">
            <input
              type="email"
              placeholder={t("placeholder")}
              className="p-2 pr-16 rounded border border-blue-950 w-full"
            />
            <button
              type="submit"
              className="absolute top-0 right-0 h-full px-4 bg-blue-950 text-white rounded-r hover:bg-yellow-700"
            >
              {t("submit")}
            </button>
          </div>
        </form>

        <div className="flex justify-center space-x-4 my-4 ">
          {/* Lien vers la carte de visite */}
          <a
            href="https://norophilia-bc.vercel.app/" // Remplace par le lien vers ta carte de visite
            target="_blank" // Opens in a new tab
            rel="noopener noreferrer" // Adds security
            className="text-gray-600 hover:text-gray-900"
          >
            <FontAwesomeIcon icon={faAddressCard} size="2x" /> {/* Remplace par une icône pertinente si nécessaire */}
          </a>
        </div>
      </div>

      <footer className="fixed bottom-0 left-0 right-0 p-2 text-center text-sm text-gray-600 bg-white bg-opacity-80">
        © 2024 Norophilia. Tous droits réservés.
      </footer>
    </div>
  );
};

export default ComingSoon;
