import React from 'react';
import './styles.css';

const Banner = (props) => {
  const bannerStateText = (inStock, selectedItem, taste) => {
    const buy = 'Чего сидишь? Порадуй котэ, купи';
    const selected = 'Головы щучьи с чесноком да свежайшая семгушка';
    const unavailable = `Печалька, ${taste} закончился`;

    if(inStock === true && selectedItem === false) {return buy}
    else if(inStock === true && selectedItem === true){return selected}
    else if(inStock === false) {return unavailable}
  };
  return (
    <li className="banner__item">
      <div className="content">
        <div className="information">
          <span className="common-text">{props.item.subtitle}</span>
          <h1 className="headline">{props.item.title}</h1>
          <h2 className="subtitle">{props.item.ingredients}</h2>
          <span className="common-text">{props.item.portion}</span>
          <span className="common-text">{props.item.gift}</span>
          <span className="common-text">{props.item.slogan}</span>
        </div>
        <div className="pictures">
          <img src={props.item.image} alt="" className="pictures__img" />
          <div className="mass">
            <span className="weight">{props.item.quantity}</span>
            <span className="weight weight-unit">{props.item.unit}</span>
          </div>
        </div>
      </div>
      <div>
        <span className="common-text">{bannerStateText(true, true)}</span>
      </div>
    </li>
  );
};
export default Banner;
