import { useTranslation } from 'react-i18next';

const TopBar = () => {
  const { t } = useTranslation();
  return (
    <div className="text-xs py-2 px-4 flex items-center ml-30">
      <div className="flex space-x-4 ml-10">
        <a href="#" className="text-gray-600 hover:text-gray-800">{t('TopBar.login')}</a>
        <a href="#" className="text-gray-600 hover:text-gray-800">{t('TopBar.consultas')}</a>
        <a href="#" className="text-gray-600 hover:text-gray-800">{t('TopBar.atencion')}</a>
        <a href="#" className="text-gray-600 hover:text-gray-800">{t('TopBar.whatsapp')}</a>
      </div>
    </div>
  );
}

export default TopBar;


