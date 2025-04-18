import React from "react";

const About = () => {
  return (
    <section id="about" className="s-about target-section">
      <div className="s-about__section s-about__section--profile">
        <div className="right-vert-line"></div>
        <div className="row">
          <div className="column large-6 medium-8 tab-full">
            <div className="section-intro" data-num="01" data-aos="fade-up">
              <h2 className="subhead">About Me</h2>
              <h4 className="display-1">Doctors called me a perfectionist and I learnt somehow not to be.</h4>
            </div>
            <div className="profile-pic" data-aos="fade-up">
              <img src="images/portfolio/character-animation.png" alt="Profile Picture" />
            </div>
            <h3 data-aos="fade-up">Profile</h3>
            <p data-aos="fade-up">
              Innovative Front-End Designer & Developer with expertise in web design, game design, UX/UI,
              and AI-driven online research & marketing solutions. Proven ability to optimize user engagement,
              streamline workflows, and enhance digital experiences through modern technologies and data-driven strategies.
              Passionate about blending creativity with technical proficiency to drive impactful results.
            </p>
          </div>
        </div>
      </div>
      <div className="s-about__section">
        <div className="row">
          <div className="column">
            <h3 data-aos="fade-up">Career</h3>
          </div>
        </div>
        <div className="row block-large-1-2 block-900-full work-positions">
          {/* Add career positions here */}
        </div>
      </div>
    </section>
  );
};

export default About;
