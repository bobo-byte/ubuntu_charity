import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarker,
  faPhone,
  faAt,
  faGlobe
} from "@fortawesome/free-solid-svg-icons";
import emailjs from "emailjs-com";

const Contact = () => {
  const [state, setState] = useState({
    from_name: "",
    user_email: "",
    message: ""
  });

  function onHandleChange(e) {
    setState((prev) => ({
      ...prev,
      [`${e.target.name}`]: e.target.value
    }));
  }

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fsg31sp",
        "template_6qt3718",
        e.target,
        "user_rHcF2R1ekJwxP7GCXUeVJ"
      )
      .then(
        (result) => {
          console.log(result.text);
          setState({
            from_name: "",
            user_email: "",
            message: ""
          });
        },
        (error) => {
          console.log(error.text);
          setState((prev) => ({
            ...prev,
            message:
              "Error while sending message: Please email ubuntu.af.com manually"
          }));
        }
      );
  }

  return (
    <>
      <h2
        id="contact_us"
        className="contactHeading"
        style={{
          color: "black",
          textTransform: "uppercase",
          fontSize: "60px",
          marginTop: "60px",
          fontWeight: "300!important"
        }}
      >
        <strong>Contact</strong> Us
      </h2>
      <div id="fh5co-contact" className="animate-box fadeInUp animated">
        <div className="container">
          <form action="#" method="post" onSubmit={sendEmail}>
            <div className="row">
              <div className="col-md-6">
                <h3
                  className="section-title"
                  style={{
                    margin: "0px 0px 30px"
                  }}
                >
                  Our Address
                </h3>
                <p>
                  Find out about Ubuntu's work and how you can support us
                  through donations, fundraising, festivals, campaigning and
                  more.
                </p>
                <ul className="contact-info">
                  <li>
                    <i>
                      <FontAwesomeIcon icon={faMapMarker} />
                    </i>
                    Bristol, United Kingdom
                  </li>
                  <li>
                    <i>
                      <FontAwesomeIcon icon={faPhone} />
                    </i>
                    +447565601906
                  </li>
                  <li>
                    <i>
                      <FontAwesomeIcon icon={faAt} />
                    </i>
                    <a href="https://www.gmail.com">Admin@ubuntu-af.com</a>
                  </li>
                  <li>
                    <i>
                      <FontAwesomeIcon icon={faGlobe} />
                    </i>
                    <a href="https://www.ubuntu-af.com">www.ubuntu-af.com</a>
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
                        name="from_name"
                        value={state.from_name}
                        onChange={onHandleChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Email"
                        name="user_email"
                        value={state.user_email}
                        onChange={onHandleChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        cols="30"
                        rows="7"
                        placeholder="Message"
                        name="message"
                        value={state.message}
                        onChange={onHandleChange}
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <input
                        id="gallery-btn"
                        type="submit"
                        value="Send Message"
                        className="rounded-3"
                        style={{
                          marginTop: "18px"
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <input type="hidden" name="to_name" value="Ubuntu" />
          </form>
        </div>
      </div>
    </>
  );
};
export default Contact;
