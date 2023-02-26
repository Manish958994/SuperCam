import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Nav from './components/Nav';
import Footer from './components/Footer';
import CaptionCarousel from './components/Carousel';

function App() {
  return (
    <div className="App">
     <Navbar />
     {/* <Nav /> */}
     <CaptionCarousel />
     
<Footer />
   
    </div>
  );
}

export default App;
