import { useState } from 'react';
import PropTypes from 'prop-types';
import institucional from "../assets/institucional.png";
import ecomerce from "../assets/ecomerce.png";
import LandingPage from "../assets/LandingPage.png";
import complex from "../assets/complex.png";
import { useTranslation } from 'react-i18next';

const Step1 = ({ onNext }) => {
  const { t } = useTranslation();
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleSubmit = () => {
    onNext({ option1: selectedOption });
  };

  return (
    <div className="flex flex-col items-center p-4 md:p-30">
      <h2 className="text-[40px] md:text-[40px] font-bold text-secondary p-20">
        {t('Step1.title')}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div
          className={`p-4 border rounded-lg cursor-pointer transform transition duration-300 ${
            selectedOption === 'institutional' ? 'border-yellow-500 bg-yellow-100 scale-105' : 'border-gray-300'
          }`}
          onClick={() => handleOptionChange('institutional')}
        >
          <img src={institucional} alt={t('Step1.Institucional')} className="w-full h-auto object-cover" />
          <p className="text-center mt-2">{t('Step1.Institucional')}</p>
        </div>
        <div
          className={`p-4 border rounded-lg cursor-pointer transform transition duration-300 ${
            selectedOption === 'ecommerce' ? 'border-yellow-500 bg-yellow-100 scale-105' : 'border-gray-300'
          }`}
          onClick={() => handleOptionChange('ecommerce')}
        >
          <img src={ecomerce} alt={t('Step1.E-commerce')} className="w-full h-auto object-cover" />
          <p className="text-center mt-2">{t('Step1.E-commerce')}</p>
        </div>
        <div
          className={`p-4 border rounded-lg cursor-pointer transform transition duration-300 ${
            selectedOption === 'landing' ? 'border-yellow-500 bg-yellow-100 scale-105' : 'border-gray-300'
          }`}
          onClick={() => handleOptionChange('landing')}
        >
          <img src={LandingPage} alt={t('Step1.Landing')} className="w-full h-auto object-cover" />
          <p className="text-center mt-2">{t('Step1.Landing')}</p>
        </div>
        <div
          className={`p-4 border rounded-lg cursor-pointer transform transition duration-300 ${
            selectedOption === 'complex' ? 'border-yellow-500 bg-yellow-100 scale-105' : 'border-gray-300'
          }`}
          onClick={() => handleOptionChange('complex')}
        >
          <img src={complex} alt={t('Step1.Complejo')} className="w-full h-auto object-cover" />
          <p className="text-center mt-2">{t('Step1.Complejo')}</p>
        </div>
      </div>
      <button
        onClick={handleSubmit}
        className="w-full mt-8 px-3 py-2 bg-orange-500 text-white rounded-md"
        disabled={!selectedOption}
      >
        {t('Step1.button')}
      </button>
    </div>
  );
};

Step1.propTypes = {
  onNext: PropTypes.func.isRequired,
};

export default Step1;



