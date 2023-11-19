import React from "react";
import Hero from "../components/Hero.jsx";
import Market from "../components/Market.jsx";
import Choose from "../components/Choose.jsx";
import Join from "../components/Join.jsx";
import Footer from "../components/Footer";

function Home({ topCoins }) {
  return (
    <>
      <Hero topCoins={topCoins} />
      <Market topCoins={topCoins} />
      <Choose />
      <Join />
      <Footer />
    </>
  );
}

export default Home;
