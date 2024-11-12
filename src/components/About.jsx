import React from 'react';
//import './About.css'; 

function About() {
  return (
    <section id="about" className="container col-xxl-8 px-4 py-5">
      <h2 className="pb-2 border-bottom my-4 text-start">About Me</h2>
      <div className="row align-items-center">
        {/* About Me */}
        <div className="col-lg-6 order-lg-2 text-start">
          <p className="lead">Life is full of surprises, and no decision is ever final.</p>
          <p className="about-lead">
            I started with a degree in art, but along the way, I developed a strong passion for coding.
            I wanted to create websites—not by using templates, but by learning to code myself.
            So, I went back to school and recently graduated with a degree in Computer Science.
            Now, I'm merging creativity with technology!
          </p>
          <p className="about-lead">
            Front-end development is my main focus, and I'm skilled in HTML, CSS, JavaScript, jQuery, React, APIs,
            Node.js, Bootstrap, Express.js, etc.—you get the idea!
          </p>
          <p className="about-lead">
            When I'm not coding, you'll find me jamming to music, hanging out with my two cats and a dog,
            or diving into a good video game. After all, a little fun goes a long way in keeping the creativity flowing!
          </p>
        </div>

        {/* Picture */}
        <div className="col-lg-6 order-lg-1">
          <img
            src="./about.JPG"
            className="d-block mx-lg-auto img-fluid"
            alt="A photo of me"
            style={{ maxWidth: '300px', height: 'auto' }}
            loading="lazy"
          />
        </div>
      </div>
      <hr className="my-4" />
    </section>
  );
}

export default About;
