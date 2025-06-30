import React from 'react';
import '../styles/About.css';
import Santhoshpic from '../assets/Santhosh_pic.jpg';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-image">
          <img src={Santhoshpic} alt="Santhosh Kumar" />
        </div>
        <div className="about-content">
          <h2 className="about-title">About Me</h2>
          <p className="about-text">
            Hi, I’m Santhosh Kumar — a passionate Frontend Developer with a B.Sc. in Computer Science and an MBA in Systems & Finance.
            I specialize in building responsive, dynamic web applications using HTML, CSS, JavaScript, and React.js.
            With experience designing clean user interfaces, reusable components, and scalable architecture,
            I love turning ideas into maintainable, modern websites.
          </p>
          <p className="about-text">
            I previously worked as a Virtual Relationship Manager at HDFC Bank and have always been interested in technology — which inspired me to learn web development and create modern user interfaces.
          </p>
          <a
            href="/Santhosh_Web_Designer_Resume.pdf"
            download
            className="about-resume"
          >
            📄 Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
