import { useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import ContactForm from './ContactForm';


const QuoteWizard = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    option1: '',
    option2: '',
    option3: '',
    option4: '',
  });

  const handleNext = (data) => {
    setFormData({ ...formData, ...data });
    setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <div className="w-full p-8">
      {currentStep === 1 && <Step1 onNext={handleNext} />}
      {currentStep === 2 && <Step2 onNext={handleNext} onBack={handleBack} />}
      {currentStep === 3 && <Step3 onNext={handleNext} onBack={handleBack} />}
      {currentStep === 4 && <Step4 onNext={handleNext} onBack={handleBack} />}
      {currentStep === 5 && <ContactForm onBack={handleBack} formData={formData} />}
    </div>
  );
};

export default QuoteWizard;
