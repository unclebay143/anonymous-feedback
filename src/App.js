import { SignedIn, SignedOut, SignIn } from "@clerk/clerk-react";
import axios from "axios";
import React from "react";
import { Route, Switch } from "react-router-dom";
import { AuthPages } from "./component/auth-pages/AuthPages";
import { Dashboard } from "./component/dashboard/Dashboard";
import { FeedbackForm } from "./component/feedback-form/FeedbackForm";
import { Homepage } from "./component/homepage/Homepage";
import { pageUrl } from "./constant/pageurl";
import { Navbar } from "./layouts/navbars/Navbar";

function App() {
  async function get() {
    const data = {
      first_name: "test",
      email_address: "sample@gmail.com",
      password: "190000",
      username: "test1",
    };

    const token = "test_o1XJVrFVXGanfJ0CXfasYibQYTStj90x8M";

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,

        "Access-Control-Allow-Origin": "*",
      },
    };

    const x = await axios.post(
      "https://clerk.fczew.1hnbk.lcl.dev/v1/client/sign_in",
      data
    );
    console.log(x);
  }

  get();
  return (
    <React.Fragment>
      <Switch>
        <PrivateRoute exact path={pageUrl.DASHBOARD} component={Dashboard} />
        <Route exact path={pageUrl.SEND_FEEDBACK} component={FeedbackForm} />
        <Route exact path={pageUrl.REGISTERATION_PAGE} component={AuthPages} />
        <Route exact path={pageUrl.LOGIN_PAGE} component={AuthPages} />
        <Route exact path={pageUrl.HOMEPAGE} component={Homepage} />
      </Switch>
    </React.Fragment>
  );
}

function PrivateRoute(props) {
  // If the route matches but the user is not signed in, redirect to /sign-in
  return (
    <>
      <SignedIn>
        <Route {...props} />
      </SignedIn>
      <SignedOut>
        <AuthPages />
      </SignedOut>
    </>
  );
}

export default App;
