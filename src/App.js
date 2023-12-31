import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import {BrowserRouter as Router, Route, Routes, } from "react-router-dom";


function App() {

  return (
    <div className="App">
      <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />}/>
        <Route path="/about" exact element={<About />}/>
        <Route path="/contact" exact element={<Contact />}/>
      </Routes>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
