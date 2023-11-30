import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './routes/Home/Home';
import Velo from './routes/VeloClandestin/VeloClandestin';
import WinWatt from './routes/WinWatt/WinWatt'
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/veloclandestin" element={<Velo />} />
        <Route path="/winwatt" element={<WinWatt />} />
      </Routes>
    </Router>
  );
};

export default App;
