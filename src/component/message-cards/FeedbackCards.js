import { faStar, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./feedback-cards.css";

export const FeedbackCards = () => {
  return (
    <React.Fragment>
      <div className="feedback-card card text-right m-auto mb-5">
        <div className="card-header text-right d-flex justify-content-between">
          <FontAwesomeIcon icon={faStar} className="favourite-feedback" />
        </div>
        <div className="card-body">
          <p className="card-text">
            With supporting text below as a natural lead-in to additional
            content.<p className="smiley">😍</p>
          </p>
          <div className="text-center">
            <a href="#" className="btn share-feedback--btn">
              Share
            </a>
          </div>
        </div>
        <div className="card-footer text-muted d-flex justify-content-between">
          <div>
            <FontAwesomeIcon icon={faTrash} className="trash-feedback" />
          </div>
          <div>Given 2 days ago</div>
        </div>
      </div>
    </React.Fragment>
  );
};
