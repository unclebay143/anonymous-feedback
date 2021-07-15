import React from "react";
import { Tabs, Tab } from "react-bootstrap";
import { ForgotPassword } from "./forgot-password/ForgotPassword";
import { Login } from "./login/Login";
import { Register } from "./register/Register";
import "./auth-pages.css";
import { Navbar } from "../../layouts/navbars/Navbar";

export const AuthPages = () => {
  return (
    <React.Fragment>
      <Navbar />
      <div className="tab-container container text-center mt-4">
        <Tabs
          defaultActiveKey="login"
          id="uncontrolled-auth-tabs"
          className="mb-3"
        >
          <Tab eventKey="login" title="Login">
            <Login />
          </Tab>
          <Tab eventKey="register" title="Register">
            <Register />
          </Tab>
          <Tab
            eventKey="forgotPassword"
            title="Forgot Password 😭"
            className="forgotPassword"
          >
            <ForgotPassword />
          </Tab>
        </Tabs>
      </div>
    </React.Fragment>
  );
};
