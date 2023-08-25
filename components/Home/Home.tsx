import React from "react";
import styled from "styled-components";
import Hero from "./Hero";
import About from "./About";
import Video from "./Video";
import Class from "./Class";
import Blog from "./Blog";
import Footer from "./Footer";
import Navigation from "../Navigation";

const HomeRoot = styled.div`
  // display: flex;
  // align-items: center;
  // flex-direction: column;
  // // justify-content: center;
  // // height: 100vh;
  // background: #rgb(254, 246, 228);
`;

function HomePage() {
  return (
    <>
      <HomeRoot>
        <main>
          <article>
            <Hero />
            <About />
            <Class />
            <Blog />
            <Footer />
          </article>
        </main>
      </HomeRoot>
    </>
  );
}

export default HomePage;
