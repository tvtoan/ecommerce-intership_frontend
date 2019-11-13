import React, { useEffect } from "react";
// 3rd packages
import { useParams } from "react-router-dom";
// components
import SizeCheckbox from "../../components/size-checkbox";
import ColorCheckbox from "../../components/color-checkbox";
import Touchspin from "components/forms/touchspin";
import Breadcrumb from "../../components/breadcrumb";
// static resources
import product1 from "assets/images/shop/product-1.jpg";
import { ReactComponent as RantingIcon } from "assets/images/shop/icons/star.svg";
// styles
import "./style.scss";

const sizes = [
  { _id: "dhf54", name: "s" },
  { _id: "7rhrth", name: "m" },
  { _id: "285dg3", name: "l" }
];
const colors = [
  { _id: "43543", name: "orange", code: "#ffa500" },
  { _id: "34hsdf435", name: "blue", code: "#5f6dff" }
];

function handleAddProductCart(product, color, size, quantity) {
  return {
    product: {
      _id: product._id,
      coverImage: product.photos[0],
      slug: product.slug,
      price: product.price,
      name: product.name
    },
    color,
    size,
    quantity
  };
}

export default function ProductPage({
  product,
  getProductBySlug,
  addProductCart,
  ...props
}) {
  const { slug } = useParams();

  useEffect(() => {
    getProductBySlug(slug);
  }, [slug, getProductBySlug])

  return (
    <main className="product-wrapper">
      <Breadcrumb />
      <div className="container">
        <div className="row">
          <div className="l24-col-sm-2">
            <div className="product__photos">
              {product && product.photos &&
                product.photos.map(photo => (
                  <div className="product__photo" key={photo._id}>
                    <img
                      src={`${process.env.REACT_APP_SERVER_URL}/${photo.path}`}
                      alt=""
                    />
                  </div>
                ))}
            </div>
          </div>
          <div className="l24-col-sm-8">
            <div className="product__preview">
              <img
                src={product ? `${process.env.REACT_APP_SERVER_URL}/${product.photos[0].path}` : product1}
                alt=""
              />
            </div>
          </div>
          <div className="l24-col-sm-9 l24-offset-sm-1">
            <div className="product__info">
              <h2 className="product__info__heading">{product && product.name}</h2>
              <h3 className="product__info__price">${product && product.price}</h3>
              <div className="product__info__block">
                <div className="product__info__ranting">
                  <RantingIcon className="ranting-icon" />
                  <RantingIcon className="ranting-icon" />
                  <RantingIcon className="ranting-icon" />
                  <RantingIcon className="ranting-icon" />
                  <RantingIcon className="ranting-icon" />
                </div>
                <div className="block-split"></div>
                <div className="product__info__review">0 Review</div>
              </div>
              <div className="product__info__field product__info__size">
                <span className="product__info__name-field">Size</span>
                <SizeCheckbox
                  sizes={sizes}
                  className="product__info__content-field"
                />
              </div>
              <div className="product__info__field product__info__color">
                <span className="product__info__name-field">Color</span>
                <ColorCheckbox
                  colors={colors}
                  className="product__info__content-field"
                />
              </div>
              <div className="product__info__field product__info__quantity">
                <span className="product__info__name-field">Quantity</span>
                <Touchspin className="product__info__quantity__input" />
              </div>
              <button
                className="button button-secondary button-lg product__info__btn-add"
                onClick={() => {
                  let productCart = handleAddProductCart(
                    product,
                    product.color[0],
                    "Dsfhsdf",
                    1
                  );
                  addProductCart(productCart);
                }}
              >
                Add to cart
              </button>
              <div className="split"></div>
              <div className="product__info__description">
                Model wearing size S - Chest: 36” - Length: 25.75”
              </div>
            </div>
          </div>
          <div className="l24-col-sm-2 l24-offset-sm-2">
            <div className="product__more-products">
              <h5 className="product__more-products__heading">More from</h5>
              <div className="product__more-products__brand">
                <span className="product__more-products__name-brand">Zara</span>
                <div className="product__more-products__list-products">
                  <ul>
                    <li className="product__more-products__item">
                      <a href="#/">
                        <img src={product1} alt="cover" />
                      </a>
                    </li>
                    <li className="product__more-products__item">
                      <a href="#/">
                        <img src={product1} alt="cover" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
