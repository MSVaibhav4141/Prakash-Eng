import { useState } from 'react' 
import './App.css'
import Header from './Component/Header/Header'
import About from './Component/About/About.jsx'
import { MousePositionProvider } from './utils/MousePositionContext'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
    <MousePositionProvider>
    <Router>
    <Routes>
     {/* < Header/> */}
     <Route path="/" element={<Header />} />
     <Route path="/about" element={<About />} />
     </Routes>
     </Router>
     </MousePositionProvider>
    </>
  )
}

export default App
