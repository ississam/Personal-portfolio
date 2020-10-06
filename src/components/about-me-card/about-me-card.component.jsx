import React from "react";
import pic from '../../assets/person.png';
import * as SocialLink from "../../components/social-links/social-links.component";
import {
  linkedInURL,
  githubURL,
  // twitterURL,
} from "../../components/social-links/social-link.constants";

import "./about-me-card.styles.scss";

const AboutMeCard = () => {
  return (
    <div className="aboutme">

      <div className="aboutme__image">
        <img
          src={pic}
          alt="Issam ELYAZRI"
        />
      </div>
      <div className="aboutme__details">
        {/* <p className="connect-me"> Let's Connect </p> */}
        <SocialLink.Github />   <SocialLink.LinkedIn />
        <ul className="reach-out">
        <div className="header__social-links">
       
        {/* <SocialLink.Twitter /> */}
      </div>
          
          {/* <li> */}
            {/* <a href={twitterURL} target="_blank" rel="noopener noreferrer"> */}
              {/* Twitter */}
            {/* </a>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default AboutMeCard;
