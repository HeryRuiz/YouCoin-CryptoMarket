import React from "react";
import "./styles/Join.css";

function Join({ setArrowStyle, resetArrowStyle, toSection }) {
  return (
    <>
      <section id="join" className="join-section">
        <div className="join__content">

          <div className="join__content__text">
            <h1>The future of crypto <br /> <span>starts here.</span></h1>
            <div className="join__arrow__buttons">
              <button
                onClick={() => toSection("market-section")}
                onMouseOver={setArrowStyle("join__invest__arrow")}
                onMouseOut={resetArrowStyle("join__invest__arrow")}
              >
                Start Investing <span className="join__invest__arrow">→</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Join;
