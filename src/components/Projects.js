import React from 'react';
import './Projects.css';  // Ensure to link the above CSS

const projects = [
  {
    title: "Project Title 1",
    description: "Short description about the project explaining the key highlights and technologies used.",
    link: "#",  // Link to the project demo or code
    imgSrc: "https://via.placeholder.com/400" // Replace with actual image links
  },
  {
    title: "Project Title 2",
    description: "A description of your second project, tools used, and unique features.",
    link: "#",
    imgSrc: "https://via.placeholder.com/400"
  },
  {
    title: "Project Title 3",
    description: "Information about this project and how it demonstrates your skills.",
    link: "#",
    imgSrc: "https://via.placeholder.com/400"
  },
  {
    title: "Project Title 4",
    description: "Information about this project and how it demonstrates your skills.",
    link: "#",
    imgSrc: "https://via.placeholder.com/400"
  },
  {
    title: "Project Title 5",
    description: "Information about this project and how it demonstrates your skills.",
    link: "#",
    imgSrc: "https://via.placeholder.com/400"
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-header">
        <h2>Projects</h2>
        <p>Some of my recent projects showcasing my skills in different areas of development.</p>
      </div>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img src={project.imgSrc} alt={project.title} />
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
