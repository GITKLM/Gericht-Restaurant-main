import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Les nouvelles saveurs" />
      <h1 className="app__header-h1">La clé pour bien manger</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>Notre restaurant vous propose une cuisine raffinée alliant tradition et modernité. Nos chefs talentueux utilisent des ingrédients locaux et de saison pour créer des plats innovants et savoureux. </p>
      <button type="button" className="custom__button">Notre Menu</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;
