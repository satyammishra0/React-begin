import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="bg-indigo-700 text-slate-100 px-16 py-5">
      <div className="links-parent grid footer-link-grid-parent ">
        <div className="logo-parent">
          <h2 className="text-2xl font-bold mb-4">Dummy Website</h2>
          <address>
            14/84, Vikram Vihar, Lajpat Nagar-IV, New Delhi – 110024
          </address>
          <div className="social-logo flex gap-x-3 mt-4">
            <a
              href="#"
              className="text-xl hover:text-slate-500 ease-linear duration-150 transition"
            >
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
            <a
              href="#"
              className="text-xl hover:text-slate-500 ease-linear duration-150 transition"
            >
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
            <a
              href="#"
              className="text-xl hover:text-slate-500 ease-linear duration-150 transition"
            >
              <ion-icon name="logo-youtube"></ion-icon>
            </a>
            <a
              href="#"
              className="text-xl hover:text-slate-500 ease-linear duration-150 transition"
            >
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
          </div>
        </div>
        {/* this are the links*/}
        <div className="links grid ">
          <ul>
            <li className="mb-2 font-normal">
              <a
                className="transition duration-150 ease-linear hover:text-zinc-400"
                href="#"
              >
                Home
              </a>
            </li>
            <li className="mb-2 font-normal">
              <a
                className="transition duration-150 ease-linear hover:text-zinc-400"
                href="#"
              >
                About Us
              </a>
            </li>
            <li className="mb-2 font-normal">
              <a
                className="transition duration-150 ease-linear hover:text-zinc-400"
                href="#"
              >
                Contact
              </a>
            </li>
            <li className="mb-2 font-normal">
              <a
                className="transition duration-150 ease-linear hover:text-zinc-400"
                href="#"
              >
                Ratings
              </a>
            </li>
            <li className="mb-2 font-normal">
              <a
                className="transition duration-150 ease-linear hover:text-zinc-400"
                href="#"
              >
                Links
              </a>
            </li>
          </ul>
        </div>
        {/* this are the links*/}
        <div className="links grid ">
          <ul>
            <li className="mb-2 font-normal">
              <a
                className="transition duration-150 ease-linear hover:text-zinc-400"
                href="#"
              >
                Home
              </a>
            </li>
            <li className="mb-2 font-normal">
              <a
                className="transition duration-150 ease-linear hover:text-zinc-400"
                href="#"
              >
                About Us
              </a>
            </li>
            <li className="mb-2 font-normal">
              <a
                className="transition duration-150 ease-linear hover:text-zinc-400"
                href="#"
              >
                Contact
              </a>
            </li>
            <li className="mb-2 font-normal">
              <a
                className="transition duration-150 ease-linear hover:text-zinc-400"
                href="#"
              >
                Ratings
              </a>
            </li>
            <li className="mb-2 font-normal">
              <a
                className="transition duration-150 ease-linear hover:text-zinc-400"
                href="#"
              >
                Links
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-5">
        <p className="text-center py-4 border-t-2 border-white rounded border-solid">
          Copyright © 2023, Dummy Website - All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
