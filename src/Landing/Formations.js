import React from "react";
import Um from "../Assets/1.png";
import Dois from "../Assets/2.png";
import PUm from "../Assets/p1.png";
import PDois from "../Assets/p2.png";
import Tres from "../Assets/3.png";
import Quatro from "../Assets/4.png";
import Cinco from "../Assets/5.png";
import Seis from "../Assets/6.png";
import Sete from "../Assets/7.png";
import Oito from "../Assets/8.png";
import Nove from "../Assets/9.png";
import Dez from "../Assets/10.png";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";
import { NumbersTwoTone } from "@mui/icons-material";

const Work = () => {
  const workInfoData = [
    {
      title: "Médecine",
      text: "#100 places",
    },
    {
      title: "Médecine Dentaire",
      text: "#243 places",
    },
    {
      title: "Médecine Vétérinaire",
      text: "#79 places",
    },
    {
      title: "Kinésithérapie",
      text: "#450 places",
    },
    {
      title: "Pharmacie",
      text: "#237 places",
    },
    {
      title: "Soins infirmiers",
      text: "#478 places",
    },
    {
      title: "Sciences Biomédicales",
      text: "#278 places",
    },
    {
      title: "Orthophonie",
      text: "#40 places",
    },
    {
      title: "Licence en Psychologie",
      text: "#157 places",
    },
    {
      title: "Et pleins d’autres formations",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Formations</p>
        <h1 className="primary-heading">Voici les Formations !</h1>
        <p className="primary-text">
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
      </div>
    </div>
  );
};

export default Work;