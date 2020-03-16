import React from "react";

import "./homepage.css";
import detailButton from "../../../src/images/boutons/details-bouton.png";
import journalisme from "../../../src/images/icons/journalisme-icon.png";
import innovation from "../../../src/images/icons/innovation-icon.png";
import plaidoyer from "../../../src/images/icons/plaidoyer-icon.png";
import formation from "../../../src/images/icons/formation-icon.png";
import developpment from "../../../src/images/icons/developpement-icon.png";
import design from "../../../src/images/icons/design-icon.png";
import production from "../../../src/images/icons/production-icon.png";
import decouvrir from "../../../src/images/boutons/decouvrir-bouton.png";
import inkyfada from "../../../src/images/logos/inkyfada-logo.png";
import inku_be from "../../../src/images/logos/inkube-logo.png";
import logomom from "../../../src/images/logos/Logo-MOM.png";
import jaridaty from "../../../src/images/logos/jaeidaty-logo.png";
import cooperationMedia from "../../../src/images/logos/cfi-logo.png";
import capjc from "../../../src/images/logos/capjc-logo.png";
import dcaf from "../../../src/images/logos/dcaf-logo.png";
import dw from "../../../src/images/logos/dw-logo.png";
import freepress from "../../../src/images/logos/freepress-logo.png";
import heinrich from "../../../src/images/logos/hbs-logo.png";
import opensociety from "../../../src/images/logos/osf-logo.png";
import reporters from "../../../src/images/logos/rsf-logo.png";
import snjt from "../../../src/images/logos/snjt-logo.png";

