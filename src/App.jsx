import React from 'react' 
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";

import Home from "./pages/Home";
import About from "./pages/About";
import Jobs from "./pages/Jobs";

import './App.css'

function App() {

  return (
    <Router>
      <NavBar/>
      <div className="flex">
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/jobs" element={<Jobs />} />
          </Routes>
        </div>
      </div>
    </Router>
    
  );
};

export default App;
