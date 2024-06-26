import Link from "next/link";

const HeroSix = () => {
  return (
    <div className="hero-wrapper" id="hero">
      <div className="container">
        <div className="hero-6" style={{ backgroundColor: "#EAE1D6" }}>
          <div className="row flex-row-reverse align-items-center">
            <div className="col-md-6">
              <div className="hero-thumb text-center">
                <img
                  src="assets/img/update-img/hero6-1.png"
                  alt="fixturbo_img"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="hero-style6">
                <span className="sub-title">لفريق صيلفريق</span>
                <h1 className="hero-title">صيل فريقصيلفريق</h1>
                <div className="btn-group">
                  <Link href="/shop" className="btn style2 style-radius">
                    صي لفريق
                  </Link>
                  <span className="offer-tag">صي فريق %20 صيلفريق</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*==============================
        Intro Area  
        ==============================*/}
        <div className="row gx-30 gy-30">
          <div className="col-lg-4 col-md-6">
            <div
              className="hero-intro-card"
              style={{ backgroundColor: "#F2F2EF" }}
            >
              <div className="intro-card-img">
                <img
                  src="assets/img/update-img/hero6-2.png"
                  alt="fixturbo_img"
                />
              </div>
              <div className="intro-card-details">
                <h6 className="intro-card-subtitle">فر قصي لفريق $5.00</h6>
                <h4 className="intro-card-title">
                  <Link href="#">صيل فريقص يلفريق</Link>
                </h4>
                <Link href="/shop" className="btn style5 style-radius">
                  صيل يلفريق
                  <i className="fas fa-arrow-left ms-2" />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div
              className="hero-intro-card"
              style={{ backgroundColor: "rgba(221, 76, 100, 0.3)" }}
            >
              <div className="intro-card-img">
                <img
                  src="assets/img/update-img/hero6-3.png"
                  alt="fixturbo_img"
                />
              </div>
              <div className="intro-card-details">
                <h6 className="intro-card-subtitle">فر قصي لفريق $5.00</h6>
                <h4 className="intro-card-title">
                  <Link href="#">صيل فريقص يلفريق</Link>
                </h4>
                <Link href="/shop" className="btn style5 style-radius">
                  صيل يلفريق
                  <i className="fas fa-arrow-left ms-2" />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="hero-intro-card bg-theme">
              <div className="intro-card-img">
                <img
                  src="assets/img/update-img/hero6-4.png"
                  alt="fixturbo_img"
                />
              </div>
              <div className="intro-card-details">
                <h6 className="intro-card-subtitle text-white">
                  فر قصي لفريق $5.00
                </h6>
                <h4 className="intro-card-title text-white">
                  <Link href="#">صيل فريقص يلفريق</Link>
                </h4>
                <Link href="/shop" className="btn style5 style-radius">
                  صيل يلفريق
                  <i className="fas fa-arrow-left ms-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSix;
