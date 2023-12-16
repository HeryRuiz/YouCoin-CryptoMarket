import React from "react";
import "../styles/Customer.css";
import { Link } from "react-router-dom";

function Customer() {
  return (
    <>
      <section id="customer" className="customer-section">
        <div className="customer__content">
          <div>
            <p>USE AI</p>
          </div>
          <h2>
            Check out all of out customer <br />
            <span>Reviews.</span>
          </h2>
        </div>
      </section>
    </>
  );
}

export default Customer;