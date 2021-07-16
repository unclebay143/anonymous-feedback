import { useUser } from "@clerk/clerk-react";
import React from "react";
import { Bubble } from "../../layouts/animation/Bubble";
import { Navbar } from "../../layouts/navbars/Navbar";
import { Hero } from "./Hero";

export const Homepage = () => {
  return (
    <React.Fragment>
      <div className="landing-page">
        <Navbar />
        <Hero />
        <Bubble />
      </div>
    </React.Fragment>
  );
};
