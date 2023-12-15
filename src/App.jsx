import "./index.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home.jsx";
import Coin from "./pages/Coin.jsx";
import Market from "./components/Market.jsx";

function App() {
  const [topCoins, setTopCoins] = useState([]);

  useEffect(() => {
    const apiKey = "CG-QnB4KjkznzXPHBQYHU3is4v7";

    const endpoint = "https://api.coingecko.com/api/v3/coins/markets";

    const params = {
      vs_currency: "usd",
      order: "market_cap_desc",
      per_page: 50,
      page: 1,
    };

    fetch(endpoint + "?" + new URLSearchParams(params), {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setTopCoins(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  const setArrowStyle = (arrow) => () => {
    document.querySelector(`.${arrow}`).style.left = "3px";
  };
  const resetArrowStyle = (arrow) => () => {
    document.querySelector(`.${arrow}`).style.left = "0px";
  };
  function toSection(section) {
    const sectionElement = document.querySelector(`.${section}`);
    sectionElement.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <Router>
      <Routes>
        <Route element={<Layout toSection={toSection} setArrowStyle={setArrowStyle} resetArrowStyle={resetArrowStyle}/>}>
          <Route path="/" element={<Home toSection={toSection} topCoins={topCoins} setArrowStyle={setArrowStyle} resetArrowStyle={resetArrowStyle}/>} />
          <Route path="/coin/:id" element={<Coin topCoins={topCoins} />} />
          <Route path="/market" element={<Market topCoins={topCoins} />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
