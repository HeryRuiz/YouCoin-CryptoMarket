import React from "react";
import "../styles/Hero.css";
import { IconChevronDown } from "@tabler/icons-react";
import background from '../images/herojoin/Untitled.png';

function Hero({ setArrowStyle, resetArrowStyle }) {


  return (
    <header>
      <section id="home" className="hero-section">
        <div className="hero-content">
          <div className="hero__content__text">
            <h1>
              Introducing <span>Automated AI</span> <br />
              Investments
            </h1>
            <p>
              Make the best on your investments with YouCoin's advanced AI
              technology. Our AI ensures a safer investment experience by
              optimizing your information.
            </p>
            <div className="hero__arrow__buttons">
              <button
                onMouseOver={setArrowStyle("hero__invest__arrow")}
                onMouseOut={resetArrowStyle("hero__invest__arrow")}
              >
                Start Investing <span className="hero__invest__arrow">→</span>
              </button>
              <p
                onMouseOver={setArrowStyle("hero__AI__arrow")}
                onMouseOut={resetArrowStyle("hero__AI__arrow")}
              >
                Use AI <span className="hero__AI__arrow">→</span>
              </p>
            </div>
          </div>
          <div className="hero__content__coins"></div>
          <p className="hero__info">
            YouCoin works with <span>CoinGecko API</span>, <span>Under US Law</span> & <span>Enterprises &
            Startups</span>
          </p>
        </div>
      </section>
    </header>
  );
}

export default Hero;