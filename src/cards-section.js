import React from "react";
import cardimg1 from "./card-1.jpg";
import cardimg2 from "./card-2.jpg";
import cardimg3 from "./card-3.jpg";

const CardsSection = () => (
  <div className="px-16 py-8">
    <h2 className="align-center text-center my-4 text-3xl font-bold">
      Blogs Parent{" "}
    </h2>
    <div className="card-parent grid grid-cols-3 gap-10">
      <div className="card1 bg-indigo-700 text-white rounded-t-2xl rounded-b-2xl">
        <div className="card-img">
          <img src={cardimg1} className=" h-full w-full rounded-t-2xl" />
        </div>
        <div className="card-content px-5 py-5">
          <h2 className="text-2xl font-bold py-3">This is heading one</h2>
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

      <div className="card1 bg-indigo-700 text-white rounded-t-2xl rounded-b-2xl">
        <div className="card-img">
          <img src={cardimg2} className=" h-full w-full rounded-t-2xl" />
        </div>
        <div className="card-content px-5 py-5">
          <h2 className="text-2xl font-bold py-3">This is heading one</h2>
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

      <div className="card1 bg-indigo-700 text-white rounded-t-2xl rounded-b-2xl">
        <div className="card-img">
          <img src={cardimg3} className=" h-full w-full rounded-t-2xl" />
        </div>
        <div className="card-content px-5 py-5">
          <h2 className="text-2xl font-bold py-3">This is heading one</h2>
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
    </div>
  </div>
);

export default CardsSection;
