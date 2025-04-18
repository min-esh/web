import React from "react";

const Education = () => {
  return (
    <section id="education" className="s-testimonials">
      <div className="row collapse">
        <div className="column large-full">
          <div className="testimonial-slider" data-aos="fade-up">
            <div className="testimonial-slider__slide">
              <h5>Diploma in Frontend Design (post graduate) 2025</h5>
              <div className="testimonial-slider__author">
                <img src="images/avatars/gbc-student.png" alt="Author image" className="testimonial-slider__avatar" />
                <cite className="testimonial-slider__cite">
                  <strong>George Brown College</strong>
                  <span>Toronto, Canada</span>
                </cite>
              </div>
            </div>
            <div className="testimonial-slider__slide">
              <h5>Certificate in .Net Development (post graduate) 2015</h5>
              <div className="testimonial-slider__author">
                <img src="images/avatars/humber-student.png" alt="Author image" className="testimonial-slider__avatar" />
                <cite className="testimonial-slider__cite">
                  <strong>Humber College</strong>
                  <span>Toronto, Canada</span>
                </cite>
              </div>
            </div>
            <div className="testimonial-slider__slide">
              <h5>Advanced Diploma in Game Design (under graduate) 2023</h5>
              <div className="testimonial-slider__author">
                <img src="images/avatars/gbc-student.png" alt="Author image" className="testimonial-slider__avatar" />
                <cite className="testimonial-slider__cite">
                  <strong>George Brown College</strong>
                  <span>Toronto, Canada</span>
                </cite>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="s-cta">
        <div className="row">
          <div className="column large-full">
            <h2 className="section-desc" data-aos="fade-up">Need a great reliable web hosting?</h2>
          </div>
        </div>
        <div className="row cta-content" data-aos="fade-up">
          <div className="column large-full">
            <p>We highly recommend <a href="https://www.networksolutions.com">Network Solutions</a>.</p>
            <a href="https://www.networksolutions.com" className="btn btn--primary h-full-width">Get Started</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
