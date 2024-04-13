//#region Dependencies
import React from "react";
import { Outlet, Link } from "react-router-dom";
//#endregion

//#region Header function
function Header() {
  let ClassNames = {
    MainDiv: "w3-bar w3-black w3-mobile w3-border w3-card-4 w3-round-xxlarge w3-margin-bottom w3-large",
    Link: "w3-bar-item w3-button w3-mobile w3-right w3-hover-white w3-ripple",
  };

  return (
    <div className={ClassNames.MainDiv}>
      <Link to="/" className={ClassNames.Link}>
        <label>صفحه اصلی</label>
      </Link>
      <Link to="/login" className={ClassNames.Link}>
        <label>آتیس وب</label>
      </Link>
      <Link to="/about" className={ClassNames.Link}>
        <label>درباره سایت</label>
      </Link>
      <Link to="/rules" className={ClassNames.Link}>
        <label>قوانین و مقررات سایت</label>
      </Link>
      <Link to="/contact" className={ClassNames.Link}>
        <label>تماس با ما</label>
      </Link>

      <Outlet />
    </div>
  );
}
//#endregion

export default Header;


