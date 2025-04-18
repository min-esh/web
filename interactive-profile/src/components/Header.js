import React from "react";

const Header = () => {
  return (
    <header className="s-header">
      <div className="header-logo">
        <a href="/">
          <img src="android-chrome-512x512.png" alt="Logo" />
        </a>
      </div>
      <div className="header-content">
        <nav className="row header-nav-wrap">
          <ul className="header-nav">
            <li><a className="smoothscroll" href="#hero">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
            <li><a className="smoothscroll" href="#services">Services</a></li>
            <li><a className="smoothscroll" href="#portfolio">Works</a></li>
            <li><a className="smoothscroll" href="#education">Education</a></li>
            <li><a className="smoothscroll" href="mailto:omgcanada@icloud.com">Email Me</a></li>
          </ul>
        </nav>
        <a href="https://github.com/101045330/web/blob/main/upload/resume-2025-web-version.pdf" className="btn btn--stroke btn--small">Download CV</a>
      </div>
      <a className="header-menu-toggle" href="#0"><span>Menu</span></a>
    </header>
  );
};

export default Header;

