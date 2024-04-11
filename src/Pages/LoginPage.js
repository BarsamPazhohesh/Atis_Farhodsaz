import React from "react";
import Header from "../Header";
import Footer from "../Footer";

function LoginPage() {
  let ClassNames = {
    middleDiv: "w3-container w3-half w3-margin-bottom w3-mobile",
    theForm:
      "w3-container w3-border w3-border-black  w3-pale-yellow w3-card-4 w3-round-xlarge w3-mobile",
  };

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

      <div style={{ alignSelf: "center" }} className={ClassNames.middleDiv}>
        <form className={ClassNames.theForm}>
          <p>
            <input
              className={ClassNames.inputs}
              type="text"
              dir="rtl"
              required
            />
            <label style={labelStyle} className={ClassNames.inputsLabels}>
              شناسه کاربر
            </label>
          </p>
          <p>
            <input
              className={ClassNames.inputs}
              type="password"
              dir="rtl"
              required
            />
            <label style={labelStyle} className={ClassNames.inputsLabels}>
              رمز عبور
            </label>
          </p>
        </form>
      </div>

      <Footer />
    </div>
  );
}

export default LoginPage;
