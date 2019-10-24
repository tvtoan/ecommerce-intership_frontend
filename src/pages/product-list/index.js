import React, { Component } from "react";
import product1 from 'assets/images/web/product-1.jpg';
import "./style.css";

export default class index extends Component {
  render() {
    return (
      <main className="container">
        <div className="product-list__breabcrumb">Ladies / Dresses</div>
        <div className="product-list__main">
          <div className="product-list__side--left" />
          <div className="product-list__content">
            <div className="product-list__item">
              <div className="product-list__item__cover">
                <img src={product1} alt="" className="product-list__item__cover__image"/>
                <a href="#/" className="product-list__item__cover__link">+ Quick shop</a>
                <span className="product-list__item__sold-out">Sold out</span>
              </div>
              <h3 className="product-list__item__name-product"><a href="#/">Hermosa ladder lace midi dress</a></h3>
              <span className="product-list__item__price">$69.00</span>
            </div>
          </div>
        </div>
      </main>
    );
  }
}
