import React from "react";
import "./styles/homePage.css";
import NavBar from "../components/NavBar";

import HomeHeaderBackground from "../components/HomeHeaderBackground";

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="homepage__header">
        <NavBar />

        <div className="homepage__title">
          <h1>
            New Sports World in <span>Vientiane</span>
          </h1>
          <button className="homepage__btn">Book Now {">>"}</button>
        </div>

        <HomeHeaderBackground />
      </div>
      <div className="homepage__mid">who we are</div>
      <div className="home__page-footer">
        <div className="footer__content">
          <p>
            New Arena was established in 2014 with only 2 artificial soccer
            field and a swimming pool to serve our customers, but now we would
            like to introduce ourself as a New Arena Sports and fitness center.
          </p>

          <p>
            New Arena is not just a sports and fitness club, it's a perfect
            place to start your healthy life, get fit, and become stronger in a
            friendly and fun atmosphere. Our center is designed to meet all
            kinds of client needs.
          </p>

          <button className="footer-btn">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
