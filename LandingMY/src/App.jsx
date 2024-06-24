import Header from "./components/Header";
import Hero from "./components/Hero";
import TopBar from "./components/TopBar"
import WhatsAppButton from "./components/WhatsappButton";
import StickyNav from "./components/StickyNav";
import { useTranslation } from 'react-i18next';
import Bottons from "./components/Bottons"
import TabbedImages from "./components/TabbedImages";
import Works from "./components/Works"
import FlipCardContainer from "./components/FlipCardContainer";
import Footer from "./components/Footer"
import ContactForm from "./components/ContactForm";
import QuoteWizard from "./components/QuotteWizard";


function App() {
  // eslint-disable-next-line no-unused-vars
  const {t} = useTranslation();
  return (
    <div>
      <TopBar/>
      <Header />
      <Hero />
      <StickyNav />
      <Bottons/>
      <TabbedImages />
      <Works/>
        
      <FlipCardContainer/>
      <QuoteWizard />
      
      <ContactForm/>
      <Footer/>
      <WhatsAppButton/>
    </div>
  );
}

export default App;
