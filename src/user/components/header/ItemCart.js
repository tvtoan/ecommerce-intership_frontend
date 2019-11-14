import React from "react";
import PropTypes from "prop-types";

export default function ItemCart({itemCart, ...props}) {
  return (
    <a href="#/">
      <div className="cart__dropdown__item__image">
        <img src={`${process.env.REACT_APP_SERVER_URL}/${itemCart.product.coverImage.path}`} alt="" />
      </div>
      <div className="cart__dropdown__item__info">
        <h3 className="cart__dropdown__item__info__name-product">
          {itemCart.product.name}
        </h3>
        <span className="cart__dropdown__item__info__price">${itemCart.product.price}</span>
        <div className="cart__dropdown__item__info__detail">
          <span className="size">{itemCart.size.name}</span>
          <span className="color">{itemCart.color.name}</span>
          <span className="quantity">{itemCart.quantity} pcs</span>
        </div>
      </div>
    </a>
  );
}

ItemCart.propTypes = {
  product: PropTypes.object,
}
