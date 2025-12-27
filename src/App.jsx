import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Gallery from "./pages/Gallery";
import About from "./pages/About";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
