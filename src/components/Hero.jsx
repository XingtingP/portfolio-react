import React, { useEffect } from 'react';
import './Hero.css';

function Hero() {
  useEffect(() => {
    const contactButton = document.querySelector('.contact-me');
    const smilyFace = document.querySelector('.smily');

    const handleMouseOver = () => smilyFace.classList.add('animate');
    const handleMouseOut = () => smilyFace.classList.remove('animate');

    contactButton.addEventListener('mouseover', handleMouseOver);
    contactButton.addEventListener('mouseout', handleMouseOut);

    return () => {
      contactButton.removeEventListener('mouseover', handleMouseOver);
      contactButton.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return (
    <section id="hero" className="px-4 py-5 my-5 text-center">
      {/* Smily emoji */}
      <div className="smily mb-3">
        <div className="left-eye eyes"></div>
        <div className="right-eye eyes"></div>
        <div className="lips"></div>
      </div>

      <h1 className="display-5 fw-bold text-body-emphasis">Hi, I'm Xingting</h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">
          <span style={{ fontSize: '1em' }}>&lt;/&gt;</span> Welcome to my portfolio. I’m a web developer with a
          twist—starting out as a fashion designer, but now I code!
          I went to art school, immersed myself in colors and fabrics, and somehow returned as a programmer.
          Ooops... how did that happen? 😅 <span style={{ fontSize: '1em' }}>&lt;/&gt;</span>
        </p>
        <div className="d-grid gap-2 my-5 d-sm-flex justify-content-sm-center">
          <a href="#contact" className="btn btn-lg px-4 gap-3 contact-me btn-purple">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
