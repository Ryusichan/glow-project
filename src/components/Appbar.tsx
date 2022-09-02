import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Appbar = () => {
  const location = useLocation();

  window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    header?.classList.toggle("changeAppbar", window.scrollY > 400);
  });

  const activeList = "active";

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
                <Link to="/">Flow</Link>
              </h1>
              <nav id="fh5co-menu-wrap" role="navigation">
                <ul className="sf-menu" id="fh5co-primary-menu">
                  <li
                    className={
                      location.pathname === "/"
                        ? `nav-item ${activeList}`
                        : "nav-item"
                    }
                  >
                    <Link to="/">Home</Link>
                  </li>
                  <li
                    className={
                      location.pathname === "/portfolio"
                        ? `nav-item ${activeList}`
                        : "nav-item"
                    }
                  >
                    <Link to="portfolio">Work</Link>
                  </li>
                  <li
                    className={
                      location.pathname === "/services"
                        ? `nav-item ${activeList}`
                        : "nav-item"
                    }
                  >
                    <Link to="services">Services</Link>
                  </li>
                  {/* </li> */}
                  <li
                    className={
                      location.pathname === "/about"
                        ? `nav-item ${activeList}`
                        : "nav-item"
                    }
                  >
                    <Link to="about">About</Link>
                  </li>
                  {/* <li>
                    <Link to="blog">Blog</Link>
                  </li> */}
                  <li
                    className={
                      location.pathname === "/contact"
                        ? `nav-item ${activeList}`
                        : "nav-item"
                    }
                  >
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
