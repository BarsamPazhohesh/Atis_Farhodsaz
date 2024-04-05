//#region Dependencies
import React from "react";
import Footer from "../Footer";
import Header from "../Header";
//#endregion

//#region MainPage function
function MainPage() {
  return (
    <div style={Style.main_style}>
      <Header />
      <p>This is main page</p>
      <Footer />
    </div>
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
