import React, { useState, useEffect } from "react";
import "./App.css";
import Homepage from "./pages/Homepage";
import { BrowserRouter, Routes, Route, Link, Router } from "react-router-dom";
import Carousel from "./components/Carousel/Carousel";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Properties from "./pages/Properties";
import SingleProp from "./components/Card/SingleProp";
import Loader from "./pages/Loader";

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
