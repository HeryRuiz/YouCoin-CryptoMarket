import React from "react";
import "../styles/Text.css";
import { Link } from "react-router-dom";

function Text({ setArrowStyle, resetArrowStyle, toSection }) {
  return (
    <>
      <section id="text" className="text-section">
        <div className="text__content">
          <p>YOUCOIN.COM PRICE</p>
          <h2>
            Buy Bitcoin, Ethereum, and <br /> 250+{" "}
            <span>Cryptocurrencies.</span>
          </h2>
          <button
            to="/market"
            className="text__button"
            onMouseOver={setArrowStyle("text__arrow")}
            onMouseOut={resetArrowStyle("text__arrow")}
          >
            Check Crypto Prices <span className="text__arrow">→</span>
          </button>
        </div>
      </section>
    </>
  );
}

export default Text;
