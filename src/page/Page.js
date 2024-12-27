import React from "react";
import '../App.css';
import Home from "../component/home";
import Nav from "../component/nav";
import Service from "../component/service";
import Experience from "../component/expereince";
import Contact from "../component/contact";


const Page = () =>{
    return (
        <div className="App">
            <Nav />
            <Home />
            <Service />
            <Experience />
            <Contact/>
        </div>
    )
}
export default Page;