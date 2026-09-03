import Navbar from './components/Navbar/Navbar';
import Banar from './components/Home/Banar'; 
import About from './components/Home/About'; 

import StaticBanner from './components/Home/StaticBanner'; 
import Service from './components/Home/Service';
import Projects from './components/Home/Projects';

import Process from './components/Home/Process';
import Contact from './components/Home/Contact';
import FooterTop from './components/Footer/FooterTop';

import Footer from './components/Footer/Footer';
import ScrollToTop from './components/Home/ScrollToTop';
import Mouse from './components/Home/Mouse';

function App() {
  return (
    <div className="min-h-screen bg-[#0b0b0b]">
      <Mouse />
      
      <Navbar />
      

      <Banar />

      <About />

      <StaticBanner />

      <Service />

      <Projects />

       <Process />
       
       <Contact />

       <FooterTop />

       <Footer />

       <ScrollToTop />
      
    </div>
  );
}

export default App;