import React, { useState } from "react";
import "./footer.css";

const Footer = () => {
  const [val, setVal] = useState();
  const easterEgg = () => {
    // Could link to OpeningCrawl Component
  };

  return (
    <>
      <div id="footer">
        <div className="newsletter">
          Sign up for our News letter to keep <br />
          up-to-date with the latest news from our community. <br />
          <input
            value={val}
            type="email"
            placeholder="Sign up your email here or Type, a Long time ago"
            onChange={(e) => {
              setVal(e.target.value);
            }}
          />
          <button id="button-sub" onClick={easterEgg}>
            Submit
          </button>
        </div>

        <div className="socials">
          <h3 id="findushere">Find us here </h3>
          <div id="socialLink">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              FaceBook
            </a>
            <a href="https://www.twitter.com/" target="_blank" rel="noreferrer">
              Twitter
            </a>
            <a href="https://in.linkedin.com/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>

          <br />
          <h4 id="address">
            Address <br />
          </h4>
          <h6 id="addressLink">
            03/11, Developer Brain Avenue, <br />
            BTM 2'nd Stage, <br />
            Bengaluru, Karnataka, <br />
            India - 560076 <br />
          </h6>
        </div>
      </div>
    </>
  );
};

export default Footer;
