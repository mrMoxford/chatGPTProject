import React from "react";
import "./cta.css";
const Cta = () => {
  return (
    <div className="gpt3__cta section__margin bg-gradient flex">
      <div className="gpt3__cta-content | text-neutral flex">
        <p>Request Early Access to Get Started</p>
        <h3>Register today & start exploring the endless possiblities.</h3>
      </div>
      <div className="gpt3__cta-button">
        <button type="button" className="bg-neutral text-white">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Cta;
