import React from 'react';
import { Col } from 'react-bootstrap';
import bimg from '../assets/img/background_skill.jpg'
export const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx" style={{ backgroundImage: `url(${bimg})` }}>
        <img src={imgUrl} alt="Project" />
        <div className="proj-txtx-title">
          <h4>{title}</h4>
        </div>
        <div className="proj-txtx">
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};
