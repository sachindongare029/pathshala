import React from "react";
import "../../assets/styles/userAuthHeader.scss";

const Header = () => {
  return (
    <div className="pathshala__user-auth__header">
      <div className="signup__title" nav="/">
        <label className="title">
          {" "}
          <span>P</span>athshala{" "}
        </label>
        <label className="desc"> | Let's learn digitally </label>
      </div>
    </div>
  );
};

export default Header;
