import React from "react";
import "../styles/Hero.css";
import Btc from "../images/herojoin/bitcoin.png";
import Eth from "../images/herojoin/ethereum.png";
import { IconChevronDown } from "@tabler/icons-react";
import CoinStats from "./CoinStats";

function Hero({ topCoins }) {
  return (
    <header>
      <section id="home" className="hero-section">
        <div className="hero-content">
          <div className="hero__content__text">
            <img className="floating-coin" src={Btc} alt="floating-el" />
            <h1>
              TRADE AND EARN
              <br /> <span>CRYPTO CURRENCIES</span>
            </h1>
            <img className="floating-coin" src={Eth} alt="floating-el" />
          </div>
          <div className="hero__content__coins"></div>
          <a className="mobile-btn-hero" href="#market">
            See Prices <IconChevronDown />
          </a>
          {topCoins.length > 0 ? (
            <div className="coin-slider">
              <>
                <CoinStats topCoins={topCoins} />
              </>
            </div>
          ) : null}
        </div>
      </section>
    </header>
  );
}

export default Hero;
