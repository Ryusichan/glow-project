import React from "react";

const Footer = () => {
  return (
    <footer>
      <div id="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-12 col-sm-push-0 col-xs-12 col-xs-push-0">
              <h3>About Us</h3>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
            </div>
            <div className="col-md-6 col-md-push-1 col-sm-12 col-sm-push-0 col-xs-12 col-xs-push-0">
              <h3>Our Services</h3>
              <ul className="float">
                <li>
                  <a href="/">Web Design</a>
                </li>
                <li>
                  <a href="/">Branding &amp; Identity</a>
                </li>
                <li>
                  <a href="/">about Company</a>
                </li>
                <li>
                  <a href="/">HandCrafted Templates</a>
                </li>
              </ul>
              <ul className="float">
                <li>
                  <a href="/">Free Bootstrap Template</a>
                </li>
                <li>
                  <a href="/">about Company Template</a>
                </li>
                <li>
                  <a href="/">about Company &amp; CSS3 Template</a>
                </li>
                <li>
                  <a href="/">HandCrafted Templates</a>
                </li>
              </ul>
            </div>

            <div className="col-md-2 col-md-push-1 col-sm-12 col-sm-push-0 col-xs-12 col-xs-push-0">
              <h3>Follow Us</h3>
              <ul className="fh5co-social">
                <li>
                  <a href="/">
                    <i className="icon-twitter2"></i> Twitter
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="icon-facebook2"></i> Facebook
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="icon-google-plus2"></i> Google Plus
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="icon-instagram2"></i> Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="fh5co-copyright text-center">
          <p>
            &copy; 2016 about Company template. All Rights Reserved.
            <span>
              Designed with <i className="icon-heart"></i> by
              <a href="" target="_blank">
                about Company
              </a>
              Demo Images by
              <a href="" target="_blank">
                Unsplash
              </a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
