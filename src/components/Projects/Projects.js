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
      <a className="youtube" href="https://www.youtube.com/playlist?list=PLUQm-VQnY5s3NSJ9fbZ7EEKgkBDZSwEZO" target="_blank">
        <img src="https://github.com/miles-au/miles-au.github.io/blob/develop/public/images/youtube.png?raw=true" />Checkout my App Showcase Playlist on YouTube
      </a>
      {cards}
    </div>
  );
}

export default Projects;