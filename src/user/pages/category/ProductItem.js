import React from "react";
// 3rd packages
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function ProductItem({ dataProduct, ...props }) {
  return (
    <div className="product-list__item">
      <div className="product-list__item__cover">
        <img
          src={`${process.env.REACT_APP_SERVER_URL}/${dataProduct.coverImage.path}`}
          alt={`cover-${dataProduct.name}`}
          title={dataProduct.name}
          className="product-list__item__cover__image"
        />
        <Link
          to={`product/${dataProduct.slug}`}
          className="product-list__item__cover__link"
        >
          + Quick shop
        </Link>
        {dataProduct.isSoldout && (
          <span className="product-list__item__sold-out">Sold out</span>
        )}
      </div>
      <h3 className="product-list__item__name-product">
        <Link to={`/product/${dataProduct._id}`}>{dataProduct.name}</Link>
      </h3>
      <span className="product-list__item__price">${dataProduct.price}</span>
    </div>
  );
}

ProductItem.propTypes = {
  dataProduct: PropTypes.object.isRequired,
  addProductCart: PropTypes.func
};
