import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Banner = (props) => {
  const { item } = props;
  const [isSelected, setSelected] = useState(item.isSelected);
  const [isHovered, setIsHovered] = useState(false);
  const [isHoveredSelected, setIsHoveredSelected] = useState(false);
  const stocked = item.isInStock ? '' : 'unavailable';
  const chosen = isSelected ? 'selected' : '';
  const isSelectedBanner = !isSelected && item.isInStock;
  const isNotSelectedBanner = isSelected && item.isInStock;

  return (
    <li className={`banner__item ${stocked || chosen}`}>
      <div
        className="card"
        onMouseLeave={() => {
          isSelected ? setIsHovered(true) : setIsHovered(false);
          setIsHoveredSelected(false);
        }}
        onClick={() => setSelected(!isSelected)}
        onMouseOver={() => isHovered && setIsHoveredSelected(true)}
      >
        <div className="information">
          <span
            className={`common-text ${
              isHoveredSelected && isSelected ? 'subtitle-alt' : 'subtitle'
            }`}
          >
            {isHoveredSelected && isSelected ? item.subtitleAlt : item.subtitle}
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
        <svg
          className="border"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 324 484"
          preserveAspectRatio="none"
        >
          <path
            fillRule="evenodd"
            strokeWidth="4"
            d="M310 482H14c-6.63 0-12-5.37-12-12V45L45 2h265c6.63 0 12 5.37 12 12v456c0 6.63-5.37 12-12 12z"
          />
        </svg>
      </div>
      <div className="action">
        <span className="action-text">
          {isSelectedBanner && item.bannerText.isNotSelected}
          {isSelectedBanner && (
            <span className="link" onClick={() => setSelected(!isSelected)}>
              купи.
            </span>
          )}
          {isNotSelectedBanner && item.bannerText.isSelected}
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
      isNotSelected: PropTypes.string.isRequired,
      isSelected: PropTypes.string.isRequired,
      notInStock: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Banner;
