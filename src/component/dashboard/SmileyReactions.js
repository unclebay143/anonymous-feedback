import React from "react";
import "./smileyreaction.css";

export const SmileyReactions = () => {
  return (
    <section className="smiley-container">
      <div className="smiley love">
        😍 <span className="smiley-count">0</span>
      </div>
      <div className="smiley cry">
        😭 <span className="smiley-count">0</span>
      </div>
      <div className="smiley sad">
        😥 <span className="smiley-count">0</span>
      </div>
      <div className="smiley hail">
        🙌 <span className="smiley-count">0</span>
      </div>
    </section>
  );
};
