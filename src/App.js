
import './App.css';
import EazeplaceFeatures from './Components/EazeFeatures.jsx';
import { Footer } from './Components/Footer.jsx';
import HeroSection from './Components/HeroSection ';
import { Horizontal } from './Components/Horizontal.jsx';
import JoinSec from './Components/JoinSec';
import { Navbar } from './Components/Navbar';
import { Reviews } from './Components/Reviews.jsx';

function App() {
  return (
  <>
    <Navbar/>
    <HeroSection/>
    <JoinSec/>
    <EazeplaceFeatures/>
    <Horizontal/>
    <Reviews/>
    <Footer/>
  </>
  );
}

export default App;
