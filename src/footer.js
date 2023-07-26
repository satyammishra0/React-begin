import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="links-parent">
        <div className="logo-parent">
          <h2>Dummy Website</h2>
          <address>
            14/84, Vikram Vihar, Lajpat Nagar-IV, New Delhi – 110024
          </address>
          <div className="social-logo">
            <a>
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
            <a>
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
            <a>
              <ion-icon name="logo-youtube"></ion-icon>
            </a>
            <a>
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
          </div>
        </div>
      </div>
      <p>Copyright © 2023, Dummy Website - All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
