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
      {/* <section
        className="section hero bg-dark has-after has-bg-image"
        id="home"
        aria-label="hero"
        data-section
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="container">
          <div className="hero-banner">
            <Image src={heroBanner} alt="hero banner" className="w-100" />
            <Image
              src={heroCircle}
              aria-hidden="true"
              alt=""
              className="circle circle-1"
            />
            <Image
              src={heroCircleTwo}
              aria-hidden="true"
              alt=""
              className="circle circle-2"
            />
          </div>
        </div>
      </section> */}

      {/* TEST */}
      <div
        //  className="section hero bg-dark has-after has-bg-image"
        className="bg-dark has-after has-bg-image"
        id="home"
        aria-label="hero"
        data-section
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <main>
          <div className="relative isolate">
            <div className="overflow-hidden">
              <div className="mx-auto  px-10  pt-10 sm:pt-10 lg:px-20 lg:pt-10">
                <div className="mx-auto max-w-4xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                  <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                    <p className="hero-subtitle">
                      <strong className="strong">The Best</strong>Fitness Club
                    </p>
                    <h1 className="text-6xl w-fit mt-10 font-bold tracking-tight text-white sm:text-8xl mb-14">
                      Work Hard To Get Better Life
                    </h1>
                    <p className="relative mt-6 text-2xl leading-8 text-white sm:max-w-md  lg:max-w-none pb-10">
                      Together we can achieve the dream <br /> physique that you
                      always dreamed of.
                    </p>
                    <a href="#" className="btn btn-primary">
                      Get Started
                    </a>
                  </div>
                  <div className="mt-14 flex justify-end gap-8  sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                    <div className="hero-banner">
                      <Image
                        src={heroBanner}
                        alt="hero banner"
                        className="w-100"
                      />
                      <Image
                        src={heroCircle}
                        aria-hidden="true"
                        alt=""
                        className="circle circle-1"
                      />
                      <Image
                        src={heroCircleTwo}
                        aria-hidden="true"
                        alt=""
                        className="circle circle-2"
                      />
                      <Image
                        src={heroCircleTwo}
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
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default Hero;
