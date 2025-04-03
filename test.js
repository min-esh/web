// Portfolio.js
import React from 'react';

function Portfolio() {
  return (
    <section id="portfolio" className="s-portfolio target-section">
      <div className="row s-portfolio__header">
        <div className="column large-6 medium-8 tab-full">
          <div className="section-intro" data-num="03" data-aos="fade-up">
            <h3 className="subhead">Portfolio</h3>
            <h2 className="display-1">
              A selection of recent projects I have worked on.
            </h2>
          </div>
        </div>
      </div>
      <div className="row s-porfolio__list block-large-1-2 block-tab-full collapse">
        <div className="column" data-aos="fade-up">
          <div className="folio-item">
            <div className="folio-item__thumb">
              <a className="folio-item__thumb-link" href="images/portfolio/gallery/portfolio2025.png" title="A Responsive Web Template" data-size="1050x700">
                <img src="images/portfolio/1t-web-design-responsive.png" srcSet="images/portfolio/1t-web-design-responsive.png 1x, images/portfolio/1t-web-design-responsive.png@2x.jpg 2x" alt="" />
              </a>
            </div>
            <div className="folio-item__info">
              <div className="folio-item__cat">Frontend UI Design</div>
              <h4 className="folio-item__title">A Responsive Web Template</h4>
            </div>
            <a href="https://www.github.com/101045330/portfolio/project-link-frontend-design" title="Project Link" className="folio-item__project-link">Project Link</a>
            <div className="folio-item__caption">
              <p>
                <strong>Situation:</strong> Our client needed a website that performed flawlessly across all devices to enhance user engagement.<br />
                <strong>Task:</strong> I was responsible for designing a responsive web template that adapted seamlessly to different screen sizes.<br />
                <strong>Action:</strong> I utilized modern CSS frameworks and media queries to ensure the layout adjusted dynamically, maintaining a consistent user experience.<br />
                <strong>Result:</strong> The new template boosted mobile traffic by 30% and improved overall user satisfaction, leading to a significant increase in conversions.
              </p>
            </div>
          </div>
        </div>
        <div className="column" data-aos="fade-up">
          <div className="folio-item">
            <div className="folio-item__thumb">
              <a className="folio-item__thumb-link" href="images/portfolio/4t-ux-design.png" title="AI/UX Design" data-size="1050x700">
                <img src="images/portfolio/4t-ux-design.png" srcSet="images/portfolio/4t-ux-design.png 1x" alt="" />
              </a>
            </div>
            <div className="folio-item__info">
              <div className="folio-item__cat folio-item__title">
                <h4>AI/UX Design</h4>
              </div>
            </div>
            <a href="https://www.github.com/101045330/portfolio/project-link-ai-ux-design" title="Project Link" className="folio-item__project-link">Project Link</a>
            <div className="folio-item__caption">
              <p>
                <strong>Situation:</strong> Our team aimed to integrate AI into our product to enhance user interactions.<br />
                <strong>Task:</strong> I led the design of the AI/UX for our Copilot feature, focusing on making AI assistance intuitive and non-intrusive.<br />
                <strong>Action:</strong> I conducted user research, created wireframes, and iterated based on feedback to develop a seamless AI integration.<br />
                <strong>Result:</strong> The Copilot feature received positive reviews, with users reporting a 25% increase in productivity and a smoother workflow.
              </p>
            </div>
          </div>
        </div>
        <div className="column" data-aos="fade-up">
          <div className="folio-item">
            <div className="folio-item__thumb">
              <a className="folio-item__thumb-link" href="images/portfolio/gallery/ui-ux-research-wearable.jpeg" title="Building Blocks" data-size="1050x700">
                <img src="images/portfolio/building-blocks.jpg" srcSet="images/portfolio/2t-ui-ux-research-wearable.jpeg 1x, images/portfolio/2t-ui-ux-research-wearable.jpeg 2x" alt="" />
              </a>
            </div>
            <div className="folio-item__info">
              <div className="folio-item__cat">Future UI Design</div>
              <h4 className="folio-item__title">Wearable UI - Sketch</h4>
            </div>
            <a href="https://www.github.com/101045330/portfolio/project-link-wearable-ui-design" title="Project Link" className="folio-item__project-link">Project Link</a>
            <div className="folio-item__caption">
              <p>
                <strong>Situation:</strong> We were tasked with designing a user interface for a new wearable device.<br />
                <strong>Task:</strong> I created detailed sketches that prioritized usability and aesthetics within the constraints of a small screen.<br />
                <strong>Action:</strong> I collaborated with engineers to ensure the design was feasible and conducted usability tests to refine the interface.<br />
                <strong>Result:</strong> The final UI was praised for its intuitive design and ease of use, contributing to the device's successful launch.
              </p>
            </div>
          </div>
        </div>
        <div className="column" data-aos="fade-up">
          <div className="folio-item">
            <div className="folio-item__thumb">
              <a className="folio-item__thumb-link" href="images/portfolio/gallery/character-animation.png" title="Shout and Jump" data-size="1050x700">
                <img src="images/portfolio/1t-character-animation.png" srcSet="images/portfolio/1t-character-animation.png 1x, images/portfolio/1t-character-animation.png 2x" alt="" />
              </a>
            </div>
            <div className="folio-item__info">
              <div className="folio-item_cat"> 3D Animation</div>
              <h4 className="folio-item__title">Emotional Character Animation</h4>
            </div>
            <a href="https://www.github.com/101045330/portfolio/project-link-emotional-character-animation" title="Project Link" className="folio-item__project-link">Project Link</a>
            <div className="folio-item__caption">
              <p>
                <strong>Situation:</strong> Our game required characters that evoked strong emotional responses from players.<br />
                <strong>Task:</strong> I was in charge of animating a key character to convey a range of emotions effectively.<br />
                <strong>Action:</strong> I studied reference materials and used advanced animation techniques to bring the character to life.<br />
                <strong>Result:</strong> The character's emotional depth resonated with players, enhancing the game's narrative and receiving critical acclaim.
              </p>
            </div>
          </div>
        </div>
        <div className="column" data-aos="fade-up">
          <div className="folio-item">
            <div className="folio-item__thumb">
              <a className="folio-item__thumb-link" href="images/portfolio/gallery/game-design-3.png" title="The Lamp" data-size="1050x700">
                <img src="images/portfolio/5t-game-design-1.png" srcSet="images/portfolio/5t-game-design-1.png 1x, images/portfolio/5t-game-design-1@2x.png 2x" alt="" />
              </a>
            </div>
            <div className="folio-item__info">
              <div className="folio-item__cat">Game Design</div>
              <h4 className="folio-item__title">Interactive 3D game level with custom animation</h4>
            </div>
            <a href="https://www.github.com/101045330/portfolio/project-link-interaction-level-design" title="Project Link" className="folio-item__project-link">Project Link</a>
            <div className="folio-item__caption">
              <p>
                <strong>Situation:</strong> We needed to create an engaging 3D game level that stood out from competitors.<br />
                <strong>Task:</strong> I designed an interactive level with custom animations to immerse players in the game world.<br />
                <strong>Action:</strong> I worked closely with the development team to integrate complex animations and interactive elements.<br />
                <strong>Result:</strong> The level became a fan favorite, with players spending more time exploring and engaging with the environment, leading to higher user retention.
              </p>
            </div>
          </div>
        </div>
        <div className="column" data-aos="fade-up">
          <div className="folio-item">
            <div className="folio-item__thumb">
              <a className="folio-item__thumb-link" href="images/portfolio/gallery/generative-artwork.png" title="The Lamp" data-size="1050x700">
                <img src="images/portfolio/5t-game-design-1.png" srcSet="images/portfolio/6t-generative-artwork.png 1x, images/portfolio/6t-generative-artwork@2x.png 2x" alt="" />
              </a>
            </div>
            <div className="folio-item__info">
              <div className="folio-item__cat">Generative AI </div>
              <h4 className="folio-item__title">Midjourney, ChatGPT, leChat, ... </h4>
            </div>
            <a href="#" title="Project Link" className="folio-item__project-link">Project Link</a>
            <div className="folio-item__caption">
              <p>
                <strong>Situation:</strong> Our project required innovative solutions to streamline content creation and user interaction.<br />
                <strong>Task:</strong> I implemented Generative AI tools like Midjourney, ChatGPT, and LeChat to enhance our workflow.<br />
                <strong>Action:</strong> I integrated these tools to automate content generation, provide real-time user support, and create visually stunning designs.<br />
                <strong>Result:</strong> The use of GenAI significantly improved efficiency, reducing content creation time by 40% and enhancing user engagement through personalized interactions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;

// Education.js
import React from 'react';

function Education() {
  return (
    <section id="education" className="s-testimonials">
      <div className="row collapse">
        <div className="column large-full">
          <div className="testimonial-slider" data-aos="fade-up">
            <div className="testimonial-slider__slide">
              <h5>Diploma in Frontend Design<br />(post graduate) 2025</h5>
              <div className="testimonial-slider__author">
                <img src="images/avatars/gbc-student.png" alt="Author image" className="testimonial-slider__avatar" />
                <cite className="testimonial-slider__cite">
                  <strong>George Brown College</strong>
                  <span>Toronto, Canada</span>
                </cite>
              </div>
            </div>
            <div className="testimonial-slider__slide">
              <h5>Certificate in .Net Development <br />(post graduate) 2015</h5>
              <div className="testimonial-slider__author">
                <img src="images/avatars/humber-student.png" alt="Author image" className="testimonial-slider__avatar" />
                <cite className="testimonial-slider__cite">
                  <strong>Humber College </strong> 
                  <span>Toronto, Canada</span>
                </cite>
              </div>
            </div>
            <div className="testimonial-slider__slide">
              <h5>Advanced Diploma in Game Design <br />(under graduate) 2023</h5>
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
            <h2 className="section-desc" data-aos="fade-up">
              Need a great reliable web hosting?
            </h2>
          </div>
        </div>
        <div className="row cta-content" data-aos="fade-up">
          <div className="column large-full">
            <p>
              We highly recommend <a href="https://www.networksolutions.com">Network Solutions</a>.
            </p>
            <a href="https://www.networksolutions.com" className="btn btn--primary h-full-width">Get Started</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;

// Footer.js
import React from 'react';

function Footer() {
  return (
    <footer className="s-footer h-dark-bg">
      <div className="right-vert-line"></div>
      <div className="row s-footer__main">
        <div className="column large-6">
          <div className="section-intro" data-aos="fade-up">
            <h3 className="subhead">Get In Touch</h3>
            <h2 className="display-1">
              "Let us plan, execute and automate one more concept on the web", - Min G.
            </h2>
          </div>
          <div className="footer-email-us">
            <a href="mailto:omgcanada@icloud.com" className="btn btn--primary h-full-width">Let's Talk</a>
          </div>
        </div>
        <div className="column large-5">
          <div className="footer-contacts">
            <div className="footer-contact-block" data-aos="fade-up">
              <h5 className="footer-contact-block__header">
                Email
              </h5>
              <p className="footer-contact-block__content">
                <a href="mailto:#0">OmgCanada@iCloud.com</a>
              </p>
            </div>
            <div className="footer-contact-block" data-aos="fade-up">
              <h5 className="footer-contact-block__header">
                5G+
              </h5>
              <p className="footer-contact-block__content">
                <a href="tel:+1975432345">+1 44372 999 234</a>
              </p>
            </div>
            <br />
            <div className="footer-contact-block" data-aos="fade-up">
              <h5 className="footer-contact-block__header">
                Social
              </h5>
              <ul className="footer-contact-block__list">
                <li><a href="https://www.instagram.com/mines_hg/">Instagram</a></li> 
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="row s-footer__bottom">
        <div className="column large-full ss-copyright">
          <span> &copy; Copyright MIN G. 2025</span>
          <span> <a href="">Pay to: GST/HST 72007 7742, ON, Canada</a></span>
        </div>
        <div className="ss-go-top">
          <a className="smoothscroll" title="Back to Top" href="#top">
            <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg"> 
              <circle cx="100" cy="100" r="95" stroke="black" stroke-width="5" fill="white" />
              <text x="50" y="90" font-family="Arial" font-size="40" fill="blue">OMG</text>
              <text x="50" y="130" font-family="Arial" font-size="20" fill="blue"></text>
              <path d="M100,30 L110,50 L90,50 Z" fill="blue" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

// App.js
import React from 'react';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Services from './Services';
import Portfolio from './Portfolio';
import Education from './Education';
import Footer from './Footer';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Education />
      <Footer />
    </div>
  );
}

export default App;