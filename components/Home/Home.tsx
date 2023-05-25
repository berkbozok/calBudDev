import React from "react";
import styled from "styled-components";
import { Button } from "antd";
import Link from "next/link";
import Logo from "../../shared/logo";
import { FaPlay } from "react-icons/fa";
import { MdFacebook } from "react-icons/md";
import Image from "next/image";
import heroBg from "../images/hero-bg.png";
import heroBanner from "../images/hero-banner.png";
import heroCircle from "../images/hero-circle-one.png";
import heroCircleTwo from "../images/hero-circle-two.png";
import HeartRate from "../images/heart-rate.svg";
import Calories from "../images/calories.svg";
import AboutBanner from "../images/about-banner.png";
import AboutCircle from "../images/about-circle-one.png";
import AboutCircleTwo from "../images/about-circle-two.png";
import Fitness from "../images/fitness.png";
import AboutCoach from "../images/about-coach.jpg";
import VideoBanner from "../images/video-banner.jpg";
import Icon1 from "../images/icon-1.svg";
import Classes from "../images/classes-bg.png";
import Class_1 from "../images/class-1.jpg";
import ClassIcon_1 from "../images/class-icon-1.png";
import Class_2 from "../images/class-2.jpg";
import ClassIcon_2 from "../images/class-icon-2.png";
import Class_3 from "../images/class-3.jpg";
import ClassIcon_3 from "../images/class-icon-3.png";
import Class_4 from "../images/class-4.jpg";
import ClassIcon_4 from "../images/class-icon-4.png";
import Blog_1 from "../images/blog-1.jpg";
import Blog_2 from "../images/blog-2.jpg";
import Blog_3 from "../images/blog-3.jpg";

const HomeRoot = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  // height: 100vh;
  background: #rgb(254, 246, 228);
