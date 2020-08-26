import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Banner = (props) => {
  const { item } = props;
  const { bannerText } = item;
  const isSelectedBanner = !item.isSelected && item.isInStock;
  const isNotSelectedBanner = item.isSelected && item.isInStock;
  const stocked = item.isInStock ? '' : 'unavailable';
  const chosen = item.isSelected ? 'selected' : '';
  const [selected, setSelected] = useState(item.isSelected);
  console.log(selected);
  return (
    <li
      className={`banner__item ${stocked} ${chosen}`}
      onClick={() => setSelected(!selected)}
    >
      <div className="card">
        <div className="content">
          <div className="information">
            <span className="common-text subtitle">{item.subtitle}</span>
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
      </div>
      <div className="action">
        <span className="action-text">
          {isSelectedBanner && bannerText.notSelected}
          {isNotSelectedBanner && bannerText.selected}
          {!item.isInStock && bannerText.notInStock}
        </span>
      </div>
    </li>
  );
};

Banner.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
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
  }).isRequired,
};

export default Banner;
