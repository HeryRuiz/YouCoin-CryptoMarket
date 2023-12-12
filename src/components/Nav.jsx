import {
  IconBrandDiscord,
  IconBrandTwitter,
  IconMenu2,
  IconX,
} from "@tabler/icons-react";
import "../styles/Nav.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function Nav() {
  const [mobile, setMobile] = useState(false);
  function toSection(section) {
    const sectionElement = document.querySelector(`.${section}`);
    sectionElement.scrollIntoView({ behavior: "smooth" });
  }

  const openMobile = () => {
    setMobile(!mobile);
  };
  return (
    <>
      <nav>
        <div className="nav__intro">
          <p className="nav__intro__text">
            Introducing Scale’s Automotive Foundation Model{" "}
            <a href="">Learn More</a> →
          </p>
        </div>

        <div className="navbar">
          <Link to="/">
            <p onClick={() => toSection("hero-section")}>YouCoin</p>
          </Link>
          <ul>
            <li onClick={() => toSection("hero-section")}>
              <Link to="/">Home</Link>
            </li>
            <li onClick={() => toSection("market-section")}>
              <Link to="/">Market</Link>
            </li>
            <li onClick={() => toSection("choose-section")}>
              <Link to="/">Choose Us</Link>
            </li>
            <li onClick={() => toSection("join-section")}>
              <Link to="/">Join</Link>
            </li>
          </ul>
          <span>
            <button className="nav__button">Start Investing →</button>

            <IconMenu2 onClick={openMobile} className="hamburger-menu" />
          </span>
        </div>
      </nav>

      <div className={`mobile-nav ${mobile ? "mobile-up" : ""}`}>
        <IconX onClick={openMobile} className="close-mobile" />
        <ul>
          <li onClick={openMobile}>
            <Link to="/">Home</Link>
          </li>
          <li onClick={openMobile}>
            <Link to="/">Market</Link>
          </li>
          <li onClick={openMobile}>
            <Link to="/">Choose Us</Link>
          </li>
          <li onClick={openMobile}>
            <Link to="/">Join</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Nav;
