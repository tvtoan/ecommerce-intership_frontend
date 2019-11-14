import React from "react";
// 3rd packages
import PropTypes from "prop-types";
// components
import Touchspin from "components/forms/touchspin";

export default function RowItemCart({
  itemCart,
  onRemove,
  updateQuantity,
  ...props
}) {
  return (
    <tr className="cart-page__list-item">
      <td className="cart-page__list-item__product">
        <div className="block-product">
          <img
            src={`${process.env.REACT_APP_SERVER_URL}/${itemCart.product.coverImage.path}`}
            alt=""
            className="block-product__image"
          />
          <div className="block-product__info">
            <a href="#/" className="block-product__name">
              {itemCart.product.name}
            </a>
            <div className="block-product__method">
              <button className="flat-button">Change</button>
              <button
                className="flat-button"
                onClick={() => onRemove(itemCart)}
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      </td>
      <td className="cart-page__list-item__color">
        <div
          className="block-color"
          style={{ backgroundColor: itemCart.color.code }}
        ></div>
      </td>
      <td className="cart-page__list-item__size">{itemCart.size.name}</td>
      <td className="cart-page__list-item__quantity">
        <Touchspin
          value={itemCart.quantity}
          onChange={value => {
            props.onChangeQuantity(Math.random());
            updateQuantity(itemCart.id, value);
          }}
        />
      </td>
      <td className="cart-page__list-item__amount">
        ${itemCart.product.price}
      </td>
    </tr>
  );
}

RowItemCart.propTypes = {
  itemCart: PropTypes.object,
  onRemove: PropTypes.func,
  updateQuantity: PropTypes.func
};
