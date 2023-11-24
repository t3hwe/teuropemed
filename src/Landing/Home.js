// Home.js
import React from "react";
import Etapes from "./Etapes";
import Work from "./Work";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import { FiArrowRight } from "react-icons/fi";
import { BsFillPlayCircleFill } from "react-icons/bs";
import Um from "../Assets/1.png";
import Dois from "../Assets/2.png";
import Tres from "../Assets/3.png";
import PUm from "../Assets/p1.png";
import PDois from "../Assets/p2.png";

const Home = () => {
  const handleButtonClick = () => {
    window.location.href = 'https://calendly.com/teuropamed/30min';
  };

  const etapesInfoData = [
    {
      image: Um,
      title: "Vous prenez le premier rendez-vous",
      text: "Afin que nous puissions analyser votre dossier et vous envoyer le devis adapté à vos besoins.",
    },
    {
      image: Dois,
      title: "Vous payez le devis",
      text: "Ensuite, vous nous envoyez les documents que nous vous demanderons.",
    },
    {
      image: Tres,
      title: "On traite la suite",
      text: "C'est simple.",
    },
  ];

  const workInfoData = [
    {
      image: PUm,
      title: "PACK NORMAL 474,99€ (au lieu de 499,44€)",
      text: "Ceci englobe les points 1, 2 et 3, constituant ainsi une candidature suite au traitement du dossier.",
    },
    {
      image: PDois,
      title: "PACK NORMAL 347.56€",
      text: "Ceci englobe les points 1 et 2.",
    },
    {
      title: "Et beaucoup plus",
      text: "Prenez un RDV pour en savoir plus.",
    },
  ];

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
            <button className="secondary-button" onClick={handleButtonClick}>
              Premier RDV !
            </button>
            <button className="watch-video-button" onClick={handleButtonClick}>
              <BsFillPlayCircleFill /> Watch Video
            </button>
          </div>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>

      {/* Conteúdo da Página Etapes */}
      <div className="work-section-wrapper">
        <div className="work-section-top">
          <p className="primary-subheading">Les Etapes</p>
          <h1 className="primary-heading">C'es simple !</h1>
          <p className="primary-text"></p>
        </div>
        <div className="work-section-bottom">
          {etapesInfoData.map((data) => (
            <div className="work-section-info" key={data.title}>
              <div className="info-boxes-img-container">
                <img src={data.image} alt="" />
              </div>
              <h2>{data.title}</h2>
              <p>{data.text}</p>
            </div>
          ))}
          <a href="/premierrdv">
            <button className="secondary-button" >
                Premier RDV
            </button>
        </a>
        </div>
      </div>

      {/* Conteúdo da Página Work */}
      <div className="work-section-wrapper">
        <div className="work-section-top">
          <p className="primary-subheading">Packs</p>
          <h1 className="primary-heading">Voici nos Packs !</h1>
          <p className="primary-text">
            Voici les pris pour l'année 2024/25.
          </p>
        </div>
        <div className="work-section-bottom">
          {workInfoData.map((data) => (
            <div className="work-section-info" key={data.title}>
              <div className="info-boxes-img-container">
                <img src={data.image} alt="" />
              </div>
              <h2>{data.title}</h2>
              <p>{data.text}</p>
            </div>
          ))}
          <a href="/lespoints">
          <button className="secondary-button" >
              Voir Les Points
          </button>
      </a>
        </div>
      </div>
    </div>
  );
};

export default Home;