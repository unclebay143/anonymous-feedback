import { faStar, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useState } from "react";
import { ANONYMOUS_BASE_URL } from "../../constant/endpoint";
import { timeAgo } from "../../_helper/time";
import { convertSmileyText } from "../dashboard/smiley-helper/_smileyFunction";
import "./feedback-cards.css";

export const FeedbackCards = ({ id, feedback, smiley, givenDate }) => {
  const [deleting, setDeleting] = useState(false);
  const [selectedFeedbackID, setSelectedFeedbackID] = useState(null);
  const [loading, setLoading] = useState(false);

  // Stage selected feedback for delete confirmation
  const stageDeleteFeedback = (id) => {
    setDeleting(true);
    setSelectedFeedbackID(id);
  };

  // Cancel delete staging for selected feedback
  const cancelDeleteFeedback = () => {
    setDeleting(false);
    setSelectedFeedbackID(null);
  };

  // Deleted feedback
  const deleteFeedback = async () => {
    setLoading(true);
    const payload = {
      id: selectedFeedbackID,
    };
    const { data } = await axios.put(
      `${ANONYMOUS_BASE_URL}/feedbacks/delete`,
      payload
    );

    if (data) {
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    }
  };

  return (
    <React.Fragment>
      {deleting && selectedFeedbackID === id ? (
        <div className="feedback-card card text-right m-auto mb-5">
          <div className="card-header text-right d-flex justify-content-between">
            {/* <FontAwesomeIcon icon={faTimes} className="favourite-feedback" /> */}
          </div>
          <div className="card-body">
            <p className="card-text">
              <h4>This feedback will be deleted</h4>
              {/* {feedback}
              <p className="smiley">{convertSmileyText(smiley)}</p> */}
            </p>
            <div className="text-center">
              <p
                className="btn btn-sm share-feedback--btn"
                onClick={() => deleteFeedback()}
              >
                {loading ? "please wait..." : "Confirm"}
              </p>
              <p className="btn" onClick={() => cancelDeleteFeedback()}>
                Cancel
              </p>
            </div>
            <div className="feedback-date mt-4">Given {timeAgo(givenDate)}</div>
          </div>
        </div>
      ) : (
        <div className="feedback-card cad text-right m-auto mb-5">
          <div className="card-header text-right d-flex justify-content-between">
            <FontAwesomeIcon icon={faStar} className="favourite-feedback" />
          </div>
          <div className="card-body">
            <p className="card-text">
              {feedback}
              <p className="smiley">{convertSmileyText(smiley)}</p>
            </p>
            <div className="text-center">
              <a
                className="btn share-feedback--btn"
                href={`https://twitter.com/intent/tweet?text=Got a new feedback from @unclebigbay anonymous platform 
                
                ${convertSmileyText(smiley)} - ${feedback}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Share
              </a>
            </div>
          </div>
          <div className="card-footer text-muted d-flex justify-content-between">
            <div>
              <FontAwesomeIcon
                icon={faTrash}
                className="trash-feedback"
                onClick={() => stageDeleteFeedback(id)}
              />
            </div>
            <div className="feedback-date">Given {timeAgo(givenDate)}</div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};
