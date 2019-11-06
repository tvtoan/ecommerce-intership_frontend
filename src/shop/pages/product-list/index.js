import React, { Component } from "react";
import product1 from "assets/images/shop/product-1.jpg";
import "./style.scss";

export default class index extends Component {
  render() {
    return (
      <main className="container">
        <nav aria-label="breadcrumb" className="breadcrumb">
          <ol className="breadcrumb__container">
            <li className="breadcrumb__item">
              <a href="#/">Home</a>
            </li>
            <li className="breadcrumb__item active" aria-current="page">
              Library
            </li>
          </ol>
        </nav>
        <div className="product-list__main">
          <div className="product-list__side--left">
            <div className="product-list__side-item">
              <h5 className="product-list__side-item__title">Category</h5>
              <ul className="product-list__side-item__list">
                <li className="product-list__side-item__list-item active">
                  <a href="#/">All dresses</a>
                </li>
                <li className="product-list__side-item__list-item">
                  <a href="#/">Rompers / Jumpsuits</a>
                </li>
                <li className="product-list__side-item__list-item">
                  <a href="#/">Casual dresses</a>
                </li>
                <li className="product-list__side-item__list-item">
                  <a href="#/">Going out dresses</a>
                </li>
                <li className="product-list__side-item__list-item">
                  <a href="#/">Party / Ocassion dresses</a>
                </li>
                <li className="product-list__side-item__list-item">
                  <a href="#/">Mini dresses</a>
                </li>
                <li className="product-list__side-item__list-item">
                  <a href="#/">Maxi / Midi dresses</a>
                </li>
                <li className="product-list__side-item__list-item">
                  <a href="#/">Sets</a>
                </li>
              </ul>
            </div>
            <div className="product-list__side-item">
              <h5 className="product-list__side-item__title">Filter</h5>
            </div>
          </div>
          <div className="product-list__main">
            <div className="product-list__item">
              <div className="product-list__item__cover">
                <img
                  src={product1}
                  alt=""
                  className="product-list__item__cover__image"
                />
                <a href="#/" className="product-list__item__cover__link">
                  + Quick shop
                </a>
                <span className="product-list__item__sold-out">Sold out</span>
              </div>
              <h3 className="product-list__item__name-product">
                <a href="#/">Hermosa ladder lace midi dress</a>
              </h3>
              <span className="product-list__item__price">$69.00</span>
            </div>
          </div>
        </div>
      </main>
    );
  }
}
