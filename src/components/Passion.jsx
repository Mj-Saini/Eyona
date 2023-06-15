import React from "react";
import eyona from "../assets/img/svg/eyona-img.svg";
import passion from "../assets/img/png/eyona-circle.png";

function Passion() {
  return (
    <>
      <section className="min_vh__100 bg_secondary d-flex position-relative overflow-hidden margin_custom_eyona py-sm-5 py-4 overflow-hidden">
        <img
          className="top_passion_circle position-absolute d-none d-md-block"
          src={passion}
          alt="circle"
        />
        <img className="eyona_text d-lg-flex d-none" src={eyona} alt="img" />
        <div className="container flex-grow-1 d-flex align-items-center z-1">
          <div className="row align-items-center">
            <div className="col-xxl-12 col-lg-9">
              <div
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-out"
                data-aos-delay="200"
                data-aos-duration="800"
                data-aos-offset="0"
              >
                <h2 className=" ff_montserrat fw-bold fs_5x5l text-white lh_70 mb-0">
                  It’s our passion. Our business. We love to{" "}
                  <span className="d-xxl-block">
                    see our customers reinventing themselves,
                  </span>{" "}
                  <span className="d-xxl-block">
                    {" "}
                    people discovering their true potential and
                  </span>{" "}
                  creating products to enable industries.
                </h2>
                <p className=" ff_montserrat fw-medium fs_xl text_lightWhite mt-xxl-5 mt-4 mb-0">
                  To us innovation means: Seeing the bigger picture, striving
                  for better insights, always{" "}
                  <span className="d-xxl-block">
                    curious, thinking the unthinkable, the impossible and then
                    making it happen. In other
                  </span>{" "}
                  words, we support our customers with the business and
                  technology know-how they need{" "}
                  <span className="d-xxl-block">
                    to continuously improve and gain new advantages to win now
                    and in the future.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Passion;
