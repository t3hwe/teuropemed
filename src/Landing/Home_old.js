import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import Navbar from "../Components/Navbar";
import About from "./Premierrdv";
import { FiArrowRight } from "react-icons/fi";

import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';

import { BsFillPlayCircleFill } from "react-icons/bs";




const Home = () => {
    const handleButtonClick = () => {
        window.location.href = 'https://calendly.com/teuropamed/30min';
      };
  return (
    <div className="home-container">
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
          Accompagnement d’étudiant Européen ressortissant d’Europe depuis 2013. 
          </h1>
          <p className="primary-text">
          by T3HWE - Health Work and Education
          </p>
          
        <div className="about-buttons-container">
          <button className="secondary-button" onClick={handleButtonClick}>Premier RDV !
          </button>
          <button className="watch-video-button" onClick={handleButtonClick}>
            <BsFillPlayCircleFill /> Watch Video
          </button></div>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;