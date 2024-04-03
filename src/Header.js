import React from "react";

function Header() {
  return (
    <div>
      <label>صفحه اصلی</label>
      <label>درباره سایت</label>
      <label>قوانین و مقررات سایت</label>
      <label>تماس با ما</label>
    </div>
  );
}

export default Header;
let Style = {
  Label_style: {
    backgroundColor: "greenyellow",
    padding: "10px",
    borderRadius: "10px",
    // with:"10vh"
    margin: "0px 10px 0px 10px",
  },
};
