import React from "react";
import magicImg1 from "../assets/img/png/magic-img1.png";
import magicImg2 from "../assets/img/png/masic-img2.png";
import magicImg3 from "../assets/img/png/magic-img3.png";
import magicImg4 from "../assets/img/png/magic-img4.png";
import magicImg5 from "../assets/img/png/magic-img5.png";
import magicImg6 from "../assets/img/png/magic-img6.png";
import magic_circle from "../assets/img/png/magic-circle.png";

function Magic() {
  return (
    <>
      <section className="py-5 position-relative">
        <img
          className=" position-absolute magic_circle_class z_index1"
          src={magic_circle}
          alt="magic_circle"
        />
        <div className="container py-sm-5 z_index3 position-relative">
          <div className="row justify-content-between align-items-center">
            <div
              data-aos="fade-rigth"
              data-aos-easing="ease-in-out"
              data-aos-delay="1000"
              data-aos-duration="1000"
              data-aos-offset="0"
              className="col-xl-5 col-lg-6"
            >
              <h2 className="ff_inter fw-bold fs_8x5l text_primary mb-0">
                How we make <span className="text_red">magic</span> happen.
              </h2>
              <p className="ff_inter fw-normal fs_xl text_secondary mb-0 mt-md-4 mt-2 pt-xl-2">
                We seek breakthroughs that will stand the test of time. We keep
                experimenting that's how we innovate. Innovation we believe is
                admired but execution is worshipped. We love the problem and
                pain point and hence the journey more than the destination. We
                are constantly improving and meticulously refining our products
                foundation that has been built, and that is what we believe
                makes us great.
              </p>
              <p className="ff_inter fw-normal fs_xl text_secondary mb-0 mt-xl-5 mt-4">
                We are passionately curious as we believe this is the fuel for
                discovery, inquiry and learning. Our main objective is to be
                customer obsessed and build products that are everyday utilities
                for businesses.
              </p>
            </div>
            <div className="col-lg-6">
              <div
                data-aos="fade-left"
                data-aos-easing="ease-in-out"
                data-aos-delay="1000"
                data-aos-duration="1000"
                data-aos-offset="0"
                className="grid_container mt-4 mt-lg-0"
              >
                <div className="grid_item1">
                  <img
                    className="rounded-4 w-100"
                    src={magicImg1}
                    alt="magicImg1"
                  />
                </div>
                <div className="grid_item2 translate_custom">
                  <img
                    className="rounded-4 w-100 "
                    src={magicImg2}
                    alt="magicImg1"
                  />
                </div>
                <div className="grid_item3">
                  <img
                    className="rounded-4 w-100"
                    src={magicImg3}
                    alt="magicImg1"
                  />
                </div>
                <div className="grid_item4">
                  <img
                    className="rounded-4 w-100"
                    src={magicImg4}
                    alt="magicImg1"
                  />
                </div>
                <div className="grid_item5">
                  <img
                    className="rounded-4 w-100 mt-sm-5"
                    src={magicImg5}
                    alt="magicImg1"
                  />
                </div>
                <div className="grid_item6">
                  <img
                    className=" rounded-4 w-100 mt-sm-5"
                    src={magicImg6}
                    alt="magicImg1"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Magic;
