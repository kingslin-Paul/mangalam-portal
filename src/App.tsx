
import './App.css';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Technicalsepcifiaction from './components/technicalSepecification/Technicalsepcifiaction';
import Performance from './components/performance/Performance'
import Faq from './components/faq/Faq';
import Versatile from './components/versatile-application/Versatile';
import Advancehtbp from './components/advance-HTBP/Advancehtbp';
import Resource from './components/resource-and-downloads/Resource';
import Contact from './components/contact-form/Contact';
import Footer from './components/footer/Footer';
import Review from './components/performance-review/Review';
import Solution from './components/solution/Solution';

function App() {
  return (
    <div className="">
      <Header />
      <Hero />
      <Technicalsepcifiaction />
      <Performance/>
      <Faq />
      <Versatile/>
      <Advancehtbp />
      <Review />
      <Solution />
      <Resource />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
