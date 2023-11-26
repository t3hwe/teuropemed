import React from 'react';
// Import your images here
import Image1 from '../Assets/image1.png';
// ... import other images

import { FiArrowRight } from "react-icons/fi";
import { BsFillPlayCircleFill } from "react-icons/bs";

const Home = () => {
  const etapesInfoData = [
    {
      image: Image1,
      title: "Step 1",
      text: "Description of step 1.",
    },
    {
      image: Image1,
      title: "Step 1",
      text: "Description of step 1.",
    },
    {
      image: Image1,
      title: "Step 1",
      text: "Description of step 1.",
    },
    {
      image: Image1,
      title: "Step 1",
      text: "Description of step 1.",
    },
    {
      image: Image1,
      title: "Step 1",
      text: "Description of step 1.",
    },
    // ... add other steps here
  ];

  return (
    <div>
      <h1>Welcome to Our Service</h1>
      <div>
        {etapesInfoData.map((step, index) => (
          <div key={index}>
            <img src={step.image} alt={`Step ${index + 1}`} />
            <h2>{step.title}</h2>
            <p>{step.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;