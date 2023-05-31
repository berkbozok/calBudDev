import React, {useState} from "react";
import styled from "styled-components";
import Image from "next/image";
import Blog_1 from "../images/blog-1.jpg";
import Blog_2 from "../images/blog-2.jpg";
import Blog_3 from "../images/blog-3.jpg";
import { Modal } from 'antd';

function Blog() {
  const [modal2Open, setModal2Open] = useState(false);
  return (
    <>
      <section className="section blog" id="blog" aria-label="blog">
        <div className="container">
          <p className="section-subtitle">Our News</p>
          <h2 className="h2 section-title text-center">Latest Blog Feed</h2>

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
                    <a href="#" className="card-title"  onClick={() => setModal2Open(true)}>
                      Going to the gym for the first time
                    </a>
                  </h3>
                  <p className="card-text">
                    Praesent id ipsum pellentesque lectus dapibus condimentum
                    curabitur eget risus quam. In hac habitasse platea dictumst.
                  </p>
                  <a href="#" className="btn-link has-before">
                    Read More
                  </a>
                  <Modal
        title="Going to the gym for the first time"
        centered
        open={modal2Open}
        onOk={() => setModal2Open(false)}
        onCancel={() => setModal2Open(false)}
      >
        <p>some contents...</p>

      </Modal>
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
                    Praesent id ipsum pellentesque lectus dapibus condimentum
                    curabitur eget risus quam. In hac habitasse platea dictumst.
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
                    Praesent id ipsum pellentesque lectus dapibus condimentum
                    curabitur eget risus quam. In hac habitasse platea dictumst.
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
    </>
  );
}

export default Blog;
