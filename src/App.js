import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Menus from './pages/Menus';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import Reservation from './pages/Reservation';

function App() {
    return (
        <Router>
            <div>
                <header style={{ backgroundColor: '#f8b400', padding: '20px', textAlign: 'center' }}>
                    <h1>Welcome to Our Restaurant</h1>
                </header>
                <nav style={{ textAlign: 'center', margin: '20px' }}>
                    <Link to="/" style={{ margin: '10px' }}>Home</Link>
                    <Link to="/menus" style={{ margin: '10px' }}>Menus</Link>
                    <Link to="/about" style={{ margin: '10px' }}>About Us</Link>
                    <Link to="/contact" style={{ margin: '10px' }}>Contact</Link>
                    <Link to="/reservation" style={{ margin: '10px' }}>Reservation</Link>
                </nav>
                <main>
                    <Routes>
                        <Route path="/" element={<LandingPage />} />
                        <Route path="/menus" element={<Menus />} />
                        <Route path="/about" element={<AboutUs />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/reservation" element={<Reservation />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;