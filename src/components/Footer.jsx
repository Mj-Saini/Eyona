import React from "react";
import logo from "../assets/img/svg/footer-logo.svg";
import circle_img from "../assets/img/png/footer-circle.png";

function Footer() {
  return (
    <>
      <section
        id="footer"
        className="min_vh_80 d-flex flex-column justify-content-between bg_primary py-lg-5 position-relative"
      >
        <img
          className=" position-absolute footer_circle_img z_index1"
          src={circle_img}
          alt="circle_img"
        />
        <div className="container pt-5 z_index3 position-relative">
          <div>
            <img className="cursor_pointer logo_size" src={logo} alt="logo" />
            <div className="row justify-content-between">
              <div
                data-aos="fade-up"
                data-aos-easing="ease-in-out"
                data-aos-delay="1000"
                data-aos-duration="1000"
                data-aos-offset="0"
                className="col-md-3 col-sm-8 d-none d-md-flex"
              >
                <div className="d-flex flex-column">
                  <a
                    className="ff_inter fw-bold fs_3x5l text_red mt-sm-5 mt-4 d-inline-block"
                    href="#mailto: contact@eyona.co"
                  >
                    contact@eyona.co
                  </a>
                  <span className="mt-3">
                    <a
                      className="ff_inter fw-normal fs_sm text_darkWhite"
                      href="#"
                    >
                      Terms & Conditions
                    </a>
                  </span>
                  <span className="mt-2">
                    <a
                      className="ff_inter fw-normal fs_sm text_darkWhite"
                      href="#"
                    >
                      Privacy Policy
                    </a>
                  </span>
                  <a
                    className="pt-md-5 pt-2"
                    target="_blank"
                    href="https://in.linkedin.com/"
                  >
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
              <div
                data-aos="fade-up"
                data-aos-easing="ease-in-out"
                data-aos-delay="1000"
                data-aos-duration="1000"
                data-aos-offset="0"
                className="col-md-3 col-sm-4"
              >
                <div className="d-flex flex-column">
                  <p className="ff_inter fw-bold fs_3x5l text-white mt-sm-5 mt-4 d-inline-block">
                    London
                  </p>
                  <span>
                    <a
                      style={{ lineHeight: "28px" }}
                      className="ff_inter fw-normal fs_sm text_darkWhite"
                      href="#"
                    >
                      77 Farringdon Road <span className="d-block">London</span>
                      EC1m 3JU
                    </a>
                  </span>
                </div>
              </div>
              <div
                data-aos="fade-up"
                data-aos-easing="ease-in-out"
                data-aos-delay="1000"
                data-aos-duration="1000"
                data-aos-offset="0"
                className="col-md-3 col-sm-6"
              >
                <div className=" d-flex flex-column">
                  <p className=" ff_inter fw-bold fs_3x5l text-white mt-sm-5 mt-4 d-inline-block">
                    Cape Town
                  </p>

                  <a
                    style={{ lineHeight: "28px" }}
                    className="ff_inter fw-normal fs_sm text_darkWhite"
                    href="#"
                  >
                    4 Alphons way,
                    <span className="d-block">Tokai, Cape Town,</span> Western
                    Cape 7420, ZA
                  </a>
                </div>
              </div>
              <div className="col-md-3 col-sm-8 d-md-none">
                <div className="d-flex flex-column">
                  <a
                    className="ff_inter fw-bold fs_3x5l text_red mt-sm-5 mt-4 d-inline-block"
                    href="#mailto: contact@eyona.co"
                  >
                    contact@eyona.co
                  </a>
                  <span className="mt-3">
                    <a
                      className="ff_inter fw-normal fs_sm text_darkWhite"
                      href="#"
                    >
                      Terms & Conditions
                    </a>
                  </span>
                  <span className="mt-2">
                    <a
                      className="ff_inter fw-normal fs_sm text_darkWhite"
                      href="#"
                    >
                      Privacy Policy
                    </a>
                  </span>
                  <a
                    className="pt-md-5 pt-2"
                    target="_blank"
                    href="https://in.linkedin.com/"
                  >
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
            </div>
          </div>
        </div>
        <div className="container pb-5 mt-5 mt-md-0 pt-sm-5 pt-md-0">
          <p className="ff_inter fw-normal fs_sm text_lightWhite mb-0 mt-5 pt-sm-5">
            © Copyright – eyona
          </p>
        </div>
      </section>
    </>
  );
}

export default Footer;
