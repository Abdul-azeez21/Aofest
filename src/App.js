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
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   loading
  //     ? document.querySelector("body").classList.add("loading")
  //     : document.querySelector("body").classList.remove("loading");
  // }, [loading]);

  return (
    // <div>
    //   {loading ? (
    //     <Loader setLoading={setLoading} />
    //   ) : (

    //   )}
    // </div>
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="props" element={<Properties />} />
        <Route path="each" element={<SingleProp />} />
        {/* <Route path="load" element={<Loader />} /> */}
      </Routes>
    </>
  );
}

export default App;
