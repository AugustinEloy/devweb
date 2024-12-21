import React from "react";
import Card from "./card";
import '../App.css'
import { faDesktop, faCode } from '@fortawesome/free-solid-svg-icons';

const Service = () => {
    return (
    <div>
        <h2>Services</h2>
        <div className="services-container">
            <Card 
            icon={faDesktop}
            title="Develloper web"
            description="je suis trop fort normal c'est moi"
            />
            <Card 
            icon={faCode}
            title="Designer ui/u"
            description="je suis trop fort normal c'est pas moi"
            />
        </div>
    </div>
    )
}
export default Service;