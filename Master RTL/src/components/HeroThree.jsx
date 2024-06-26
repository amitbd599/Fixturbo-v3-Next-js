"use client";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode, Thumbs, EffectFade, Autoplay } from "swiper";
const HeroThree = () => {
  return (
    <div className="hero-wrapper hero-3">
      <div className="hero-3-slider global-carousel">
        <Swiper
          loop={true}
          modules={[FreeMode, Navigation, Thumbs, EffectFade, Autoplay]}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          effect="fade"
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
        >
          <SwiperSlide>
            <div
              className="hero-slide"
              style={{
                backgroundImage: "url(assets/img/hero/hero_bg_3_1.png)",
              }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-xxl-6 col-xl-5 col-lg-6">
                    <div className="hero-style3">
                      <div
                        className="hero-subtitle text-white"
                        data-ani="slideinup"
                        data-ani-delay="0s"
                      >
                        <span>
                          <img
                            src="assets/img/hero/hero_shape_3.png"
                            alt="fixturbo_img"
                          />
                          مرحبا بكم فيكستوربو
                        </span>{" "}
                      </div>
                      <h1
                        className="hero-title text-white"
                        data-ani="slideinup"
                        data-ani-delay="0.1s"
                      >
                        إحياء، إصلاح، استمتع بالرحلة!
                      </h1>
                      <p
                        className="hero-text text-white"
                        data-ani="slideinup"
                        data-ani-delay="0.2s"
                      >
                    إذا لم يكن أي عميل مهتمًا بالحصول على الخدمة بعد الزيارة، فسيتم تطبيق رسوم الزيارة الوحيدة. ومع ذلك، إذا وافق العميل على الاستفادة من هذه الخدمة، فلن يتم تطبيق رسوم الفحص هذه.
                      </p>
                      <div
                        className="btn-group"
                        data-ani="slideinup"
                        data-ani-delay="0.3s"
                      >
                        <Link href="/about" className="btn">
                        يتعلم أكثر
                        </Link>
                        <div className="call-media-wrap">
                          <div className="icon">
                            <img
                              src="assets/img/icon/phone-1.svg"
                              alt="fixturbo_img"
                            />
                          </div>
                          <div className="media-body">
                            <h6 className="title text-white">
                            طلب مكالمة:
                            </h6>
                            <h4 className="link">
                              <a className="text-white" href="tel:6295550129">
                                (629) 555-0129
                              </a>
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 align-self-center">
                    <div
                      className="video-wrap text-lg-center"
                      data-ani="slideinup"
                      data-ani-delay="0.2s"
                    >
                      <a
                        href="https://www.youtube.com/watch?v=P7fi4hP_y80"
                        className="play-btn style4 popup-video"
                      >
                        <i className="fas fa-solid fa-play" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="hero-slide"
              style={{
                backgroundImage: "url(assets/img/hero/hero_bg_3_2.png)",
              }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-xxl-6 col-xl-5 col-lg-6">
                    <div className="hero-style3">
                      <div
                        className="hero-subtitle text-white"
                        data-ani="slideinup"
                        data-ani-delay="0s"
                      >
                        <span>
                          <img
                            src="assets/img/hero/hero_shape_3.png"
                            alt="fixturbo_img"
                          />
                          مرحبا بكم فيكستوربو
                        </span>{" "}
                      </div>
                      <h1
                        className="hero-title text-white"
                        data-ani="slideinup"
                        data-ani-delay="0.1s"
                      >
                        قيادة سلسة وإصلاحات سلسة.
                      </h1>
                      <p
                        className="hero-text text-white"
                        data-ani="slideinup"
                        data-ani-delay="0.2s"
                      >
                      إذا لم يكن أي عميل مهتمًا بالحصول على الخدمة بعد الزيارة، فسيتم تطبيق رسوم الزيارة الوحيدة. ومع ذلك، إذا وافق العميل على الاستفادة من هذه الخدمة، فلن يتم تطبيق رسوم الفحص هذه.
                      </p>
                      <div
                        className="btn-group"
                        data-ani="slideinup"
                        data-ani-delay="0.3s"
                      >
                        <Link href="/about" className="btn">
                        يتعلم أكثر
                        </Link>
                        <div className="call-media-wrap">
                          <div className="icon">
                            <img
                              src="assets/img/icon/phone-1.svg"
                              alt="fixturbo_img"
                            />
                          </div>
                          <div className="media-body">
                            <h6 className="title text-white">
                            طلب مكالمة:
                            </h6>
                            <h4 className="link">
                              <a className="text-white" href="tel:6295550129">
                                (629) 555-0129
                              </a>
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 align-self-center">
                    <div
                      className="video-wrap text-lg-center"
                      data-ani="slideinup"
                      data-ani-delay="0.2s"
                    >
                      <a
                        href="https://www.youtube.com/watch?v=P7fi4hP_y80"
                        className="play-btn style4 popup-video"
                      >
                        <i className="fas fa-solid fa-play" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default HeroThree;
