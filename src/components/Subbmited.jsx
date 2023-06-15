import React, { useState } from "react";
import linkdin from "../assets/img/svg/in.svg";
import thank1 from "../assets/img/png/thank1.png";
import thank2 from "../assets/img/png/thank2.png";
import thank3 from "../assets/img/png/thank3.png";

function Subbmited() {
  return (
    <section
      className="bg_primary pb-5 position-relative min_vh_100"
      id="contact"
    >
      <div className="container d-flex flex-grow-1 flex-column justify-content-center py-lg-5 position-relative ">
        <div className="row align-items-center justify-content-between py-lg-5 position-relative">
          <h2 className="contact_text2 position-absolute text_stroke_white ff_inter text_primary fw-bold fs_20x0l z-0 mb-0 d-none d-lg-block">
            Thank You
          </h2>
          <div className="col-lg-5 z_index4 position-relative mt-5">
            <div className="position-relative">
              <h2 className="ff_inter fw-bold fs_7x5l text-white mb-0 z-3 position-relative">
                Thank You :)
              </h2>
            </div>
            <p className=" ff_inter fw-normal fs_xl text_lightWhite mb-0 mt-lg-5 pt-3">
              We would love to hear from you. Fill out the form or
              <span className=" d-lg-block">
                contact us sending an email to.
              </span>
            </p>
            <div className="d-flex flex-column">
              <a
                className=" text_red ff_inter fw-bold fs_2x5l mt-sm-3 mt-2 d-inline-block mb-2"
                href="mailto:contact@eyona.co"
              >
                contact@eyona.co
              </a>
              <a
                target="_blank"
                className="mt-sm-4 mt-2"
                href="https://in.linkedin.com/"
              >
                <svg
                  width="29"
                  height="29"
                  viewBox="0 0 29 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.26433 28.7542H0.102661V8.21533H6.26433V28.7542ZM28.8571 28.7542H22.6955V17.7824C22.6955 14.9233 21.6767 13.5 19.6578 13.5C18.0578 13.5 17.0431 14.2969 16.5338 15.8928V28.7542H10.3721C10.3721 28.7542 10.4543 10.2692 10.3721 8.21533H15.2357L15.6116 12.3231H15.7389C17.0021 10.2692 19.021 8.87668 21.7897 8.87668C23.8949 8.87668 25.5976 9.46204 26.8977 10.9326C28.206 12.4053 28.8571 14.3811 28.8571 17.1559V28.7542Z"
                    fill="white"
                    fill-opacity="0.25"
                  />
                  <path
                    d="M3.18353 6.16167C4.94175 6.16167 6.36706 4.78233 6.36706 3.08084C6.36706 1.37934 4.94175 0 3.18353 0C1.42532 0 0 1.37934 0 3.08084C0 4.78233 1.42532 6.16167 3.18353 6.16167Z"
                    fill="white"
                    fill-opacity="0.25"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="col-lg-7 z_index4 position-relative">
            <div className="row justify-content-lg-between justify-content-center mt-3 mt-md-4 mb-5 mb-md-0">
              <div className="col-md-4 col-sm-6">
                <div className="d-flex justify-content-center">
                  {" "}
                  <img className="mt-4 w_lg_100" src={thank1} alt="thank1" />
                </div>
              </div>
              <div className="col-md-4 col-sm-6 submmited_img2 ">
                <div className="d-flex justify-content-center">
                  {" "}
                  <img className="mt-4 w_lg_100" src={thank2} alt="thank2" />
                </div>
              </div>
              <div className="col-md-4 col-sm-6 submmited_img">
                <div className="d-flex justify-content-center">
                  {" "}
                  <img
                    className="rounded-4 mt-4  w_lg_100"
                    src={thank3}
                    alt="thank3"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Subbmited;
