import React from 'react';
import Img1 from "../assest/images/banner/banner-img.png"

const Banner = () => {
  return (
    <section id="banner" style={{ background: '#F9F3EC' }}>
    <div className="container">
      <div className="swiper main-swiper">
        <div className="swiper-wrapper">
          <div className="swiper-slide py-5">
            <div className="row banner-content align-items-center">
              <div className="img-wrapper col-md-5">
                <img src={Img1} className="img-fluid" />
              </div>
              <div className="content-wrapper col-md-7 p-5 mb-5">
                <div className="secondary-font text-primary text-uppercase mb-4">Save 10 - 20 % off</div>
                <h2 className="banner-title display-1 fw-normal">Best destination for <span className="text-primary">your
                  pets</span>
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="swiper-pagination mb-5"></div>
      </div>
    </div>
  </section>
  );
};

export default Banner;
