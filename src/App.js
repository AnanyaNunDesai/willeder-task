import "./App.scss";
import Carousel from "./components/Carousel";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="home-page">
      <Navbar />
      <Carousel />
      <div className="intro">
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
          <p>Scroll</p>
          <div className="indicator"></div>
        </div>
      </div>
    </div>
  );
}

export default App;