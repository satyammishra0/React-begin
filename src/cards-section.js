import React from "react";
import Card from "./card";
import cardimg1 from "./card-1.jpg";
import cardimg2 from "./card-2.jpg";
import cardimg3 from "./card-3.jpg";

const CardsSection = () => (
  <div className="px-16 py-8">
    <h2 className="align-center text-center my-4 text-3xl font-bold">
      Blogs Parent
    </h2>
    <div className="card-parent grid grid-cols-3 gap-10">
      <Card src={cardimg1} heading={"Test Heading"} />

      <Card src={cardimg2} heading={"Test Heading 2"} />

      <Card src={cardimg3} heading={"Test Heading 3"} />
    </div>
  </div>
);

export default CardsSection;
