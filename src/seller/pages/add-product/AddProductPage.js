import React, { useState, useRef } from "react";
// 3rd packages
import { Formik, Field } from "formik";
import * as yup from "yup";
import _ from "lodash";
// components
import { SelectSingleField, SelectMultiField } from "components/formik";
// import FileUploadField from "components/formik/FileUploadField";
import FileUpload from "components/forms/file-upload";
import InputField from "components/formik/InputField";
// styles
import "./style.scss";

const handleQuantityToSize = (quantity, sizes) => {
  let convertedObj = [];
  for (let size of sizes) {
    convertedObj.push({ size: size._id, quantity: quantity });
  }
  return convertedObj;
};

const getOnlyFieldArray = (arr, field) => {
  return _.map(arr, _.partialRight(_.pick, field));
};

const getOnlyField = (obj, field) => {
  return _.pick(obj, field);
};

const getDataFiles = files => {
  return files.map(item => {
    return item.file;
  });
};

const handleSubmit = async (
  values,
  setSubmitting,
  setFieldError,
  resetForm,
  ...[handleAdd, files, refFileUpload, setUploadedFiles]
) => {
  setSubmitting(true);
  console.log("values:", values);
  const newClone = _.omit(values, [
    "quantity",
    "sizes",
    "category",
    "brand",
    "color"
  ]);
  let variant = handleQuantityToSize(values.quantity, values.sizes);
  newClone.brand = getOnlyField(values.brand, "_id");
  newClone.category = getOnlyFieldArray(values.category, "_id");
  newClone.color = getOnlyFieldArray(values.color, "_id");
  newClone.photos = getOnlyFieldArray(files, "_id");
  newClone.variant = variant;
  newClone.user = "5dc7e2045cb91f09c93a6b4a";

  console.log("newClone:", newClone);
  try {
    await handleAdd(newClone, setFieldError);
  } catch (error) {
    console.error("[ADD-PRODUCT]:", error);
  }
  refFileUpload.current.handleResetUpload();
  setUploadedFiles([]);
  resetForm();
  setSubmitting(false);
};

const addLocationFiles = (files, news) => {
  let currentLocation = files.length;
  if (Array.isArray(news)) {
    news.map((item, index) => {
      return (item.location = currentLocation + index);
    });
    return [...files, ...news];
  } else {
    news.location = currentLocation;
    return [...files, news];
  }
};

export default function AddProductPage(props) {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const refFileUpload = useRef();

  const handleChangeFiles = async newFiles => {
    try {
      const convertFile = getDataFiles(newFiles);
      const fd = new FormData();
      if (convertFile.length > 1) {
        convertFile.forEach(file => {
          fd.append("image", file, file.name);
        });
      } else {
        fd.append("image", convertFile[0], convertFile[0].name);
      }
      const res = await props.uploadImage(fd);
      setUploadedFiles(addLocationFiles(uploadedFiles, res));
    } catch (error) {
      console.error("[ADD-PRODUCT]:", error);
    }
  };

  const handleRemoveFile = async location => {
    const file = uploadedFiles.find(item => {
      return item.location === location;
    });
    try {
      await props.removeImage(file._id);
      const removedFiles = uploadedFiles.filter(
        file => file.location !== location
      );
      setUploadedFiles(removedFiles);
    } catch (error) {
      console.error("[ADD-PRODUCT]:", error);
    }
  };

  return (
    <>
      <section className="section-form">
        <div className="container-fluid">
          <Formik
            initialValues={{
              name: "",
              category: [],
              brand: null,
              price: 0,
              sizes: [],
              color: [],
              quantity: "",
              description: ""
            }}
            validationSchema={yup.object().shape({})}
            onSubmit={(values, { setSubmitting, setFieldError, resetForm }) => {
              handleSubmit(
                values,
                setSubmitting,
                setFieldError,
                resetForm,
                props.addProduct,
                uploadedFiles,
                refFileUpload,
                setUploadedFiles
              );
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
                    {/* <Field
                      name="photos"
                      component={FileUploadField}
                      isDrag={true}
                      multiple={true}
                      filterType={["jpg", "jpeg", "png"]}
                      maxUpload={8}
                      note="You can add up to 8 photos. The 1st photo will be set as cover (main photo)."
                    /> */}
                    <FileUpload
                      ref={refFileUpload}
                      onRemoveFile={handleRemoveFile}
                      onChangeFiles={handleChangeFiles}
                      isDrag={true}
                      multiple={true}
                      filterType={["jpg", "jpeg", "png"]}
                      maxUpload={8}
                      note="You can add up to 8 photos. The 1st photo will be set as cover (main photo)."
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
                      name="name"
                      component={InputField}
                      id="input-name_product"
                      type="text"
                      placeholder="Enter name product ..."
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
                    <Field
                      name="category"
                      component={SelectMultiField}
                      id="input-category"
                      isSearchable={false}
                      isAsync={true}
                      cacheOptions
                      defaultOptions
                      getOptionLabel={option => option.name}
                      getOptionValue={option => option._id}
                      loadOptions={() => props.getCategories()}
                    />
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
                    <Field
                      name="brand"
                      component={SelectSingleField}
                      id="input-brand"
                      isSearchable={false}
                      isAsync={true}
                      cacheOptions
                      defaultOptions
                      getOptionLabel={option => option.name}
                      getOptionValue={option => option._id}
                      loadOptions={() => props.getBrands()}
                    />
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
                    <Field
                      name="price"
                      component={InputField}
                      id="input-price"
                      type="text"
                      placeholder="Enter price ..."
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
                    <Field
                      name="sizes"
                      component={SelectMultiField}
                      id="input-sizes"
                      isSearchable={false}
                      isAsync={true}
                      cacheOptions
                      defaultOptions
                      getOptionLabel={option => option.name}
                      getOptionValue={option => option._id}
                      loadOptions={() => props.getSizes()}
                    />
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
                    <Field
                      name="color"
                      component={SelectMultiField}
                      id="input-colors"
                      isSearchable={false}
                      isAsync={true}
                      cacheOptions
                      defaultOptions
                      getOptionLabel={option => option.name}
                      getOptionValue={option => option._id}
                      loadOptions={() => props.getColors()}
                    />
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
                    <Field
                      name="quantity"
                      component={InputField}
                      id="input-quantity"
                      type="text"
                      placeholder="Enter quantity ..."
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
