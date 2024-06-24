import { CiInstagram } from 'react-icons/ci'; // Importa tu icono de Instagram
import { BsTelephone } from "react-icons/bs";
import LogoBlanco from '../assets/LogoBlanco.png'; // Asegúrate de ajustar el path a tu logo

const Footer = () => {
  return (
    <footer className="bg-footer p-8 xl:p-20">
      <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <img
          src={LogoBlanco}
          alt="Logo"
          className="h-40 w-auto ml-2 mt-1 md:mt-2" 
        />
        <ul className="flex items-center space-x-4">
          <li>
            <a href="#" className=" text-white p-2 rounded-full ml-30">
              <CiInstagram size={30} /> 
            </a>
          </li>
          <li>
            <a href="#" className=" text-white p-2 rounded-full ml-30">
              <BsTelephone size={30} /> 
            </a>
          </li>
          <li>
            <a href="#" className=" text-white p-2 rounded-full ml-30">
              <CiInstagram size={30} /> 
            </a>
          </li>
          <li>
            <a href="#" className=" text-white p-2 rounded-full ml-30">
              <CiInstagram size={30} /> 
            </a>
          </li>
         
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

