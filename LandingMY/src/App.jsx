import Header from "./components/Header";
import Hero from "./components/Hero";
import TopBar from "./components/TopBar"
import WhatsAppButton from "./components/WhatsappButton";
import StickyNav from "./components/StickyNav";
import { useTranslation } from 'react-i18next';
import TabbedImages from "./components/TabbedImages";

function App() {
  // eslint-disable-next-line no-unused-vars
  const {t} = useTranslation();
  return (
    <div>
      <TopBar/>
      <Header />
      <Hero />
      <StickyNav />
      <TabbedImages />
      <WhatsAppButton/>
    </div>
  );
}

export default App;
