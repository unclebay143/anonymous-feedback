import { useUser } from "@clerk/clerk-react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { FeedbackCards } from "../message-cards/FeedbackCards";
import "./dashboard.css";
import { Menu } from "./Menu";
import { SmileyReactions } from "./smiley-helper/SmileyReactions";

export const Dashboard = () => {
  const { username } = useUser();
  const [userFeedbacks, setUserFeedbacks] = useState(null);

  useEffect(() => {
    const retrieveFeedback = async () => {
      const payload = {
        username,
      };
      const { data } = await axios.post(
        "http://localhost:1111/feedbacks/retrieve",
        payload
      );

      setUserFeedbacks(data.data);
    };

    retrieveFeedback();
  }, [username]);
  return (
    <React.Fragment>
      <div className="dashboard-container">
        <aside className="container-fluid">
          <Menu />
        </aside>

        <section className="container-fluid feedback-stack">
          <div className="fixed-heading-wrap">
            <h1 className="heading-title"> Anonymous Feedbacks </h1>
            <h1 className="heading-greet"> Welcome back, {username}</h1>
          </div>
          <p>
            {userFeedbacks?.length >= 5 &&
              "Feedback limit reached, request for upgrade"}
          </p>
          {userFeedbacks &&
            userFeedbacks.map(({ feedback, smiley, __createdtime__, id }) => {
              return (
                <FeedbackCards
                  key={id}
                  id={id}
                  feedback={feedback}
                  smiley={smiley}
                  givenDate={__createdtime__}
                />
              );
            })}

          {userFeedbacks?.length === 0 && (
            <div className="feedback-card card h-50 d-flex justify-content-center mb-5">
              <p>
                You do not have any feedbacks yet 😢. share your link to get
                feedbacks
              </p>
            </div>
          )}
        </section>

        <aside className="container-fluid">
          <SmileyReactions userFeedbacks={userFeedbacks} />
        </aside>
      </div>
    </React.Fragment>
  );
};
