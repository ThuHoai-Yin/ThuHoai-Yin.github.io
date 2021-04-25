
import './App.css';
import Navbar from './components/Navbar';
import PortAbout from './components/PortAbout';
import PortHeader from './components/PortHeader';
import Port from './components/Port';
import Hire from './components/Hire';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
    <Navbar />
    <PortHeader/>
    <PortAbout/>
    <Port/>
    <Hire/>
    <Contact/>
    <Footer/>
        </div>
        
  );
  
}

export default App;
