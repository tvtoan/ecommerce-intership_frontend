import React, { useState } from "react";
// 3rd packages
// components
import { SelectSingle, SelectMulti } from "components/forms/select";
import FileUpload from "../../components/file-upload";
// styles
import "./style.scss";

export default function AddProductPage() {
  const [files, setFiles] = useState([]);

  // useEffect(() => {
  //   console.log("AddProduct page:", files);
  // }, [files])

  const handleChangeFile = arrFiles => {
    setFiles(arrFiles);
  };

  return (
    <>
      <section className="section-form">
        <div className="container-fluid">
          <form>
            <div className="form-group row">
              <label
                htmlFor="input-name_product"
                className="l12-col-sm-2 col-form-label"
              >
                photos
              </label>
              <div className="l12-col-sm-8">
                <button onClick={() => console.log("refFileUpload:")}>GET</button>
                <FileUpload
                  isDrag={true}
                  // files={files}
                  // onChangeFiles={handleChangeFile}
                />
              </div>
            </div>
            <div className="form-group row">
              <label
                htmlFor="input-name_product"
                className="l12-col-sm-2 col-form-label"
              >
                name
              </label>
              <div className="l12-col-sm-8">
                <input
                  type="text"
                  className="form-control"
                  id="input-name_product"
                />
              </div>
            </div>
            <div className="form-group row">
              <label
                htmlFor="input-categories"
                className="l12-col-sm-2 col-form-label"
              >
                categories
              </label>
              <div className="l12-col-sm-8">
                <SelectMulti menuIsOpen isSearchable={true} />
              </div>
            </div>
            <div className="form-group row">
              <label
                htmlFor="input-brand"
                className="l12-col-sm-2 col-form-label"
              >
                brand
              </label>
              <div className="l12-col-sm-8">
                <SelectSingle isSearchable={false} />
              </div>
            </div>
            <div className="form-group row">
              <label
                htmlFor="input-price"
                className="l12-col-sm-2 col-form-label"
              >
                price ($)
              </label>
              <div className="l12-col-sm-8">
                <input type="text" className="form-control" id="input-price" />
              </div>
            </div>
            <div className="form-group row">
              <label
                htmlFor="input-sizes"
                className="l12-col-sm-2 col-form-label"
              >
                sizes
              </label>
              <div className="l12-col-sm-8">
                <SelectMulti isSearchable={false} />
              </div>
            </div>
            <div className="form-group row">
              <label
                htmlFor="input-colors"
                className="l12-col-sm-2 col-form-label"
              >
                colors
              </label>
              <div className="l12-col-sm-8">
                <SelectMulti isSearchable={false} />
              </div>
            </div>
            <div className="form-group row">
              <label
                htmlFor="input-quantity"
                className="l12-col-sm-2 col-form-label"
              >
                quantity
              </label>
              <div className="l12-col-sm-8">
                <input
                  type="text"
                  className="form-control"
                  id="input-quantity"
                />
              </div>
            </div>
            <div className="form-group row">
              <label
                htmlFor="input-description"
                className="l12-col-sm-2 col-form-label"
              >
                description
              </label>
              <div className="l12-col-sm-8">
                <textarea
                  rows={4}
                  className="form-control"
                  id="input-description"
                />
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}