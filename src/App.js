import React, { useEffect, useState } from "react";
import "./App.scss";
import Carousel from "./components/Carousel";
import Navbar from "./components/Navbar";

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  // Arranges subsection elements of "See More" if on mobile or web
  function arrangeSeeMoreSubsection() {
    // Web view
    if (!isMobile) {
      return (
        <div
          className="explain-subsection
          "
        >
          <img
            className="explain-img"
            src="./images/see-more.png"
            alt="See More"
          />
          <div className="explain-text">
            <div className="title-underline">
              <p>Lorem ipsum</p>
              <div className="underline-bar" />
            </div>
            <p className="explain-details">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam,quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className="click-me">
              <p>Lorem ipsum</p>
              <img src="./images/next-arrow.png" alt="Click Me" />
            </div>
          </div>
        </div>
      );
    }
    // Mobile view, underlined title is above image
    else {
      return (
        <div
          className="explain-subsection
        "
        >
          <div>
            <div className="title-underline">
              <p className="title-text">Lorem ipsum</p>
              <div className="underline-bar" />
            </div>
            <img
              className="explain-img"
              src="./images/see-more.png"
              alt="See More"
            />
          </div>
          <div className="explain-text">
            <p className="explain-details">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam,quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className="click-me">
              <p>Lorem ipsum</p>
              <img src="./images/next-arrow.png" alt="Click Me" />
            </div>
          </div>
        </div>
      );
    }
  }

  return (
    <div className="home-page">
      <Navbar />
      <Carousel />
      <div className="section intro">
        <div className="about">
          <div className="logo">
            <img src="./images/logo-icon.png" alt="Icon" />
            <h1 className="text">LOGO</h1>
          </div>
          <div className="subtitle">
            <p>Lorem ipsum dolor sit amet</p>
          </div>
          <div className="description">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <div className="invite-scroll">
          <p>scroll</p>
          <div className="indicator"></div>
        </div>
      </div>
      <div className="section services">
        <div className="heading">
          <h1>Lorem</h1>
          <p>subtitle</p>
        </div>
        <div className="details">
          <div className="image-example first">
            <div className="text-example">
              <p className="web-enum">01</p>
              <h3>Lorem ipsum dolor sit</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
          </div>
          <div className="image-example second">
            <div className="text-example">
              <p className="web-enum">02</p>
              <h3>Lorem ipsum dolor sit</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
          </div>
          <div className="image-example third">
            <div className="text-example">
              <p className="web-enum">03</p>
              <h3>Lorem ipsum dolor sit</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
          </div>
        </div>
        <div className="path-bar" />
      </div>
      <div className="section see-more">
        {arrangeSeeMoreSubsection()}
        <div className="path-bar" />
      </div>
    </div>
  );
}

export default App;
