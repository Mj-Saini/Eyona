import React from "react";
import linkdin from "../assets/img/svg/in.svg";
import { Link } from "react-router-dom";

function Talk() {
  return (
    <>
      <section id="Talk" className="bg_primary min_vh_80 d-flex pt-md-5 pb-4">
        <div className="container d-flex flex-grow-1 justify-content-center pt-sm-5">
          <div className="row align-items-center mt-5 pt-md-5">
            <div className="col-md-7">
              <div className="position-relative">
                <h2 className="contact_text position-absolute text_stroke_white ff_inter text_primary fw-bold fs_20x0l z-0 mb-0">
                  Contact
                </h2>
                <h2 className="ff_inter fw-bold fs_7x5l text-white mb-0 z-3 position-relative">
                  Let’s Talk
                </h2>
              </div>
              <p className="ff_inter fw-normal fs_xl text_lightWhite mb-0 mt-sm-5 pt-2">
                We would love to hear from you. Fill out the form or
                <span className="d-lg-block">
                  contact us sending an email to.
                </span>
              </p>
              <div className="d-flex flex-column">
                <a
                  className="text_red ff_inter fw-bold fs_2x5l mt-sm-3 d-inline-block mb-2"
                  href="mailto: contact@eyona.co"
                >
                  contact@eyona.co
                </a>
                <a className="mt-sm-4 mt-2" href="#">
                  <svg
                    width="29"
                    height="30"
                    viewBox="0 0 29 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.26433 29.4906H0.102661V8.95166H6.26433V29.4906ZM28.8571 29.4906H22.6955V18.5187C22.6955 15.6597 21.6767 14.2363 19.6578 14.2363C18.0578 14.2363 17.0431 15.0332 16.5338 16.6291V29.4906H10.3721C10.3721 29.4906 10.4543 11.0056 10.3721 8.95166H15.2357L15.6116 13.0594H15.7389C17.0021 11.0056 19.021 9.61301 21.7897 9.61301C23.8949 9.61301 25.5976 10.1984 26.8977 11.669C28.206 13.1416 28.8571 15.1174 28.8571 17.8922V29.4906Z"
                      fill="white"
                      fill-opacity="0.15"
                    />
                    <path
                      d="M3.18353 6.898C4.94175 6.898 6.36706 5.51866 6.36706 3.81716C6.36706 2.11567 4.94175 0.736328 3.18353 0.736328C1.42532 0.736328 0 2.11567 0 3.81716C0 5.51866 1.42532 6.898 3.18353 6.898Z"
                      fill="white"
                      fill-opacity="0.15"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="col-md-5">
              <form action="submit">
                <input
                  className="w-100 bg-transparent ff_inter fw-normal fs_sm border_bottom pb-sm-3 pb-1 px-sm-3 mt-5 mt-md-0"
                  type="text"
                  placeholder="Your Name"
                  required
                />
                <input
                  className="w-100 bg-transparent ff_inter fw-normal fs_sm border_bottom pb-sm-3 pb-1 px-sm-3 mt-5"
                  type="text"
                  placeholder="Your Email"
                  required
                />
                <textarea
                  className="w-100 mt-5 bg-transparent border_none border_bottom px-sm-3 ff_inter fw-normal fs_sm text_lightWhite"
                  rows="5"
                  placeholder="What would you like to know?"
                ></textarea>

                <Link to="/submit">
                  <input
                    className="main_btn my-md-5 my-4 transition_300"
                    type="submit"
                    value="Send Message"
                  />
                </Link>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Talk;
