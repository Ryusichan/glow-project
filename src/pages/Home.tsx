import {
  CloudDownload,
  ComputerOutlined,
  DesignServices,
  DevicesOutlined,
  FindInPage,
  FindInPageOutlined,
  OndemandVideo,
  PlayArrow,
  PlayArrowOutlined,
  PlayCircle,
  WebOutlined,
} from "@mui/icons-material";
import React from "react";

const Home = () => {
  return (
    <div id="fh5co-wrapper">
      <div id="fh5co-page">
        <div className="fh5co-hero">
          <div className="fh5co-overlay"></div>
          <div
            className="fh5co-cover text-center glowBgimg"
            data-stellar-background-ratio="0.5"
          >
            <div className="desc animate-box">
              <h2>
                Capture Every <strong>Good</strong> Things
              </h2>
              <span>
                Lovely Crafted by
                <a href="" target="_blank" className="fh5co-site-name">
                  FREEHTML5.co
                </a>
              </span>
              <p>
                <a className="btn btn-primary btn-lg btn-learn" href="#">
                  Learn More
                </a>
                <a
                  className="btn btn-primary btn-lg popup-vimeo btn-video"
                  href=""
                >
                  <PlayArrowOutlined /> Watch Video
                </a>
              </p>
            </div>
          </div>
        </div>

        <div id="fh5co-partner">
          <div className="container">
            <div className="partner-wrap">
              <div className="wrap">
                <div className="partner animate-box">
                  <div className="inner">
                    <img
                      className="img-responsive"
                      src={require("../res/images/logo-1.png")}
                      alt=""
                    />
                  </div>
                </div>
                <div className="partner animate-box">
                  <div className="inner">
                    <img
                      className="img-responsive"
                      src={require("../res/images/logo-2.png")}
                      alt=""
                    />
                  </div>
                </div>
                <div className="partner animate-box">
                  <div className="inner">
                    <img
                      className="img-responsive"
                      src={require("../res/images/logo-3.png")}
                      alt=""
                    />
                  </div>
                </div>
                <div className="partner animate-box">
                  <div className="inner">
                    <img
                      className="img-responsive"
                      src={require("../res/images/logo-4.png")}
                      alt=""
                    />
                  </div>
                </div>
                <div className="partner animate-box">
                  <div className="inner">
                    <img
                      className="img-responsive"
                      src={require("../res/images/logo-5.png")}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="fh5co-work">
          <div className="container">
            <div className="row">
              <div className="col-md-12 work">
                <div className="row">
                  <div className="col-md-6 col-md-pull-2">
                    <div className="half-inner contentBg01"></div>
                  </div>
                  <div className="col-md-6 animate-box">
                    <div className="desc">
                      <h3>
                        <a href="#">Guitar Music</a>
                      </h3>
                      <p>
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts. Separated they live in Bookmarksgrove right at
                        the coast of the Semantics, a large language ocean.
                      </p>
                      <p>
                        <a className="btn btn-primary" href="#">
                          Learn More
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12 work">
                <div className="row">
                  <div className="col-md-6 col-md-push-6">
                    <div className="half-inner half-inner2 contentBg02"></div>
                  </div>
                  <div className="col-md-6 col-md-pull-6 animate-box">
                    <div className="desc desc2">
                      <h3>
                        <a href="#">A Cube of Ice</a>
                      </h3>
                      <p>
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts. Separated they live in Bookmarksgrove right at
                        the coast of the Semantics, a large language ocean.
                      </p>
                      <p>
                        <a className="btn btn-primary" href="#">
                          Learn More
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="fh5co-features">
            <div className="container">
              <div className="row">
                <div className="col-md-4 animate-box">
                  <div className="feature-left">
                    <span className="icon">
                      <ComputerOutlined />
                    </span>
                    <div className="feature-copy">
                      <h3>Retina Ready</h3>
                      <p>
                        Facilis ipsum reprehenderit nemo molestias. Aut cum
                        mollitia reprehenderit.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 animate-box">
                  <div className="feature-left">
                    <span className="icon">
                      <DevicesOutlined />
                    </span>
                    <div className="feature-copy">
                      <h3>Responsive Layout</h3>
                      <p>
                        Facilis ipsum reprehenderit nemo molestias. Aut cum
                        mollitia reprehenderit.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 animate-box">
                  <div className="feature-left">
                    <span className="icon">
                      <WebOutlined />
                    </span>
                    <div className="feature-copy">
                      <h3>Clean &amp; Minimal</h3>
                      <p>
                        Facilis ipsum reprehenderit nemo molestias. Aut cum
                        mollitia reprehenderit.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

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
                    <WebOutlined />
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
                    <DevicesOutlined />
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
                    <DesignServices />
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
                    <OndemandVideo />
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
                    <FindInPageOutlined />
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
                    <CloudDownload />
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

        {/* <!-- END What we do --> */}

        <div id="fh5co-content-section" className="fh5co-section-gray">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 text-center heading-section animate-box">
                <h3>Happy Clients</h3>
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

        <div id="fh5co-blog-section">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 text-center heading-section animate-box">
                <h3>Recent From Blog</h3>
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
              <div className="col-lg-4 col-md-4">
                <div className="fh5co-blog animate-box">
                  <a href="#">
                    <img
                      className="img-responsive"
                      src={require("../res/images/blog-1.jpg")}
                      alt=""
                    />
                  </a>
                  <div className="blog-text">
                    <div className="prod-title">
                      <h3>
                        <a href="">
                          45 Minimal Worksspace Rooms for Web Savvys
                        </a>
                      </h3>
                      <span className="posted_by">Sep. 15th</span>
                      <span className="comment">
                        <a href="">
                          21<i className="icon-bubble2"></i>
                        </a>
                      </span>
                      <p>
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.
                      </p>
                      <a href="#" className="btn btn-primary">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4">
                <div className="fh5co-blog animate-box">
                  <a href="#">
                    <img
                      className="img-responsive"
                      src={require("../res/images/blog-2.jpg")}
                      alt=""
                    />
                  </a>
                  <div className="blog-text">
                    <div className="prod-title">
                      <h3>
                        <a href="">
                          45 Minimal Worksspace Rooms for Web Savvys
                        </a>
                      </h3>
                      <span className="posted_by">Sep. 15th</span>
                      <span className="comment">
                        <a href="">
                          21<i className="icon-bubble2"></i>
                        </a>
                      </span>
                      <p>
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.
                      </p>
                      <a href="#" className="btn btn-primary">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4">
                <div className="fh5co-blog animate-box">
                  <a href="#">
                    <img
                      className="img-responsive"
                      src={require("../res/images/blog-3.jpg")}
                      alt=""
                    />
                  </a>
                  <div className="blog-text">
                    <div className="prod-title">
                      <h3>
                        <a href="">
                          45 Minimal Worksspace Rooms for Web Savvys
                        </a>
                      </h3>
                      <span className="posted_by">Sep. 15th</span>
                      <span className="comment">
                        <a href="">
                          21<i className="icon-bubble2"></i>
                        </a>
                      </span>
                      <p>
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.
                      </p>
                      <a href="#" className="btn btn-primary">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
