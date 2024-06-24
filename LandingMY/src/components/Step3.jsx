import { useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import agenda from "../assets/agenda.png";
import blog from "../assets/blog.png";
import cash from "../assets/cash.png";
import catalogo from "../assets/catalogo.png";
import dash from "../assets/dash.png";
import wa from "../assets/wa.png";
import delivery from "../assets/delivery.png";
import bot from "../assets/bot.png";

const Step3 = ({ onNext, onBack }) => {
  const { t } = useTranslation();
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleSubmit = () => {
    onNext({ option3: selectedOption });
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-xl font-bold mb-4">
        {t("Step3.title")}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div
          className={`p-4 border rounded-lg cursor-pointer ${selectedOption === 'option1' ? 'border-yellow-500' : 'border-gray-300'}`}
          onClick={() => handleOptionChange('option1')}
        >
          <img src={blog} alt="Opción 1" className="w-1/2 h-auto mx-auto" />
          <p>Opción 1</p>
        </div>
        <div
          className={`p-4 border rounded-lg cursor-pointer ${selectedOption === 'option2' ? 'border-yellow-500' : 'border-gray-300'}`}
          onClick={() => handleOptionChange('option2')}
        >
          <img src={catalogo} alt="Opción 2" className="w-1/2 h-auto mx-auto" />
          <p>Opción 2</p>
        </div>
        <div
          className={`p-4 border rounded-lg cursor-pointer ${selectedOption === 'option3' ? 'border-yellow-500' : 'border-gray-300'}`}
          onClick={() => handleOptionChange('option3')}
        >
          <img src={delivery} alt="Opción 3" className="w-1/2 h-auto mx-auto" />
          <p>Opción 3</p>
        </div>
        <div
          className={`p-4 border rounded-lg cursor-pointer ${selectedOption === 'option4' ? 'border-yellow-500' : 'border-gray-300'}`}
          onClick={() => handleOptionChange('option4')}
        >
          <img src={agenda} alt="Opción 4" className="w-1/2 h-auto mx-auto" />
          <p>Opción 4</p>
        </div>
        <div
          className={`p-4 border rounded-lg cursor-pointer ${selectedOption === 'option5' ? 'border-yellow-500' : 'border-gray-300'}`}
          onClick={() => handleOptionChange('option5')}
        >
          <img src={dash} alt="Opción 5" className="w-1/2 h-auto mx-auto" />
          <p>Opción 5</p>
        </div>
        <div
          className={`p-4 border rounded-lg cursor-pointer ${selectedOption === 'option6' ? 'border-yellow-500' : 'border-gray-300'}`}
          onClick={() => handleOptionChange('option6')}
        >
          <img src={cash} alt="Opción 6" className="w-1/2 h-auto mx-auto" />
          <p>Opción 6</p>
        </div>
        <div
          className={`p-4 border rounded-lg cursor-pointer ${selectedOption === 'option7' ? 'border-yellow-500' : 'border-gray-300'}`}
          onClick={() => handleOptionChange('option7')}
        >
          <img src={wa} alt="Opción 7" className="w-1/2 h-auto mx-auto" />
          <p>Opción 7</p>
        </div>
        <div
          className={`p-4 border rounded-lg cursor-pointer ${selectedOption === 'option8' ? 'border-yellow-500' : 'border-gray-300'}`}
          onClick={() => handleOptionChange('option8')}
        >
          <img src={bot} alt="Opción 8" className="w-1/2 h-auto mx-auto" />
          <p>Opción 8</p>
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
          className="px-4 py-2 bg-orange-500 text-white rounded-md"
          disabled={!selectedOption}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};

Step3.propTypes = {
  onNext: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired,
};

export default Step3;
