import React from "react";
import "./footer.css";

export const Footer = () => {
  return (
    <React.Fragment>
      <footer>
        <a href="#" className="article-link">
          Read article
        </a>
        <div className="buttons">
          <a href="https://www.buymeacoffee.com/unclebigbay">
            <img
              className="coffee-btn"
              src="https://img.buymeacoffee.com/button-api/?text=Buy me a Coffee&emoji=&slug=unclebigbay&button_colour=5F7FFF&font_colour=ffffff&font_family=Lato&outline_colour=000000&coffee_colour=FFDD00"
            />
          </a>
        </div>
        <span className="author">
          Designed with 💝 by{" "}
          <a
            href="https://twitter.com/intent/follow?screen_name=unclebigbay143"
            target="_blank"
            rel="noopener noreferrer"
          >
            unclebigbay
          </a>{" "}
          and friends
        </span>
      </footer>
    </React.Fragment>
  );
};
