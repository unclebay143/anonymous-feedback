import React from "react";
import { FeedbackCards } from "../message-cards/FeedbackCards";
import "./dashboard.css";
import { Menu } from "./Menu";
import { SmileyReactions } from "./SmileyReactions";

export const Dashboard = () => {
  const manyMessages = new Array(10).fill(<FeedbackCards />);
  return (
    <React.Fragment>
      <div className="dashboard-container">
        <aside className="container-fluid">
          <Menu />
        </aside>

        <section className="container-fluid feedback-stack">
          <div className="fixed-heading-wrap">
            <h1 className="text-center heading-title">Anonymous Feedbacks</h1>
          </div>

          {manyMessages}
        </section>

        <aside className="container-fluid">
          <SmileyReactions />
        </aside>
      </div>
    </React.Fragment>
  );
};
