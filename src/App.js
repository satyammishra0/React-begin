import React from "react";
import NavBar from "./Navbar";
import Footer from "./footer";
import HeroSection from "./heroSection";
import CardsSection from "./cards-section";

const App = () => {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <CardsSection />
      <Footer />
    </div>
  );
};

export default App;
