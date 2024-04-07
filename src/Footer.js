import React from "react";

//#region Footer function
function Footer() {
  return (
    <div style={Style.main_style}>
      <div class="w3-card-4">
        {/* <img src="img_snowtops.jpg" alt="Alps"> */}
        <div class="w3-container w3-center">
          <p>ICON</p>
        </div>
      </div>

      <div class="w3-card-4">
        {/* <img src="img_snowtops.jpg" alt="Alps"> */}
        <div class="w3-container w3-center">
          <p>ICON</p>
        </div>
      </div>

      <div class="w3-card-4">
        {/* <img src="img_snowtops.jpg" alt="Alps"> */}
        <div class="w3-container w3-center">
          <p>ICON</p>
        </div>
      </div>
    </div>
  );
}
//#endregion

export default Footer;

//#region Style object
let Style = {
  div_style: {
    backgroundColor: "Gray",
    height: "40vh",
    width: "45vh",
    borderRadius: "20px",
    margin: "0px 10px 0px 10px",
  },
  main_style: {
    display: "flex",
    flexDirection: "row",
    // height: "30vh",
    padding: "10px",
    justifyContent: "space-around",
    borderTop: "3px solid black",
  },
};
//#endregion
