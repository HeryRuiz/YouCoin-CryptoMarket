import React from "react";
import { Link } from "react-router-dom";

const CoinStats = ({ topCoins }) => {
  return (
    <>
      {topCoins &&
        topCoins.length > 0 &&
        topCoins.slice(0, 4).map((coin) => (
          <Link to={`/coin/${coin.id}`} className="slider-coin" key={coin.id}>
            <img src={coin?.image} alt={coin?.name} />
            <p className="slider-coin__name">
              {coin?.name}{" "}
              <span
                className={
                  "slider-coin__price " +
                  (coin.price_change_percentage_24h <= 0
                    ? "red-text"
                    : "green-text")
                }
              >
                {coin?.price_change_percentage_24h?.toLocaleString() + "%"}
              </span>
            </p>
            <p className="slider-coin__price">
              {"$ " + coin.current_price?.toLocaleString()}
            </p>
          </Link>
        ))}
    </>
  );
};

export default CoinStats;
