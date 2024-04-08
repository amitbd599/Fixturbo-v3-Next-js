import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode, Thumbs, EffectFade } from "swiper";
import { Link } from "react-router-dom";
const TeamAreaThree = () => {
  return (
    <div className="team-area-2 space">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-6">
            <div className="title-area text-center">
              <span className="sub-title">نشرة الإخب</span>
              <h2 className="sec-title">
                النشرة الإخبارية لديناالإخبارية لدينا
              </h2>
              <p className="sec-text mb-lg-5 mb-4">
                النشرة الإخبارية لدينا النشرة الإخبارية لدينا النشرة الإخبارية
                لدينا النشرة الإخبارية لدينا النشرة الإخبارية لدينا النشرة
                الإخبارية لدينا النشرة الإخبارية لدينا
              </p>
            </div>
          </div>
        </div>
        <div className="row gx-30 global-carousel team-slider2">
          <Swiper
            navigation={{
              nextEl: ".team-slider2-next",
              prevEl: ".team-slider2-prev",
            }}
            spaceBetween={20}
            slidesPerGroup={1}
            speed={1000}
            pagination={{ clickable: true }}
            loop
            autoplay={{
              stopOnLastSlide: false,
            }}
            className="mySwiper"
            modules={[FreeMode, Navigation, Thumbs, EffectFade]}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 3,
              },
              1200: {
                slidesPerView: 3,
              },
              1400: {
                slidesPerView: 3,
              },
            }}
          >
            <SwiperSlide>
              <div>
                <div className="team-card style2">
                  <div className="team-card_img">
                    <img
                      src="assets/img/team/team-1-1.png"
                      alt="fixturbo_img"
                    />
                  </div>
                  <div className="team-card_content">
                    <h4 className="team-card_title">
                      <Link to="/team-details">النشرة لدينا</Link>
                    </h4>
                    <span className="team-card_desig">النشرة الإخبارية</span>
                    <div className="team-social_wrap">
                      <div className="social-btn style2">
                        <Link to="https://linkedin.com/">
                          <i className="fab fa-linkedin-in" />
                        </Link>
                        <Link to="https://www.instagram.com/">
                          <i className="fab fa-instagram" />
                        </Link>
                        <Link to="https://facebook.com/">
                          <i className="fab fa-facebook-f" />
                        </Link>
                        <Link to="https://twitter.com/">
                          <i className="fab fa-twitter" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div className="team-card style2">
                  <div className="team-card_img">
                    <img
                      src="assets/img/team/team-1-3.png"
                      alt="fixturbo_img"
                    />
                  </div>
                  <div className="team-card_content">
                    <h4 className="team-card_title">
                      <Link to="/team-details">النشرة الإخبارية</Link>
                    </h4>
                    <span className="team-card_desig">الإخب ارية</span>
                    <div className="team-social_wrap">
                      <div className="social-btn style2">
                        <Link to="https://linkedin.com/">
                          <i className="fab fa-linkedin-in" />
                        </Link>
                        <Link to="https://www.instagram.com/">
                          <i className="fab fa-instagram" />
                        </Link>
                        <Link to="https://facebook.com/">
                          <i className="fab fa-facebook-f" />
                        </Link>
                        <Link to="https://twitter.com/">
                          <i className="fab fa-twitter" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div className="team-card style2">
                  <div className="team-card_img">
                    <img
                      src="assets/img/team/team-1-1.png"
                      alt="fixturbo_img"
                    />
                  </div>
                  <div className="team-card_content">
                    <h4 className="team-card_title">
                      <Link to="/team-details">النشرة الإخب</Link>
                    </h4>
                    <span className="team-card_desig">النش بارية</span>
                    <div className="team-social_wrap">
                      <div className="social-btn style2">
                        <Link to="https://linkedin.com/">
                          <i className="fab fa-linkedin-in" />
                        </Link>
                        <Link to="https://www.instagram.com/">
                          <i className="fab fa-instagram" />
                        </Link>
                        <Link to="https://facebook.com/">
                          <i className="fab fa-facebook-f" />
                        </Link>
                        <Link to="https://twitter.com/">
                          <i className="fab fa-twitter" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div className="team-card style2">
                  <div className="team-card_img">
                    <img
                      src="assets/img/team/team-1-3.png"
                      alt="fixturbo_img"
                    />
                  </div>
                  <div className="team-card_content">
                    <h4 className="team-card_title">
                      <Link to="/team-details">النشرة الإخبارية</Link>
                    </h4>
                    <span className="team-card_desig">النشرة لإارية</span>
                    <div className="team-social_wrap">
                      <div className="social-btn style2">
                        <Link to="https://linkedin.com/">
                          <i className="fab fa-linkedin-in" />
                        </Link>
                        <Link to="https://www.instagram.com/">
                          <i className="fab fa-instagram" />
                        </Link>
                        <Link to="https://facebook.com/">
                          <i className="fab fa-facebook-f" />
                        </Link>
                        <Link to="https://twitter.com/">
                          <i className="fab fa-twitter" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default TeamAreaThree;