`;

function HomePage() {
  return (
    <>
      <HomeRoot>
        <main>
          <article>
            {/* #HERO */}
            <section
              className="section hero bg-dark has-after has-bg-image"
              id="home"
              aria-label="hero"
              data-section
              style={{ backgroundImage: `url(${heroBg})` }}
            >
              {/* <Image src={heroBg} alt="Hero Background" /> */}
              {/* <Image src={heroBanner} alt="Hero Background" /> */}

              <div className="container">
                <div className="hero-content">
                  <p className="hero-subtitle">
                    <strong className="strong">The Best</strong>Fitness Club
                  </p>
                  <h1 className="h1 hero-title">
                    Work Hard To Get Better Life
                  </h1>
                  <p className="section-text">
                    Duis mollis felis quis libero dictum vehicula. Duis dictum
                    lorem mi, a faucibus nisi eleifend eu.
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
            {/* ABOUT */}
            <section className="section about" id="about" aria-label="about">
              <div className="container">
                <div className="about-banner has-after">
                  <Image
                    src={AboutBanner}
                    width="660"
                    height="648"
                    loading="lazy"
                    alt="about banner"
                    className="w-100"
                  />
                  <Image
                    src={AboutCircle}
                    width="660"
                    height="534"
                    loading="lazy"
                    aria-hidden="true"
                    alt=""
                    className="circle circle-1"
                  />
                  <Image
                    src={AboutCircleTwo}
                    width="660"
                    height="534"
                    loading="lazy"
                    aria-hidden="true"
                    alt=""
                    className="circle circle-2"
                  />
                  <Image
                    src={Fitness}
                    width="650"
                    height="154"
                    loading="lazy"
                    alt="fitness"
                    className="abs-img w-100"
                  />
                </div>
                <div className="about-content">
                  <p className="section-subtitle">About Us</p>
                  <h2 className="h2 section-title">
                    Welcome To Our Fitness Gym
                  </h2>
                  <p className="section-text">
                    Nam ut hendrerit leo. Aenean vel ipsum nunc. Curabitur in
                    tellus vitae nisi aliquet dapibus non et er. Donec fringilla
                    velit nec tellus condimentum, id consectetur nulla mattis.
                    Nullam id ex sollicitudin, fringilla purus at, vulputate
                    turpis. Nulla facilisi. Suspendisse ac malesuada felis.
                    Proin iaculis, est at ultrices consectetur, est ipsum
                    finibus mauris, vitae vulputate orci nisi sit amet lectus.
                    Phasellus semper leo justo, sed volutpat velit feugiat at.
                    Suspendisse in est non sapien feugiat eleifend. Nam sagittis
                    diam at ante eleifend, nec rhoncus odio condimentum.
                    Curabitur mattis sagittis dui, ut dapibus ipsum ultricies
                    in.
                  </p>
                  <div className="wrapper">
                    <div className="about-coach">
                      <figure className="coach-avatar">
                        <Image
                          src={AboutCoach}
                          width="65"
                          height="65"
                          loading="lazy"
                          alt="Trainer"
                        />
                      </figure>

                      <div>
                        <h3 className="h3 coach-name">Batu Benzer</h3>

                        <p className="coach-title">Our Coach</p>
                      </div>
                    </div>

                    <a href="#" className="btn btn-primary">
                      Explore More
                    </a>
                  </div>
                </div>
              </div>
            </section>
            {/* VIDEO */}
            <section className="section video" aria-label="video">
              <div className="container">
                <div
                  className="video-card has-before has-bg-image"
                  style={{ backgroundImage: `url(${VideoBanner})` }}
                >
                  <h2 className="h2 card-title">Explore Fitness Life</h2>

                  <button className="play-btn" aria-label="play video">
                    <FaPlay name="play-sharp" aria-hidden="true"></FaPlay>
                  </button>

                  <a href="#" className="btn-link has-before">
                    Watch More
                  </a>
                </div>
              </div>
            </section>

            {/* CLASS */}
            <section
              className="section class bg-dark has-bg-image"
              id="class"
              aria-label="class"
              style={{ backgroundImage: `url(${Classes})` }}
            >
              <div className="container">
                <p className="section-subtitle">Our Classes</p>

                <h2 className="h2 section-title text-center">
                  Fitness Classes For Every Goal
                </h2>

                <ul className="class-list has-scrollbar">
                  <li className="scrollbar-item">
                    <div className="class-card">
                      <figure
                        className="card-banner img-holder"
                        style={{ width: "416px", height: "240px" }}
                      >
                        <Image
                          src={Class_1}
                          width="416"
                          height="240"
                          loading="lazy"
                          alt="Weight Lifting"
                          className="img-cover"
                        />
                      </figure>

                      <div className="card-content">
                        <div className="title-wrapper">
                          <Image
                            src={ClassIcon_1}
                            width="52"
                            height="52"
                            aria-hidden="true"
                            alt=""
                            className="title-icon"
                          />

                          <h3 className="h3">
                            <a href="#" className="card-title">
                              Weight Lifting
                            </a>
                          </h3>
                        </div>

                        <p className="card-text">
                          Suspendisse nisi libero, cursus ac magna sit amet,
                          fermentum imperdiet nisi.
                        </p>

                        <div className="card-progress">
                          <div className="progress-wrapper">
                            <p className="progress-label">Class Full</p>

                            <span className="progress-value">85%</span>
                          </div>

                          <div className="progress-bg">
                            <div
                              className="progress-bar"
                              style={{ width: "85%" }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li className="scrollbar-item">
                    <div className="class-card">
                      <figure
                        className="card-banner img-holder"
                        style={{ width: "416px", height: "240px" }}
                      >
                        <Image
                          src={Class_2}
                          width="416"
                          height="240"
                          loading="lazy"
                          alt="Cardio & Strenght"
                          className="img-cover"
                        />
                      </figure>

                      <div className="card-content">
                        <div className="title-wrapper">
                          <Image
                            src={ClassIcon_2}
                            width="52"
                            height="52"
                            aria-hidden="true"
                            alt=""
                            className="title-icon"
                          />

                          <h3 className="h3">
                            <a href="#" className="card-title">
                              Cardio & Strenght
                            </a>
                          </h3>
                        </div>

                        <p className="card-text">
                          Suspendisse nisi libero, cursus ac magna sit amet,
                          fermentum imperdiet nisi.
                        </p>

                        <div className="card-progress">
                          <div className="progress-wrapper">
                            <p className="progress-label">Class Full</p>

                            <span className="progress-value">70%</span>
                          </div>

                          <div className="progress-bg">
                            <div
                              className="progress-bar"
                              style={{ width: "70%" }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li className="scrollbar-item">
                    <div className="class-card">
                      <figure
                        className="card-banner img-holder"
                        style={{ width: "416px", height: "240px" }}
                      >
                        <Image
                          src={Class_3}
                          width="416"
                          height="240"
                          loading="lazy"
                          alt="Power Yoga"
                          className="img-cover"
                        />
                      </figure>

                      <div className="card-content">
                        <div className="title-wrapper">
                          <Image
                            src={ClassIcon_3}
                            width="52"
                            height="52"
                            aria-hidden="true"
                            alt=""
                            className="title-icon"
                          />

                          <h3 className="h3">
                            <a href="#" className="card-title">
                              Power Yoga
                            </a>
                          </h3>
                        </div>

                        <p className="card-text">
                          Suspendisse nisi libero, cursus ac magna sit amet,
                          fermentum imperdiet nisi.
                        </p>

                        <div className="card-progress">
                          <div className="progress-wrapper">
                            <p className="progress-label">Class Full</p>

                            <span className="progress-value">90%</span>
                          </div>

                          <div className="progress-bg">
                            <div
                              className="progress-bar"
                              style={{ width: "90%" }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li className="scrollbar-item">
                    <div className="class-card">
                      <figure
                        className="card-banner img-holder"
                        style={{ width: "416px", height: "240px" }}
                      >
                        <Image
                          src={Class_4}
                          width="416"
                          height="240"
                          loading="lazy"
                          alt="The Fitness Pack"
                          className="img-cover"
                        />
                      </figure>

                      <div className="card-content">
                        <div className="title-wrapper">
                          <Image
                            src={ClassIcon_4}
                            width="52"
                            height="52"
                            aria-hidden="true"
                            alt=""
                            className="title-icon"
                          />

                          <h3 className="h3">
                            <a href="#" className="card-title">
                              The Fitness Pack
                            </a>
                          </h3>
                        </div>

                        <p className="card-text">
                          Suspendisse nisi libero, cursus ac magna sit amet,
                          fermentum imperdiet nisi.
                        </p>

                        <div className="card-progress">
                          <div className="progress-wrapper">
                            <p className="progress-label">Class Full</p>

                            <span className="progress-value">60%</span>
                          </div>

                          <div className="progress-bg">
                            <div
                              className="progress-bar"
                              style={{ width: "60%" }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </section>

            {/* BLOG */}

            <section className="section blog" id="blog" aria-label="blog">
              <div className="container">
                <p className="section-subtitle">Our News</p>
                <h2 className="h2 section-title text-center">
                  Latest Blog Feed
                </h2>

                <ul className="blog-list has-scrollbar">
                  <li className="scrollbar-item">
                    <div className="blog-card">
                      <div
                        className="card-banner img-holder"
                        style={{ width: "440px", height: "270px" }}
                      >
                        <Image
                          src={Blog_1}
                          width="440"
                          height="270"
                          loading="lazy"
                          alt="Going to the gym for the first time"
                          className="img-cover"
                        />
                        <time className="card-meta" dateTime="2022-07-07">
                          7 July 2022
                        </time>
                      </div>

                      <div className="card-content">
                        <h3 className="h3">
                          <a href="#" className="card-title">
                            Going to the gym for the first time
                          </a>
                        </h3>
                        <p className="card-text">
                          Praesent id ipsum pellentesque lectus dapibus
                          condimentum curabitur eget risus quam. In hac
                          habitasse platea dictumst.
                        </p>
                        <a href="#" className="btn-link has-before">
                          Read More
                        </a>
                      </div>
                    </div>
                  </li>

                  <li className="scrollbar-item">
                    <div className="blog-card">
                      <div
                        className="card-banner img-holder"
                        style={{ width: "440px", height: "270px" }}
                      >
                        <Image
                          src={Blog_2}
                          width="440"
                          height="270"
                          loading="lazy"
                          alt="Parturient accumsan cacus pulvinar magna"
                          className="img-cover"
                        />
                        <time className="card-meta" dateTime="2022-07-07">
                          7 July 2022
                        </time>
                      </div>

                      <div className="card-content">
                        <h3 className="h3">
                          <a href="#" className="card-title">
                            Parturient accumsan cacus pulvinar magna
                          </a>
                        </h3>
                        <p className="card-text">
                          Praesent id ipsum pellentesque lectus dapibus
                          condimentum curabitur eget risus quam. In hac
                          habitasse platea dictumst.
                        </p>
                        <a href="#" className="btn-link has-before">
                          Read More
                        </a>
                      </div>
                    </div>
                  </li>

                  <li className="scrollbar-item">
                    <div className="blog-card">
                      <div
                        className="card-banner img-holder"
                        style={{ width: "440px", height: "270px" }}
                      >
                        <Image
                          src={Blog_3}
                          width="440"
                          height="270"
                          loading="lazy"
                          alt="Risus purus namien parturient accumsan cacus"
                          className="img-cover"
                        />
                        <time className="card-meta" dateTime="2022-07-07">
                          7 July 2022
                        </time>
                      </div>

                      <div className="card-content">
                        <h3 className="h3">
                          <a href="#" className="card-title">
                            Risus purus namien parturient accumsan cacus
                          </a>
                        </h3>
                        <p className="card-text">
                          Praesent id ipsum pellentesque lectus dapibus
                          condimentum curabitur eget risus quam. In hac
                          habitasse platea dictumst.
                        </p>
                        <a href="#" className="btn-link has-before">
                          Read More
                        </a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </section>
          </article>
        </main>
      </HomeRoot>
    </>
  );
}

export default HomePage;
