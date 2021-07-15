import React from "react";
import { Route, Switch } from "react-router-dom";
import { AuthPages } from "./component/auth-pages/AuthPages";
import { Dashboard } from "./component/dashboard/Dashboard";
import { FeedbackForm } from "./component/feedback-form/FeedbackForm";
import { Homepage } from "./component/homepage/Homepage";
import { pageUrl } from "./constant/pageurl";
import { Navbar } from "./layouts/navbars/Navbar";

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path={pageUrl.SEND_FEEDBACK} component={FeedbackForm} />
        <Route exact path={pageUrl.DASHBOARD} component={Dashboard} />
        <Route exact path={pageUrl.REGISTERATION_PAGE} component={AuthPages} />
        <Route exact path={pageUrl.LOGIN_PAGE} component={AuthPages} />
        <Route exact path={pageUrl.HOMEPAGE} component={Homepage} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
