"use client";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode, Thumbs, EffectFade } from "swiper";
const PortfolioTwo = () => {
  return (
    <div className="portfolio-area-1 space overflow-hidden">
      <div className="container">
        <div className="row justify-content-between align-items-end">
          <div className="col-xl-5 col-lg-6">
            <div className="title-area">
              <span className="sub-title">مشروعنا</span>
              <h2 className="sec-title">
                إصلاح السيارات بأسعار معقولة أفضل الحلول
                <img
                  className="title-bg-shape"
                  src="assets/img/bg/title-bg-shape.png"
                  alt="fixturbo_img"
                />
              </h2>
            </div>
          </div>
          <div className="col-sm-auto">
            <div className="title-area">
              <div className="icon-box">
                <button className="slick-arrow default portfolio-button-next">
                  <i className="fas fa-arrow-right" />
                </button>
                <button className="slick-arrow default portfolio-button-prev">
                  <i className="fas fa-arrow-left" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid p-0">
        <div className="row global-carousel gx-30 portfolio-slider1">
          <Swiper
            loop={true}
            navigation={{
              nextEl: ".portfolio-button-next",
              prevEl: ".portfolio-button-prev",
            }}
            spaceBetween={30}
            centeredSlides
            slidesPerView={1}
            slidesPerGroup={1}
            speed={2000}
            pagination={{ clickable: true }}
            autoplay={{ delay: 6000 }}
            className="mySwiper"
            modules={[FreeMode, Navigation, Thumbs, EffectFade]}
            breakpoints={{
              0: {
                slidesPerView: 1,
                slidesPerGroup: 1,
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
                <div className="portfolio-card style2">
                  <div className="portfolio-card-thumb">
                    <img
                      src="assets/img/portfolio/2-1.png"
                      alt="fixturbo_img"
                    />
                  </div>
                  <div className="portfolio-card-details">
                    <div className="media-left">
                      <h4 className="portfolio-card-details_title">
                        <Link href="/project-details">الابتكار تنمو النجاح</Link>
                      </h4>
                      <span className="portfolio-card-details_subtitle">
                        بروتوكول الإنترنت
                      </span>
                    </div>
                    <Link href="/project-details" className="icon-btn">
                      <i className="fas fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div className="portfolio-card style2">
                  <div className="portfolio-card-thumb">
                    <img
                      src="assets/img/portfolio/2-2.png"
                      alt="fixturbo_img"
                    />
                  </div>
                  <div className="portfolio-card-details">
                    <div className="media-left">
                      <h4 className="portfolio-card-details_title">
                        <Link href="/project-details">الابتكار تنمو النجاح</Link>
                      </h4>
                      <span className="portfolio-card-details_subtitle">
                        بروتوكول الإنترنت
                      </span>
                    </div>
                    <Link href="/project-details" className="icon-btn">
                      <i className="fas fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div className="portfolio-card style2">
                  <div className="portfolio-card-thumb">
                    <img
                      src="assets/img/portfolio/2-3.png"
                      alt="fixturbo_img"
                    />
                  </div>
                  <div className="portfolio-card-details">
                    <div className="media-left">
                      <h4 className="portfolio-card-details_title">
                        <Link href="/project-details">الابتكار تنمو النجاح</Link>
                      </h4>
                      <span className="portfolio-card-details_subtitle">
                        بروتوكول الإنترنت
                      </span>
                    </div>
                    <Link href="/project-details" className="icon-btn">
                      <i className="fas fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div className="portfolio-card style2">
                  <div className="portfolio-card-thumb">
                    <img
                      src="assets/img/portfolio/2-3.png"
                      alt="fixturbo_img"
                    />
                  </div>
                  <div className="portfolio-card-details">
                    <div className="media-left">
                      <h4 className="portfolio-card-details_title">
                        <Link href="/project-details">الابتكار تنمو النجاح</Link>
                      </h4>
                      <span className="portfolio-card-details_subtitle">
                        بروتوكول الإنترنت
                      </span>
                    </div>
                    <Link href="/project-details" className="icon-btn">
                      <i className="fas fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div className="portfolio-card style2">
                  <div className="portfolio-card-thumb">
                    <img
                      src="assets/img/portfolio/2-3.png"
                      alt="fixturbo_img"
                    />
                  </div>
                  <div className="portfolio-card-details">
                    <div className="media-left">
                      <h4 className="portfolio-card-details_title">
                        <Link href="/project-details">الابتكار تنمو النجاح</Link>
                      </h4>
                      <span className="portfolio-card-details_subtitle">
                        بروتوكول الإنترنت
                      </span>
                    </div>
                    <Link href="/project-details" className="icon-btn">
                      <i className="fas fa-arrow-right" />
                    </Link>
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

export default PortfolioTwo;
