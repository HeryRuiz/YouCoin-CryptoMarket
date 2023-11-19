import React from "react";
import "../styles/Join.css";
import Btc from "../images/herojoin/bitcoin.png";
import Eth from "../images/herojoin/ethereum.png";

function Join() {
  return (
    <>
      <section id="join" className="join-section">
        <div className="join-content">
          <img alt="coin_img" className="floating-coin" src={Btc} />
          <div className="join-content__text">
            <h2>
              JOIN US VIA <br /> <span>DISCORD</span>
            </h2>
            <p>Invest and manage all your crypto at one place.</p>
            <a rel="noreferrer" target="_blank" href="https://discord.com/">
              Join via Discord
            </a>
          </div>
          <img alt="coin_img" className="floating-coin" src={Eth} />
        </div>
      </section>
    </>
  );
}

export default Join;
