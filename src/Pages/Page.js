import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import topImage from "./Images/Header4.jpg";

function Page({ text, pageName }) {
  //#region Functions

  //#region rulesPageTager
  function rulesPageTager(x) {
    if (text.indexOf(x) % 2 === 0) {
      return (
        <p style={{ margin: "1.5vh" }} className="w3-xxlarge">
          {x}
        </p>
      );
    } else {
      return (
        <p style={{ margin: "1vh", padding: "0px" }} className="w3-xlarge">
          {x}
        </p>
      );
    }
  }
  //#endregion

  //#region aboutPageTager
  function aboutPageTager(x) {
    if (text.indexOf(x) === 0) {
      return (
        <p
          style={{ padding: "1vh", fontWeight: "bold" }}
          className="w3-xlarge w3-mobile"
        >
          {x}
        </p>
      );
    }
    return (
      <p style={{ padding: "1vh" }} className="w3-xlarge w3-mobile">
        {x}
      </p>
    );
  }
  //#endregion

  //#region contactUsPageTager
  function contactUsPageTager(x) {
    // return <p className="w3-xlarge w3-mobile">{x}</p>;
    return aboutPageTager(x);
  }
  //#endregion

  //#endregion

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
        {text.map((x) => {
          if (pageName === "rulesPage") {
            return rulesPageTager(x);
          } else if (pageName === "aboutPage") {
            return aboutPageTager(x);
          } else if (pageName === "contactUsPage") {
            return contactUsPageTager(x);
          }
        })}
      </div>
      <Footer />
    </div>
  );
}

export default Page;
