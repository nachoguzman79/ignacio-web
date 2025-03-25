import React from 'react' 
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";

import './App.css'

function App() {

  return (
    <Router>
      <div className="flex">
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </Router>
    
  );
};

export default App;
