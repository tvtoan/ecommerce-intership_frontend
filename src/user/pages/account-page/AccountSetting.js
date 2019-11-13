import React, { useState } from "react";

export default function AccountSetting() {
  const [isEdit, setIsEdit] = useState(false);

  return (
    <>
      {!isEdit ? (
        <div className="account-page__main__block">
          <div className="account-page__main__block__header">
            <div className="account-page__main__block__header-child account-page__main__block__header-left">
              <h6 className="account-page__main__block__header__title">
                Information
              </h6>
            </div>
            <div className="account-page__main__block__header-child account-page__main__block__header-right">
              <button className="flat-button" onClick={() => setIsEdit(true)}>
                Edit
              </button>
            </div>
          </div>
          <div className="account-page__main__block__content">
            <div className="account-page__main__block__content__detail__item">
              <label htmlFor="">Name</label>
              <span>Johnnie Kennedy</span>
            </div>
            <div className="account-page__main__block__content__detail__item">
              <label htmlFor="">Email</label>
              <span>johnniekennedy@gmail.com</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="account-page__main__block edit-account">
          <div className="account-page__main__block__header">
            <div className="account-page__main__block__header-child account-page__main__block__header-left">
              <h6 className="account-page__main__block__header__title">
                Information
              </h6>
            </div>
          </div>
          <div className="account-page__main__block__content">
            <form className="form-edit-account">
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Name</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  placeholder="Enter your name..."
                />
                <div className="invalid-feedback">
                  Please enter a valid name!
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">E-mail</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  placeholder="Enter your email..."
                />
              </div>
              <div className="form-bottom">
                <button
                  className="flat-button"
                  onClick={() => setIsEdit(false)}
                >
                  Cancel
                </button>
                <button type="submit" className="button">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
