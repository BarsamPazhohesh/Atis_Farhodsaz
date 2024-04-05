import React from "react";
import { Outlet, Link } from "react-router-dom";

//#region Header function
function Header() {
  return (
    <div style={Style.div_style}>
      <label style={Style.Label_style}>صفحه اصلی</label>
      <label style={Style.Label_style}>درباره سایت</label>
      <label style={Style.Label_style}>قوانین و مقررات سایت</label>
      <label style={Style.Label_style}>تماس با ما</label>
      <Link to="/" style={Style.link_style}>
      </Link>
      <Link to="/about" style={Style.link_style}>
      </Link>
      <Link to="/rules" style={Style.link_style}>
      </Link>
      <Link to="/contact" style={Style.link_style}>
      </Link>
    </div>
  );
}
//#endregion

export default Header;

//#region Style object
let Style = {
  Label_style: {
    backgroundColor: "greenyellow",
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
    paddingBottom: "10px",
  },
};
//#endregion
