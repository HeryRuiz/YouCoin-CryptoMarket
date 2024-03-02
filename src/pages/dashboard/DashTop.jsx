import React, { useState } from "react";
import "./styles/topdash.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { purchase } from "../firebase/firebase";
import { Link } from "react-router-dom";
function DashTop({ avatar, setCategory, category }) {
  return (
    <section className="dashtop" id="dashtop">
      <div className="dashtop__container">
        <div className="dashtop__top">
          <div className="dashtop__left">
            <p className="dashtop__title">Personal Investments</p>
            <p className="dashtop__free">{purchase ? "PRO" : "FREE"}</p>
          </div>
          <div className="dashtop__right">
            <img src={avatar} alt="Avatar" />
            <button className="dashtop__button">
              <FontAwesomeIcon icon={faPlus} />
              <span>Invite</span>
            </button>
          </div>
        </div>
        <div className="dashtop__bottom">
          <div className="dashtop__options">
            <p
              className={
                category === "one"
                  ? "dashtop__options__allowed"
                  : "dashtop__options__not"
              }
              onClick={() => setCategory("one")}
            >
              Invest
            </p>
            <p
              className={
                purchase && category === "two"
                  ? "dashtop__options__allowed"
                  : purchase
                  ? "dashtop__options__not"
                  : "dashtop__options__not purchase__not__allowed"
              }
              onClick={() => setCategory("two")}
            >
              Members
            </p>
            <Link
            to='/terms'
              className={
                purchase && category === "three"
                  ? "dashtop__options__allowed"
                  : purchase
                  ? "dashtop__options__not"
                  : "dashtop__options__not purchase__not__allowed"
              }
            >
              Support
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DashTop;
