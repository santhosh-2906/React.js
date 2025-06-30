import React from 'react';
import '../styles/Skills.css';

const skillsData = [
  {
    name: 'HTML',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  },
  {
    name: 'CSS',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  },
  {
    name: 'JavaScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  },
  {
    name: 'React',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  },
  {
    name: 'Bootstrap',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
  },
  {
    name: 'Tailwind CSS',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
  },
  {
    name: 'jQuery',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg',
  },
  {
    name: 'Git',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    link: 'https://github.com/santhosh-2906', // ✅ Only Git has a link!
  },
  {
    name: 'MySQL',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  },
  {
    name: 'Python',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  },
];

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <h2 className="skills-title">Skills</h2>
      <div className="skills-container">
        <div className="skills-grid">
          {skillsData.map((skill, index) => (
            <div
              className={`skill-card ${skill.link ? 'has-link' : ''}`}
              key={index}
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="skill-icon"
              />
              <p>{skill.name}</p>
              {skill.link && (
                <a
                  href={skill.link}
                  target="_blank"
                  rel="noreferrer"
                  className="skill-hover-button"
                >
                  Visit GitHub
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
