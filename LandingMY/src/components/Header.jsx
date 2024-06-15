/* eslint-disable no-unused-vars */
import {React, useState} from 'react';
import Logo from '../assets/Logo.png';
import {RiMenuFill, RiCloseLine} from "react-icons/ri"

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className="flex items-center w-full p-4 h-[10vh]">
      <div className="w-1/5 flex justify-center items-center">
      <img src={Logo} alt="Logo" className="ffixed w-full h-full xl:static h-12 w-auto ml-4 mt-2" />
      </div>
      <div className="border-l-2 border-gray-300 h-12 mx-4"></div>
      <nav
        className={`fixed bg-white w-[80%] md:w-[40%] xl:w-full h-full ${
          showMenu ? "left-0" : "-left-full"
        } top-0 xl:static flex-1 flex flex-col xl:flex-row items-center justify-center gap-10 transition-all duration-500 z-50`}
      >
        <a href='#' >
          Servicios y Desarrollos
        </a>
        <a href='#' >
          Nosotros
        </a>
        <a href='#' >
          Contacto
        </a>
        <a href='#' >
          que mas ponemos?
        </a>
      </nav>
      <button><RiMenuFill/></button>
    </header>
  );
}

export default Header;


