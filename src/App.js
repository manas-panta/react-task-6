import './App.css';

import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar'
import Skills from './components/Skills';

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Skills />
      <Footer />
    </>
  );
}

export default App;