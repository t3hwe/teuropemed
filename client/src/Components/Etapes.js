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

const Etapes = () => {
  const workInfoData = [
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
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Les Etapes</p>
        <h1 className="primary-heading">C'es simple !</h1>
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

export default Etapes;