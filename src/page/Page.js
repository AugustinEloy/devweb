import React from "react";
import '../App.css';
import Home from "../component/home";
import Nav from "../component/nav";
import Service from "../component/service";
import Contact from "../component/contact";
import Experience from "../component/expereince";
import Footer from "../component/footer";


const Page = () =>{
    return (
        <div className="App">
            <Nav />
            <Home />
            <Service />
            <Experience />
            <Contact />
            <Footer />
        </div>
    )
}
export default Page;