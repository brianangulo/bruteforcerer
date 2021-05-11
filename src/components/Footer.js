import React from "react";

function Footer() {

    return (
      <footer className="site-footer bg-dark">
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <h5 className="text-light nav-link" href="#contactform">
                Contact
              </h5>
              <p className="text-light no">
                <a
                  className="text-light nav-link"
                  href="mailto:bangulo219@gmail.com"
                >
                  Contact Us Form
                </a>
              </p>
              <p className="text-light no">
                <a
                  className="text-light nav-link"
                  href="mailto:bangulo219@gmail.com"
                >
                  Author: Brian Angulo <br />
                  bangulo219@gmail.com
                </a>
              </p>
            </div>
            <div className="col-sm">
              <h5 className="text-light nav-link" href="#contactform">
                Community
              </h5>
              <p className="text-light no">
                <a
                  className="text-light nav-link"
                  href="https://twitter.com/BrianAngulo11"
                >
                  Twitter
                </a>
              </p>
              <p className="text-light no">
                <a
                  className="text-light nav-link"
                  href="https://stackoverflow.com/users/story/12778760?newreg=a2b8af0f4d7e4da3aec8f9ee05b3368a&_=1"
                >
                  Stack Overflow
                </a>
              </p>
            </div>
            <div className="col-sm">
              <h5 className="text-light nav-link" href="#contactform">
                More
              </h5>
              <p className="text-light no">
                <a
                  className="text-light nav-link"
                  href="https://github.com/brianangulo/bruteforcerer"
                >
                  GitHub
                </a>
              </p>
              <p className="text-light no">
                <a
                  className="text-light nav-link"
                  href="https://github.com/brianangulo"
                >
                  More of my work on GitHub
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
}

export default Footer;