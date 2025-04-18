import React from "react";

const Services = () => {
  return (
    <section id="services" className="s-services target-section h-dark-bg">
      <div className="row s-services__content">
        <div className="vert-line"></div>
        <div className="column large-6 s-services__leftcol">
          <div className="section-intro" data-num="02" data-aos="fade-up">
            <h3 className="subhead">Expertise</h3>
            <h2 className="display-1">
              I transform old web technologies into fun, easy-to-use experiences that makes a person smile multiple times a day!
            </h2>
          </div>
          <fieldset className="lead" data-aos="fade-up">
            <legend>Tag Cloud:</legend>
            <div className="tag-cloud">
              <a href="#" className="tag" data-size="1">HTML5</a>
              <a href="#" className="tag" data-size="2">CSS3</a>
              <a href="#" className="tag" data-size="3">JavaScript</a>
              <a href="#" className="tag" data-size="4">React</a>
              <a href="#" className="tag" data-size="5">Node.js</a>
              <a href="#" className="tag" data-size="6">Angular</a>
              <a href="#" className="tag" data-size="7">PHP, PyMEL</a>
              <a href="#" className="tag" data-size="8">Java, C</a>
              <a href="#" className="tag" data-size="9">T-SQL, PL-SQL</a>
              <a href="#" className="tag" data-size="10">MongoDB</a>
              {/* Add more tags here */}
            </div>
          </fieldset>
        </div>
        <div className="column large-6">
          <ul className="services-list" data-aos="fade-up">
            <li className="services-list__item is-active">
              <article>
                <div className="services-list__item-header">
                  <h5>Web Design</h5>
                </div>
                <div className="services-list__item-body">
                  <ul>
                    <li>... trying to use the creative part of the brain to craft visually stunning and user-friendly websites.</li>
                    <li>... imagine a blend of an art and the technology to create seamless digital experiences that captivate users from the moment they click.</li>
                  </ul>
                </div>
              </article>
            </li>
            {/* Add more services here */}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Services;
