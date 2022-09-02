import React from "react";

const About = () => {
  return (
    <div id="fh5co-wrapper">
      <div id="fh5co-page">
        <div className="fh5co-hero fh5co-hero-2">
          <div className="fh5co-overlay"></div>
          <div
            className="fh5co-cover fh5co-cover_2 text-center glowBgimg_about"
            data-stellar-background-ratio="0.5"
          >
            <div className="desc animate-box">
              <h2>About Us</h2>
              <span>
                Lovely Crafted by{" "}
                <a href="" target="_blank" className="fh5co-site-name">
                  FREEHTML5.co
                </a>
              </span>
            </div>
          </div>
        </div>

        <div id="fh5co-about">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 text-center heading-section animate-box">
                <h3>How we started</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Velit est facilis maiores, perspiciatis accusamus asperiores
                  sint consequuntur debitis.
                </p>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row row-bottom-padded-md">
              <div className="col-md-6 animate-box">
                <figure>
                  <img
                    src={require("../res/images/about-image.jpg")}
                    alt="Free HTML5 Bootstrap Template by FREEHTML5.co"
                    className="img-responsive"
                  />
                </figure>
              </div>
              <div className="col-md-6 animate-box">
                <h3>Simple &amp; Humble Beginning</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
                  rerum perspiciatis, debitis pariatur atque vitae sed
                  blanditiis nobis sint, reprehenderit quas, natus corrupti!
                  Ipsum cum possimus corporis aut architecto! Delectus enim
                  adipisci quidem possimus voluptates! Aut ut aliquid molestias
                  laudantium.
                </p>
              </div>
            </div>
            <div className="row">
              {/* <!-- <div className="col-md-8 col-md-offset-2 animate-box">
						<h3>Simple &amp; Humble Beginning</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut rerum perspiciatis, debitis pariatur atque vitae sed blanditiis nobis sint, reprehenderit quas, natus corrupti! Ipsum cum possimus corporis aut architecto! Delectus enim adipisci quidem possimus voluptates! Aut ut aliquid molestias laudantium.</p>
					</div> --> */}
            </div>
          </div>
        </div>
        {/* <!-- END fh5co-about --> */}
        <div id="fh5co-content-section" className="fh5co-section-gray">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 text-center heading-section animate-box">
                <h3>happy Clients</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Velit est facilis maiores, perspiciatis accusamus asperiores
                  sint consequuntur debitis.
                </p>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-4 animate-box">
                <div className="testimony">
                  <blockquote>
                    &ldquo;If you’re looking for a top quality hotel look no
                    further. We were upgraded free of charge to the Premium
                    Suite, thanks so much&rdquo;
                  </blockquote>
                  <figure>
                    <img
                      className="img-responsive"
                      src={require("../res/images/person_1.jpg")}
                      alt="user"
                    />
                  </figure>
                  <p className="author">John Doe</p>
                </div>
              </div>
              <div className="col-md-4 animate-box">
                <div className="testimony">
                  <blockquote>
                    &ldquo;Me and my wife had a delightful weekend get away
                    here, the staff were so friendly and attentive. Highly
                    Recommended&rdquo;
                  </blockquote>
                  <figure>
                    <img
                      className="img-responsive"
                      src={require("../res/images/person_2.jpg")}
                      alt="user"
                    />
                  </figure>
                  <p className="author">Rob Smith</p>
                </div>
              </div>
              <div className="col-md-4 animate-box">
                <div className="testimony">
                  <blockquote>
                    &ldquo;If you’re looking for a top quality hotel look no
                    further. We were upgraded free of charge to the Premium
                    Suite, thanks so much&rdquo;
                  </blockquote>
                  <figure>
                    <img
                      className="img-responsive"
                      src={require("../res/images/person_3.jpg")}
                      alt="user"
                    />
                  </figure>
                  <p className="author">Jane Doe</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- fh5co-content-section --> */}
        <div id="fh5co-services-section">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 text-center heading-section animate-box">
                <h3>What We Do</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Velit est facilis maiores, perspiciatis accusamus asperiores
                  sint consequuntur debitis.
                </p>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row text-center">
              <div className="col-md-4 col-sm-4">
                <div className="services animate-box">
                  <span>
                    <i className="icon-browser"></i>
                  </span>
                  <h3>Web Development</h3>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                </div>
              </div>
              <div className="col-md-4 col-sm-4">
                <div className="services animate-box">
                  <span>
                    <i className="icon-mobile"></i>
                  </span>
                  <h3>Mobile Apps</h3>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                </div>
              </div>
              <div className="col-md-4 col-sm-4">
                <div className="services animate-box">
                  <span>
                    <i className="icon-tools"></i>
                  </span>
                  <h3>UX Design</h3>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                </div>
              </div>
              <div className="col-md-4 col-sm-4">
                <div className="services animate-box">
                  <span>
                    <i className="icon-video"></i>
                  </span>
                  <h3>Video Editing</h3>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                </div>
              </div>
              <div className="col-md-4 col-sm-4">
                <div className="services animate-box">
                  <span>
                    <i className="icon-search"></i>
                  </span>
                  <h3>SEO Ranking</h3>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                </div>
              </div>
              <div className="col-md-4 col-sm-4">
                <div className="services animate-box">
                  <span>
                    <i className="icon-cloud"></i>
                  </span>
                  <h3>Cloud Based Apps</h3>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
