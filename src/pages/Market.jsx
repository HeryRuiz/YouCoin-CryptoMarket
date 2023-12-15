import React from "react";
import Market from "../components/Market.jsx";

function Market({ topCoins, }) {
  return (
    <>
      <Market topCoins={topCoins} setArrowStyle={setArrowStyle} resetArrowStyle={resetArrowStyle}/>
    </>
  );
}

export default Market;
