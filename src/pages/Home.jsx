import React from "react";
import Hero from "../components/Hero.jsx";
import Text from "../components/Text.jsx";
import Market from "../components/Market.jsx";
import Choose from "../components/Choose.jsx";
import Join from "../components/Join.jsx";
import Footer from "../components/Footer";

function Home({ topCoins, setArrowStyle, resetArrowStyle, toSection }) {
  return (
    <>
      <Hero
        setArrowStyle={setArrowStyle}
        resetArrowStyle={resetArrowStyle}
        toSection={toSection}
      />
      <Text setArrowStyle={setArrowStyle} resetArrowStyle={resetArrowStyle} />
      <Market topCoins={topCoins} />
      <Choose />
      <Join
        setArrowStyle={setArrowStyle}
        resetArrowStyle={resetArrowStyle}
        toSection={toSection}
      />
      <Footer />
    </>
  );
}

export default Home;
