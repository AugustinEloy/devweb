import React from "react";
import Card from "./cardserv";
import '../App.css'
import { faDesktop, faCode } from '@fortawesome/free-solid-svg-icons';

const Service = () => {
    return (
    <div className="service">
        <h2>Services</h2>
        <div className="services-container" id="services">
            <Card 
            icon={faDesktop}
            title="Develloper web"
            description="Je conçois et développe des sites web modernes et performants, adaptés à vos besoins spécifiques. De la création de interfaces intuitives à l'implémentation de fonctionnalités avancées, je m'assure que votre présence en ligne soit à la hauteur de vos attentes."

            />
            <Card 
            icon={faCode}
            title="SEO expert"
            description="Optimisez votre visibilité en ligne avec mes stratégies SEO personnalisées. J'analyse et améliore le référencement de votre site pour augmenter votre trafic organique, améliorer votre classement sur les moteurs de recherche et attirer davantage de clients potentiels."

            />
              <Card 
            icon={faDesktop}
            title="Responsive Design"
            description="Je crée des designs responsives qui garantissent une expérience utilisateur optimale sur tous les appareils. Que ce soit sur mobile, tablette ou desktop, votre site sera toujours esthétique, fonctionnel et facile à naviguer."

            />
            <Card 
            icon={faCode}
            title="Fullstack developer"
            description="En tant que développeur fullstack, je maîtrise à la fois le frontend et le backend de vos projets web. De la conception de l'interface utilisateur à la gestion des bases de données et des serveurs, je vous offre une solution complète et intégrée pour vos besoins numériques."

            />
             
        </div>
    </div>
    )
}
export default Service;