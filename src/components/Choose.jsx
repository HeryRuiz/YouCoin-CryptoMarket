import React, { useState, useEffect } from 'react';
import "../styles/Choose.css";
import ChooseBox from "./ChooseBox";
import BitHand from "../images/Choose/choose-main.png";
import {
  IconChecklist,
  IconDeviceMobileMessage,
  IconMoneybag,
  IconPencilBolt,
  IconStack,
  IconWallet,
} from "@tabler/icons-react";

function Choose() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getTextBasedOnWidth = (fullText, shortText) => {
    if (windowWidth > 1400) {
      return shortText;
    } else if (windowWidth < 1400 && windowWidth > 1000) {
      return fullText;
    } else if (windowWidth < 1000) {
      return shortText;
    } else {
      return ;
    }
  };

  return (
    <>
      <section id="choose" className="choose-section">
        <div className="choose-container">
          <h2>CHOOSE US!</h2>
          <div className="choose-container__content">
            <div className="choose-container__content__1">
              <ChooseBox
                img={<IconWallet />}
                title="WHAT IS CRYPTO?"
                text={getTextBasedOnWidth(
                  "Cryptocurrency, a form of payment created using encryption algorithms, operates on decentralized networks, allowing for secure and transparent transactions without the need for intermediaries such as banks or governments.",
                  "Cryptocurrency operates on decentralized networks, and transactions."
                )}
              />
              <ChooseBox
                img={<IconPencilBolt />}
                title="What is a cap?"
                text={getTextBasedOnWidth(
                  "The market capitalization, commonly referred to as market cap, represents the maximum total value of a cryptocurrency or stock, calculated by multiplying its current market price by the total number of outstanding coins or shares.",
                  "Market cap is the maximum total value of a cryptocurrency or stock."
                )}
              />
              <ChooseBox
                img={<IconChecklist />}
                title="HOW CAN I START?"
                text={getTextBasedOnWidth(
                  "By joining our Discord community and engaging in conversation with one of our administrators, you can gain valuable insights, connect with like-minded individuals, and stay updated on the latest developments in our community.",
                  "Join our Discord community to connect with administrators and investors."
                )}
              />
            </div>
            <div className="choose-container__content__2">
              <img src={BitHand} alt="hand_img" />
            </div>
            <div className="choose-container__content__3">
              <ChooseBox
                img={<IconDeviceMobileMessage />}
                title="What are NFTS?"
                text={getTextBasedOnWidth(
                  "NFTs, or non-fungible tokens, represent unique digital assets, often in the form of images, that are stored on a blockchain and can be owned and traded using cryptocurrency.",
                  "NFTs represent unique digital assets stored on a blockchain using cryptocurrency."
                )}
              />
              <ChooseBox
                img={<IconMoneybag />}
                title="What is a market?"
                text={getTextBasedOnWidth(
                  "The market, a dynamic and decentralized platform, serves as the hub where you can discover, buy, and sell various cryptocurrencies.",
                  "The market is a dynamic platform to discover, buy, and sell cryptocurrencies."
                )}
              />
              <ChooseBox
                img={<IconStack />}
                title="What is a portfolio?"
                text={getTextBasedOnWidth(
                  "A portfolio is a comprehensive collection of financial assets owned by an individual or entity, encompassing a diverse range of investments such as stocks, bonds, real estate, and cryptocurrencies.",
                  "A portfolio is a collection of financial assets owned by an individual or entity."
                )}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Choose;