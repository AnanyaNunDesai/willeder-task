import "./App.scss";
import Carousel from "./components/Carousel";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="home-page">
      <Navbar />
      <Carousel />
      <div className="section intro">
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
        <div className="invite-scroll">
          <p>scroll</p>
          <div className="indicator"></div>
        </div>
      </div>
      <div className="section services">
        <div className="heading">
          <p>Lorem</p>
          <p>subtitle</p>
        </div>
        <div className="details">
          <div className="image-example first">
            <div className="text-example">
              <p className="web-enum">01</p>
              <p>Lorem ipsum dolor sit</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
          </div>
          <div className="image-example second">
            <div className="text-example">
              <p className="web-enum">01</p>
              <p>Lorem ipsum dolor sit</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
          </div>
          <div className="image-example third">
            <div className="text-example">
              <p className="web-enum">01</p>
              <p>Lorem ipsum dolor sit</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
          </div>
        </div>
        <div className="path-bar" />
      </div>
    </div>
  );
}

export default App;