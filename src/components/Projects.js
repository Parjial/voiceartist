import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import backgroundImg from '../assets/img/background_project.jpg';

export const Projects = () => {
  const servicesData = [
    {
      icon: 'fas fa-microphone', // Font Awesome icon for Voice Over
      title: 'Voice Over',
      description: 'Professional voice recordings for various media.',
    },
    {
      icon: 'fas fa-language', // Font Awesome icon for Language Translation
      title: 'Language Translation',
      description: 'Accurate translation services for multiple languages.',
    },
    {
      icon: 'fas fa-film', // Font Awesome icon for Animation Movie
      title: 'Animation Movie',
      description: 'Creating captivating animated movies and videos.',
    },

  ];

  return (
    <div className="projects-container project" id="project">
      <br></br><br></br><br></br><br></br><br></br><br></br>
      <h1>Services Provided</h1>
      <div className="services-container">
        {servicesData.map((service, index) => (
          <div className="service-box" key={index}>
            <i className={service.icon} aria-hidden="true"></i>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
