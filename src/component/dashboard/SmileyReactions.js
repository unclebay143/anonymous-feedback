import React, { useEffect, useState } from "react";
import "./smileyreaction.css";

export const SmileyReactions = () => {
  return (
    <section className="smiley-container">
      <button className="smiley love">
        <span className="smiley-count">0</span>
        <span>😍</span>
      </button>
      <button className="smiley cry">
        <span className="smiley-count">0</span>
        <span>😭</span>
      </button>
      <button className="smiley sad">
        <span className="smiley-count">0</span>
        <span>😥</span>
      </button>
      <button className="smiley hail">
        <span className="smiley-count">0</span>
        <span>🙌</span>
      </button>
      <button className="smiley thumb">
        <span className="smiley-count">0</span>
        <span>👍</span>
      </button>
    </section>
  );
};

export const SelectSmileyReaction = () => {
  const [selectedSmiley, setSelectedSmiley] = useState(null);

  useEffect(() => {
    const handleSmileyAppearance = () => {
      if (selectedSmiley !== null) {
        const allSmiley = document.querySelectorAll(".smiley");
        for (let x = 0; x < allSmiley.length; x++) {
          if (allSmiley[x].id === selectedSmiley) {
            // Add big font-size to selected Smiley
            document
              .getElementById(allSmiley[x].id)
              .classList.add("selected-smiley");
            // Remove fade
            document
              .getElementById(allSmiley[x].id)
              .classList.remove("unselected-smiley");
          } else if (allSmiley[x].id !== selectedSmiley) {
            // Reset font-size for other smiley
            document
              .getElementById(allSmiley[x].id)
              .classList.remove("selected-smiley");
            // Add fade
            document
              .getElementById(allSmiley[x].id)
              .classList.add("unselected-smiley");
          }
        }
      }
    };

    // Invoke func
    handleSmileyAppearance();
    return () => {
      setSelectedSmiley(null);
    };
  }, [selectedSmiley]);

  return (
    <section className="select-smiley-container">
      <div
        className="smiley love "
        id="love"
        onClick={() => setSelectedSmiley("love")}
      >
        😍
      </div>
      <div
        className="smiley cry"
        id="cry"
        onClick={() => setSelectedSmiley("cry")}
      >
        😭
      </div>
      <div
        className="smiley sad"
        id="sad"
        onClick={() => setSelectedSmiley("sad")}
      >
        😥
      </div>
      <div
        className="smiley hail"
        id="hail"
        onClick={() => setSelectedSmiley("hail")}
      >
        🙌
      </div>
      <div
        className="smiley thumb"
        id="thumb"
        onClick={() => setSelectedSmiley("thumb")}
      >
        👍
      </div>
    </section>
  );
};
