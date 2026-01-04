import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/main.css';
import './assets/css/responsive.css';
// import "./assets/css/navbar.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import WhatsAppButton from './components/WhatsAppButton';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

function App() {
    return (
        <Router>
            {/* ToastContainer should be at top-level so any component can trigger toasts */}
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />

            {/* Add padding-top to avoid content hiding behind fixed navbar */}
            <div>
                <Navbar />
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
