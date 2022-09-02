import React from "react";

const Contact = () => {
  return (
    <div id="fh5co-wrapper">
      <div id="fh5co-page">
        <div className="fh5co-hero fh5co-hero-2">
          <div className="fh5co-overlay"></div>
          <div
            className="fh5co-cover fh5co-cover_2 text-center glowBgimg_contact"
            data-stellar-background-ratio="0.5"
          >
            <div className="desc animate-box">
              <h2>Contact Us</h2>
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

        <div id="fh5co-contact" className="animate-box">
          <div className="container">
            <form action="#">
              <div className="row">
                <div className="col-md-6">
                  <h3 className="section-title">Our Address</h3>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                  <ul className="contact-info">
                    <li>
                      <i className="icon-location-pin"></i>198 West 21th Street,
                      Suite 721 New York NY 10016
                    </li>
                    <li>
                      <i className="icon-phone2"></i>+ 1235 2355 98
                    </li>
                    <li>
                      <i className="icon-mail"></i>
                      <a href="/">info@yoursite.com</a>
                    </li>
                    <li>
                      <i className="icon-globe2"></i>
                      <a href="/">www.yoursite.com</a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Name"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Email"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <textarea
                          name=""
                          className="form-control"
                          id=""
                          cols={30}
                          rows={7}
                          placeholder="Message"
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <input
                          type="submit"
                          value="Send Message"
                          className="btn btn-primary"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        {/* <!-- END fh5co-contact --> */}
        <div id="map" className="fh5co-map"></div>
        {/* <!-- END map --> */}
      </div>
    </div>
  );
};

export default Contact;
