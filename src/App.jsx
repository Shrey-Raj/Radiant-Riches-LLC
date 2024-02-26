import React from "react";
import "./App.scss";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import LowerSection from "./components/LowerSection";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection/>
      <LowerSection/>
      <Footer/>
    </>
  );
};

export default App;

