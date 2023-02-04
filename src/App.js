import React from 'react'
import Site from './components/Site'
import Home from './components/Home'
import About from './components/About'
import Portfolio from './components/Portfolio'
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Site />}/>
      <Route path="/home" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/portfolio" element={<Portfolio />}/>
    </Routes>
  )
};

export default App;