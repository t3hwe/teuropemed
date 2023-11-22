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
      text: "Prenez votre premier RDV pour en savoir plus.",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Pack</p>
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
      </div>
    </div>
  );
};

export default Work;