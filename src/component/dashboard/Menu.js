import { UserButton } from "@clerk/clerk-react";
import {
  faCopy,
  faShare,
  faShareAlt,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./menu.css";

export const Menu = () => {
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
      <button>
        <FontAwesomeIcon icon={faStar} /> Starred
        {/* <span> Link</span> */}
      </button>
      <button className="clerk-user-button">
        <UserButton />
      </button>
    </div>
  );
};
