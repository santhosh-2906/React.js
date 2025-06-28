import React from 'react';
import '../styles/Home.css';
import Santhoshpic from '../assets/Santhosh_pic.jpg';

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home-container">
        <div className="home-text">
          <h1 className="home-title">Welcome to My Portfolio</h1>
          <p className="home-subtitle">Santhosh — Frontend Developer in Progress 🚀</p>
        </div>
        <div className="home-photo">
          <img src={Santhoshpic} alt="Santhosh Kumar" className="home-image" />
        </div>
      </div>
    </section>
  );
};

export default Home;
