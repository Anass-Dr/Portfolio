import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavbarContextProvider from './context/NavbarContext';
import Navigation from './components/Navigation';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ProjectsPage from './components/ProjectsPage';
import ContactPage from './components/ContactPage';

function App() {
  return (
    <NavbarContextProvider>
      <div className="App">
        <Navigation />
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </NavbarContextProvider>
  );
}

export default App;
