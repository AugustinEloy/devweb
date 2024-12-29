import React from "react";
import "../App.css";

const Aboutme = () => {
  const skills = [
    { name: "React", value: 90 },
    { name: "JavaScript", value: 90 },
    { name: "CSS", value: 80 },
    { name: "Node.js", value: 70 },
  ];

  return (
    <div className="aboutme_background" id="aboutme">
      <div className="aboutme_container">
        <div className="aboutme_text_container">
          <h2 className="aboutme_title">About Me</h2>
          <p className="aboutme_text">
             Développeur web fullstack passionné, je crée des applications performantes et intuitives en combinant des compétences solides en front-end et back-end. Avec une maîtrise de frameworks modernes comme React, Node.js, et des bases solides en HTML, CSS, et JavaScript, je conçois des solutions adaptées aux besoins des utilisateurs et des entreprises.  
             Suivant une formation spécialisée en développement web, j'accorde une grande importance à l'expérience utilisateur, la qualité du code et les meilleures pratiques en matière de développement.  
             Toujours curieux et en quête de nouveaux défis.  
          </p>

        </div>
        <div className="skills_container">
          {skills.map((skill, index) => (
            <div className="skill" key={index}>
              <p>{skill.name}</p>
              <div className="progress-bar">
                <div
                  className="progress-bar-fill"
                  style={{ width: `${skill.value}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
