import Navbar from './components/navbar';
import Hero from './components/Hero';
import About from './components/About';
import FocusAreas from './components/FocusAreas';
import Projects from './components/Projects';
import GetInvolved from './components/GetInvolved';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <FocusAreas />
      <Projects />
      <GetInvolved />
      <Contact />
    </div>
  );
}

export default App;
