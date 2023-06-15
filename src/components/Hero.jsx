import React from "react";

import headerPcNav from "../assets/img/png/ovarlap-nav-pc.png";
import headerPc from "../assets/img/webp/header-pc.webp";
import meeting from "../assets/img/webp/eyona-meating.webp";
import people from "../assets/img/webp/people-in-park.webp";
import heroVector from "../assets/img/svg/hero-bottom-circle.svg";

function Hero() {
  return (
    <>
      <section className="min_vh_100 d-flex flex-column justify-content-center align-items-center position-relative my-5">
        <img
          className="bottom_hero_circle position-absolute d-none d-md-block"
          src={heroVector}
          alt="circle"
        />
        <div className="container">
          <div className="row flex-column-reverse align-items-center flex-lg-row justify-content-end">
            <div className="col-lg-6 mt-sm-5 pt-4">
              <div className="row mt-xl-5 header_imges me-0 z_index3">
                <div className="col-6"></div>
                <div className="col-6">
                  <img className="w-100 mb-3" src={headerPcNav} alt="img" />
                </div>
                <div className="col-6">
                  <img className="w-100" src={headerPc} alt="img" />
                </div>
                <div className="col-6 ps-md-0">
                  <img className="w-100 z-1" src={meeting} alt="img" />
                </div>
                <div className="col-6 translate-middle-y z-1 mt-5 pt-sm-5">
                  <img className="w-100" src={people} alt="img" />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                data-aos="fade-left"
                data-aos-easing="ease-in-out"
                data-aos-delay="2500"
                data-aos-duration="1000"
                data-aos-offset="0"
                className="d-flex flex-column justify-content-center h-100 pb-lg-5 mb-lg-5"
              >
                <h1 className="ff_montserrat fw-bold fs_5xl text_darkBlack lh-70 mb-0">
                  We’re a multi-product company specialising in B2B products.
                </h1>
                <p className=" ff_montserrat fw-normal fs_sm text_primary mb-0 mt-3 pb-1">
                  Eyona is a team of dedicated, passionate people building B2B
                  software for the FMCG industry.
                </p>
                <span>
                  {" "}
                  <button className="main_btn mt-3">Get In Touch</button>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
