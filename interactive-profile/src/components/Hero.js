import React from "react";

const Hero = () => {
  return (
    <section id="hero" className="s-hero target-section" data-parallax="scroll" data-image-src="images/hero-bg-4000.jpg">
      <div className="row hero-content">
        <div className="column large-full">
          <h1>
            I'm MIN G.,
            <br /><br />
            a frontend designer & a developer
            <br /><br />
            for the web and the game industry
          </h1>
          <ul className="hero-social">
            <li><a href="https://linkedin.com/in/mineshonline">LinkedIn</a></li>
            <li><a href="https://www.github.com/101045330/web">Github</a></li>
          </ul>
        </div>
      </div>
      <div className="hero-scroll">
        <a href="#about" className="scroll-link smoothscroll">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 24l-8-9h6v-15h4v15h6z"/></svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
