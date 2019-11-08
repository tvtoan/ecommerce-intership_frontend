import React, { Component } from "react";
import product4 from "assets/images/shop/product-4.jpeg";
import Touchspin from "components/touchspin";
import "./style.scss";

export default class index extends Component {
  render() {
    return (
      <main className="container">
        <div className="cart-page">
          <div className="cart-page__main">
            <h1 className="cart-page__heading">my bag</h1>
            <div className="cart-page__main-section">
              <table className="cart-page__list">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Color</th>
                    <th>Size</th>
                    <th>Quantity</th>
                    <th>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="cart-page__list-item">
                    <td className="cart-page__list-item__product">
                      <div className="block-product">
                        <img
                          src={product4}
                          alt=""
                          className="block-product__image"
                        />
                        <div className="block-product__info">
                          <a href="#/" className="block-product__name">
                            collete stretch linen minidress
                          </a>
                          <div className="block-product__method">
                            <button className="flat-button">Change</button>
                            <button className="flat-button">Remove</button>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="cart-page__list-item__color">
                      <div className="block-color"></div>
                    </td>
                    <td className="cart-page__list-item__size">s</td>
                    <td className="cart-page__list-item__quantity">
                      <Touchspin />
                    </td>
                    <td className="cart-page__list-item__amount">$69.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="cart-page__side-right">
            <div className="cart-page__summary-section">
              <h5 className="cart-page__summary-section__title">Total</h5>
              <div className="cart-page__summary-section__content">
                <table className="cart-page__checkout-summary__rows">
                  <tbody>
                    <tr className="cart-page__checkout-summary__row">
                      <td className="cart-page__checkout-summary__label">
                        Shipping &amp; Handling
                      </td>
                      <td className="cart-page__checkout-summary__value">
                        Free
                      </td>
                    </tr>
                    <tr className="cart-page__checkout-summary__row">
                      <td className="cart-page__checkout-summary__label">
                        Total product
                      </td>
                      <td className="cart-page__checkout-summary__value">
                        $6.900
                      </td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr className="cart-page__checkout-total__row">
                      <th className="cart-page__checkout-total__label">
                        Subtotal
                      </th>
                      <th className="cart-page__checkout-total__value">
                        $6.900
                      </th>
                    </tr>
                  </tfoot>
                </table>
              </div>
              <button className="button button-lg button-tertiary cart-page__order-total__checkout">
                Check out
              </button>
            </div>
          </div>
        </div>
      </main>
    );
  }
}
