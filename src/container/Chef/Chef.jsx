import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="mots du Chef" />
      <h1 className="headtext__cormorant">Nos Convictions</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">Chaque plat est pour moi une œuvre d'art qui raconte une histoire.</p>
        </div>
        <p className="p__opensans"> Ma cuisine est une symphonie de saveurs où chaque ingrédient est soigneusement sélectionné pour offrir une expérience gustative exceptionnelle, alliant tradition et innovation pour éveiller tous vos sens.</p>
      </div>

      <div className="app__chef-sign">
        <p>Kevin Luo</p>
        <p className="p__opensans">Chef propriétaire</p>
        <img src={images.sign} alt="sign_image" />
      </div>
    </div>
  </div>
);

export default Chef;
