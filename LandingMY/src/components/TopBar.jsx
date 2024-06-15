
const TopBar = () => {
    return (
      <div className="text-sm py-2 px-4 flex justify-between items-center">
        <div>
          <a href="#" className="text-gray-600 hover:text-gray-800 mx-2">IS</a>
        </div>
        <div className="flex space-x-4 mr-40">
          <a href="#" className="text-gray-600 hover:text-gray-800">Login</a>
          <a href="#" className="text-gray-600 hover:text-gray-800">Ventas</a>
          <a href="#" className="text-gray-600 hover:text-gray-800">Atención al cliente</a>
          <a href="#" className="text-gray-600 hover:text-gray-800">Whatsapp</a>
        </div>
      </div>
    );
  }
  
  export default TopBar;