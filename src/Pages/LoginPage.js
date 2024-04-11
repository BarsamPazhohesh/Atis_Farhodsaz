import React from "react";
import Header from "../Header";
import Footer from "../Footer";

function LoginPage() {
  let ClassNames = {
    middleDiv: "w3-container w3-half w3-margin-bottom w3-mobile",
    theForm:
      "w3-container w3-border w3-border-black  w3-pale-yellow w3-card-4 w3-round-xlarge w3-mobile",
    inputs: "w3-input w3-round-large w3-border w3-border-gray w3-bottombar",
    inputsLabels: "w3-large w3-right w3-margin-bottom",
    checkboxLabel: "w3-large w3-margin-left w3-margin-bottom",
    button:
      "w3-large w3-button w3-section w3-teal w3-ripple w3-block w3-round-xxlarge",
  };

  let labelStyle = { fontWeight: "bold" };
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

          <p>
            <input
              id="milk"
              className="w3-check"
              type="checkbox"
              checked="checked"
            />
            <label style={labelStyle} className={ClassNames.checkboxLabel}>
              مرا به خاطر بسپار
            </label>
          </p>

          <p className="w3-center ">
            <button style={labelStyle} className={ClassNames.button}>
              ورود
            </button>
          </p>
        </form>
      </div>

      <Footer />
    </div>
  );
}

export default LoginPage;
