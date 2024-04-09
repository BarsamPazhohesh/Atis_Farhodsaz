//#region Dependencies
import React from "react";
import ReactDOM from "react-dom";
import MainPage from "./Pages/MainPage";
import AboutPage from "./Pages/AboutPage";
import ContactUsPage from "./Pages/ContactUsPage";
import RulesPage from "./Pages/RulesPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
//#endregion

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactUsPage />} />
        <Route path="rules" element={<RulesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
