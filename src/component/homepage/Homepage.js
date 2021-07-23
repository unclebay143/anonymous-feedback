import React from "react";
import { Bubble } from "../../layouts/animation/Bubble";
import { Navbar } from "../../layouts/navbars/Navbar";
import { Hero } from "./Hero";
import { HowAnonymousFeedbackWorks } from "./how-it-works/HowAnonymousFeedbackWorks";
import "./homepage.css";
import { Footer } from "../../layouts/footer/Footer";

export const Homepage = () => {
  return (
    <React.Fragment>
      <div className="landing-page">
        <Navbar />
        <Hero />
        <Bubble />
        <HowAnonymousFeedbackWorks />
        <Footer />
        <Bubble two={"two"} />
      </div>
    </React.Fragment>
  );
};
