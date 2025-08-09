//#region Dependencies
import React from "react";
import Page from "./Page";
//#endregion

//#region AboutPage function
function AboutPage() {
  let pageText = [
    "سامانه آتیس فرهود ساز",
    "پرتال یکپارچه خدمات پشتیبانی فنی و تامین نیروی انسانی در حوزه حمل بار",
    "سامانه آتیس فرهود ساز در سال 1401 توسط شرکت فرهود ساز با همکاری صنوف حمل و نقل دراستان اصفهان راه اندازی گردید",
    "هدف اصلی سایت ارائه خدمات پشتیبانی و تامین نیروی انسانی در حوزه حمل بار است",
    "ATISFarhood",
  ];

  return <Page text={pageText} pageName={"aboutPage"} />;
}
//#endregion

export default AboutPage;
