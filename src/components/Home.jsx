import React from "react";
import "../styles/Home.css";

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <p className="welcome-line">Welcome to my portfolio</p>
        <h1 className="home-title">Hi, I'm Santhosh</h1>
        <p className="home-subtitle">
          Frontend Developer building clean, responsive web apps with React.
        </p>
        <a href="#projects" className="btn-primary">
          View My Work
        </a>
      </div>
      <div className="scroll-down">↓</div>
    </section>
  );
};

export default Home;
