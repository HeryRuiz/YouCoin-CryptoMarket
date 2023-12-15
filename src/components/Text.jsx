import React from "react";
import "../styles/Text.css";
import { Link } from "react-router-dom";

function Text({ setArrowStyle, resetArrowStyle, toSection }) {
  return (
    <>
      <section id="text" className="text-section">
        <div className="text__content">
            <p>YOUCOIN.COM PRICE</p>
            <h2>Buy Bitcoin, Ethereum, and <br /> 250+ <span>Cryptocurrencies.</span></h2>
            <Link to="/market" className="text__button">Check Crypto Prices</Link>
        </div>
      </section>
    </>
  );
}

export default Text;