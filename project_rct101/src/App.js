
import './App.css';
import Navbar from './components/Navbar';
import Nav from './components/Nav';
import Footer from './components/Footer';
import CaptionCarousel from './components/Carousel';
import Landingd2 from './components/Landingd2';
import L2 from './components/L2';
import Top from './components/Top';

function App() {
  return (
    <div className="App">
     <Navbar />
 
     <CaptionCarousel />
     <Top />
     <L2/>
     <Landingd2/>
<Footer />
   
    </div>
  );
}

export default App;
