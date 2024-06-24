//import React from 'react';
import { useTranslation } from 'react-i18next';

const ContactForm = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-white p-8 xl:p-20">
      <h2 className="text-xl font-bold mb-6">
        Completá tus datos para que un asesor comercial se comunique con vos a la brevedad.
      {t('ContactForm.title')}
      </h2>
      
      <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="firstName">
            Nombre
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
          />
          {t('ContactForm.firstName')}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="lastName">
            Apellido
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
          />
          {t('ContactForm.familyname')}
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700" htmlFor="email">
            Correo electrónico
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
          />
          {t('ContactForm.email')}
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700" htmlFor="phone">
            Teléfono (Sin 0 y sin 15)
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
          />
          {t('ContactForm.phone')}
        </div>
        <div className="md:col-span-2">
          <button
            type="submit"
            className="w-full py-2 px-4 bg-primary text-white font-semibold rounded-md shadow-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >
            Enviar
            {t('ContactForm.submit')}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;

