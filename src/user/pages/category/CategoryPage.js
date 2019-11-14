import React, { useEffect } from "react";
// 3rd packages
import { useParams } from "react-router-dom";
// components
import ProductItem from "./ProductItem";
import Breadcrumb from "../../components/breadcrumb";
// styles
import "./style.scss";

export default function CategoryPage({
  products,
  getProductByCategory,
  ...props
}) {
  let { slug } = useParams();

  useEffect(() => {
    getProductByCategory();
  }, [slug, getProductByCategory]);

  return (
    <main className="container">
      <Breadcrumb />
      <div className="container product-list__main">
        <div className="row">
        <div className="l24-col-sm-4 product-list__side--left">
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
        <section className="l24-col-sm-20 product-list__content">
          {products &&
            products.map(product => (
              <ProductItem key={product._id} dataProduct={product} />
            ))}
        </section>
        </div>
      </div>
    </main>
  );
}
