import { useTranslation } from 'react-i18next';

const Works = () => {
  const { t } = useTranslation();
    return (
        <div>
        <div className= "p-10 ">
          <h1 className="text-[25px] font-bold text-secondary">WE CREATE WORLD-CLASS DIGITAL PRODUCTS</h1>
          {t('Bottons.WeCreate')}
      </div>
      </div>
    )
  }
  
  export default Works