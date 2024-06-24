import { useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

const Step4 = ({ onNext, onBack }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleSubmit = () => {
    onNext({ option4: selectedOption });
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-xl font-bold mb-4">¿Qué tipo de sitio web estás buscando?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div
          className={`p-4 border rounded-lg cursor-pointer ${selectedOption === 'option1' ? 'border-yellow-500' : 'border-gray-300'}`}
          onClick={() => handleOptionChange('option1')}
        >
          <img src="path_to_option1_image" alt="Opción 1" />
          <p>Opción 1</p>
        </div>
        <div
          className={`p-4 border rounded-lg cursor-pointer ${selectedOption === 'option2' ? 'border-yellow-500' : 'border-gray-300'}`}
          onClick={() => handleOptionChange('option2')}
        >
          <img src="path_to_option2_image" alt="Opción 2" />
          <p>Opción 2</p>
        </div>
        <div
          className={`p-4 border rounded-lg cursor-pointer ${selectedOption === 'option3' ? 'border-yellow-500' : 'border-gray-300'}`}
          onClick={() => handleOptionChange('option3')}
        >
          <img src="path_to_option3_image" alt="Opción 3" />
          <p>Opción 3</p>
        </div>
        <div
          className={`p-4 border rounded-lg cursor-pointer ${selectedOption === 'option4' ? 'border-yellow-500' : 'border-gray-300'}`}
          onClick={() => handleOptionChange('option4')}
        >
          <img src="path_to_option4_image" alt="Opción 4" />
          <p>Opción 4</p>
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

Step4.propTypes = {
  onNext: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired,
};

export default Step4;