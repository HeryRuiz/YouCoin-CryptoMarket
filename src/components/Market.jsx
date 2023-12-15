import React from "react";
import "../styles/Market.css";
import { Link } from "react-router-dom";
import { Oval } from "react-loader-spinner";

function Market({ topCoins }) {
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
                  {topCoins.slice(0, 10).map((coin) => (
                    <Link
                      to={`/coin/${coin.id}`}
                      className="coin-row"
                      key={coin.id}
                    >
                      <span>
                        <img src={coin.image} alt={coin.name} /> {coin.name}
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
                        {coin.price_change_percentage_24h.toLocaleString()}
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
                    color="#a7118e"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                    ariaLabel="oval-loading"
                    secondaryColor="#a7118e"
                    strokeWidth={4}
                    strokeWidthSecondary={4}
                  />
                </div>
              )}
            </div>

            <div className="market-content__coin-list__bottom"></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Market;
