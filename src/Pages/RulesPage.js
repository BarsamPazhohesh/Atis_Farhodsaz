//#region Dependencies
import Footer from "../Footer";
import Header from "../Header";
import { Style } from "./MainPage";
//#endregion

function RulesPage() {
  return (
    <div style={Style.main_style}>
      <Header />
      <p>This is Rules page</p>
      <Footer />
    </div>
  );
}

export default RulesPage;
