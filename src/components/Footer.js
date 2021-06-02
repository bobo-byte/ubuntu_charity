import React from "react";
import "./assets/css/footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faYoutube
} from "@fortawesome/free-brands-svg-icons";

import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default () => {
  return (
    <>
      <footer>
        <div id="footer">
          <div className="container">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 text-center"
                style={{
                  margin: "0 auto"
                }}
              >
                <p className="fh5co-social-icons">
                  {/* <a href="#twitter_pageTODO">
                    <FontAwesomeIcon size="2x" icon={faTwitter} />
                  </a> */}
                  <a href="https://www.facebook.com/ubuntu.af.92">
                    <FontAwesomeIcon size="2x" icon={faFacebook} />
                  </a>
                  <a href="https://instagram.com/ubuntu.af?igshid=1anxt1jds3k5r">
                    <FontAwesomeIcon size="2x" icon={faInstagram} />
                  </a>
                  <a href="https://www.youtube.com/channel/UCc58LD4aHyGP5WOa-9VbZ5g/featured">
                    <FontAwesomeIcon size="2x" icon={faYoutube} />
                  </a>
                </p>
                <p>
                  Copyright <a href="https://qtmo4.csb.app/">Ubuntu 2021</a>
                  . All Rights Reserved.
                  <br />
                  Made with <FontAwesomeIcon icon={faHeart} /> by{" "}
                  <a
                    target="_blank"
                    rel="nofollow noopener"
                    href="https://reactjs.org/"
                  >
                    React
                  </a>{" "}
                  / Demo Images: Unsplash
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
