//#region Dependencies
import Footer from "../Footer";
import Header from "../Header";
import { Style } from "./MainPage";
//#endregion

function AboutPage() {
  return (
    <div style={Style.main_style}>
      <Header />
      <p>This page is about page</p>
      <Footer />
    </div>
  );
}

export default AboutPage;
