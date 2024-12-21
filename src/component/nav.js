import React from "react";
import '../App.css';

const Nav = () => {
  return (
    <nav className="navbar">
      <h1 className="navbar-title">Augustin</h1>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link js-scroll active" href="#home">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link js-scroll" href="#services">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link js-scroll" href="#work">Work</a>
        </li>
        <li className="nav-item">
          <a className="nav-link js-scroll" href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
