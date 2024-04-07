import React from "react";
import { Outlet, Link } from "react-router-dom";

//#region Header function
function Header() {
  return (
    <div class="w3-bar w3-black">
      <Link to="/" class="w3-bar-item w3-button w3-mobile">
        <label style={Style.Label_style}>صفحه اصلی</label>
      </Link>
      <Link to="/about" class="w3-bar-item w3-button w3-mobile">
        <label style={Style.Label_style}>درباره سایت</label>
      </Link>
      <Link to="/rules" class="w3-bar-item w3-button w3-mobile">
        <label style={Style.Label_style}>قوانین و مقررات سایت</label>
      </Link>
      <Link to="/contact" class="w3-bar-item w3-button w3-mobile">
        <label style={Style.Label_style}>تماس با ما</label>
      </Link>

      <Outlet />
    </div>
  );
}
//#endregion

export default Header;

//#region Style object
let Style = {
  Label_style: {
    // backgroundColor: "greenyellow",
    padding: "10px",
    borderRadius: "10px",
    // with:"10vh"
    margin: "0px 10px 0px 10px",
  },
  div_style: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    borderBottom: "3px solid black",
    paddingBottom: "20px",
    margin: "10px",
  },
  link_style: {
    textDecorationLine: "none",
    textDecorationColor: "black",
    color: "black",
  },
};
//#endregion
