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
      <p>Mobile + Web Dev with interest in AR</p>
      <div className="callouts">
        <a className="callout" href="https://www.youtube.com/playlist?list=PLUQm-VQnY5s3NSJ9fbZ7EEKgkBDZSwEZO" target="_blank">
          <img src="https://github.com/miles-au/miles-au.github.io/blob/develop/public/images/youtube.png?raw=true" />Checkout my App Showcase Playlist on YouTube
      </a>
        <a className="callout" href="https://github.com/miles-au/miles-au.github.io/blob/develop/public/assets/Miles%20Au%20-%20Resume.pdf" target="_blank">
          <img src="https://github.com/miles-au/miles-au.github.io/blob/develop/public/images/file.png?raw=true" />Click here to checkout my resume
      </a>
      </div>
      {cards}
    </div>
  );
}

export default Projects;