const HomePage = () => {
  return (
    <main>
      {/*About Us Section */}
      <section className="about-us">
        <div className="description-about-us">
          <div className="horizental-seperator"></div>
          <div className="description-paragraphe-about-us">
            <h1 className="title-about-us">QUI SOMMES NOUS</h1>
            <h3 className="subtitle-about-us">
              Liberté de la presse et liberté d’expression en Tunisie
            </h3>
            <p className="content-about-us">
              Al Khatt est une association tunisienne à but non lucratif fondée
              en 2013. Elle se veut un laboratoire d’idées et un espace de
              réflexions sur l’avenir du journalisme à l’ère de l’Internet,
              aussi bien sur la production de contenus journalistiques que sur
              leur visualisation ou la manière de les diffuser et de les
              partager.
              <hr style={{ color: "rgb(0,0,0,0)" }} /> Al Khatt considère que
              l’accès à une information libre et de qualité est un droit
              fondamental des citoyens. De plus, l’association estime qu’agir
              pour la liberté de la presse, la liberté d’expression et l’accès à
              l’information, c’est contribuer à mettre en place un système
              démocratique et transparent en Tunisie.
            </p>
            <div className="more-detail-button">
              <img src={detailButton} alt="more-detail" />
            </div>
          </div>
        </div>
      </section>
      {/*Our Objectif */}
      <section className="our-objectif">
        <div className="description-our-objectif">
          <div className="horizental-seperator"></div>
          <div className="description-paragraphe-our-objectif">
            <h1 className="title-our-objectif">NOS OBJECTIFS</h1>
            <h3 className="subtitle-our-objectif">
              Lorem ipsum dolor sit amet
            </h3>
            <p className="content-our-objectif">
              Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip.
            </p>
          </div>
        </div>
        <div className="objectif-brands container-fluid">
          <div className="row">
            <div className="brand-wrapper col-4">
              <img
                src={journalisme}
                alt="journalisme"
                className="journalisme"
              />
              <h3 className="brand-title">JOURNALISME</h3>
              <p className="brand-description">
                Développer et promouvoir la liberté de la presse et la liberté
                d’expression et oeuvrer pour une information indépendante, de
                qualité et utile pour le citoyen.
              </p>
            </div>
            <div className="brand-wrapper col-4">
              <img src={innovation} alt="innovation" className="innovation" />
              <h3 className="brand-title">INNOVATION</h3>
              <p className="brand-description">
                Créer des outils technologiques au service de l’information, de
                la participation citoyenne et de l’accès à l’information.
              </p>
            </div>
            <div className="brand-wrapper col-4">
              <img src={plaidoyer} alt="plaidoyer" className="plaidoyer" />
              <h3 className="brand-title">PLAIDOYER</h3>
              <p className="brand-description">
                Œuvrer pour l’éducation aux médias et pour la formation aux
                techniques de production de contenu informatif.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/*Our Services */}
      <section className="our-services">
        <div className="description-our-services">
          <div className="horizental-seperator"></div>
          <div className="description-paragraphe-our-services">
            <h1 className="title-our-services">NOS SERVICES</h1>
            <h3 className="subtitle-our-services">
              Lorem ipsum dolor sit amet
            </h3>
            <p className="content-our-services">
              Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip.
            </p>
          </div>
        </div>
        <div className="services-brands container-fluid">
          <div className="row">
            <div className="brand-wrapper col-3">
              <img src={formation} alt="formation" className="formation" />
              <h3 className="brand-title">FORMATIONS</h3>
              <p className="brand-description less-padding">
                Lariatur, excepteur sint occaecat cupidatat non proident, sunt
                in culpa qui officia deserunt mollit anim id est
              </p>
              <img src={decouvrir} className="btn-discover" alt="discover" />
            </div>
            <div className="brand-wrapper col-3">
              <img
                src={developpment}
                alt="developpment"
                className="developpment"
              />
              <h3 className="brand-title">DEVELOPPEMENT</h3>
              <p className="brand-description less-padding">
                Lariatur, excepteur sint occaecat cupidatat non proident, sunt
                in culpa qui officia deserunt mollit anim id est
              </p>
              <img className="btn-discover" src={decouvrir} alt="discover" />
            </div>
            <div className="brand-wrapper col-3">
              <img src={design} alt="design" className="design" />
              <h3 className="brand-title">DESIGN</h3>
              <p className="brand-description less-padding">
                Lariatur, excepteur sint occaecat cupidatat non proident, sunt
                in culpa qui officia deserunt mollit anim id est
              </p>
              <img className="btn-discover" src={decouvrir} alt="discover" />
            </div>
            <div className="brand-wrapper col-3">
              <img src={production} alt="production" className="production" />
              <h3 className="brand-title">PRODUCTION</h3>
              <p className="brand-description less-padding">
                Lariatur, excepteur sint occaecat cupidatat non proident, sunt
                in culpa qui officia deserunt mollit anim id est
              </p>
              <img className="btn-discover" src={decouvrir} alt="discover" />
            </div>
          </div>
        </div>
      </section>
      {/*Our Project */}
      <section className="our-project">
        <div className="description-our-project">
          <div className="horizental-seperator"></div>
          <div className="description-paragraphe-our-project">
            <h1 className="title-our-project">NOS PROJETS</h1>
            <h3 className="subtitle-our-project">Lorem ipsum dolor sit amet</h3>
            <p className="content-our-project">
              Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore.
            </p>
          </div>
        </div>
        <div className="projects-wrapper container-fluid">
          <div className="row">
            <div className="project-wrapper col-6">
              <img src={inkyfada} alt="inkyfada" />
            </div>
            <div className="project-wrapper col-6">
              <img src={inku_be} alt="inku.be" />
            </div>
            <div className="project-wrapper col-6 mt-5">
              <img src={jaridaty} alt="jaridaty" />
            </div>
            <div className="project-wrapper col-6 mt-5">
              <img src={logomom} alt="logo_mom" />
            </div>
            <div className="detail-button-projects-wrapper ml-auto">
              <img
                src={detailButton}
                className="detail-button-projects mr-1"
                alt="detail-button"
              />
            </div>
          </div>
        </div>
      </section>
      {/*Confidence */}
      <section className="confidence">
        <div className="description-confidence">
          <div className="horizental-seperator"></div>
          <div className="description-paragraphe-confidence">
            <h1 className="title-confidence">ILS NOUS FONT CONFIANCE</h1>
            <h3 className="subtitle-confidence">Lorem ipsum dolor sit amet</h3>
            <p className="content-confidence">
              Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore.
            </p>
          </div>
        </div>
        <div className="partenaire-container">
          <div className="first-row">
            <img src={opensociety} alt="opensociety" className="opensociety" />
            <img src={dw} alt="dw" className="dw" />
            <img src={reporters} alt="reporters" className="reporters" />
            <img src={dcaf} alt="dcaf" className="dcaf" />
            <img
              src={cooperationMedia}
              alt="cooperationMedia"
              className="cooperationMedia"
            />
          </div>
          <div className="second-row">
            <img src={snjt} alt="snjt" className="snjt" />
            <img src={capjc} alt="capjc" className="capjc" />
            <img src={freepress} alt="freepress" className="freepress" />
            <img src={heinrich} alt="heinrich" className="heinrich" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
