import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contactez-nous</h1>
        <p className="p__opensans">1745 Rue Fleury E, Montréal, QC H2C 1T3, Canada</p>
        <p className="p__opensans">+1 514-385-1760</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="footer_logo" />
        <p className="p__opensans">&quot;La Clé Pour Bien Manger à deux pas de chez vous!&quot;</p>
        <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Nos horaires</h1>
        <p className="p__opensans">Lundi-Vendredi:</p>
        <p className="p__opensans">08:00 - 12:00 </p>
        <p className="p__opensans">Samedi-Dimanche:</p>
        <p className="p__opensans">07:00 - 23:00</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2024 Gericht. Tous Droits Réservés.</p>
    </div>

  </div>
);

export default Footer;
