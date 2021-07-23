import React from "react";
import "./bubble.css";

export const Bubble = ({ two }) => {
  return (
    <div className={`bubble ${two && "bottom-flow"}`}>
      <i className="fas fa-comment"></i>
      <i className="fas fa-comment"></i>
      <i className="fas fa-comment"></i>
      <i className="fas fa-comment"></i>
      <i className="fas fa-comment"></i>
      <i className="fas fa-comment"></i>
      <i className="fas fa-comment"></i>
    </div>
  );
};
