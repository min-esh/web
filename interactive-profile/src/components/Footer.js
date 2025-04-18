import React from "react";

const Footer = () => {
  return (
    <footer className="s-footer h-dark-bg">
      <div className="right-vert-line"></div>
      <div className="row s-footer__main">
        <div className="column large-6">
          <div className="section-intro" data-aos="fade-up">
            <h3 className="subhead">Get In Touch</h3>
            <h2 className="display-1">"Let us plan, execute and automate one more concept on the web", - Min G.</h2>
          </div>
          <div className="footer-email-us">
            <a href="mailto:omgcanada@icloud.com" className="btn btn--primary h-full-width">Let's Talk</a>
          </div>
        </div>
        <div className="column large-5">
          <div className="footer-contacts">
            <div className="footer-contact-block" data-aos="fade-up">
              <h5 className="footer-contact-block__header">Email</h5>
              <p className="footer-contact-block__content"><a href="mailto:omgcanada@icloud.com">OmgCanada@iCloud.com</a></p>
            </div>
            <div className="footer-contact-block" data-aos="fade-up">
              <h5 className="footer-contact-block__header">5G+</h5>
              <p className="footer-contact-block__content"><a href="tel:+1975432345">+1 44372 999 234</a></p>
            </div>
            <div className="footer-contact-block" data-aos="fade-up">
              <h5 className="footer-contact-block__header">Social</h5>
              <ul className="footer-contact-block__list">
                <li><a href="https://www.instagram.com/mines_hg/">Instagram</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="row s-footer__bottom">
        <div className="column large-full ss-copyright">
          <span>&copy; Copyright MIN G. 2025</span>
          <span><a href="">Pay to: GST/HST 72007 7742, ON, Canada</a></span>
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
};

export default Footer;
