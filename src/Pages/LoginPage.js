import React from "react";
import Header from "../Header";
import Footer from "../Footer";

function LoginPage() {
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
        </form>
      </div>

      <Footer />
    </div>
  );
}

export default LoginPage;
