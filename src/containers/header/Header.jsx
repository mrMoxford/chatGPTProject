import React from "react";
import "./header.css";
import ai from "../../assets/ai.png";
import people from "../../assets/people.png";

const Header = () => {
  return (
    <header className="gpt3__header | section__padding flex" id="home">
      <div className="gpt3__header-content |flex flow">
        <h1 className="gradient__text fs-800">
          Let’s Build Something amazing with GPT-3 OpenAI
        </h1>
        <div className="gpt3__header-content | flex flow">
          <p className="text-light fs-500">
            Yet bed any for travelling assistance indulgence unpleasing. Not
            thoughts all exercise blessing. Indulgence way everything joy
            alteration boisterous the attachment. Party we years to order allow
            asked of.
          </p>
          <div className="gpt3__header-content__input flex ">
            <input type="email" placeholder="Your Email Address" />
            <button type="submit" className="bg-accent text-white fs-400">
              {" "}
              get started
            </button>
          </div>
          <div className="gpt3__header-content__people | flex">
            <img src={people} alt="users" />
            <p className="fs-400">
              1,600 people requested access a visit in last 24 hours
            </p>
          </div>
        </div>
      </div>
      <div className="gpt3__header-image" id="header-image">
        <img src={ai} alt="ai" />
      </div>
    </header>
  );
};

export default Header;
