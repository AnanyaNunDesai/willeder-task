import "./Navbar.scss";

function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">
        <img src="./images/logo-icon.png" alt="Icon" />
        <h1 className="text">LOGO</h1>
      </div>
      <div className="page-items">
        <p>Home</p>
        <p>Page 1</p>
        <p>Page 2</p>
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
