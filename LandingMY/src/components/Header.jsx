/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Logo from '../assets/Logo.png';
import { RiMenuFill, RiCloseLine } from "react-icons/ri";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="flex items-center justify-between w-full p-4 h-[10vh] z-50 relative">
      <div className="xl:w-1/5 text-center">
        <img src={Logo} alt="Logo" className="w-full h-full xl:static h-12 w-auto ml-4 mt-2" />
      </div>
      <div className="border-l-2 border-gray-300 h-12 mx-4"></div>
      <button onClick={() => setShowMenu(!showMenu)} className="text-2xl xl:hidden z-50">
        {showMenu ? <RiCloseLine /> : <RiMenuFill />}
      </button>
      <nav
        className={`fixed bg-white w-[70%] md:w-[30%] xl:w-full h-auto ${showMenu ? "top-28 right-0" : "-top-full right-0"
          } xl:static flex flex-col xl:flex-row items-center justify-center 
        gap-10 transition-all duration-500 z-40 p-4`}>
        <a href='#' className="p-2">
          Servicios y Desarrollos
        </a>
        <a href='#' className="p-2">
          Nosotros
        </a>
        <a href='#' className="p-2">
          Contacto
        </a>
        <a href='#' className="p-2">
          que mas ponemos?
        </a>
      </nav>
    </header>
  );
}

export default Header;





