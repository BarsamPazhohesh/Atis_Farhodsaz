import Footer from "../Footer";
import Header from "../Header";

function MainPage() {
  return (
    <div style={Style.main_style}>
      <Header />
      <p>This is main page</p>
      <Footer />
    </div>
  );
}

export default MainPage;

export let Style = {
  main_style: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "98vh",
  },
};
