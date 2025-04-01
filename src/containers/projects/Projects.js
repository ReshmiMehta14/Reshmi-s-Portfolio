import React, { useState } from 'react';
import './Project.scss'; // Ensure the file name matches exactly
import { projectsData } from '../../portfolio';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('cybersecurity');

  const handleToggle = (category) => {
    setSelectedCategory(category);
  };

  const projects = selectedCategory === 'cybersecurity'
    ? projectsData.cybersecurityProjects
    : projectsData.dataAIProjects;

  return (
    <div className="projects-section" id="projects">
      <h1 className="projects-title">My Projects</h1>
      
      <div className="toggle-buttons">
        <button
          className={selectedCategory === 'cybersecurity' ? 'active' : ''}
          onClick={() => handleToggle('cybersecurity')}
        >
          Cybersecurity Projects
        </button>
        <button
          className={selectedCategory === 'dataAI' ? 'active' : ''}
          onClick={() => handleToggle('dataAI')}
        >
          Data and AI Projects
        </button>
      </div>

      <div className="projects-list">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">Read More</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
