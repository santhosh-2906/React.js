import React from "react";
import "../Styles/Projects.css";

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-grid">
        <div
          className="project-card"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1501973801540-537f08ccae7b?auto=format&fit=crop&w=800&q=80')`
          }}
        >
          <div className="project-content">
            <h3>Portfolio Website</h3>
            <p>Personal portfolio built with React and CSS.</p>
            <a href="#" target="_blank" rel="noreferrer">View Code</a>
          </div>
        </div>

        <div
          className="project-card"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1551033406-611cf9a28f73?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')`
          }}
        >
          <div className="project-content">
            <h3>Todo App</h3>
            <p>A simple Todo app built with React Hooks.</p>
            <a href="#" target="_blank" rel="noreferrer">View Code</a>
          </div>
        </div>

        <div
          className="project-card"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1523473827532-86d0656c0f7f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')`
          }}
        >
          <div className="project-content">
            <h3>Weather App</h3>
            <p>Real-time weather data using an API.</p>
            <a href="#" target="_blank" rel="noreferrer">View Code</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
