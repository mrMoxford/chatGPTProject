import React from "react";
import "./footer.css";
import gpt3logo from "../../assets/logo.svg";
const Footer = () => {
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        <h2 className="gradient__text">
          Do you want to step in to the future before others
        </h2>
      </div>
      <div className="gpt3__footer-btn">
        <a href="/">Request Early Access</a>
      </div>
      <div className="gpt3__footer-links | flex">
        <div className="gpt3__footer-links_logo">
          <img src={gpt3logo} alt="gpt3 logo" />
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>
        <div className="gpt3__footer-links_div">
          <p>Links</p>
          <ul className="flow">
            <li>
              <a href="/">Overons</a>
            </li>
            <li>
              <a href="/">Social Media</a>
            </li>
            <li>
              <a href="/">Counters</a>
            </li>
          </ul>
        </div>
        <div className="gpt3__footer-links_div">
          <p>Company</p>
          <ul className="flow">
            <li>
              <a href="/">Terms & Conditions</a>
            </li>
            <li>
              <a href="/">Privacy Policy</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
        </div>
        <div className="gpt3__footer-links_div">
          <p>Get in touch</p>
          <ul className="flow">
            <li>Crechterwoord K12 182 DK Alknjkcb</li>
            <li>085-132567</li>
            <li>info@payme.net</li>
          </ul>
        </div>
      </div>
      <div className="gpt3__footer-copyright">
        <p>© 2021 GPT-3. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
