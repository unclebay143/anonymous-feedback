import { UserButton, useUser } from "@clerk/clerk-react";
import {
  faCopy,
  faShareAlt,
  faStar,
  faSync,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { copyToClipBoard } from "../../_helper/copyToClipBoard";
import "./menu.css";

export const Menu = () => {
  const [notFree, setnotFree] = useState(false);
  const [copied, setCopied] = useState(false);
  const { username } = useUser();
  const userFeedbackURL = `anonymousfeedback.netlify.app/#/to/${username}`;
  const userFeedbackURLEncoded = `anonymousfeedback.netlify.app%2F%23%2Fto%2F${username}`;
  const shareMessage = `Send me an anonymous message through this link ${userFeedbackURLEncoded}, I won't know you sent it. Built by @unclebigbay @hashnode @harperdb`;

  // Reload page
  const reloadPage = () => {
    window.location.reload();
  };

  const premiumFeature = () => {
    setnotFree(true);
  };

  // feedback url copy
  const handleCopy = () => {
    // invoke the copy function
    copyToClipBoard(userFeedbackURL);
    setCopied(true);
  };

  return (
    <div className="menu">
      <button
        onClick={() => handleCopy()}
        className={`${copied && "copied-success"}`}
      >
        <FontAwesomeIcon icon={faCopy} /> {copied ? " Copied" : " Copy"}
      </button>
      <a
        href={`https://twitter.com/intent/tweet?text=${shareMessage}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <button>
          <FontAwesomeIcon icon={faShareAlt} /> Share
        </button>
      </a>
      <button onClick={() => premiumFeature()} style={{ opacity: "0.9" }}>
        <FontAwesomeIcon icon={faStar} />
        {notFree ? " Premium" : " Starred"}
      </button>
      <button onClick={() => reloadPage()}>
        <FontAwesomeIcon icon={faSync} /> Reload
      </button>
      <button className="clerk-user-button">
        <UserButton />
      </button>
    </div>
  );
};
