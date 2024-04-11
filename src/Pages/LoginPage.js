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


      <Footer />
    </div>
  );
}

export default LoginPage;
