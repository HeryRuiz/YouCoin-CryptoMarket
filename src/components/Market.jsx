import React, { useState, useEffect } from "react";
import "../styles/Market.css";
import { Link } from "react-router-dom";
import { Oval } from "react-loader-spinner";

function Market({ topCoins, setArrowStyle, resetArrowStyle }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [visibleCoins, setVisibleCoins] = useState([]);

  const totalPages = 2;

  useEffect(() => {
    const updateVisibleCoins = () => {
      const coinsPerPage = window.innerWidth < 800 ? 10 : 25;
      const startIndex = (currentPage - 1) * coinsPerPage;
      const endIndex = Math.min(
        startIndex + coinsPerPage,
        topCoins?.length || 0
      );

      setVisibleCoins(topCoins?.slice(startIndex, endIndex) || []);
    };

    updateVisibleCoins();

    
    window.addEventListener("resize", updateVisibleCoins);

    return () => {
      window.removeEventListener("resize", updateVisibleCoins);
    };
  }, [currentPage, topCoins]);

  const togglePage = () => {
    setCurrentPage((prevPage) => (prevPage === 1 ? 2 : 1));
  };

  return (
    <>
      <section id="market" className="market-section">
        <div className="market-content">
          <div className="market-content__coin-list">
            <div className="market-content__coin-list__top">
              <p>Currency</p>
              <p className="slider-coin__price__title">Price</p>
              <p className="slider-coin__last24">24h Change</p>
              <p className="slider-coin__cap">Market Cap</p>
            </div>
            <div className="market-content__coin-list__row">
              {visibleCoins.map((coin) => (
                <Link
                  to={`/coin/${coin.id}`}
                  className="coin-row"
                  key={coin.id}
                >
                  <span>
                    <img src={coin.image} alt={coin.name} />{" "}
                    <div className="coin__name">
                      {coin.name} <span>{coin.symbol.toUpperCase()}</span>
                    </div>
                  </span>
                  <p className="slider-coinprice">{`$${coin.current_price.toLocaleString()}`}</p>
                  <p
                    className={` ${
                      coin.price_change_percentage_24h <= 0
                        ? "red-text"
                        : "green-text"
                    } slider-coin__last24 `}
                  >
                    {coin.price_change_percentage_24h >= 0 ? "+" : null}
                    {coin.price_change_percentage_24h.toLocaleString()}%
                  </p>
                  <p className="slider-coin__cap">
                    ${coin.market_cap.toLocaleString()}
                  </p>
                </Link>
              ))}
            </div>
            {topCoins.length > 0 && window.innerWidth >= 800 && (
              <button
                className="market__next"
                onMouseOver={setArrowStyle("market__arrow")}
                onMouseOut={resetArrowStyle("market__arrow")}
                onClick={togglePage}
              >
                {currentPage === 1 ? "Next Page" : "Previous Page"}{" "}
                <span className="market__arrow">
                  {currentPage === 1 ? "→" : "←"}
                </span>
              </button>
            )}

            {topCoins.length > 0 && window.innerWidth < 800 && (
              <button
                className="market__next"
                onMouseOver={setArrowStyle("market__arrow")}
                onMouseOut={resetArrowStyle("market__arrow")}
              >
                Show All
                <span className="market__arrow">→</span>
              </button>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default Market;
