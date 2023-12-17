import {
  IconBrandDiscord,
  IconBrandTwitter,
  IconMenu2,
  IconX,
} from "@tabler/icons-react";
import "../styles/Nav.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function Nav({setArrowStyle, resetArrowStyle, toSection}) {
  const [mobile, setMobile] = useState(false);
  
  const openMobile = () => {
    setMobile(!mobile);
  };
  return (
    <>
      <nav>
        <div className="nav__intro">
          <p className="nav__intro__text">
            Introducing YouCoin’s Personally Automated Investments
            <span
              className="nav__intro__learnmore"
              onClick={() => toSection("market-section")}
              onMouseOver={setArrowStyle("nav__intro__arrow")}
              onMouseOut={resetArrowStyle("nav__intro__arrow")}
            >
              Learn More <span className="nav__intro__arrow">→</span>
            </span>
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
            <button
              className="nav__button"
              onMouseOver={setArrowStyle("nav__arrow")}
              onMouseOut={resetArrowStyle("nav__arrow")}
              onClick={() => toSection("market-section")}
            >
              Start Investing <span className="nav__arrow">→</span>
            </button>

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
