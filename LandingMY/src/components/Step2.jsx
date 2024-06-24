import { useState } from "react";
import PropTypes from "prop-types";
import dominio from "../assets/dominio.png";
import hosting from "../assets/hosting.png";
import { useTranslation } from "react-i18next";

const Step2 = ({ onNext, onBack }) => {
  const { t } = useTranslation();
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleSubmit = () => {
    onNext({ option2: selectedOption });
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-xl font-bold mb-8 p-20">
        {t("Step2.title")}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div
          className={`p-2 border rounded-lg cursor-pointer flex flex-col items-center ${
            selectedOption === "option1" ?  'border-yellow-500 bg-yellow-100 scale-105' : 'border-gray-300'
          }`}
          onClick={() => handleOptionChange("option1")}
        >
          <img
            src={dominio}
            alt={t('Step2.dominio')}
            className="w-48 h-48 object-cover mb-2"
          />
          <p className="text-center text-sm">{t('Step2.dominio')}</p>
        </div>
        <div
          className={`p-2 border rounded-lg cursor-pointer flex flex-col items-center ${
            selectedOption === "option2" ? 'border-yellow-500 bg-yellow-100 scale-105' : 'border-gray-300'
          }`}
          onClick={() => handleOptionChange("option2")}
        >
          <img
            src={hosting}
            alt='Step2.hosting'
            className="w-48 h-48 object-cover mb-2"
          />
          <p className="text-center text-sm">{t('Step2.hosting')}</p>
        </div>
      </div>
      <div className="flex mt-4 space-x-4">
        <button
          onClick={onBack}
          className="px-4 py-2 bg-gray-500 text-white rounded-md"
        >
          Atrás
        </button>
        <button
          onClick={handleSubmit}
          className=" px-4 py-2 bg-orange-500 text-white rounded-md p-40"
          disabled={!selectedOption}
        >
           {t('Step2.button')}
        </button>
      </div>
    </div>
  );
};

Step2.propTypes = {
  onNext: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired,
};

export default Step2;

