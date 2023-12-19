import React, { useState } from "react";
import "./styles/HeroMarket.css";
import { Link } from "react-router-dom";
import { Oval } from "react-loader-spinner";

function Market({ topCoins, setArrowStyle, resetArrowStyle }) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = 2;

  const togglePage = () => {
    setCurrentPage((prevPage) => (prevPage === 1 ? 2 : 1));
  };

  const startIndex = (currentPage - 1) * 25;
  const endIndex = Math.min(startIndex + 25, topCoins.length);

  return (
    <>
      <section id="market" className="market-section">
        <div className="market-content">
          <div className="market-content__coin-list">
            <div className="market-content__coin-list__top">
              <p>Coin</p>
              <p className="slider-coin__price__title">Price</p>
              <p className="slider-coin__last24">24h Change</p>
              <p className="slider-coin__cap">Market Cap</p>
            </div>
            <div className="market-content__coin-list__row">
              {topCoins.length > 0 ? (
                <>
                  {topCoins.slice(startIndex, endIndex).map((coin) => (
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
                </>
              ) : (
                <div className="market-content__failed">
                  <p>Loading All Supported Crypto</p>
                  <Oval
                    height={80}
                    width={50}
                    color="#47349D"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                    ariaLabel="oval-loading"
                    secondaryColor="#433680"
                    strokeWidth={4}
                    strokeWidthSecondary={4}
                  />
                </div>
              )}
            </div>
            {topCoins?.length > 0 && (
              <button
                className="market__next"
                onMouseOver={setArrowStyle("market__arrow")}
                onMouseOut={resetArrowStyle("market__arrow")}
                onClick={togglePage}
              >
                {currentPage === 1 ? "Next 10" : "Previous 10"}{" "}
                <span className="market__arrow">
                  {currentPage === 1 ? "→" : "←"}
                </span>
              </button>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default Market;
