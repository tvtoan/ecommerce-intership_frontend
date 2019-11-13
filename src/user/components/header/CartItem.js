import React from "react";
import PropTypes from "prop-types";

export default function CartItem({product, ...props}) {
  return (
    <a href="#/">
      <div className="cart__dropdown__item__image">
        <img src={product.coverImage} alt="" />
      </div>
      <div className="cart__dropdown__item__info">
        <h3 className="cart__dropdown__item__info__name-product">
          {product.name}
        </h3>
        <span className="cart__dropdown__item__info__price">${product.price}</span>
        <div className="cart__dropdown__item__info__detail">
          <span className="size">{product.size}</span>
          <span className="color">{product.color}</span>
          <span className="quantity">{product.quantity} pcs</span>
        </div>
      </div>
    </a>
  );
}

CartItem.propTypes = {
  product: PropTypes.object,
}
