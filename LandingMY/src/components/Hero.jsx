/* eslint-disable no-unused-vars */
import React from "react";
import BackgroundImage from "../assets/hero.png"; 

const Hero = () => {
  return (
    <section
      className="bg-cover bg-center h-[85vh]"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      <div className="flex items-center h-full bg-black bg-opacity-50 px-8">
        <div className="text-left">
          <h1 className="text-white text-3xl font-bold mb-4">
            SOLUCIONES DE GESTIÓN PARA PYMES
          </h1>
          <p className="text-white text-2xl font-bold mb-2">
            El sistema de gestión integral para Pymes
          </p>
          <p className="text-white text-2xl font-bold">
            que acompaña el crecimiento de tu negocio
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
