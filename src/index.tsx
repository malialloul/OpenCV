import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./tailwind.css";
import reportWebVitals from "./reportWebVitals";
import GlobalProvider from "./services/AppContext";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Builder from "./pages/Builder";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import Landing from "./pages/Landing";
import MyTemplate from "./pages/MyTemplate";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/Signin";
import UserProfile from "./pages/UserProfile";

const customHistory = createBrowserHistory();

ReactDOM.render(
  <BrowserRouter>
    <GlobalProvider>
      <Router history={customHistory}>
        <Switch>
          <Route path="/" component={Landing} exact />
          <Route path="/home" component={Home} exact />
          <Route path="/builder" component={Builder} exact />
          <Route path="/signup" component={SignUp} exact />
          <Route path="/signin" component={SignIn} exact />
          <Route path="/user_profile" component={UserProfile} exact />
          <Route path="/template/:id" component={MyTemplate} exact />
        </Switch>
      </Router>
    </GlobalProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
