import React from "react";
import "./Card.css";

const Card = ({emoji, heading, detail, color,}) => {
  
  return (
    <div className="card" style={{borderColor: {color}}}> 
      <img src={emoji} alt="" />
      <span>{heading}</span>
      <span>{detail}</span>
      <a  href="https://www.linkedin.com/in/sheraz-khan-343339160/" target="_blank" className="c-button" rel="noreferrer" >LEARN MORE</a>
    </div>
  );
};

export default Card;
