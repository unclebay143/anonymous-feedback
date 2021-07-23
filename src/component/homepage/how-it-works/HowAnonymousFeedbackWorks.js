import React from "react";
import { pageUrl } from "../../../constant/pageurl";
import "./howanonymousfeedbackworks.css";

export const HowAnonymousFeedbackWorks = () => {
  return (
    <React.Fragment>
      <section className="container-fluid px-lg-5 how-it-works">
        <h1>How it works</h1>
        <div class="row">
          <div class="col-sm-4 mb-4">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Create your account</h5>
                <p class="card-text">
                  Create a secure account on our platform, using your Google,
                  Github account or password based
                </p>
                <a href={pageUrl.CLERK_REGISTERATION_PAGE} class="btn">
                  Create an account
                </a>
              </div>
            </div>
          </div>
          <div class="col-sm-4 mb-4">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Share your feedback link</h5>
                <p class="card-text">
                  Copy and share your feedback links to start receiving
                  feedbacks from friends, colleague, or client anonymously.
                </p>
                <a href={pageUrl.CLERK_LOGIN_PAGE} class="btn">
                  Sign in account
                </a>
              </div>
            </div>
          </div>
          <div class="col-sm-4 mb-4">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Receive and work on feedbacks</h5>
                <p class="card-text">
                  Manage your 5 limit trial feedbacks and upgrade to receive
                  more feedbacks anonymously.
                </p>
                <a href={pageUrl.CLERK_LOGIN_PAGE} class="btn">
                  Manage feedbacks
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};
