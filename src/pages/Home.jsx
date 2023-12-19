import React from "react";
import Hero from "../components/Home/Hero.jsx";
import Text from "../components/Home/Text.jsx";
import Market from "../components/Home/Market.jsx";
import Join from "../components/Home/Join.jsx";
import Footer from "../components/Home/Footer.jsx";
import Slider from "../components/Home/Slider.jsx";
function Home({ topCoins, setArrowStyle, resetArrowStyle, toSection }) {
  return (
    <>
      <Hero
        setArrowStyle={setArrowStyle}
        resetArrowStyle={resetArrowStyle}
        toSection={toSection}
      />
      <Text setArrowStyle={setArrowStyle} resetArrowStyle={resetArrowStyle} />
      <Market
        topCoins={topCoins}
        setArrowStyle={setArrowStyle}
        resetArrowStyle={resetArrowStyle}
      />
      <Slider toSection={toSection}/>
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
