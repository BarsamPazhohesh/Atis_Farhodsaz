import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import topImage from "./Images/Header4.jpg";

function Page({ text, pageName }) {

  return (
    <div class="w3-display-container w3-mobile">
      <Header />
      <div style={{ marginTop: "10px" }} className="w3-container  w3-center">
        <img
          style={{ width: "100%" }}
          src={topImage}
          class="w3-round"
          alt="Norway"
        />
      </div>
      <Footer />
    </div>
  );
}

export default Page;
