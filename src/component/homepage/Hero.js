import { SignedIn, SignedOut } from "@clerk/clerk-react";
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
          <SignedOut>
            <a
              href={pageUrl.CLERK_REGISTERATION_PAGE}
              className="btn get-started"
            >
              Get Started
            </a>
            <a href={pageUrl.CLERK_LOGIN_PAGE} className="btn login">
              Login
            </a>
          </SignedOut>

          <SignedIn>
            <Link to={pageUrl.DASHBOARD} className="btn">
              Dashboard
            </Link>
          </SignedIn>
        </section>
      </div>
    </React.Fragment>
  );
};
