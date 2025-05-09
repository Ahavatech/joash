
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Tools from './components/Tools';
import Reviews from './components/Reviews';
import Pricing from './components/Pricing';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/pricing" element={<Price />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
