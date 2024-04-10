//#region Dependencies
import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import { Style } from "./MainPage";
import topImage from "./Header4.jpg";

//#endregion

//#region ContactUsPage function
function ContactUsPage() {
  return (
    <div style={Style.main_style}>
      <Header />
      <div style={{ marginTop: "10px" }} class="w3-container">
        <img src={topImage} class="w3-round" alt="Norway" />
        <h6 style={{ fontSize: "3vh" }}>
          روش های تماس با مدیریت و کارشناسان سامانه آتیس فرهود
        </h6>
        <h6 style={{ fontSize: "3vh" }}>سامانه آتیس فرهود</h6>
        <h6 style={{ fontSize: "3vh" }}>مدیریت سامانه : 03133870111</h6>
        <h6 style={{ fontSize: "3vh" }}>دفتر شکایات : 03133870111</h6>
        <h6 style={{ fontSize: "3vh" }}>کارشناس فنی : 03133870111</h6>
        <h6 style={{ fontSize: "3vh" }}>
          پشتیبانی : 03133863070 و 03133869114
        </h6>
        <h6 style={{ fontSize: "3vh" }}>
          استان: اصفهان، شهرستان اصفهان،بخش مرکزی،خ امام خمینی ،خ امیرکبیر،خ
          قائم مقام جنوبی ،خ پرتو، ترمینال ، ساختمان اداری ،{" "}
        </h6>
      </div>
      <Footer />
    </div>
  );
}
//#endregion

export default ContactUsPage;
