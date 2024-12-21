import React from "react";
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Card = ({ title, description, icon }) => {
    return (
      <div className="card">
        <div className="card-icon">
        <FontAwesomeIcon icon={icon} size="2x" />
        </div>
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
      </div>
    );
  };
  
  export default Card;