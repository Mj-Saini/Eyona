import React from "react";
import magic_circle from "../assets/img/png/magic-circle.png";
import join_group_img from "../assets/img/png/join-group-img.png";

function JoinUs() {
  return (
    <>
      <section className="py-sm-5 py-4 position-relative">
        <img
          className=" position-absolute magic_circle_class z_index1 d-none d-md-block"
          src={magic_circle}
          alt="magic_circle"
        />
        <img
          className=" position-absolute join_group_img d-none d-lg-block"
          src={join_group_img}
          alt="join_group_img"
        />
        <div className="container py-md-5  position-relative z_index4">
          <h2
            data-aos="zoom-in"
            data-aos-easing="ease-in-out"
            data-aos-delay="500"
            data-aos-duration="1000"
            data-aos-offset="0"
            className="text-md-center ff_inter fw-bold fs_8x5l mb-0 text_primary"
          >
            Join the <span className="text_red">eyona</span> team and find out
            where the{" "}
            <span className="text_stroke text-white ff_inter fw-bold text_animation">
              true magic
            </span>{" "}
            happens!
          </h2>

          <div className="row">
            <div
              data-aos="fade-right"
              data-aos-easing="ease-in-out"
              data-aos-delay="1000"
              data-aos-duration="1000"
              data-aos-offset="0"
              className="col-xl-9 "
            >
              <p className="ff_inter fw-normal fs_xl text_secondary mb-0 pt-sm-4 pt-3 mt-lg-5 mt-md-3">
                It doesn’t matter where you come from, how you look or any other
                aspect about yourself. If you’re pssionate
                <span className="d-lg-block">
                  about what you do, we can’t wait to meet you.
                </span>
              </p>
              <p className="ff_inter fw-normal fs_xl text_secondary mt-sm-4 mb-0 mt-2 pb-2">
                We are always looking for people, who put customers at the
                forefront. If you are seeking a culture with high
                <span className="d-lg-block">
                  performance standards that loves to create and build things
                  with exceptional people, then Eyona may be the fit
                </span>
                for you.
              </p>
              <button className="main_btn mt-3"> Send Us A Message</button>

              <div className="d-flex justify-content-xxl-center py-lg-5 my-lg-5">
                <a
                  className="ff_inter fw-bold fs_3xl text_red my-sm-5 my-4 d-inline-block"
                  href="#mailto: recruitment@eyona.co"
                >
                  recruitment@eyona.co
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              {" "}
              <img
                className="w-100 d-lg-none"
                src={join_group_img}
                alt="join_group_img"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default JoinUs;
