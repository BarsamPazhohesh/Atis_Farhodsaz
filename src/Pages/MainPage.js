//#region Dependencies
import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import topImage from "./Header4.jpg";

//#endregion

//#region MainPage function
function MainPage() {
  return (
    <>
      <div style={Style.main_style} class="w3-display-container w3-mobile">
        <Header />
        <div style={{ marginTop: "10px" }} class="w3-container">
          <img src={topImage} class="w3-round" alt="Norway" />
        </div>
        <Footer />
      </div>
    </>
  );
}
//#endregion

export default MainPage;

//#region Style object
export let Style = {
  main_style: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "98vh",
  },
};
//#endregion
