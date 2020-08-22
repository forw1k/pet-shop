import React from 'react';

function App(props) {
  return (
    <div className="wrapper">
      <div className="container">
        <h2 className="title">Ты сегодня покормил кота?</h2>
        <div className="content">
          <ul className="list">
            <li className="item">
              <div className="box">
                <div className="information">
                  <p className="common-text">Сказочное заморское яство</p>
                  <h1 className="main">Нямушка с рыбой</h1>
                  <p className="common-text">10 порций мышь в подарок</p>
                </div>
                <div className="pictures">
                  <img src="cat.png" alt="" className="pictures__img" />
                  <div className="mass">
                    <p className="weight">0,5</p>
                    <p className="weight">кг</p>
                  </div>
                </div>
              </div>
            </li>
            <li className="item">
              <div className="box">
                <div className="information">
                  <p className="common-text">Сказочное заморское яство</p>
                  <h1 className="main">Нямушка с рыбой</h1>
                  <p className="common-text">10 порций мышь в подарок</p>
                </div>
                <div className="pictures">
                  <img src="./cat.png" alt="" className="pictures__img" />
                  <div className="mass">
                    <p className="weight">0,5</p>
                    <p className="weight">кг</p>
                  </div>
                </div>
              </div>
            </li>
            <li className="item">
              <div className="box">
                <div className="information">
                  <p className="common-text">Сказочное заморское яство</p>
                  <h1 className="main">Нямушка с рыбой</h1>
                  <p className="common-text">10 порций мышь в подарок</p>
                </div>
                <div className="pictures">
                    <img src="./cat.png" alt="" className="pictures__img" />
                  <div className="mass">
                    <p className="weight">0,5</p>
                    <p className="weight">кг</p>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default App;
