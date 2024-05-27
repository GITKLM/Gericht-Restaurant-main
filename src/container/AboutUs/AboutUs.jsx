import React from 'react';
import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">A propos</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Gericht est né de la passion pour la cuisine et le désir de créer un lieu unique où chaque repas devient une expérience mémorable. Depuis notre ouverture, nous nous efforçons de proposer une cuisine innovante, en mettant en valeur les saveurs locales et les produits de saison.</p>
        <button type="button" className="custom__button">En savoir plus</button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Notre histoire</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Fondé par un groupe d'amis chefs, Gericht a rapidement conquis le cœur des gastronomes grâce à son ambiance chaleureuse et à ses plats exquis. </p>
        <button type="button" className="custom__button">En savoir plus</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
