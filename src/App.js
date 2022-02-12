import "./App.css";
import Homepage from "./pages/Homepage";
import { BrowserRouter, Routes, Route, Link, Router } from "react-router-dom";
import Carousel from "./components/Carousel/Carousel";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Properties from "./pages/Properties";

function App() {
  return (
    <BrowserRouter>
      <>
        {/* <Homepage /> */}
        {/* <Carousel /> */}
        <Router>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="contact" element={<Contact />} />
            <Route path="about" element={<About />} />
            <Route path="props" element={<Properties />} />
          </Routes>
        </Router>
      </>
    </BrowserRouter>
  );
}

export default App;
