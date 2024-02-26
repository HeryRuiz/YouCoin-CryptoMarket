import React, { useEffect, useState } from "react";
import "./styles/DashNav.css";
import logo from "./images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faRightFromBracket,
  faAngleUp,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
function DashNav({ username, avatar }) {
  const [dropdown, setDropDown] = useState(false);
  useEffect(() => {
    if (dropdown === true) {
      document.querySelector(".dropdown").style.display = "block";
    } else {
      document.querySelector(".dropdown").style.display = "none";
    }
  }, [dropdown]);

  return (
    <>
      <nav className="dashnav" id="dashNav">
        <div className="dashnav__container">
          <div className="dashnav__left">
            <div className="dashnav__left__logo">
              <img src={logo} alt="YouCoin Logo" />
              <Link to="/" className="dashnav__left__logo__name">
                YouCoin
              </Link>
              <p className="dashnav__beta">BETA</p>
            </div>
          </div>
          <div className="dashnav__right">
            <Link to="/purchase" className="dashnav__button">
              Purchase
            </Link>
            <div className="dashnav__right__container">
              <div className="dashnav__right__flex">
                <img
                  src={avatar}
                  alt="Avatar"
                  onClick={() => setDropDown(!dropdown)}
                />
                <div className="dashnav__right__info">
                  <p className="dashnav__right__name">{username}</p>
                  <p className="dashnav__right__type">All Investments</p>
                </div>
                <FontAwesomeIcon
                  icon={dropdown ? faAngleUp : faAngleDown}
                  className="dashnav__drop"
                  onClick={() => setDropDown(!dropdown)}
                />
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="dropdown__div">
        <div className="dropdown">
          <Link to="/login" className="dropdown__item">
            <p>Sign Out</p>
            <FontAwesomeIcon icon={faRightFromBracket} />
          </Link>
        </div>
      </div>
    </>
  );
}

export default DashNav;
