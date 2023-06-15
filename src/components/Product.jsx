import React from "react";

import Cards from "../js/Cards";

function Product() {
  return (
    <>
      <section id="product" className="py-lg-5 pt-5">
        <div className="container mt-xxl-5 pt-md-5">
          <h2
            data-aos="zoom-in"
            data-aos-easing="ease-in-out"
            data-aos-delay="1200"
            data-aos-duration="1200"
            data-aos-offset="0"
            className="ff_inter fw-bold fs_8x5l text-center text_primary pt-md-5"
          >
            Our products.
          </h2>
          <p
            data-aos="zoom-in"
            data-aos-easing="ease-in-out"
            data-aos-delay="1200"
            data-aos-duration="1200"
            data-aos-offset="0"
            className="ff_inter fw-normal fs_xl text_secondary text-center mb-0 mt-md-4 mt-2 pb-lg-4 pb-3"
          >
            We exclusively create and build B2B software. This specialization
            has helped us build{" "}
            <span className="d-md-block">
              unmatched deep domain expertise for global fit and scale.
            </span>
          </p>

          <div className="row justify-content-center">
            <div className="col-md-11">
              {" "}
              <div className="row">
                {" "}
                {Cards.map((data) => {
                  return (
                    <div className="col-md-6 mt-md-5 mt-4">
                      <div
                        data-aos="flip-right"
                        data-aos-easing="ease-in-out"
                        data-aos-delay="800"
                        data-aos-duration="1000"
                        data-aos-offset="0"
                        className={` ${data.cls} cards z-2 pt-xl-5 h-100 position-relative overflow-hidden d-flex flex-column justify-content-between`}
                      >
                        <img
                          className={`position-absolute z_index1 d-none d-sm-flex ${data.img_posi}`}
                          src={data.moon}
                          alt="IMG1"
                        />
                        <img
                          className={`position-absolute z_index1 d-none d-sm-flex ${data.img_posi2}`}
                          src={data.orange}
                          alt="IMG2"
                        />
                        <img
                          className={`position-absolute z_index1 d-none d-sm-flex ${data.img_posi3}`}
                          src={data.leaf}
                          alt="IMG3"
                        />
                        <img
                          className={`position-absolute z_index1 d-none d-sm-flex ${data.img_posi4}`}
                          src={data.leaf2}
                          alt="img4"
                        />
                        <img
                          className={`position-absolute z_index1 d-none d-sm-flex ${data.img_posi5}`}
                          src={data.ice}
                          alt="IMG5"
                        />
                        <div className="px-lg-5 px-3 pt-lg-5 mt-4 z_index4 position-relative">
                          <img
                            className="card_logo_size"
                            src={data.icon}
                            alt="icon"
                          />
                          <h2 className=" ff_inter fw-bold fs_3xl mb-0 mt-md-4 pt-3 text_primary">
                            {data.head}
                          </h2>
                          <p className=" ff_inter fw-normal fs_sm text_primary mb-0 mt-4 pe-">
                            {data.para}{" "}
                            <span className=" d-lg-block">{data.text}</span>
                            <span className=" d-lg-block">{data.span}</span>
                          </p>
                        </div>
                        <img
                          className={`w-100 z-0 pb transtale position-relative ${data.scale}`}
                          src={data.img}
                          alt="img"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Product;
