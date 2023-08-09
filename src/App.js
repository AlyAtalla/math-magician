import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import Calculator from './components/Calculator';
import Quotes from './components/Quotes';

const App = () => (
  <Router>
    <Nav />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calculator" element={<Calculator />} />
      <Route path="/quotes" element={<Quotes />} />
    </Routes>
  </Router>
);

export default App;
