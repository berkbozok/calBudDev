import React from "react";
import styled from "styled-components";
import Image from "next/image";
import AboutBanner from "../images/about-banner.png";
import AboutCircle from "../images/about-circle-one.png";
import AboutCircleTwo from "../images/about-circle-two.png";
import Fitness from "../images/fitness.png";
import AboutCoach from "../images/about-coach.jpg";

function About() {
  return (
    <>
      {/* <section className="section about" id="about" aria-label="about">
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

              <a href="#" className="btn btn-primary">
                Explore More
              </a>
            </div>
          </div>
        </div>
      </section> */}

      <div className="bg-violet-50 ">
        <div>
          <div className="relative isolate ">
            <div className="overflow-hidden">
              <div className="mx-auto  px-10 pb-20 pt-20 sm:pt-16 lg:px-10 lg:pt-16  ">
                <div className="mx-auto max-w-4xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                  <div className="mt-14 flex justify-end gap-8  sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0 ">
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
                  </div>
                  <div className="w-full max-w-3xl lg:shrink-0 xl:max-w-3xl">
                    <p className="section-subtitle">About Us</p>
                    <h1 className="text-6xl w-fit mt-10 font-bold tracking-tight text-black sm:text-8xl mb-14">
                      Welcome To Our Fitness Gym
                    </h1>
                    <p className="relative mt-6 text-2xl leading-8 text-gray-400 sm:max-w-md  lg:max-w-none pb-10">
                      Nam ut hendrerit leo. Aenean vel ipsum nunc. Curabitur in
                      tellus vitae nisi aliquet dapibus non et er. Donec
                      fringilla velit nec tellus condimentum, id consectetur
                      nulla mattis. Nullam id ex sollicitudin, fringilla purus
                      at, vulputate turpis. Nulla facilisi. Suspendisse ac
                      malesuada felis. Proin iaculis, est at ultrices
                      consectetur, est ipsum finibus mauris, vitae vulputate
                      orci nisi sit amet lectus.
                    </p>
                    <ul
                      role="list"
                      className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
                    >
                      <li>
                        <div className="flex items-center gap-x-6">
                          <img
                            className="h-30 w-30 rounded-full"
                            src={AboutCoach.src}
                            alt=""
                          />
                          <div>
                            <h3 className="text-3xl font-semibold leading-7 tracking-tight text-gray-900">
                              Batu Benzer
                            </h3>
                            <p className="text-xl font-semibold leading-6 text-indigo-600">
                              Our Coach
                            </p>
                          </div>
                        </div>
                      </li>
                      <div>
                        <a href="#" className="btn btn-primary">
                          <div className="">Get Started</div>
                        </a>
                      </div>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
