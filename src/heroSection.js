import React from "react";
import mobile from "./mobile.jpg";

const heroSection = () => (
  <div className="heroparent grid grid-cols-2 gap-10 px-16 py-10">
    <div className="hero-left pt-5">
      <h1 className="text-4xl font-extrabold">
        Welcome to our Mobile Selling Website!
      </h1>
      <p className="my-7">
        At Your Mobile Selling Website Name, we bring you the latest and
        greatest mobile devices to keep you connected, entertained, and
        productive on the go. Our passion for technology drives us to offer an
        exceptional selection of smartphones that cater to your diverse needs
        and preferences. Discover a wide range of top-notch smartphones from
        renowned brands, each packed with cutting-edge features and innovative
        technology.
      </p>
      <button className="rounded-full px-5 py-2 bg-indigo-700 text-white">
        Click Me
      </button>
    </div>
    <div className="hero-right">
      <img src={mobile} className="rounded" />
    </div>
  </div>
);

export default heroSection;
