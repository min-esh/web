import React from "react";

const Portfolio = () => {
  return (
    <section id="portfolio" className="s-portfolio target-section">
      <div className="row s-portfolio__header">
        <div className="column large-6 medium-8 tab-full">
          <div className="section-intro" data-num="03" data-aos="fade-up">
            <h3 className="subhead">Portfolio</h3>
            <h2 className="display-1">A selection of recent projects I have worked on.</h2>
          </div>
        </div>
      </div>
      <div className="row s-porfolio__list block-large-1-2 block-tab-full collapse">
        <div className="column" data-aos="fade-up">
          <div className="folio-item">
            <div className="folio-item__thumb">
              <a className="folio-item__thumb-link" href="images/portfolio/gallery/portfolio2025.png" title="A Responsive Web Template" data-size="1050x700">
                <img src="images/portfolio/1t-web-design-responsive.png" alt="Responsive Web Template" />
              </a>
            </div>
            <div className="folio-item__info">
              <div className="folio-item__cat">Frontend UI Design</div>
              <h4 className="folio-item__title">A Responsive Web Template</h4>
            </div>
            <a href="https://www.github.com/101045330/portfolio/project-link-frontend-design" title="Project Link" className="folio-item__project-link">Project Link</a>
            <div className="folio-item__caption">
              <p>
                <strong>Situation:</strong> Our client needed a website that performed flawlessly across all devices to enhance user engagement.
                <strong>Task:</strong> I was responsible for designing a responsive web template that adapted seamlessly to different screen sizes.
                <strong>Action:</strong> I utilized modern CSS frameworks and media queries to ensure the layout adjusted dynamically, maintaining a consistent user experience.
                <strong>Result:</strong> The new template boosted mobile traffic by 30% and improved overall user satisfaction, leading to a significant increase in conversions.
              </p>
            </div>
          </div>
        </div>
        {/* Add more portfolio items here */}
      </div>
    </section>
  );
};

export default Portfolio;
