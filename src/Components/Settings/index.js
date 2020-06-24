import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import fbase from "../../firebase";
import { createToast } from "../../toast";

import { PlaidLink } from "react-plaid-link";

import { Button, Form, Input, Dropdown, Menu, message } from "antd";
import { DownOutlined } from "@ant-design/icons";

import BLM from "../../Assets/BLM.png";
import LDF from "../../Assets/LDF.png";

import Header from "../Header";

import "./style.less";


const Settings = ({ history }) => {
  const [user, loading, error] = useAuthState(fbase.auth);
  const [accounts, setAccounts] = useState([]);

  function loadCards(user) {
    axios.get(`http://localhost:5000/api/users/${user.uid}`)
      .then((res) => {
        var data = res.data;
        if (data.success) {
          var userData = data.user;
          if (userData.bank && userData.bank.token) {
            axios.get(`http://localhost:5000/api/plaid/${user.uid}/getAccounts`)
              .then((res1) => {
                var data1 = res1.data;
                console.log(data1);
                if (data1.success) {
                  console.log(data1.accounts);
                  setAccounts(data1.accounts);
                } else {
                  console.log("abc");
                  createToast(data1.error);
                }
              }).catch((error) => { createToast(error.message); });
          }
        } else {
          console.log("def");
          createToast(data.error);
        }
      }).catch((error) => { createToast(error.message); });
  };
  const onSuccess = (token, metadata) => {
    //console.log(token);
    //console.log(metadata);

    axios
      .post(`http://localhost:5000/api/users/${user.uid}/add_bank`, {
        token: token,
        name: metadata.institution.name,
        id: metadata["account_id"],
      })
      .then((res) => {
        var data = res.data;
        if (data.success) {
          loadCards(user);
        } else {
          //console.log("jeff");
          createToast(data.error);
        }
      })
      .catch((error) => {
        //console.log("thang");
        createToast(error);
      });
  };

  if (loading) {
    // can replace?
    return (
      <div>
        <p>Loading user...</p>
      </div>
    );
  }

  if (error) {
    // can replace?
    return (
      <div>
        <p>
          Error: <b>{error}</b>
        </p>
      </div>
    );
  }

  if (!user) {
    // not logged in so
    history.push("/");

    // we have to return something so we'll return an empty page.
    return <div></div>;
  } else {
    // user is logged in so display the page.

    function handleMenuClick(e) {
      message.info("Card selected");
      console.log("click", e);
    }

    const menu = (
      <Menu onClick={handleMenuClick}>
        {accounts.map((account) => {
          return (
          <Menu.Item key={account.account_id}>{account.name + " ending in " + account.mask}</Menu.Item>
          )
        })}
      </Menu>
    );

    return (
      <div className="settings">
        <Header />
        <div className="settings-content">
          <div className="account">
            <h1 className="account-title">Account</h1>
            <h4 className="email-title">Email</h4>
            <div className="email-input">
              <Form.Item
                name="email"
                rules={[
                  {
                    type: "email",
                    message: "Invalid email!",
                  },
                  {
                    required: true,
                    message: "Please input a valid email.",
                  },
                ]}
              >
                <Input
                  size="large"
                  defaultValue={user.email}
                  placeholder="Email"
                />
              </Form.Item>
              <Button className="email-reset" size="medium">
                Reset
              </Button>
            </div>
            <h4 className="password-title">Password</h4>
            <div className="password-input">
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input a valid password.",
                  },
                ]}
              >
                <Input.Password
                  size="large"
                  defaultValue="********************"
                  placeholder="Password"
                />
              </Form.Item>
              <Button className="password-reset" size="medium">
                Reset
              </Button>
            </div>
          </div>
          <div className="payment">
            <h1 className="payment-title">Payment and Organizations</h1>
            <div className="payment-buttons">
              <Link to="/selectorg">
                <Button className="add-org" size="large" style={{ borderRadius: 5 }}>
                  Add a new organization
                    </Button>
              </Link>
              <PlaidLink
                clientName="Make Cents"
                env="sandbox"
                product={["auth", "transactions"]}
                publicKey={process.env.REACT_APP_PLAID_PUBLIC_KEY}
                onSuccess={onSuccess}
                style={{
                  height: '40px',
                  marginLeft: 15,
                  padding: '6.4px 15px',
                  outline: '0',
                  border: '1px'
                }}>
                Connect a bank account
                </PlaidLink>
            </div>
            <div className="org">
              <img src={BLM} alt="BLM" className="org-logo" />
              <div className="org-buttons">
                <Dropdown overlay={menu}>
                  <Button >
                    Select Card <DownOutlined />
                  </Button>
                </Dropdown>
                <Button danger={true} style={{ width: 175, marginTop: 25 }}>Delete Organization</Button>
              </div>
            </div>
            <div className="org">
              <img src={LDF} alt="LDF" className="org-logo" />
              <div className="org-buttons">
                <Dropdown overlay={menu}>
                    <Button >
                    Select Card <DownOutlined />
                    </Button>
                </Dropdown>
                <Button danger={true} style={{ width: 175, marginTop: 25 }}>Delete Organization</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Settings;
