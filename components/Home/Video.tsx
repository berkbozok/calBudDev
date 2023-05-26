import React from "react";
import styled from "styled-components";
import VideoBanner from "../images/video-banner.jpg";

import { PlayCircleOutlined } from "@ant-design/icons";

function Video() {
  return (
    <>
      <section className="section video" aria-label="video">
        <div className="container">
          <div
            className="video-card has-before has-bg-image"
            style={{ backgroundImage: `url(${VideoBanner})` }}
          >
            <h2 className="h2 card-title">Explore Fitness Life</h2>

            <button className="play-btn" aria-label="play video">
              <PlayCircleOutlined />
            </button>

            <a href="#" className="btn-link has-before">
              Watch More
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Video;
