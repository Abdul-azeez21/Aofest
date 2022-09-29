import React from "react";
import "./App.css";
import Homepage from "./pages/Homepage";
import { Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Properties from "./pages/Properties";
import SingleProp from "./components/Card/SingleProp";

function App() {
  return (
    // <BrowserRouter>
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="props" element={<Properties />} />
        <Route path="each" element={<SingleProp />} />
      </Routes>
    </>
    // </BrowserRouter>
  );
}

export default App;
