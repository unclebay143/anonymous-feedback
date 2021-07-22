import { UserButton } from "@clerk/clerk-react";
import {
  faCircle,
  faCopy,
  faShare,
  faShareAlt,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "./menu.css";

export const Menu = () => {
  const [notFree, setnotFree] = useState(false);

  // Reload page
  const reloadPage = () => {
    window.location.reload();
  };

  const premiumFeature = () => {
    setnotFree(true);
  };
  return (
    <div className="menu">
      <button>
        <FontAwesomeIcon icon={faCopy} /> Copy
        {/* <span> Link</span> */}
      </button>
      <button>
        <FontAwesomeIcon icon={faShareAlt} /> Share
        {/* <span> Link</span> */}
        {/* Link */}
      </button>
      <button onClick={() => premiumFeature()}>
        <FontAwesomeIcon icon={faStar} />
        {notFree ? " Premium" : " Starred"}
        {/* <span> Link</span> */}
      </button>
      <button onClick={() => reloadPage()}>
        <FontAwesomeIcon icon={faCircle} /> Reload
        {/* <span> Link</span> */}
      </button>
      <button className="clerk-user-button">
        <UserButton />
      </button>
    </div>
  );
};
