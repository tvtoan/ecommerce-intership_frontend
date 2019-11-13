import React from "react";

export default function ChangePassPage() {
  return (
    <div className="account-page__main__block edit-account">
      <div className="account-page__main__block__header">
        <div className="account-page__main__block__header-child account-page__main__block__header-left">
          <h6 className="account-page__main__block__header__title">
            Change password
          </h6>
        </div>
      </div>
      <div className="account-page__main__block__content">
        <form className="form-edit-account">
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Current password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter your password..."
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">New password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter your password..."
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Re-enter new password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter your password..."
            />
          </div>
          <div className="form-bottom">
            <button type="submit" className="button">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
