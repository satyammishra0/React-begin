import React from "react";

const NavBar = () => {
  return (
    <header
      className="header sticky-header width-100 utility_flex-center-between sticky-header"
      id="main_website_header"
    >
      <div className="header-logo">
        <a href="../pages/home.php">
          <img src="../assets/images/new-logo.png" alt="Header logo" />
        </a>
      </div>
      <nav>
        <ul className="nav-list utility_flex utility_flex-center-center">
          <li className="nav-links">
            <a href="../pages/home.php"> HOME</a>
          </li>
          <li className="nav-links">
            <a href="../pages/about.php"> ABOUT</a>
          </li>
          <li className="nav-links">
            <a href="../pages/project-1.php"> PROJECTS</a>
            <div className="sub-menu sub-menu-car" id="sub_menu">
              <div className="sub-menu-child w-100 ">
                <ul className="w-100 py-2">
                  <li className="w-100">
                    <a className="w-100" href="../pages/project-1.php">
                      Project Aevum
                    </a>
                  </li>
                  <li className="w-100">
                    <a className="w-100" href="../pages/project-2.php">
                      Project Aria
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li className="nav-links">
            <a href="../pages/amenities.php"> AMENITIES</a>
          </li>
          <li className="nav-links">
            <a href="../pages/gallery.php"> GALLERY</a>
          </li>
          <li className="nav-links">
            <a href="../pages/contact.php"> CONTACT</a>
          </li>
          <li className="nav-links">
            <a href="https://www.instagram.com/futeragroup/">
              <i className="bx bxl-instagram"></i>
            </a>
            <a href="https://www.facebook.com/profile.php?id=100092867637067">
              <i className="bx bxl-facebook-square"></i>
            </a>
            <a href="https://www.youtube.com/@Futeragroup">
              <i className="bx bxl-youtube"></i>
            </a>
          </li>
        </ul>
      </nav>
      {/* <!-- --------------------- -->
    <!-- Mobile nav styling here -->
    <!-- --------------------- --> */}
      <div className="mobile-navbar-btn">
        <i
          className="bx bx-menu mobile-nav-icon"
          id="menu-icon"
          name="menu-sharp"
        ></i>
        <i
          className="bx bx-home mobile-nav-icon"
          id="close-icon"
          name="close-sharp"
        ></i>
      </div>
    </header>
  );
};

export default NavBar;
