import React, { useState, useEffect } from "react";
// 3rd packages
import {useHistory} from "react-router-dom";
// components
import RowItemCart from "./RowItemCart";
// helper methods
import isLogin from "helpers/auth/AuthChecker";
// styles
import "./style.scss";

export default function CartPage({
  cart,
  removeProduct,
  updateQuantityProduct,
  ...props
}) {
  const [orderValue, setOrderValue] = useState(0);
  const [transportFee] = useState(0);
  const history = useHistory();

  useEffect(() => {
    setOrderValue(
      cart && cart.reduce((acc, cur) => {
        return acc + cur.product.price * cur.quantity;
      }, 0)
    );
  }, [cart]);

  const handleCheckout = () => {
    isLogin().then(logined => {
      if (!logined) {
        props.setShowLoginModal(true);
      } else {
        let order = { products: cart, user: props.user };
        props
          .addOrder(order)
          .then(() => {
            console.log("order success");
            history.push("/");
          })
          .catch(error => console.error("[CART PAGE - ADDORDER:", error));
      }
    });
  };

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
                {cart &&
                  cart.map(item => (
                    <RowItemCart
                      key={item.id}
                      itemCart={item}
                      onRemove={removeProduct}
                      updateQuantity={updateQuantityProduct}
                    />
                  ))}
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
                    <td className="cart-page__checkout-summary__value">Free</td>
                  </tr>
                  <tr className="cart-page__checkout-summary__row">
                    <td className="cart-page__checkout-summary__label">
                      Total product
                    </td>
                    <td className="cart-page__checkout-summary__value">
                      ${orderValue}
                    </td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr className="cart-page__checkout-total__row">
                    <th className="cart-page__checkout-total__label">
                      Subtotal
                    </th>
                    <th className="cart-page__checkout-total__value">
                      ${orderValue + transportFee}
                    </th>
                  </tr>
                </tfoot>
              </table>
            </div>
            <button
              className="button button-lg button-tertiary cart-page__order-total__checkout"
              onClick={handleCheckout}
            >
              Check out
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
