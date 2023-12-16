import React, { useState, useEffect } from "react";
import "../styles/Customer.css";
function Customer() {
  return (
    <>
      <section id="customer" className="customer-section">
        <div className="customer__content">
          <div className="customer__top__div">
            <p>CUSTOMERS</p>
          </div>
          <div className="customer__title">
            <h2>
              We have changed the game of AI. <br />Hear it from our
              customers.
            </h2>
            <p>
              Discover the essential role of diversity in investing, including
              cryptocurrencies, and as experts emphasize its significance in shaping a future
              strategy.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Customer;