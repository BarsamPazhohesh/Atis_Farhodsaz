//#region Dependencies
import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import { Style } from "./MainPage";
import topImage from "./Header4.jpg";

//#endregion

//#region AboutPage function
function AboutPage() {
  return (
    <div style={Style.main_style}>
      <Header />
      <div style={{ marginTop: "10px" }} class="w3-container">
        <img src={topImage} class="w3-round" alt="Norway" />
        <h6 style={{ fontSize: "3vh" }}>سامانه آتیس فرهود</h6>
        <h6 style={{ fontSize: "3vh" }}>
          پرتال یکپارچه خدمات پشتیبانی فنی و مهندسی در حوزه نوبت دهی مجازی بار
        </h6>
        <h6 style={{ fontSize: "3vh" }}>
          سامانه آتیس فرهود در سال 1401 توسط شرکت فرهود ساز سپاهان با همکاری
          صنوف حمل و نقل دراستان اصفهان راه اندازی گردید
        </h6>
        <h6 style={{ fontSize: "3vh" }}>
          هدف اصلی سایت ارائه خدمات پشتیبانی فنی مهندسی در حوزه نوبت دهی مجازی
          باراست
        </h6>
        <h6 style={{ fontSize: "3vh" }}>
          هم اکنون کلیه بارهای آهن آلات مجتمع ذوب آهن اصفهان ، تولیدات مجتمع
          فولاد سبا و آهن آلات و میلگردانباری از طریق این سامانه به رانندگان
          عزیز اطلاع رسانی می شود
        </h6>
        <h6 style={{ fontSize: "3vh" }}>
          قابل ذکر است ویژگی برتر این سامانه توانایی اعلام بار مجازی و صدور نوبت
          مجازی غیر حضوری است به نحوی که رانندگان از طریق اپلیکیشن آتیس موبایل
          امکان انتخاب بار و ثبت نوبت مجازی را خواهند داشت
        </h6>
        <h4 style={{ fontSize: "3vh" }}>ATISFarhood</h4>
      </div>
      <Footer />
    </div>
  );
}
//#endregion

export default AboutPage;
