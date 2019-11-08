import React, { useState } from "react";
// 3rd packages
import { Formik, Field } from "formik";
import * as yup from "yup";
// components
import { SelectSingle, SelectMulti } from "components/forms/select";
import FileUploadField from "components/formik/FileUploadField";
import InputField from "components/formik/InputField";
// styles
import "./style.scss";
import FileUpload from "components/forms/file-upload";

export default function AddProductPage() {
  const [files, setFiles] = useState([]);

  const handleChangeFile = arrFiles => {
    setFiles(arrFiles);
  };

  const handleSubmit = (values, setSubmitting, setFieldError, resetForm) => {
    setSubmitting(true);
    console.log("values:", values);
    // resetForm();
    setSubmitting(false);
  };

  return (
    <>
      <section className="section-form">
        <div className="container-fluid">
          <Formik
            initialValues={{
              files: [],
              name: "",
              description: "",
            }}
            validationSchema={yup.object().shape({
              files: yup.array().required("A file is required")
            })}
            onSubmit={(values, { setSubmitting, setFieldError, resetForm }) => {
              handleSubmit(values, setSubmitting, setFieldError, resetForm);
            }}
          >
            {({ handleSubmit, isSubmitting }) => (
              <form onSubmit={handleSubmit}>
                <div className="form-group row">
                  <label
                    htmlFor="input-name_product"
                    className="l12-col-sm-2 col-form-label"
                  >
                    photos
                  </label>
                  <div className="l12-col-sm-8">
                    <Field
                      isDrag={false}
                      multiple={true}
                      filterType={["jpg", "jpeg", "png"]}
                      maxUpload={8}
                      note="You can add up to 8 photos. The 1st photo will be set as cover (main photo)."
                      name="files"
                      component={FileUploadField}
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
                    <Field
                      id="input-name_product"
                      type="text"
                      name="name"
                      placeholder="Enter your email..."
                      component={InputField}
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
                {/* <div className="form-group row">
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
                    <input
                      type="text"
                      className="form-control"
                      id="input-price"
                    />
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
                </div> */}
                <div className="form-group row">
                  <label
                    htmlFor="input-description"
                    className="l12-col-sm-2 col-form-label"
                  >
                    description
                  </label>
                  <div className="l12-col-sm-8">
                    <Field
                      rows={4}
                      name="description"
                      as="textarea"
                      className="form-control"
                      id="input-description"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <div className="l12-col-sm-6"></div>
                  <div className="l12-col-sm-2">
                    <button
                      type="button"
                      className="button button-outline-primary"
                      disabled={isSubmitting}
                    >
                      Cancel
                    </button>
                  </div>
                  <div className="l12-col-sm-2">
                    <button
                      type="submit"
                      className="button button-primary"
                      disabled={isSubmitting}
                    >
                      Complete
                    </button>
                  </div>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </section>
    </>
  );
}
