import React from "react";
import styled from "styled-components";
import Image from "next/image";
import AboutBanner from "../images/about-banner.png";
import AboutCircle from "../images/about-circle-one.png";
import AboutCircleTwo from "../images/about-circle-two.png";
import Fitness from "../images/fitness.png";
import AboutCoach from "../images/about-coach.jpg";
import Link from 'next/link';

function About() {
  return (
    <>
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
            <h2 className="h2 section-title">Welcome To Our Fitness Gym</h2>
            <p className="section-text">
              Nam ut hendrerit leo. Aenean vel ipsum nunc. Curabitur in tellus
              vitae nisi aliquet dapibus non et er. Donec fringilla velit nec
              tellus condimentum, id consectetur nulla mattis. Nullam id ex
              sollicitudin, fringilla purus at, vulputate turpis. Nulla
              facilisi. Suspendisse ac malesuada felis. Proin iaculis, est at
              ultrices consectetur, est ipsum finibus mauris, vitae vulputate
              orci nisi sit amet lectus. Phasellus semper leo justo, sed
              volutpat velit feugiat at. Suspendisse in est non sapien feugiat
              eleifend. Nam sagittis diam at ante eleifend, nec rhoncus odio
              condimentum. Curabitur mattis sagittis dui, ut dapibus ipsum
              ultricies in.
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
      <Link className="btn btn-primary" href="/trainers">
      Explore More
      </Link>
            
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
