import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./App.css";

import "../src/index.css";
// import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Service from "./components/Service";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
