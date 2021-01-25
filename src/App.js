import React from "react";
import { BrowserRouter as Router } from 'react-router-dom'; 

import "./scss/main.css";
import Routing from "./components/routing";
import Navbar from './components/home/navbar';

function App() {
  return (
    <Router>
    <Navbar/>
    <Routing/>
    </Router>
  );
}

export default App;
