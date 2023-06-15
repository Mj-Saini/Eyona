import React from "react";
import firstImg from "../assets/img/webp/expert-img1.webp";
import secondImg from "../assets/img/webp/export-last.webp";
import thirdImg from "../assets/img/webp/yellow-girl.webp";
import forthImg from "../assets/img/webp/next-to-yello.webp";
import expertCircle from "../assets/img/svg/export-circle.svg";
import expertleftcircle from "../assets/img/svg/export-left.svg";
import { system } from "../js/Cards";

function Experts() {
  return (
    <>
      <section className="py-4 py-md-5 mb-lg-5 position-relative">
        <img
          className="expertBigCircle_position position-absolute z_index1 d-none d-md-block"
          src={expertCircle}
          alt="circle"
        />
        <img
          className="expertleftcircle_position position-absolute z_index1"
          src={expertleftcircle}
          alt="expertleftcircle"
        />
        <div className="container-fluid z_index4 position-relative">
          <h2
            data-aos="fade-right"
            data-aos-easing="ease-in-out"
            data-aos-delay="200"
            data-aos-duration="1000"
            data-aos-offset="0"
            className="ff_inter fw-bold fs_20x0l text_primary mb-0"
          >
            Eyona are
          </h2>

          <h2
            data-aos="fade-left"
            data-aos-easing="ease-in-out"
            data-aos-delay="500"
            data-aos-duration="1000"
            data-aos-offset="0"
            className="ff_inter fw-bold fs_15x0l text_red text-end translate-middle-y mt-md-5 mb-0 mt-4"
          >
            <span className="text-white text_stroke"> World Class </span>Experts
          </h2>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6 px-0">
                <div className="d-flex align-items-center h-100">
                  <p
                    data-aos="fade-right"
                    data-aos-easing="ease-in-out"
                    data-aos-delay="200"
                    data-aos-duration="1000"
                    data-aos-offset="0"
                    className=" ff_montserrat fw-normal fs_2x5l text_secondary mb-0 mb-lg-5 pb-lg-5"
                  >
                    We create&nbsp;
                    <span className="text_red cursor_pointer">
                      SaaS products
                    </span>
                    &nbsp; for markets that have the ability to generate
                    substantial annual recurring revenue (ARR). Leveraging big
                    data and automating matket facing business processes.
                  </p>
                </div>
              </div>
              <div
                data-aos="fade-left"
                data-aos-easing="ease-in-out"
                data-aos-delay="500"
                data-aos-duration="1000"
                data-aos-offset="0"
                className="col-lg-6 px-0 mt-sm-5 mt-4 mt-lg-0"
              >
                <div className="row ">
                  <div className="col-sm-6">
                    <div className="d-flex justify-content-end h-50 pb-2">
                      <img className="w_sm_75 w-100" src={firstImg} alt="img" />
                    </div>
                    <div className="row h-50 pt-2">
                      <div className="col-sm-7 col-6 pt-2">
                        <img className="w-100 h-100" src={thirdImg} alt="img" />
                      </div>
                      <div className="col-sm-5 col-6 pt-2">
                        <img
                          className="w-100 h-100 pt-1"
                          src={forthImg}
                          alt="img"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 mt-4 mt-sm-0">
                    <img className="w-100 h-100" src={secondImg} alt="img" />
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-between">
              {system.map((value) => {
                return (
                  <div className="col-md-5 mt-5 px-lg-0">
                    <div
                      data-aos="fade-up"
                      data-aos-easing="ease-in-out"
                      data-aos-delay="800"
                      data-aos-duration="1000"
                      data-aos-offset="0"
                      className={`${value.spacing}`}
                    >
                      <span className="d-inline-block p-xxl-5 p-lg-4 black_card">
                        <img
                          width="103"
                          height="103"
                          className="py-4 py-lg-0"
                          src={value.logo}
                          alt="img"
                        />
                      </span>
                      <h2 className=" ff_montserrat fw-bold fs_4xl text_primary mb-0 mt-4 pt-lg-3">
                        {value.heading}
                      </h2>
                      <p className=" ff_montserrat fw-normal fs_xl text_secondary mb-0 mt-lg-4 mt-2 pt-sm-1">
                        {value.about}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Experts;
