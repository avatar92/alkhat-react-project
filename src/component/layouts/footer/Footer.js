import React from "react";
import "./footer.css";

import alkhat from "../../../../src/images/logos/alkhatt-logo.png";
import facebook from "../../../../src/images/icons/facebook-icon.png";
import youtube from "../../../../src/images/icons/youtube-icon.png";
import mail from "../../../../src/images/icons/Mail.png";
import twitter from "../../../../src/images/icons/twitter-icon.png";

const Footer = () => {
  return (
    <footer className="main-footer container-fluid">
      <div className="row mx-3 footer-wrapper">
        <div className="logoAlkhat-wrapper col-3">
          <img src={alkhat} className="alkhatLogo" alt="logo-alkhat" />
          <p className="copyrights">© Association Al Khatt 2017</p>
        </div>
        <div className="apropos-wrapper col-2">
          <h6 className="footer-title">A PROPOS</h6>
          <div className="small-horizental-seperator"></div>
          <p className="footer-links">
            Présentation
            <br />
            Conseil d’administration
            <br />
            Financement
          </p>
        </div>
        <div className="liens-wrapper col-2">
          <h6 className="footer-title">LIENS</h6>
          <div className="small-horizental-seperator"></div>
          <p className="footer-links">
            Inkyfada
            <br />
            Inkube
            <br />
            Jaridaty
          </p>
        </div>
        <div className="contact-wrapper col-2">
          <h6 className="footer-title">CONTACT</h6>
          <div className="small-horizental-seperator"></div>
          <p className="footer-links">contact@alkhatt.org</p>
        </div>
        <div className="socials-media-wrapper col-3">
          <img src={twitter} className="twitter ml-2" alt="twitter-icon" />
          <img src={facebook} className="facebook ml-4" alt="facebook-icon" />
          <img src={youtube} className="youtube ml-4" alt="youtube-icon" />
          <img src={mail} className="mail ml-4" alt="mail-icon" />
        </div>
      </div>
    </footer>
  );
};
export default Footer;
