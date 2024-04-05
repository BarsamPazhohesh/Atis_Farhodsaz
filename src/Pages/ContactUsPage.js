//#region Dependencies
import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import { Style } from "./MainPage";
//#endregion

//#region ContactUsPage function
function ContactUsPage() {
  return (
    <div style={Style.main_style}>
      <Header />
      <p>This is contact us page</p>
      <Footer />
    </div>
  );
}
//#endregion

export default ContactUsPage;
