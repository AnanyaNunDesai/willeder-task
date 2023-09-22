import "./Navbar.scss";

function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">
        <img src="./images/logo-icon.png" alt="Icon" />
        <h1 className="text">LOGO</h1>
      </div>
      <div className="page-items">
        <a href="#home">Home</a>
        <a href="#services">Page 1</a>
        <a href="#see-more">Page 2</a>
      </div>
      <img
        className="mobile-details"
        src="./images/hamburger-icon.png"
        alt="More"
      />
    </header>
  );
}

export default Navbar;
