import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutMe from './components/Pages/AboutMe/AboutMe';
import CV from './components/Pages/CV/CV';
import Portfolio from './components/Pages/Portfolio/Portfolio';
import Hobby from './components/Pages/Hobby/Hobby';
import Contact from './components/Pages/Contact/Contact';
import Navigation from './components/Views/Navigation/Navigation';
import Home from './components/Pages/Home/Home';

const App = () => {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/hobby" element={<Hobby />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;