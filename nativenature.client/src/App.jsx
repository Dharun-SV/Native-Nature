import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/main.css';
import './assets/css/responsive.css';
//import "./assets/css/navbar.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import WhatsAppButton from './components/WhatsAppButton';


function App() {
    return (
        <Router>
            {/* Add padding-top to avoid content hiding behind fixed navbar */}
            <div>
                <Navbar></Navbar>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>
            <Footer />
            <WhatsAppButton />
        </Router>
    );
}

export default App;
