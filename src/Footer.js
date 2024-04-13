//#region Dependencies
import React from "react";
//#endregion

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
        <div class="w3-container w3-center">
          <div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://trustseal.enamad.ir/?id=444939&Code=zNv5Xe9LoS7uGvf1GLLIIcDIMbY1o2Qc"
            >
              <img
                src="https://trustseal.enamad.ir/logo.aspx?id=444939&Code=zNv5Xe9LoS7uGvf1GLLIIcDIMbY1o2Qc"
                alt=""
                style={{ cursor: "pointer" }}
                code="zNv5Xe9LoS7uGvf1GLLIIcDIMbY1o2Qc"
              />
            </a>
          </div>
        </div>
      </div>

      <div class="w3-card-4">
        {/* <img src="img_snowtops.jpg" alt="Alps"> */}
        <div class="w3-container w3-center">
          <p>ICON</p>
        </div>
      </div>

      <p>
        کلیه حقوق سایت متعلق است به اداره کل راهداری و حمل و نقل جاده ای استان
        اصفهان
      </p>
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
