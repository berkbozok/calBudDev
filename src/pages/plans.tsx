import React from "react";
import styled from "styled-components";

const Body = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Roboto:300");
  margin: 0;
  padding: 0;
  font-family: "Roboto", sans-serif !important;
`;

const Section = styled.section`
  width: 100%;
  height: 100vh;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 140px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  .fa {
    color: #fff;
    font-size: 60px;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    text-align: center;
    line-height: 100px;
    -webkit-box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
  }
  h2 {
    position: relative;
    margin: 20px 0 0;
    padding: 0;
    color: #fff;
    font-size: 28px;
    z-index: 2;
  }
`;

const Price = styled.div`
  position: relative;
  z-index: 2;

  h4 {
    margin: 0;
    padding: 20px 0;
    color: #fff;
    font-size: 60px;
  }
`;

const Option = styled.div`
  position: relative;
  z-index: 2;

  ul {
    margin: 0;
    padding: 0;
  }

  ul li {
    margin: 0 0 10px;
    padding: 0;
    list-style: none;
    color: #fff;
    font-size: 16px;
  }
`;

const Card = styled.div`
  text-align: center;
  position: relative;
  max-width: 300px;
  height: auto;
  background: linear-gradient(-45deg, #fe0847, #feae3f);
  border-radius: 15px;
  padding: 60px 20px;
  -webkit-box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  -webkit-transition: 0.5s;
  transition: 0.5s;

  :hover {
    -webkit-transform: scale(1.07);
    transform: scale(1.07);
  }

  ::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 40%;
    background: rgba(255, 255, 255, 0.1);
    z-index: 1;
    -webkit-transform: skewY(-5deg) scale(1.5);
    transform: skewY(-5deg) scale(1.5);
  }

  a {
    position: relative;
    z-index: 2;
    background: #fff;
    color: black;
    width: 150px;
    height: 40px;
    line-height: 40px;
    border-radius: 40px;
    display: block;
    text-align: center;
    margin: 20px auto 0;
    font-size: 16px;
    cursor: pointer;
    -webkit-box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  }
  a:hover {
    text-decoration: none;
  }
`;

export default function Plans() {
  return (
    <>
      <Body>
        <Section>
          <link
            href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
            rel="stylesheet"
          />
          <link
            href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
            rel="stylesheet"
          />
          <link rel="stylesheet" href="style.css"></link>
          <div className="container-fluid">
            <div className="container">
              <div className="row">
                <div className="col-sm-4">
                  <Card className="basic-card">
                    <Title>
                      <i className="fa fa-paper-plane" aria-hidden="true"></i>
                      <h2>Basic</h2>
                    </Title>
                    <Price>
                      <h4>
                        <sup>$</sup>25
                      </h4>
                    </Price>
                    <Option>
                      <ul>
                        <li>
                          <i className="fa fa-check" aria-hidden="true"></i> 10
                          GB Space
                        </li>
                        <li>
                          <i className="fa fa-check" aria-hidden="true"></i> 3
                          Domain Names
                        </li>
                        <li>
                          <i className="fa fa-check" aria-hidden="true"></i> 20
                          Email Address
                        </li>
                        <li>
                          <i className="fa fa-times" aria-hidden="true"></i>{" "}
                          Live Support
                        </li>
                      </ul>
                    </Option>
                    <a href="#">Order Now</a>
                  </Card>
                </div>
                {/* END Col one */}
                <div className="col-sm-4">
                  <Card className="standard-card">
                    <Title>
                      <i className="fa fa-plane" aria-hidden="true"></i>
                      <h2>Standard</h2>
                    </Title>
                    <Price>
                      <h4>
                        <sup>$</sup>50
                      </h4>
                    </Price>
                    <Option>
                      <ul>
                        <li>
                          <i className="fa fa-check" aria-hidden="true"></i> 50
                          GB Space
                        </li>
                        <li>
                          <i className="fa fa-check" aria-hidden="true"></i> 5
                          Domain Names
                        </li>
                        <li>
                          <i className="fa fa-check" aria-hidden="true"></i>{" "}
                          Unlimited Email Address
                        </li>
                        <li>
                          <i className="fa fa-times" aria-hidden="true"></i>{" "}
                          Live Support
                        </li>
                      </ul>
                    </Option>
                    <a href="#">Order Now</a>
                  </Card>
                </div>
                {/* END Col two */}
                <div className="col-sm-4">
                  <Card className="premium-card">
                    <Title>
                      <i className="fa fa-rocket" aria-hidden="true"></i>
                      <h2>Premium</h2>
                    </Title>
                    <Price>
                      <h4>
                        <sup>$</sup>100
                      </h4>
                    </Price>
                    <Option>
                      <ul>
                        <li>
                          <i className="fa fa-check" aria-hidden="true"></i>{" "}
                          Unlimited GB Space
                        </li>
                        <li>
                          <i className="fa fa-check" aria-hidden="true"></i> 30
                          Domain Names
                        </li>
                        <li>
                          <i className="fa fa-check" aria-hidden="true"></i>{" "}
                          Unlimited Email Address
                        </li>
                        <li>
                          <i className="fa fa-check" aria-hidden="true"></i>{" "}
                          Live Support
                        </li>
                      </ul>
                    </Option>
                    <a href="#">Order Now</a>
                  </Card>
                </div>
                {/* END Col three */}
              </div>
            </div>
          </div>
        </Section>
      </Body>
    </>
  );
}
