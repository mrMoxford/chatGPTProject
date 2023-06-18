import React from "react";
import "./possibility.css";
import possibility from "../../assets/possibility.png";
const Possibility = () => {
  return (
    <div className="gpt3__possibility | section__padding flex" id="possibility">
      <div className="gpt3__possibility-image">
        <img src={possibility} alt="the possibilities are endless" />
      </div>

      <div className="gpt3__possibility-content | flow">
        <p className="subtitle | text-blue">
          Request Early Access to Get Started
        </p>
        <h2 className="gradient__text">
          The possibilities are beyond your imagination
        </h2>
        <p className="info | text-light">
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <p className="subtitle | text-orange">
          Request Early Access to Get Started
        </p>
      </div>
    </div>
  );
};

export default Possibility;
