import React from "react";
import PropTypes from "prop-types";

export default function CartItem({cartItem, ...props}) {
  return (
    <a href="#/">
      <div className="cart__dropdown__item__image">
        <img src={`${process.env.REACT_APP_SERVER_URL}/${cartItem.product.coverImage.path}`} alt="" />
      </div>
      <div className="cart__dropdown__item__info">
        <h3 className="cart__dropdown__item__info__name-product">
          {cartItem.product.name}
        </h3>
        <span className="cart__dropdown__item__info__price">${cartItem.product.price}</span>
        <div className="cart__dropdown__item__info__detail">
          <span className="size">{cartItem.size.name}</span>
          <span className="color">{cartItem.color.name}</span>
          <span className="quantity">{cartItem.quantity} pcs</span>
        </div>
      </div>
    </a>
  );
}

CartItem.propTypes = {
  product: PropTypes.object,
}
