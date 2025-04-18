import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Education from './components/Education';
import Footer from './components/Footer';
import React from 'react';
import { BrowserRouter as Router, } from 'react-router-dom';
function App() {
  return (

    <Router>
      <div className="App">
        <Header />
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Education />
        <Footer />
      </div>
    </Router>


  );
}

export default App;
