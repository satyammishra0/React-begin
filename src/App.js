import React from "react";
import NavBar from "./Navbar";
import Footer from "./footer";
import HeroSection from "./heroSection";
import cardimg1 from "./card-1.jpg";
import cardimg2 from "./card-2.jpg";
import cardimg3 from "./card-3.jpg";
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
