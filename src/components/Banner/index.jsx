import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Banner = (props) => {
  const { item } = props;
  const [selected, setSelected] = useState(item.isSelected);
  const [hover, setHover] = useState(false);
  const stocked = item.isInStock ? '' : 'unavailable';
  const chosen = selected ? 'selected' : '';
  const isSelectedBanner = !selected && item.isInStock;

  return (
    <li className={`banner__item ${stocked || chosen}`}>
      <div
        className="card"
        onMouseLeave={() => console.log('mouseleave')}
        onMouseOver={() => console.log('mouseover')}
        onClick={() => setSelected(!selected)}
      >
        <div className="information">
          <span className="common-text subtitle">
            {hover ? item.subtitle : item.subtitleAlt}
          </span>
          <h1 className="headline common-text--fat">{item.title}</h1>
          <h2 className="taste common-text--fat">{item.ingredients}</h2>
          <div className="description">
            <span className="common-text common-text--fat common-text--amount">
              {item.portionAmount}
            </span>
            <span className="common-text">{item.portionText}</span>
          </div>
          <div className="description">
            <span className="common-text common-text--fat common-text--amount">
              {item.giftAmount}
            </span>
            <span className="common-text">{item.giftText}</span>
          </div>
          <span className="common-text description">{item.slogan}</span>
        </div>
        <div className="pictures">
          <img src={item.image} alt="" className="pictures__img" />
          <div className="mass">
            <span className="weight">{item.quantity}</span>
            <span className="weight weight-unit">{item.unit}</span>
          </div>
        </div>
      </div>
      <div className="action">
        <span className="action-text">
          {isSelectedBanner && item.bannerText.notSelected}
          {isSelectedBanner && (
            <span className="link" onClick={() => setSelected(!selected)}>
              купи.
            </span>
          )}
          {!isSelectedBanner && item.bannerText.selected}
          {!item.isInStock && item.bannerText.notInStock}
        </span>
      </div>
    </li>
  );
};

Banner.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    subtitleAlt: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    ingredients: PropTypes.string.isRequired,
    portionAmount: PropTypes.string.isRequired,
    portionText: PropTypes.string.isRequired,
    giftAmount: PropTypes.string.isRequired,
    giftText: PropTypes.string.isRequired,
    slogan: PropTypes.string.isRequired,
    quantity: PropTypes.string.isRequired,
    unit: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    isInStock: PropTypes.bool.isRequired,
    isSelected: PropTypes.bool.isRequired,
    bannerText: PropTypes.shape({
      notSelected: PropTypes.string.isRequired,
      selected: PropTypes.string.isRequired,
      notInStock: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Banner;
