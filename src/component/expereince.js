import React, { useState } from "react";
import Cardw from "./cardwork";
import Print from "../assets/impression.png";
import Booki from "../assets/Screenshot 2024-09-15 at 19-13-22 Booki.png";
import Sophie from "../assets/Screenshot 2024-09-15 at 19-15-14 Sophie Bluel - Architecte dintérieur.png";
import Rer from "../assets/Screenshot 2024-12-27 at 01-09-05 React App.png";
import "../App.css";

const Experience = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="experience" id="work">
      <h2>Portfolio</h2>
      <div className="portfolio_card">
        <Cardw
          image={Print}
          title="Sophie Buel Architecture"
          description="Réalisation du site de Sophie Buel architecte en plusieurs formats (phone, desktop)"
          onImageClick={handleImageClick}
        />
        <Cardw
          image={Booki}
          title="Booki Project"
          description="Réalisation d'une plateforme de réservation de logement responsive"
          onImageClick={handleImageClick}
        />
        <Cardw
          image={Sophie}
          title="Sophie Buel Showcase"
          description="Conception d'un site vitrine pour un architecte d'intérieur"
          onImageClick={handleImageClick}
        />
        <Cardw
          image={Rer}
          title="Sophie Buel Showcase"
          description="Conception d'un site vitrine pour un architecte d'intérieur"
          onImageClick={handleImageClick}
        />
      </div>

      {selectedImage && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-button" onClick={closeModal}>
              &times;
            </span>
            <img src={selectedImage} alt="Portfolio" className="modal-image" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Experience;
