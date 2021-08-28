import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./Home";
import "./tailwind.css";
import reportWebVitals from "./reportWebVitals";
import GlobalProvider from "./services/AppContext";
import 'bootstrap/dist/css/bootstrap.min.css';   
import Builder1 from "./components/templates/builder/Builder1";
import Builder2 from "./components/templates/builder/Builder2";
import Home from "./Home";
import Builder from "./Builder";

ReactDOM.render(
  <BrowserRouter>
    <GlobalProvider>
      <Builder />
    </GlobalProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
