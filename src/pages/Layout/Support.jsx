import React from "react";
import { Link } from "react-router-dom";
import "./styles/Support.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import light from "../service/images/light.png";
import cir from "../service/images/cir.png";
import data from "../service/images/data.png";
import octo from "../service/images/octo.png";
import multi from "../Layout/images/multi.png";
import speed from "../Layout/images/speed.png";
import tool from "../Layout/images/tool.png";
import basket from "../Layout/images/basket.png";
function Support({ setOpen, setArrowStyle, resetArrowStyle }) {
  return (
    <div className="support" id="support">
      <div className="support__top">
        <div></div>
        <p className="support__title">Support Center</p>
        <FontAwesomeIcon
          icon={faXmark}
          className="support__close"
          onClick={() => setOpen(false)}
        />
      </div>
      <div className="support__middle">
        <p>Content</p>
        <div className="support__grid">
          <div className="support__item">
            <img src={data} alt="Dashboard" />
            <p className="support__subject">Dashboard</p>
          </div>
          <div className="support__item">
            <img src={cir} alt="Dashboard" />
            <p className="support__subject">Services</p>
          </div>
          <div className="support__item">
            <img src={octo} alt="Dashboard" />
            <p className="support__subject">Purchase</p>
          </div>
          <div className="support__item">
            <img src={speed} alt="Dashboard" />
            <p className="support__subject">Demo</p>
          </div>
          <div className="support__item">
            <img src={tool} alt="Dashboard" />
            <p className="support__subject">Terms</p>
          </div>
          <div className="support__item">
            <img src={basket} alt="Dashboard" />
            <p className="support__subject">Market</p>
          </div>
          <Link to='/signup' className="support__item">
            <img src={multi} alt="Dashboard" />
            <p className="support__subject">Sign up</p>
          </Link>
          <Link to='/login' className="support__item">
            <img src={light} alt="Dashboard" />
            <p className="support__subject">Login</p>
          </Link>
        </div>
      </div>
      <div className="support__bottom">
        <Link
          className="support__demo__buttom"
          onClick={() => setOpen(false)}
          to="/demo"
          onMouseOver={setArrowStyle("support__arrow")}
          onMouseOut={resetArrowStyle("support__arrow")}
        >
          Start Investing
          <span className="support__arrow">→</span>
        </Link>
      </div>
    </div>
  );
}

export default Support;