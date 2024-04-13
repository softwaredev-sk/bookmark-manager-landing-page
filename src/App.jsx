// import { useState } from 'react';
import { useState } from 'react';
import CTA from './components/CTA.jsx';
import Download from './components/Download.jsx';
import FAQ from './components/FAQ.jsx';
import Features from './components/Features.jsx';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import HeaderOverlay from './components/HeaderOverlay.jsx';
import Hero from './components/Hero.jsx';
import { AnimatePresence } from 'framer-motion';

function App() {
  const [showOverlay, setShowOverlay] = useState(false);

  function handleHeaderOverlay() {
    setShowOverlay((prev) => !prev);
  }
  return (
    <>
      <Header onSelect={handleHeaderOverlay} overlay={showOverlay} />
      <AnimatePresence>
        {showOverlay && <HeaderOverlay onSelect={handleHeaderOverlay} />}
      </AnimatePresence>
      <Hero />
      <main>
        <Features />
        <Download />
      </main>
      <FAQ />
      <CTA />
      <Footer />
    </>
  );
}

export default App;
