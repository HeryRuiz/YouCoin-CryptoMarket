import React from "react";
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
                text="A cryptocurrency is form of payment created using encryption algorithms."
              />
              <ChooseBox
                img={<IconPencilBolt />}
                title="What is a cap?"
                text="The Market caps are the max amount of money."
              />
              <ChooseBox
                img={<IconChecklist />}
                title="HOW CAN I START?"
                text="By Joining our discord and speaking to a admin."
              />
            </div>
            <div className="choose-container__content__2">
              <img src={BitHand} alt="hand_img" />
            </div>
            <div className="choose-container__content__3">
              <ChooseBox
                img={<IconDeviceMobileMessage />}
                title="What are NFTS?"
                text="NFTS are images you can own and sell with crypto."
              />
              <ChooseBox
                img={<IconMoneybag />}
                title="What is a market?"
                text="The market is where u discorver, buy and sell crypto."
              />
              <ChooseBox
                img={<IconStack />}
                title="What is a portfolio"
                text="Portfolio are all the assets someone owns."
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Choose;
