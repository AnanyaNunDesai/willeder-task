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
      <div className="section contact-us">
        <div className="company-farewell">
          <div className="square-container">
            <div className="triangle top-left"></div>
            <div className="triangle top-right"></div>
            <div className="triangle bottom-left"></div>
            <div className="triangle bottom-right"></div>
          </div>
        </div>

        <div className="company-footer">
          <div className="company-details">
            <div className="pages">
              <p>Home</p>
              <p>Page 1</p>
              <p>Page 2</p>
            </div>
            <div className="social-divider" />
            <div className="social-media">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 24 24">
                <path d="M12,2C6.477,2,2,6.477,2,12c0,5.013,3.693,9.153,8.505,9.876V14.65H8.031v-2.629h2.474v-1.749 c0-2.896,1.411-4.167,3.818-4.167c1.153,0,1.762,0.085,2.051,0.124v2.294h-1.642c-1.022,0-1.379,0.969-1.379,2.061v1.437h2.995 l-0.406,2.629h-2.588v7.247C18.235,21.236,22,17.062,22,12C22,6.477,17.523,2,12,2z" fill="white"></path>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0,0,256,256">
                <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" styles="mix-blend-mode: normal"><g transform="scale(10.66667,10.66667)"><path d="M22,3.999c-0.78,0.463 -2.345,1.094 -3.265,1.276c-0.027,0.007 -0.049,0.016 -0.075,0.023c-0.813,-0.802 -1.927,-1.299 -3.16,-1.299c-2.485,0 -4.5,2.015 -4.5,4.5c0,0.131 -0.011,0.372 0,0.5c-3.353,0 -5.905,-1.756 -7.735,-4c-0.199,0.5 -0.286,1.29 -0.286,2.032c0,1.401 1.095,2.777 2.8,3.63c-0.314,0.081 -0.66,0.139 -1.02,0.139c-0.581,0 -1.196,-0.153 -1.759,-0.617c0,0.017 0,0.033 0,0.051c0,1.958 2.078,3.291 3.926,3.662c-0.375,0.221 -1.131,0.243 -1.5,0.243c-0.26,0 -1.18,-0.119 -1.426,-0.165c0.514,1.605 2.368,2.507 4.135,2.539c-1.382,1.084 -2.341,1.486 -5.171,1.486h-0.964c1.788,1.146 4.065,2.001 6.347,2.001c7.43,0 11.653,-5.663 11.653,-11.001c0,-0.086 -0.002,-0.266 -0.005,-0.447c0,-0.018 0.005,-0.035 0.005,-0.053c0,-0.027 -0.008,-0.053 -0.008,-0.08c-0.003,-0.136 -0.006,-0.263 -0.009,-0.329c0.79,-0.57 1.475,-1.281 2.017,-2.091c-0.725,0.322 -1.503,0.538 -2.32,0.636c0.834,-0.5 2.019,-1.692 2.32,-2.636z"></path></g></g>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 32 32">
                <path d="M 11.46875 5 C 7.917969 5 5 7.914063 5 11.46875 L 5 20.53125 C 5 24.082031 7.914063 27 11.46875 27 L 20.53125 27 C 24.082031 27 27 24.085938 27 20.53125 L 27 11.46875 C 27 7.917969 24.085938 5 20.53125 5 Z M 11.46875 7 L 20.53125 7 C 23.003906 7 25 8.996094 25 11.46875 L 25 20.53125 C 25 23.003906 23.003906 25 20.53125 25 L 11.46875 25 C 8.996094 25 7 23.003906 7 20.53125 L 7 11.46875 C 7 8.996094 8.996094 7 11.46875 7 Z M 21.90625 9.1875 C 21.402344 9.1875 21 9.589844 21 10.09375 C 21 10.597656 21.402344 11 21.90625 11 C 22.410156 11 22.8125 10.597656 22.8125 10.09375 C 22.8125 9.589844 22.410156 9.1875 21.90625 9.1875 Z M 16 10 C 12.699219 10 10 12.699219 10 16 C 10 19.300781 12.699219 22 16 22 C 19.300781 22 22 19.300781 22 16 C 22 12.699219 19.300781 10 16 10 Z M 16 12 C 18.222656 12 20 13.777344 20 16 C 20 18.222656 18.222656 20 16 20 C 13.777344 20 12 18.222656 12 16 C 12 13.777344 13.777344 12 16 12 Z" fill="#FFFFFF"></path>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0,0,256,256">
                <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" styles="mix-blend-mode: normal"><g transform="scale(10.66667,10.66667)"><path d="M6,3c-1.64497,0 -3,1.35503 -3,3v12c0,1.64497 1.35503,3 3,3h12c1.64497,0 3,-1.35503 3,-3v-12c0,-1.64497 -1.35503,-3 -3,-3zM12,7h2c0,1.005 1.471,2 2,2v2c-0.605,0 -1.332,-0.26584 -2,-0.71484v3.71484c0,1.654 -1.346,3 -3,3c-1.654,0 -3,-1.346 -3,-3c0,-1.654 1.346,-3 3,-3v2c-0.552,0 -1,0.449 -1,1c0,0.551 0.448,1 1,1c0.552,0 1,-0.449 1,-1z"></path></g></g>
              </svg>
            </div>
            <div className="copyright">
              <p>© Logo, Inc.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;