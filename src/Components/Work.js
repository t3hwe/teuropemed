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
      image: Um,
      title: "Accompagnement avant le début de l'année. 269€",
      text: "Obtenir de l'aide pour traiter la partie administrative qui est gérée directement avec l'université à distance. Des frais supplémentaires de l'université peuvent être demandés ultérieurement. À régler dès le premier juin de l'année suivante à la première candidature.",
    },
    {
        image: Dois,
      title: "Procuration de l'université principale. 78,56€",
      text: ".1 - Une procuration pour l'université principale (pour eux). 18,25 ; .2 - Une procuration pour l'université principale (pour nous) 18,25 ; .3 - Dépôt de ce document à l'université. 41,76 À régler dès le premier juin de l'année suivante à la première candidature.",
    },
    {
        image: Tres,
      title: "Traitement d'éligibilité de vos documents. 151,88€",
      text: ".1 - La réalisation du processus. 36,80 ; .2 - Une procuration pour le Ministere de l'Education 18,25 ; .3 - Préparation des papiers supplémentaires à la procuration de la part de l'avocat. 18,25 ; .4 - Déplacement pour récupérer les documents. 41,76; .5 - Frais 36,80 ; Des frais supplémentaires du ministère peuvent être demandés ultérieurement, ce montant pouvant varier entre 15 et 30 euros.",
    },
    {
        image: Quatro,
      title: "Inscription supplémentaire. 69,95€",
      text: ".1 - La réalisation du processus 18,54 ; .2 - L'envoi de courrier peut varier en fonction du poids du dossier après le traitement des équivalences. 14,89 ; .3 - Une procuration pour l'université. 18,25 ; .4 - Préparation des papiers supplémentaires à la procuration de la part de l'avocat. 18,25 ; .5 - Des frais supplémentaires de l'université peuvent être demandés ultérieurement.",
    },
    {
      image: Cinco,
      title: "Inscription aux examens de France. 55,34€",
      text: ".1 - La réalisation du processus 36,80 ; .2 - Une procuration pour le Ministere de l'Education 18,25 ; Frais à régler au ministère après acceptation varient en fonction de la localisation géographique où vous souhaitez passer les épreuves. Ces frais sont demandés après confirmation du paiement. Envoi de documents officiels par courrier (demandé après confirmation du paiement si nous venons à recevoir le document officiel).",
    },
    {
      image: Seis,
      title: "Inscription aux examens du Portugal. 265,03€",
      text: ".1 - La réalisation du processus 36,80 ; .2 - Une procuration pour le Ministere de l'Education 18,25 ; .3 - Déplacement pour récupérer l'identifiant. 41,76 ; .4 - Déplacement pour effectuer un paiement. 41,76 ; .5 - Déplacement pour remettre l'identifiant. 41,76 ; .6 - Déplacement pour demander document officielle 41,76 ; .7 - Déplacement pour recuperer document officielle 41,76",
    },
    {
      image: Sete,
      title: "Inscription à la deuxième phase des examens du Portugal. 60,32€",
      text: ".1 - La réalisation du processus 18,54 ; .2 - Déplacement pour effectuer un paiement. 41,76 ; Frais à régler au ministère après acceptation (demandés après confirmation du paiement)",
    },
    {
      image: Oito,
      title: "NIF 🚀 Urgent 🚀 - 299€",
      text: "Prévision jusqu'à 5 jours",
    },
    {
      image: Nove,
      title: "Priorité NIF — 🔥 Le plus vendu 🔥 - 149€",
      text: "Prévision 7 jours",
    },
    {
      image: Dez,
      title: "NIF Essentiel - 89€ (au lieu de 99€)",
      text: "Prévision 15 jours",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Les Points</p>
        <h1 className="primary-heading">Voici les Points !</h1>
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