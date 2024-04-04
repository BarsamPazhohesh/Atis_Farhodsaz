//#region Dependencies
import Footer from "../Footer";
import Header from "../Header";
import { Style } from "./MainPage";
//#endregion

//#region RulesPage function
function RulesPage() {
  return (
    <div style={Style.main_style}>
      <Header />
      <p>This is Rules page</p>
      <Footer />
    </div>
  );
}
//#endregion

export default RulesPage;
