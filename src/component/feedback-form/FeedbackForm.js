import React from "react";
import { Navbar } from "react-bootstrap";
import "./feedbackform.css";

export const FeedbackForm = () => {
  const history = useHistory();
  console.log(history);
  return (
    <React.Fragment>
      <Navbar />
    </React.Fragment>
  );
};
