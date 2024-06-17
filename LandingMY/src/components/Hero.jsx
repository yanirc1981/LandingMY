//import React from "react";
import BackgroundImage from "../assets/hero.png"; 
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section
      className="bg-cover bg-center h-[85vh]"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      <div className="flex items-center h-full bg-black bg-opacity-50 px-8">
        <div className="text-left">
          <h1 className="text-white text-3xl font-bold mb-4">
            {t('hero.title')}
          </h1>
          <p className="text-white text-2xl font-bold mb-2">
            {t('hero.subtitle1')}
          </p>
          <p className="text-white text-2xl font-bold mb-6">
            {t('hero.subtitle2')}
          </p>
          <div className="flex space-x-4">
            <a href="#contact" className="bg-blue-500 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-blue-600 transition duration-300">
              {t('hero.contact')}
            </a>
            <a href="#plans" className="bg-green-500 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-green-600 transition duration-300">
              {t('hero.plans')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

