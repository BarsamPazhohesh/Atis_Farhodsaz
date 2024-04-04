//#region Dependencies
import Footer from "../Footer";
import Header from "../Header";
import { Style } from "./MainPage";
//#endregion

function ContactUsPage() {
  return (
    <div style={Style.main_style}>
      <Header />
      <p>This is contact us page</p>
      <Footer />
    </div>
  );
}

export default ContactUsPage;
