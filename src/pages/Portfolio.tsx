import React from "react";

const Portfolio = () => {
  return (
    <div id="fh5co-wrapper">
      <div id="fh5co-page">
        <div className="fh5co-hero fh5co-hero-2">
          <div className="fh5co-overlay"></div>
          <div
            className="fh5co-cover fh5co-cover_2 text-center glowBgimg_portfolio"
            data-stellar-background-ratio="0.5"
          >
            <div className="desc animate-box">
              <h2>Our Works</h2>
              <span>
                Lovely Crafted by{" "}
                <a href="" target="_blank" className="fh5co-site-name">
                  FREEHTML5.co
                </a>
              </span>
            </div>
          </div>
        </div>
        {/* <!-- end:header-top --> */}

        <div id="fh5co-portfolio">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 text-center heading-section animate-box">
                <h3>Recent Work</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Velit est facilis maiores, perspiciatis accusamus asperiores
                  sint consequuntur debitis.
                </p>
              </div>
            </div>

            <div className="row row-bottom-padded-md">
              <div className="col-md-12">
                <ul id="fh5co-portfolio-list">
                  <li
                    className="one-third animate-box animateBox001"
                    data-animate-effect="fadeIn"
                  >
                    <a href="/" className="color-1">
                      <div className="case-studies-summary">
                        <span>Web Design</span>
                        <h2>Two Glas of Juice</h2>
                      </div>
                    </a>
                  </li>
                  <li
                    className="one-third animate-box animateBox002"
                    data-animate-effect="fadeIn"
                  >
                    <a href="/" className="color-2">
                      <div className="case-studies-summary">
                        <span>Illustration</span>
                        <h2>Timer starts now!</h2>
                      </div>
                    </a>
                  </li>

                  <li
                    className="one-third animate-box animateBox003"
                    data-animate-effect="fadeIn"
                  >
                    <a href="/" className="color-3">
                      <div className="case-studies-summary">
                        <span>Illustration</span>
                        <h2>Beautiful sunset</h2>
                      </div>
                    </a>
                  </li>
                  <li
                    className="one-third animate-box animateBox004"
                    data-animate-effect="fadeIn"
                  >
                    <a href="/" className="color-4">
                      <div className="case-studies-summary">
                        <span>Web Design</span>
                        <h2>Company's Conference Room</h2>
                      </div>
                    </a>
                  </li>

                  <li
                    className="one-third animate-box animateBox005"
                    data-animate-effect="fadeIn"
                  >
                    <a href="/" className="color-3">
                      <div className="case-studies-summary">
                        <span>Illustration</span>
                        <h2>Useful baskets</h2>
                      </div>
                    </a>
                  </li>
                  <li
                    className="one-third animate-box animateBox006"
                    data-animate-effect="fadeIn"
                  >
                    <a href="/" className="color-4">
                      <div className="case-studies-summary">
                        <span>Web Design</span>
                        <h2>Skater man in the road</h2>
                      </div>
                    </a>
                  </li>

                  <li
                    className="one-third animate-box animateBox007"
                    data-animate-effect="fadeIn"
                  >
                    <a href="/" className="color-4">
                      <div className="case-studies-summary">
                        <span>Web Design</span>
                        <h2>Two Glas of Juice</h2>
                      </div>
                    </a>
                  </li>

                  <li
                    className="one-third animate-box animateBox008"
                    data-animate-effect="fadeIn"
                  >
                    <a href="/" className="color-5">
                      <div className="case-studies-summary">
                        <span>Web Design</span>
                        <h2>Timer starts now!</h2>
                      </div>
                    </a>
                  </li>
                  <li
                    className="one-third animate-box animateBox009"
                    data-animate-effect="fadeIn"
                  >
                    <a href="/" className="color-6">
                      <div className="case-studies-summary">
                        <span>Illustration</span>
                        <h2>Beautiful sunset</h2>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="row">
              <div className="col-md-4 col-md-offset-4 text-center animate-box">
                <a href="/" className="btn btn-primary btn-lg">
                  Let's get started
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
