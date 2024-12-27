import React, { useState, useEffect } from 'react';
import Img from '../assets/software-developer-6521720_1920.jpg';
import '../App.css';

const Home = () => {
  const textArray = ["Developer Web", "SEO expert","Responsive Design"];
  const [currentText, setCurrentText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const typingSpeed = 100; 
  const deletingSpeed = 50; 

  useEffect(() => {
    const handleTyping = () => {
      if (isDeleting) {
        if (charIndex > 0) {
          setCurrentText((prev) => prev.slice(0, -1));
          setCharIndex((prev) => prev - 1);
        } else {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % textArray.length);
        }
      } else {
        if (charIndex < textArray[textIndex].length) {
          setCurrentText((prev) => prev + textArray[textIndex].charAt(charIndex));
          setCharIndex((prev) => prev + 1);
        } else {
          setIsDeleting(true);
        }
      }
    };

    const timeout = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textArray, textIndex]);

  return (
    <div id="home" className="home-container">
      <div className="image-wrapper">
        <img
          src={Img}
          alt="Photo developer"
          className="home-image"
        />
        <h1 className="Title_header">I am Augustin</h1>
        <div className="typing-animation">
          <span>{currentText}</span>
          <span className="cursor">|</span>
        </div>
      </div>
    </div>
  );
};

export default Home;
