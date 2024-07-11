import { forwardRef, useRef } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import jsPDF from 'jspdf';

const ContactForm = forwardRef(({ quoteData, onBack }, ref) => {
  const { t } = useTranslation();
  const { option1, option2, option3, totalCost } = quoteData || {};
  const description = `Tipo De Página: ${option1}, Hosting: ${option2}, Integraciones: ${option3?.join(' -- ')}, Costo total: $${totalCost}`;
  const formRef = useRef(null);

  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    doc.text("Formulario de Contacto", 10, 10);
    doc.text(`Tipo De Pagina: ${option1}`, 10, 20);
    doc.text(`Hosting: ${option2}`, 10, 30);
    doc.text(`Integraciones: ${option3?.join(', ')}`, 10, 40);
    doc.text(`Costo total: $${totalCost}`, 10, 50);
    doc.save("cotizacion.pdf");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(formRef.current);
    const formValues = Object.fromEntries(formData);

    formValues.description = description;

    try {
      const response = await fetch('http://localhost:3001/emails/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formValues),
      });

      if (response.ok) {
        handleDownloadPDF();
        alert('Formulario enviado con éxito');
      } else {
        alert('Error al enviar el formulario');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error al enviar el formulario');
    }
  };

  return (
    <div ref={ref} className="bg-white p-8 xl:p-20">
      <h2 className="text-xl font-bold mb-6">{t('ContactForm.title')}</h2>

      <form ref={formRef} onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="firstName">
            {t('ContactForm.firstName')}
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="lastName">
            {t('ContactForm.familyname')}
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
          />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700" htmlFor="email">
            {t('ContactForm.email')}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
          />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700" htmlFor="phone">
            {t('ContactForm.phone')}
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
          />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700" htmlFor="comentario">
            {t('ContactForm.comentario')}
          </label>
          <input
            id="comentario"
            name="comentario"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
          />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700" htmlFor="description">
            {t('ContactForm.description')}
          </label>
          <textarea
            id="description"
            name="description"
            value={description}
            readOnly
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
          />
        </div>
        <div className="md:col-span-2">
          <button
            type="submit"
            className="w-full mb-5 py-2 px-4 bg-orange-500 text-white font-semibold rounded-md shadow-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >
            {t('ContactForm.downloadPdf')}
          </button>
        </div>
      </form>
      <button
        onClick={onBack}
        className="w-full py-2 px-4 bg-gray-300 text-white font-semibold rounded-md shadow-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
      >
        {t('ContactForm.back')}
      </button>
    </div>
  );
});

ContactForm.propTypes = {
  quoteData: PropTypes.shape({
    option1: PropTypes.string,
    option2: PropTypes.string,
    option3: PropTypes.arrayOf(PropTypes.string),
    totalCost: PropTypes.number,
  }),
  onBack: PropTypes.func,
};

ContactForm.displayName = 'ContactForm';

export default ContactForm;









