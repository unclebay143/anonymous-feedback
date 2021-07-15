import React, { useState } from "react";
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

export const SelectSmileyReaction = () => {
  const [selectedSmiley, setSelectedSmiley] = useState(null);

  const handleClick = (e) => {
    setSelectedSmiley(e.target.id);
    if (selectedSmiley) {
      const allSmiley = document.querySelectorAll(".smiley");
      for (let x = 0; x < allSmiley.length; x++) {
        if (allSmiley[x].id === selectedSmiley) {
          // Add big font-size to selected Smiley
          document
            .getElementById(allSmiley[x].id)
            .classList.add("selected-smiley");
        }
        // Reset font-size for other smiley
        document
          .getElementById(allSmiley[x].id)
          .classList.remove("selected-smiley");
      }
    }
  };
  return (
    <section className="select-smiley-container">
      <div className="smiley love" id="love" onClick={handleClick}>
        😍
      </div>
      <div className="smiley cry" id="cry" onClick={handleClick}>
        😭
      </div>
      <div className="smiley sad" id="sad" onClick={handleClick}>
        😥
      </div>
      <div className="smiley hail" id="hail" onClick={handleClick}>
        🙌
      </div>
    </section>
  );
};
