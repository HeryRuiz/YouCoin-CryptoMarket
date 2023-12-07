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
  const [sticky, setSticky] = useState(false);
  const [mobile, setMobile] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 150) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  window.addEventListener("scroll", handleScroll);

  function toSection(section) {
    const sectionElement = document.querySelector(`.${section}`);
    sectionElement.scrollIntoView({ behavior: "smooth" });
  }

  const openMobile = () => {
    setMobile(!mobile);
  };
  return (
    <>
      <nav className={sticky ? "sticky-nav" : ""}>
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
            <a
              href="https://discord.com"
              target="_blank"
              className="nav__socials "
            >
              <IconBrandDiscord />
            </a>
            <a
              href="https://twitter.com/home"
              target="_blank"
              className="nav__socials "
            >
              <IconBrandTwitter />
            </a>

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
