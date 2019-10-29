import React from "react";
import { Formik } from "formik";
import _ from 'lodash/lang';
import "./style.scss";

export default function AddProduct() {
  return (
    <div>
      <Formik
        initialValues={{ image: null, email: '' }}
        onSubmit={values => {
          console.log("values:", values);
          const cloneValue = _.cloneDeep(values);
          delete cloneValue.image;
          let data = new FormData();
          data.append("image", values.image);
          for (let [key, value] of Object.entries(cloneValue)) {
            data.append(key, value);
          }
          fetch("http://localhost:8080/upload-single", {
            method: "POST",
            body: data
          }).then(res => {
            console.log(res);
          }).catch(err => console.log(err));
        }}
      >
        {({ values, handleSubmit, handleChange, handleBlur, setFieldValue }) => (
          <form onSubmit={handleSubmit}>
            <input name="email" type="email" onChange={handleChange} onBlur={handleBlur} value={values.email}/>
            <input
              id="file"
              name="image"
              type="file"
              onChange={event => {
                setFieldValue("image", event.currentTarget.files[0]);
              }}
              className="form-control"
            />
            <button type="submit">Submit</button>
          </form>
        )}
      </Formik>
    </div>
  );
}
