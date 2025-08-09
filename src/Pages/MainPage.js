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
        minHeight: "97vh",
      }}
    >
      <Header />

      <div>
        <div className="w3-right w3-mobile w3-container">
          <p
            style={{ margin: "0px", fontWeight: "bold" }}
            className="w3-center w3-xxxlarge"
          >
            سامانه آتیس فرهود ساز
          </p>
          <p
            style={{ margin: "0px" }}
            className="w3-center w3-margin-top w3-xlarge"
          >
            طرح، نظارت و اجرا خدمات فنی، تاسیساتی، ساختمانی، پل سازی و تامین
            نیروی انسانی
          </p>
        </div>
        <div className="w3-left w3-mobile w3-container">
          <p
            style={{ margin: "0px", fontWeight: "bold", fontFamily: "Georgia" }}
            className="w3-center w3-xxxlarge"
          >
            ATIS Farhood
          </p>
          <p
            style={{
              margin: "0px",
              fontWeight: "bold",
              fontFamily: "Times New Roman",
            }}
            className="w3-center w3-margin-top w3-xlarge"
          >
            AmirKabir Transportation Information System
          </p>
          <p
            style={{
              margin: "0px",
              textShadow:
                "-2px 0 black, 0 2px black, 2px 0 black, 0 -2px black",
            }}
            className="w3-monospace w3-center w3-margin-top w3-xlarge w3-text-red"
          >
            Base On R2Primary System
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
//#endregion

export default MainPage;
