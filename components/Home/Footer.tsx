import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Clock from "../images/footer-clock.png";

import {
  PhoneOutlined,
  MailOutlined,
  PushpinOutlined,
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div
          className="section footer-top bg-dark has-bg-image"
          style={{
            backgroundImage: "url('./assets/images/footer-bg.png')",
          }}
        >
          <div className="container">
            <div className="footer-brand">
              <a href="#" className="logo">
                {/* <ion-icon name="barbell-sharp" aria-hidden="true"></ion-icon> */}
                <span className="span">FITracker</span>
              </a>
              <p className="footer-brand-text">
                Etiam suscipit fringilla ullamcorper sed malesuada urna nec
                odio.
              </p>
              <div className="wrapper">
                <Image
                  src={Clock}
                  width="34"
                  height="34"
                  loading="lazy"
                  alt="Clock"
                />
                <ul className="footer-brand-list">
                  <li>
                    <p className="footer-brand-title">Monday - Friday</p>
                    <p>7:00Am - 10:00Pm</p>
                  </li>
                  <li>
                    <p className="footer-brand-title">Saturday - Sunday</p>
                    <p>7:00Am - 2:00Pm</p>
                  </li>
                </ul>
              </div>
            </div>
            <ul className="footer-list">
              <li>
                <p className="footer-list-title has-before">Our Links</p>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Classes
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Contact Us
                </a>
              </li>
            </ul>
            <ul className="footer-list">
              <li>
                <p className="footer-list-title has-before">Contact Us</p>
              </li>
              <li className="footer-list-item">
                <div className="icon">
                  <PushpinOutlined />
                </div>
                <address className="address footer-link">
                  1247/Plot No. 39, 15th Phase, Colony, Kukatpally, Hyderabad
                </address>
              </li>
              <li className="footer-list-item">
                <div className="icon">
                  <PhoneOutlined />
                </div>
                <div>
                  <a href="tel:18001213637" className="footer-link">
                    1800-121-3637
                  </a>
                  <a href="tel:+915552348765" className="footer-link">
                    +91 555 234-8765
                  </a>
                </div>
              </li>
              <li className="footer-list-item">
                <div className="icon">
                  <MailOutlined />
                </div>
                <div>
                  <a href="mailto:info@fitlife.com" className="footer-link">
                    info@fitlife.com
                  </a>
                  <a href="mailto:services@fitlife.com" className="footer-link">
                    services@fitlife.com
                  </a>
                </div>
              </li>
            </ul>
            <ul className="footer-list">
              <li>
                <p className="footer-list-title has-before">
                  Our Newsletter (Coming Soon)
                </p>
              </li>
              <li>
                <form action="" className="footer-form">
                  <input
                    type="email"
                    name="email_address"
                    aria-label="email"
                    placeholder="Email Address"
                    required
                    className="input-field"
                  />
                  <button
                    type="submit"
                    className="btn btn-primary"
                    aria-label="Submit"
                  >
                    <ArrowRightOutlined />
                  </button>
                </form>
              </li>
              <li>
                <ul className="social-list">
                  <li>
                    <a href="#" className="social-link">
                      <FacebookOutlined />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="social-link">
                      <InstagramOutlined />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="social-link">
                      <TwitterOutlined />
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <p className="copyright">
              &copy; 2022 Fitlife. All Rights Reserved By &nbsp;
              <a href="#" className="copyright-link">
                FITracker
              </a>
            </p>
            <ul className="footer-bottom-list">
              <li>
                <a href="#" className="footer-bottom-link has-before">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="footer-bottom-link has-before">
                  Terms & Condition
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
