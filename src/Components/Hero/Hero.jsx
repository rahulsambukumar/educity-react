import React from "react";
import "./Hero.css";
import dark_arrows from "../../assets/arrow-right.png";
function Hero() {
  return (
    <div className="hero container" id="hero">
      <div className="hero-text">
        <h1>We ensure better education for the better future</h1>
        <p>
          Our cutting edge curriculum is designed to empower students with the
          knowldge,skills,and experience needed to excel in the dynamic field of
          education
        </p>
        <button className="explore-more">
          Explore More <img className="arrow" src={dark_arrows} alt="arrow" />
        </button>
      </div>
    </div>
  );
}

export default Hero;
