import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { pageUrl } from "../../constant/pageurl";
import { Bubble } from "../../layouts/animation/Bubble";
import { Navbar } from "../../layouts/navbars/Navbar";
import { SelectSmileyReaction } from "../dashboard/SmileyReactions";
import "./feedbackform.css";

export const FeedbackForm = () => {
  const { id } = useParams();
  const [receiver, setReceiver] = useState(null);
  const [feedbackSent, setfeedbackSent] = useState(false);

  const users = ["unclebigbay", "sugar", "faith"];
  const findReceiver = users.filter(
    (user) => user.toLowerCase() === id.toLowerCase()
  );

  useEffect(() => {
    if (findReceiver.length > 0) {
      setReceiver(findReceiver);
    }
  }, [findReceiver.length, findReceiver]);

  if (feedbackSent) {
    return (
      <div className="feedback-success container text-center">
        <h1>Feedback Delivered</h1>
        <a href={pageUrl.HOMEPAGE} className="btn mt-3">
          Go back
        </a>
        <Bubble />
      </div>
    );
  }
  return (
    <React.Fragment>
      <Navbar />
      <div className="feedback-form container">
        {receiver ? (
          <h1 className="receiver-alert">Write Feedback to {receiver}</h1>
        ) : (
          <h1 className="receiver-alert">{id} not found</h1>
        )}
        <div className="select-smiley">
          <SelectSmileyReaction />
        </div>
        <form>
          <textarea placeholder="Leave feedback" />
          <button
            className="btn feedback-btn"
            disabled={receiver ? false : true}
          >
            Send
          </button>
        </form>
      </div>
    </React.Fragment>
  );
};
