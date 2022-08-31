import React from "react";
import "./homeHeaderBackground.css";
import FootballPlayer from "../assests/football-player.png";
import BackVector1 from "../assests/vectors/BackVector1";
import BackVector2 from "../assests/vectors/BackVector2";

const HomeHeaderBackground = () => {
  return (
    <div className="header__background">
      <img src={FootballPlayer} className="header__back-1" alt="BACK 1" />
      <BackVector1 className="header__back-2" />
      <BackVector2 className="header__back-3" />
    </div>
  );
};

export default HomeHeaderBackground;
