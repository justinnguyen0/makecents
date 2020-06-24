import React from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";

import logo from "../../Assets/logo.svg";

import "./style.less";

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="Make Cents Logo" className="logo" />
      <div className="buttons">
        <Link to="/dashboard">
          <Button className="button" size="large">
            Dashboard
          </Button>
        </Link>
        <Link to="/about">
          <Button className="button" size="large">
            About
          </Button>
        </Link>
        <Link to="/settings">
          <Button className="button" size="large">
            Settings
          </Button>
        </Link>
        <Link to="/">
          <Button className="button" size="large">
            Log Out
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
