import React, { useState } from "react";
import Cardw from "./cardwork";
import Print from "../assets/impression.avif";
import Booki from "../assets/Screenshot 2024-09-15 at 19-13-22 Booki.avif";
import Sophie from "../assets/Screenshot 2024-12-29 at 05-41-01 Sophie Bluel - Architecte d'intérieur.avif";
import Rer from "../assets/Screenshot 2024-12-27 at 01-09-05 React App.avif";
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
    <div className="experience-container">
      <div className="wave-background"></div>
      <div className="experience" id="work">
        <h2>Portfolio</h2>
        <div className="portfolio_card">
          <Cardw
            image={Print}
            title="Print-it"
            description="Debogage du site Print-it"
            onImageClick={handleImageClick}
          />
          <Cardw
            image={Booki}
            title="Booki Project"
            description="Réalisation d'une plateforme de réservation de logement avec différent design pour desktop,téléphone et tablette"
            onImageClick={handleImageClick}
          />
          <Cardw
            image={Sophie}
            title="Sophie Buel Showcase"
            description="Conception d'un site vitrine pour un architecte d'intérieur avec une base de données pour la connexion et pour l'affichage de ces projets"
            onImageClick={handleImageClick}
          />
          <Cardw
            image={Rer}
            title="Repas en route"
            description="Création d'un site qui permet de livrer des repas via abonement"
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
    </div>
  );
};

export default Experience;
