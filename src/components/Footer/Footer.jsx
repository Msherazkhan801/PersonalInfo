import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>sheraz.khan@iplex.co</span>
        <div className="f-icons">
        <a href="https://instagram.com/sherazkhan801/" target="_blank" rel="noreferrer" > <Insta color="white" size={"3rem"} /></a>
          <a href="https://www.facebook.com/profile.php?id=100006408064542" target="_blank" rel="noreferrer" >   <Facebook color="white" size={"3rem"} /></a>
          <a href="https://github.com/Msherazkhan801" target="_blank" rel="noreferrer" >  <Gitub color="white" size={"3rem"} /></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
