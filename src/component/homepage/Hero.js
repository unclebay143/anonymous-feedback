import React from "react";
import { Link } from "react-router-dom";
import { pageUrl } from "../../constant/pageurl";
import "./hero.css";

export const Hero = () => {
  return (
    <React.Fragment>
      <div className="container-fluid px-lg-5 hero-container">
        <section>
          <h1>Receive and send useful anonymous feedbacks without stress.</h1>
        </section>

        <section className="hero-get-started">
          <Link to={pageUrl.REGISTERATION_PAGE} className="btn get-started">
            Get Started
          </Link>
          <Link to={pageUrl.LOGIN_PAGE} className="btn login">
            Login
          </Link>
        </section>
      </div>
    </React.Fragment>
  );
};
