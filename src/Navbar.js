import React from "react";

const NavBar = () => {
  return (
    <header
      className="bg-indigo-700 flex justify-between items-center px-16 py-4"
      id="main_website_header"
    >
      <div className="header-logo">
        <h1 className="text-2xl font-bold text-slate-100">Dummy Logo</h1>
      </div>
      <ul className="flex items-center gap-x-3 ">
        <li className="nav-links">
          <a
            href="#"
            className="text-slate-100 font-normal hover:text-indigo-300 transiiton-all ease duration-300"
          >
            HOME
          </a>
        </li>
        <li className="nav-links">
          <a
            href="#"
            className="text-slate-100 font-normal hover:text-indigo-300 transiiton-all ease duration-300"
          >
            ABOUT
          </a>
        </li>
        <li className="nav-links">
          <a
            href="#"
            className="text-slate-100 font-normal hover:text-indigo-300 transiiton-all ease duration-300"
          >
            PROJECTS
          </a>
        </li>
        <li className="nav-links">
          <a
            href="#"
            className="text-slate-100 font-normal hover:text-indigo-300 transiiton-all ease duration-300"
          >
            AMENITIES
          </a>
        </li>
        <li className="nav-links">
          <a
            href="#"
            className="text-slate-100 font-normal hover:text-indigo-300 transiiton-all ease duration-300"
          >
            GALLERY
          </a>
        </li>
        <li className="nav-links">
          <a
            href="#"
            className="text-slate-100 font-normal hover:text-indigo-300 transiiton-all ease duration-300"
          >
            CONTACT
          </a>
        </li>
        {/* <li className="nav-links">
            <a href="https://www.instagram.com/futeragroup/">
              <i className="bx bxl-instagram"></i>
            </a>
            <a href="https://www.facebook.com/profile.php?id=100092867637067">
              <i className="bx bxl-facebook-square"></i>
            </a>
            <a href="https://www.youtube.com/@Futeragroup">
              <i className="bx bxl-youtube"></i>
            </a>
          </li> */}
      </ul>
    </header>
  );
};

export default NavBar;
