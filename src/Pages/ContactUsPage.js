//#region Dependencies
import React from "react";
import Page from "./Page";
//#endregion

//#region ContactUsPage function
function ContactUsPage() {
  let pageText = [
    "روش های تماس با مدیریت و کارشناسان سامانه آتیس فرهود",
    "مدیریت سامانه : 03133870111",
    "دفتر شکایات : 03133870111",
    "کارشناس فنی : 03133870111",
    "پشتیبانی : 03133863070 و 03133869114",
    "استان: اصفهان، شهرستان اصفهان،بخش مرکزی،خ امام خمینی ،خ امیرکبیر،خ قائم مقام جنوبی ،خ پرتو، ترمینال ، ساختمان اداری",
  ];

  return <Page text={pageText} pageName={"contactUsPage"} />;
}
//#endregion

export default ContactUsPage;
