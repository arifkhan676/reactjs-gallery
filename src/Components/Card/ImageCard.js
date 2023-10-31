import React from "react";
import Card from "react-bootstrap/Card";
import "./card.css";

const ImageCard = (props) => {
  return (
    <div>
      <div className="card">
        <img className="image" src={props.image} alt="" />
      </div>
    </div>
  );
};

export default ImageCard;
