import React from "react";

import * as SocialLink from "../../components/social-links/social-links.component";

import coolReactGuy from "../../assets/person.png";

import "./header.styles.scss";

const Header = () => {
  return (
    <header className="header u-container">
      <div className="header__content">
        <h1 className="main-heading">

          <span>Issam ELYAZRI</span>
        </h1>
        <p className="tagline">
        Développeur Web Fullstack (Laravel React-JS)
        </p>
      </div>

      <div className="header__image">
        <img src={coolReactGuy} alt="Illustration of guy wearing react swag" />
      </div>

      <div className="header__social-links">
        <SocialLink.Github />
        <SocialLink.LinkedIn />
        {/* <SocialLink.Twitter /> */}
      </div>
    </header>
  );
};

export default Header;
