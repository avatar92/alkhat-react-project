import React from "react";

import "./navbar.css";
import continueButton from "../../../../src/images/boutons/continuer-bouton.png";
import alkhatlogo from "../../../../src/images/logos/alkhatt-logo.png";
import searchIcon from "../../../../src/images/icons/search-icon.png";
import _ from "../../../../src/images/icons/_.png";
import menuicon from "../../../../src/images/icons/menu-icon.png";

const NavBar = () => {
  return (
    <header className="header-container">
      {/*introduction alkhat */}
      <div className="introduction-logo-container">
        <div className="logo-alkhat">
          <img src={alkhatlogo} className="alkhat" alt="logo-alkhat" />
          <div className="details">
            <span className="alkhatdomain mr-3">Journalisme</span>

            <div className="vertical-separation mr-3"></div>

            <span className="alkhatdomain mr-3">Innovation</span>

            <div className="vertical-separation mr-3"></div>

            <span className="alkhatdomain">design</span>
          </div>
        </div>
        <div className="button-wrapper">
          <img
            src={continueButton}
            className="continue-button"
            alt="continue-button"
          />
        </div>
      </div>
      {/*Navigation Bar */}
      <div className="navigationbar">
        <div className="navigationBrand-alkhat">
          <img className="alkhat-brand" src={alkhatlogo} alt="alkhat-brand" />
        </div>
        <nav className="navigation-container">
          <img src={_} className="navigation-icon mr-3" alt="a" />
          <div className="vertical-separation mr-3"></div>
          <img src={searchIcon} className="navigation-icon mr-3"  alt="search" />
          <div className="vertical-separation mr-3"></div>
          <img src={menuicon} className="navigation-icon"  alt="menu" />
        </nav>
      </div>
    </header>
  );
};
export default NavBar;
