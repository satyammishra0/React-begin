import React from "react";

const Card = ({ src, heading }) => (
  <div className="card1 bg-indigo-700 text-white rounded-t-2xl rounded-b-2xl">
    <div className="card-img">
      <img src={src} className="h-full w-full rounded-t-2xl" />
    </div>
    <div className="card-content px-5 py-5">
      <h2 className="text-2xl font-bold py-3">{heading}</h2>
      <p className="text-justify">
        At Your Mobile Selling Website Name, we bring you the latest and
        greatest mobile devices to keep you connected, entertained, and
        productive on the go.
      </p>
      <button className="rounded-full bg-white text-black px-4 py-2 mt-5">
        Read More
      </button>
    </div>
  </div>
);

export default Card;
