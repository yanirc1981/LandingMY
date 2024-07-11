// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line no-unused-vars
import React from "react";
import "./FlipCard.css";
import PropTypes from "prop-types";
import { FaProjectDiagram, FaCogs, FaGlobe, FaHandshake } from "react-icons/fa"; // Importa los iconos necesarios
import { useTranslation } from 'react-i18next';

const FlipCard = ({ frontText, backTitle, backSteps, backHighlight, frontColor, backColor, mainIcon: MainIcon }) => {
  const { t } = useTranslation();
  
  return (
    <div className="group perspective my-4 mb-0">
      <div className="flip-card relative w-70 h-160 md:w-80 md:h-180 rounded-lg shadow-lg transition-transform duration-500 preserve-3d">
        <div
          className={`flip-card-front absolute  rounded-lg text-white flex flex-col items-center justify-center ${frontColor}`}
        >
          <div className="half-circle-icon"></div> {/* Medio círculo */}
          <div className="text-center mt-12">
            <MainIcon size={48} />
            <p className="text-2xl">{t(frontText)}</p>
          </div>
          <div className="absolute bottom-4 text-center w-full">
            <p className="text-lg italic text-orange-500 mb-2">{t('FlipCard.Más Detalles')}</p>
            <div className="flex justify-center">
              <span className="mr-1">←</span>
              <span className="ml-1">→</span>
            </div>
          </div>
        </div>
        <div
          className={`flip-card-back absolute w-full h-full rounded-lg text-white flex flex-col items-center justify-center p-6 ${backColor}`}
        >
          <h2 className="text-3xl font-bold mb-4">{t(backTitle)}</h2>
          <ul className="text-center mb-4">
            {backSteps.map((step, index) => (
              <li key={index}>{t(step)}</li>
            ))}
          </ul>
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-orange-500 mb-3">{t(backHighlight)}</h3>

        </div>
      </div>
    </div>
  );
};

FlipCard.propTypes = {
  frontText: PropTypes.string.isRequired,
  backTitle: PropTypes.string.isRequired,
  backSteps: PropTypes.arrayOf(PropTypes.string).isRequired,
  backHighlight: PropTypes.string.isRequired,
  frontColor: PropTypes.string.isRequired,
  backColor: PropTypes.string.isRequired,
  mainIcon: PropTypes.elementType.isRequired, // Icono principal
};

const FlipCardContainer = () => {
  
  return (
    <div className="flex flex-col items-center md:flex-row justify-around my-8 md:space-x-4">
      <FlipCard
        frontText="FlipCard.Planificación"
        backTitle="FlipCard.Primer Paso"
        backSteps={[
          "FlipCard.Recolección de Requisitos y Planificación"
        ]}
        backHighlight="FlipCard.Planificación"
        frontColor="bg-customBlue"
        backColor="bg-customRed"
        mainIcon={FaProjectDiagram} // Icono principal para la primera tarjeta
      />
      <FlipCard
        frontText="FlipCard.Desarrollo"
        backTitle="FlipCard.Segundo Paso"
        backSteps={[
          "FlipCard.Implementación de Funcionalidades",
          "FlipCard.Pruebas Continuas"
        ]}
        backHighlight="FlipCard.Desarrollo"
        frontColor="bg-customGreen"
        backColor="bg-customYellow"
        mainIcon={FaCogs} // Icono principal para la segunda tarjeta
      />
      <FlipCard
        frontText="FlipCard.Lanzamiento"
        backTitle="FlipCard.Tercer Paso"
        backSteps={[
          "FlipCard.Pruebas Finales",
          "FlipCard.Preparación de Producción",
          "FlipCard.Despliegue"
        ]}
        backHighlight="FlipCard.Lanzamiento"
        frontColor="bg-customPurple"
        backColor="bg-customPink"
        mainIcon={FaGlobe} // Icono principal para la tercera tarjeta
      />
      <FlipCard
        frontText="FlipCard.Mantenimiento"
        backTitle="FlipCard.Cuarto Paso"
        backSteps={[
          "FlipCard.Monitoreo Continuo",
          "FlipCard.Actualizaciones Regulares",
          "FlipCard.Soporte Técnico"
        ]}
        backHighlight="FlipCard.Mantenimiento"
        frontColor="bg-customPurple"
        backColor="bg-customBlue"
        mainIcon={FaHandshake} // Icono principal para la cuarta tarjeta
      />
    </div>
  );
};

export default FlipCardContainer;


