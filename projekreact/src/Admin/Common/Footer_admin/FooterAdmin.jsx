import React from 'react';
import facebook from "../Assets/img/facebook.svg";
import twit from "../Assets/img/twitter.svg";
import Instagram from "../Assets/img/instagram.svg";
import Linkend from "../Assets/img/linkedin.svg";
import yt from "..//Assets/img/youtube.svg";

const FooterAdmin = () => {
  return (
    <>
      <div className="footer-admin">
        <div className="footer-child"></div>
        <div className="sosmed"></div>
        <b className="savorflavor">SavorFlavor</b>
        <div className="copyright">
          <div className="copyright-2024-container">
            Copyright © 2024 SavorFlavor | All Rights Reserved |
            <span className="privacy-policy">Privacy Policy </span>
          </div>
        </div>
        <img className="facebook-1-icon" alt="" src={facebook}/>
        <img className="twitter-1-icon" alt="" src={twit}/>
        <img className="instagram-1-icon" alt="" src={Instagram}/>
        <img className="linkedin-1-icon" alt="" src={Linkend}/>
        <img className="youtube-1-icon" alt="" src={yt}/>
      </div> 
    </>
  );
};

export default FooterAdmin;
