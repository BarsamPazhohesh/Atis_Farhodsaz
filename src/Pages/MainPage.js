//#region Dependencies
import React from "react";
import Header from "../Header.js";
import Footer from "../Footer.js";
//#endregion

//#region MainPage function
function MainPage() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "97vh",
      }}
    >
      <Header />

      <div>
        <div className="w3-right w3-mobile w3-container">
          <p
            style={{ margin: "0px", fontWeight: "bold" }}
            className="w3-center w3-xxxlarge"
          >
            سامانه آتیس
          </p>
          <p
            style={{ margin: "0px" }}
            className="w3-center w3-margin-top w3-xxlarge"
          >
            ارائه خدمات الکترونیک و اطلاع رسانی بار
          </p>
        </div>
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
//#endregion

export default MainPage;
