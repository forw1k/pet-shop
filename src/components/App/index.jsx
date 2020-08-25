import React from 'react';
import Banner from '../Banner';
import data from '../../data';
import './styles.css';

const App = () => {
  const banners = data.map((item) => <Banner key={item.id} item={item} />);
  return (
    <div className="wrapper">
      <div className="container">
        <h2 className="section-title">Ты сегодня покормил кота?</h2>
        <div className="main">
          <ul className="banner__list">{banners}</ul>
        </div>
      </div>
    </div>
  );
};
export default App;
