import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  const handleButtonClick = () => {
    window.location.href = 'https://calendly.com/teuropamed/30min';
  };
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">Mentions légales</p>
        <h1 className="primary-heading">
        Mentions légales
        </h1>
        <p className="primary-text">
        </p>
        <p className="primary-text">
        </p>
      </div>
    </div>
  );
};

export default About;
