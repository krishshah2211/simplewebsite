import "./App.css";
import Navbar from "./Components/Navbar";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Menu from "./Pages/Menu";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

function App() {
  return (
    
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
         
        </BrowserRouter>
      </div>
    
  );
}

export default App;
