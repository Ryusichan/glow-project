import React from "react";

const Appbar = () => {
  return (
    <>
      <div id="fh5co-header">
        <header id="fh5co-header-section">
          <div className="container">
            <div className="nav-header">
              <a href="#" className="js-fh5co-nav-toggle fh5co-nav-toggle">
                <i></i>
              </a>
              <h1 id="fh5co-logo">
                <a href="index.html">Glow</a>
              </h1>
              <nav id="fh5co-menu-wrap" role="navigation">
                <ul className="sf-menu" id="fh5co-primary-menu">
                  <li className="active">
                    <a href="index.html">Home</a>
                  </li>
                  <li className="active">
                    <a href="portfolio.html">Work</a>
                  </li>
                  <li>
                    <a href="services.html">Services</a>
                  </li>
                  {/* </li> */}
                  <li>
                    <a href="about.html">About</a>
                  </li>
                  <li>
                    <a href="blog.html">Blog</a>
                  </li>
                  <li>
                    <a href="contact.html">Contact</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
      </div>

      <div className="fh5co-hero">
        <div className="fh5co-overlay"></div>
        <div
          className="fh5co-cover text-center"
          data-stellar-background-ratio="0.5"
          style={{ backgroundImage: "url(images/cover_bg_1.jpg)" }}
        >
          <div className="desc animate-box">
            <h2>
              Capture Every <strong>Good</strong> Things
            </h2>
            <span>
              Lovely Crafted by
              <a
                href="http://frehtml5.co/"
                target="_blank"
                className="fh5co-site-name"
              >
                FREEHTML5.co
              </a>
            </span>
            <p>
              <a className="btn btn-primary btn-lg btn-learn" href="#">
                Learn More
              </a>
              <a
                className="btn btn-primary btn-lg popup-vimeo btn-video"
                href="https://vimeo.com/channels/staffpicks/93951774"
              >
                <i className="icon-play"></i> Watch Video
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Appbar;
