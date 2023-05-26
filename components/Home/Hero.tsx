import React from "react";

import Image from "next/image";
import heroBg from "../images/hero-bg.png";
import heroBanner from "../images/hero-banner.png";
import heroCircle from "../images/hero-circle-one.png";
import heroCircleTwo from "../images/hero-circle-two.png";
import HeartRate from "../images/heart-rate.svg";
import Calories from "../images/calories.svg";

function Hero() {
  return (
    <>
      <section
        className="section hero bg-dark has-after has-bg-image"
        id="home"
        aria-label="hero"
        data-section
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="container">
          <div className="hero-content">
            <p className="hero-subtitle">
              <strong className="strong">The Best</strong>Fitness Club
            </p>
            <h1 className="h1 hero-title">Work Hard To Get Better Life</h1>
            <p className="section-text">
              Duis mollis felis quis libero dictum vehicula. Duis dictum lorem
              mi, a faucibus nisi eleifend eu.
            </p>
            <a href="#" className="btn btn-primary">
              Get Started
            </a>
          </div>
          <div className="hero-banner">
            <Image
              src={heroBanner}
              width="660"
              height="753"
              alt="hero banner"
              className="w-100"
            />
            <Image
              src={heroCircle}
              width="666"
              height="666"
              aria-hidden="true"
              alt=""
              className="circle circle-1"
            />
            <Image
              src={heroCircleTwo}
              width="666"
              height="666"
              aria-hidden="true"
              alt=""
              className="circle circle-2"
            />
            <Image
              src={HeartRate}
              width="255"
              height="270"
              alt="heart rate"
              className="abs-img abs-img-1"
            />
            <Image
              src={Calories}
              width="348"
              height="224"
              alt="calories"
              className="abs-img abs-img-2"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
