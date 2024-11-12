import React from 'react';
import './Portfolio.css';

function Portfolio() {
  const Project = ({ imgSrc, title, description, link }) => {
    return (
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6">
          <img
            src={imgSrc}
            className="d-block mx-lg-auto img-fluid project-img"
            alt={title}
            width="700"
            height="500"
            loading="lazy"
          />
        </div>
        <div className="col-lg-6 text-start">
          <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">{title}</h1>
          <p className="lead">{description}</p>
          <div className="d-grid gap-2 d-md-flex justify-content-start">
            <a href={link} target="_blank" rel="noopener noreferrer" className="btn btn-purple btn-lg px-4 me-md-2">
              Learn More
            </a>
          </div>
        </div>
      </div>
    );
  };

  // data
  const projects = [
    {
      imgSrc: './project1.jpg',
      title: 'Notecraft',
      description:
        'Notecraft is a simple note-taking app built with React. Users can easily add or delete notes, and each note consists of a title and content. It’s designed to be user-friendly and demonstrates the power of React in building dynamic applications.',
      link: 'https://xingtingp.github.io/NoteCraft/',
    },
    {
      imgSrc: './project2.jpg',
      title: 'Purr-fect Paws',
      description:
        'Explore, review, and rate cat breeds with Purr-fect Paws. This full-stack web app offers detailed breed profiles, interactive search, and a user review system. While there’s no live demo available, you can clone the project from the GitHub repository and run it locally.',
      link: 'https://github.com/XingtingP/Purr-fect-Paws', 
    },
  ];

  return (
    <section id="portfolio" className="container col-xxl-8 px-4 py-5">
      <h2 className="pb-2 border-bottom text-start">Made by Me:</h2>
      {projects.map((project, index) => (
        <Project
          key={index}
          imgSrc={project.imgSrc}
          title={project.title}
          description={project.description}
          link={project.link}
        />
      ))}
    </section>
  );
}

export default Portfolio;
