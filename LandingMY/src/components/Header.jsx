import { useState } from 'react';
import Logo from '../assets/Logo.png';
import { RiMenuFill, RiCloseLine } from "react-icons/ri";
import { useTranslation } from 'react-i18next';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { t } = useTranslation();

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
        className={`fixed bg-white w-[70%] md:w-[30%] xl:w-full h-auto ${showMenu ? "top-28 right-20" : "-top-full right-20"
          } xl:static flex flex-col xl:flex-row items-center justify-center 
        gap-10 transition-all duration-500 z-40 p-4`}>
        {t('Header.Servicios')}
        <a href='#' className="p-2">
        </a>
        <a href='#' className="p-2">
          {t('Header.Nosotros')}
        </a>
        <a href='#' className="p-2">
          {t('Header.Contacto')}
        </a>
        <a href='#' className="p-2">
          {t('Header.CotizaTuWeb')}
        </a>
      </nav>
    </header>
  );
}

export default Header;






