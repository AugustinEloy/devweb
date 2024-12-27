import React from "react";
import "../App.css";

const Cardw = ({ title, description, image, onImageClick }) => {
  return (
    <div className="cardwork">
      <img
        src={image}
        alt={title}
        className="card-image"
        onClick={() => onImageClick(image)} 
      />
      <h3 className="card-titlew">{title}</h3>
      <p className="card-descriptionw">{description}</p>
    </div>
  );
};

export default Cardw;
