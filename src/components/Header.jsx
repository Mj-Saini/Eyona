import React, { useState } from "react";
import logo from "../assets/img/svg/logo.svg";
import blacklogo from "../assets/img/svg/black-logo.svg";
import topVector from "../assets/img/svg/hero-circle.svg";
import Ellips from "../assets/img/svg/ellips.svg";
import { Link } from "react-router-dom";

function Header() {
  const [navShow, setNavShow] = useState(false);
  if (navShow) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "initial";
  }
  return (
    <section
      style={{ background: "#ffffff" }}
      id="Header"
      className="position-relative"
    >
      <img
        className="nav_top_vector position-absolute"
        src={topVector}
        alt="cirlce"
      />
      <nav
        data-aos="fade-down"
        data-aos-easing="ease-in-out"
        data-aos-delay="1500"
        data-aos-duration="1000"
        data-aos-offset="0"
        className="z_index5 position-relative px-lg-5 px-sm-4"
      >
        <div className="px-xxl-5 container-fluid pt-3 z-3">
          <div className="d-flex justify-content-between align-items-center pt-sm-4 py-3 z-2 position-relative">
            <ul className="mb-0 p-0">
              <Link to="/" href="#">
                <img
                  style={{ zIndex: "100", position: "relative" }}
                  className="logo_size"
                  src={blacklogo}
                  alt="LOGO-ICON"
                />
              </Link>
            </ul>
            <ul className="m-0 d-flex gap-4 align-items-center z-3">
              <li>
                <a
                  style={{ letterSpacing: "0.15em" }}
                  className="ff_inter fs_15 fw-medium bottom_line text_primary position-relative"
                  href="#Talk"
                >
                  Let’s Talk
                </a>
              </li>

              <div
                onClick={() => setNavShow(!navShow)}
                style={{ zIndex: "1000", position: "relative" }}
                className="menu_circle border-1 border d-flex justify-content-center align-items-center cursor_pointer"
              >
                <div className={navShow ? "threeline z_index3" : "threeline"}>
                  <div
                    className={navShow ? " falseline1" : "  threelinechild"}
                  ></div>
                  <div
                    className={navShow ? "falseline" : " threelinechild2"}
                  ></div>
                  <div
                    className={navShow ? "falseline3 " : "threelinechild"}
                  ></div>
                </div>
              </div>
            </ul>
          </div>

          <div
            className={
              navShow
                ? "shownav d-flex flex-column justify-content-md-center align-items-center "
                : "hidenav d-flex flex-column justify-content-center align-items-center"
            }
          >
            <img
              className="position-absolute nav_ellips d-none d-md-flex"
              src={Ellips}
              alt="circle"
            />

            <div className="d-flex justify-content-between align-items-center">
              <div
                onClick={() => setNavShow(!navShow)}
                style={{ zIndex: "1000", position: "relative" }}
                className="menu_circle border-1 border d-flex justify-content-center align-items-center cursor_pointer white_menu_nav position-absolute"
              >
                <div className={navShow ? "threeline" : "threeline"}>
                  <div
                    className={navShow ? " falseline1" : "  threelinechild"}
                  ></div>
                  <div
                    className={navShow ? "falseline" : " threelinechild2"}
                  ></div>
                  <div
                    className={navShow ? "falseline3 " : "threelinechild"}
                  ></div>
                </div>
              </div>
              <a href="#">
                <img
                  style={{ zIndex: "1000", position: "relative" }}
                  className="logo_size   white_logo_nav position-absolute"
                  src={logo}
                  alt="LOGO-ICON"
                />
              </a>
            </div>

            <div className="row flex-column align-items-center justify-content-end">
              <div className="col-md-10 col-11 mt-5 mt-lg-0 pt-5 pt-lg-5">
                <div
                  style={{ background: "#212024" }}
                  className="mb-0 p-0 d-flex gap-4 flex-column justify-content-center align-items-center"
                >
                  <div className="row justify-content-lg-between mt-md-5 pt-md-5 mt-lg-0 pt-lg-0 align-items-xl-end h-100 z-1">
                    <div className="col-lg-5 mt-sm-5 pt-md-5 mt-lg-0 pt-lg-0 position-relative overflow-hidden">
                      <h3 className="ff_montserrat fw_bold fs_7xl text-white lh_120 pb-lg-0 mb-0 mb-5 mt-md-5 mt-lg-0 pt-lg-0 pt-md-5 z-2">
                        <div className="overlay position-absolute z-0"></div>
                        <span className="z-3 position-relative">
                          Who we are
                        </span>
                        <span className="d-block z-3 position-relative">
                          Our Companies
                        </span>
                        <span className="d-block d-xl-inline z-3 position-relative">
                          What we do
                        </span>
                        &nbsp;{" "}
                        <span className="d-block d-xl-inline z-3 position-relative">
                          Contact us
                        </span>
                        <span className="d-block d-xl-inline z-3 position-relative">
                          {" "}
                          Careers
                        </span>
                      </h3>
                    </div>
                    <div className="col-xxl-5 col-lg-6 mt-lg-5 pt-lg-5 translate_y">
                      <div className="row align-items-lg-end w-100">
                        <div className="col-6 mb-4">
                          <a
                            className="ff_montserrat fw-bold fs_2x5l text_red "
                            href="mailto:contact@eyona.co"
                          >
                            contact@eyona.co
                          </a>
                          <ul className="m-0 d-flex flex-column gap-2 mt-2 pt-1 p-0">
                            <p className="ff_montserrat fw_normal fs_sm text-white lh_28 cursor_pointer mb-0">
                              Terms & Conditions
                            </p>
                            <p className="ff_montserrat fw_normal fs_sm text-white lh_28 cursor_pointer mb-0">
                              Privacy
                            </p>
                            <p className="ff_montserrat fw_normal fs_sm text-white lh_28 cursor_pointer mb-0">
                              Policy
                            </p>
                          </ul>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-6">
                          <p className="ff_montserrat fw-bold fs_2x5l text_red">
                            London
                          </p>
                          <ul className="m-0 d-flex flex-column gap-2 mt-2 pt-1 p-0">
                            <p className="ff_montserrat fw_normal fs_sm text-white lh_28 mb-0">
                              77 Farringdon
                            </p>
                            <p className="ff_montserrat fw_normal fs_sm text-white lh_28 mb-0">
                              Road
                            </p>
                            <p className="ff_montserrat fw_normal fs_sm text-white lh_28 mb-0">
                              LondonEC1m 3JU
                            </p>
                            <span className="mt-4 pt-2 pb-4">
                              <a
                                target="_blank"
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
                            </span>
                          </ul>
                        </div>
                        <div className="col-lg-5 col-6">
                          <p className="ff_montserrat fw-bold fs_2x5l text_red">
                            Cape Town
                          </p>
                          <p className="ff_montserrat fw_normal fs_sm text-white lh_28">
                            4 Alphons way, Tokai, Cape Town, Western Cape 7420,
                            ZA
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
}

export default Header;
