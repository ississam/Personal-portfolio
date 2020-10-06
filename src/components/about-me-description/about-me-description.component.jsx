import React from "react";

import "./about-me-description.styles.scss";

const AboutMeDescription = () => {
  return (
    <>
      <h1 className="about-title">Issam ELYAZRI</h1>
      <h6 className="about-title1">Développeur Web Fullstack (Laravel React-JS)</h6>
      <p className="about-desc">
        Issam ELYAZRI, plus de 15 ans d'experience dans le domaine IT, passioné part tout ce qui est 
       passionné par les nouvelles technologies et surtout le coding, je suis quelqu’un qui s’implique très activement dans son travail, avec le sens de responsabilité et de l’organisation, toujours prêt à relever de nouveaux défis et challenges.

      </p>
   
      {/* <div> */}
 <a href="https://drive.google.com/file/d/1Vhl7P9OplMrz49-7_PwZ01wW27yDEkz-/view?usp=sharing" class="btn btn-fill" >Télécharger mon CV</a>
          {/* </div> */}
    </>
  );
};

export default AboutMeDescription;
