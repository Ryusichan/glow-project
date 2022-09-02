import React from "react";
import { Link } from "react-router-dom";

const Appbar = () => {
  return (
    <>
      <div id="fh5co-header">
        <header id="fh5co-header-section">
          <div className="container">
            <div className="nav-header">
              <Link to="/" className="js-fh5co-nav-toggle fh5co-nav-toggle">
                <i></i>
              </Link>
              <h1 id="fh5co-logo">
                <Link to="/">Glow</Link>
              </h1>
              <nav id="fh5co-menu-wrap" role="navigation">
                <ul className="sf-menu" id="fh5co-primary-menu">
                  <li className="nav-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="portfolio">Work</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="services">Services</Link>
                  </li>
                  {/* </li> */}
                  <li className="nav-item">
                    <Link to="about">About</Link>
                  </li>
                  {/* <li>
                    <Link to="blog">Blog</Link>
                  </li> */}
                  <li className="nav-item">
                    <Link to="contact">Contact</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default Appbar;
