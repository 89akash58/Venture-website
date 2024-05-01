import React from "react";
import { Button } from "./Button";
import "./HeroSection.css";
import video from "../assets/videos/video-1.mp4";
function HeroSection() {
  return (
    <div className="hero-container">
      <video src={video} autoPlay loop muted></video>
      <h1>VENTURE AWAITS</h1>
      <p>Experience the future of travel.</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonSize="btn--large"
          buttonStyle="btn--outline"
        >
          GET Started
        </Button>
        <Button
          className="btns"
          buttonSize="btn--large"
          buttonStyle="btn--primary"
        >
          Watch Trailer
          <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
