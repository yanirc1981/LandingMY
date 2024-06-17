import { useState } from 'react';

import resumen from '../assets/resumen.png';
import calendario from '../assets/calendario.png';
import empleados from '../assets/empleados.png';
import coordenadas from '../assets/coordenadas.png';
import factura from '../assets/factura.png';
import caja from '../assets/caja.png';

const TabbedImages = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const getImageAndText = (tab) => {
    switch (tab) {
      case 'tab1':
        return {
          image: resumen,
          text: 'Texto explicativo para el Resumen.',
        };
      case 'tab2':
        return {
          image: factura,
          text: 'Texto explicativo para Facturación.',
        };
      case 'tab3':
        return {
          image: empleados,
          text: 'Texto explicativo para la Gestión de Turnos.',
        };
      case 'tab4':
        return {
          image: coordenadas,
          text: 'Texto explicativo para Coordenadas.',
        };
      case 'tab5':
        return {
          image: calendario,
          text: 'Texto explicativo para Tareas.',
        };
      case 'tab6':
        return {
          image: caja,
          text: 'Texto explicativo para Caja.',
        };
      default:
        return {
          image: resumen,
          text: 'Texto explicativo por defecto.',
        };
    }
  };

  const { image, text } = getImageAndText(activeTab);

  return (
    <div className="flex flex-col items-center">
      <div className="flex space-x-4 mb-4">
        <button
          className={`px-4 py-2 rounded-full ${activeTab === 'tab1' ? 'bg-yellow-500 text-white' : 'bg-gray-200 text-gray-600'}`}
          onClick={() => handleTabClick('tab1')}
        >
          Resumen
        </button>
        <button
          className={`px-4 py-2 rounded-full ${activeTab === 'tab2' ? 'bg-yellow-500 text-white' : 'bg-gray-200 text-gray-600'}`}
          onClick={() => handleTabClick('tab2')}
        >
          Facturación
        </button>
        <button
          className={`px-4 py-2 rounded-full ${activeTab === 'tab3' ? 'bg-yellow-500 text-white' : 'bg-gray-200 text-gray-600'}`}
          onClick={() => handleTabClick('tab3')}
        >
          Turnos
        </button>
        <button
          className={`px-4 py-2 rounded-full ${activeTab === 'tab4' ? 'bg-yellow-500 text-white' : 'bg-gray-200 text-gray-600'}`}
          onClick={() => handleTabClick('tab4')}
        >
          Coordenadas
        </button>
        <button
          className={`px-4 py-2 rounded-full ${activeTab === 'tab5' ? 'bg-yellow-500 text-white' : 'bg-gray-200 text-gray-600'}`}
          onClick={() => handleTabClick('tab5')}
        >
          Tareas
        </button>
        <button
          className={`px-4 py-2 rounded-full ${activeTab === 'tab6' ? 'bg-yellow-500 text-white' : 'bg-gray-200 text-gray-600'}`}
          onClick={() => handleTabClick('tab6')}
        >
          Caja
        </button>
      </div>
      <div className="w-full flex flex-col md:flex-row justify-center items-center md:items-start space-y-4 md:space-y-0 md:space-x-4">
        <div className="w-full md:w-1/3 p-4">
          <p className="text-gray-800">{text}</p>
        </div>
        <div className="w-full md:w-2/3 flex justify-center items-center">
          <img src={image} alt="Tab Image" className="w-full h-auto max-w-full md:max-w-md" />
        </div>
      </div>
    </div>
  );
};

export default TabbedImages;



