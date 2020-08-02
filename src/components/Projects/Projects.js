import React from 'react';

import Card from '../Card/Card';

import './Projects.scss';
import ProjectsData from '../../projectsData';

function Projects() {

  // Get projects from JSON
  const cards = ProjectsData.map((project) => {
    return <Card data={project} />
  });

  return (
    <div className="projects">
      {cards}
    </div>
  );
}

export default Projects;