import React from "react";
import { useParams } from "react-router-dom";
import { Navbar } from "../../layouts/navbars/Navbar";
import { SelectSmileyReaction } from "../dashboard/SmileyReactions";
import "./feedbackform.css";

export const FeedbackForm = () => {
  const { id } = useParams();
  return (
    <React.Fragment>
      <Navbar />
      <div className="feedback-form container">
        <h1 className="receiver-alert">Feedback for {id}</h1>
        <div className="select-smiley">
          <SelectSmileyReaction />
        </div>
        <form>
          <textarea placeholder="Leave feedback" />
          <button className="btn feedback-btn">Send</button>
        </form>
      </div>
    </React.Fragment>
  );
};
