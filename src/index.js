import React from "react";
import ReactDOM from "react-dom";
import WebFont from "webfontloader";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import About from "./Components/About";
import Dashboard from "./Components/Dashboard";
import History from "./Components/History";
import LandingPage from "./Components/LandingPage";
import Login from "./Components/Login";
import SelectOrg from "./Components/SelectOrg";
import Settings from "./Components/Settings";
import Signup from "./Components/Signup";

import "./index.css";

WebFont.load({
  google: {
    families: ["Montserrat:100,200,300,400,500,600,700,800,900"],
  },
});

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/about" component={About} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/history" component={History} />
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/selectorg" component={SelectOrg} />
        <Route exact path="/settings" component={Settings} />
        <Route exact path="/signup" component={Signup} />
      </Switch>
    </Router>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
