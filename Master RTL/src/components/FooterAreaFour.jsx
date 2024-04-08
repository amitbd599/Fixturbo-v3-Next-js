import React from "react";
import { Link } from "react-router-dom";

const FooterAreaFour = () => {
  return (
    <footer
      className="footer-wrapper footer-layout4"
      style={{ backgroundImage: "url(assets/img/bg/footer-bg2-1.png)" }}
    >
      <div className="container">
        <div className="widget-area">
          <div className="row justify-content-between">
            <div className="col-md-6 col-xl-3">
              <div className="widget footer-widget widget-about">
                <h3 className="widget_title">اشترك في</h3>
                <p className="footer-text mb-30">
                  اشترك في النشرة الإخبارية لدينا للحصول على التحديثات
                </p>
                <div className="social-btn style3">
                  <Link to="https://www.instagram.com/" tabIndex={-1}>
                    <i className="fab fa-instagram" />
                  </Link>
                  <Link to="https://linkedin.com/" tabIndex={-1}>
                    <i className="fab fa-linkedin-in" />
                  </Link>
                  <Link to="https://twitter.com/" tabIndex={-1}>
                    <i className="fab fa-twitter" />
                  </Link>
                  <Link to="https://facebook.com/" tabIndex={-1}>
                    <i className="fab fa-facebook-f" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-auto">
              <div className="widget widget_nav_menu footer-widget">
                <h3 className="widget_title">اشترك </h3>
                <div className="menu-all-pages-container">
                  <ul className="menu">
                    <li>
                      <Link to="/about">اشترك</Link>
                    </li>
                    <li>
                      <Link to="/team">للحصول</Link>
                    </li>
                    <li>
                      <Link to="/contact">النشرة</Link>
                    </li>
                    <li>
                      <Link to="/contact">النشرة النشرة</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-auto">
              <div className="widget widget_nav_menu footer-widget">
                <h3 className="widget_title">النشرة للحصول</h3>
                <div className="menu-all-pages-container">
                  <ul className="menu">
                    <li>
                      <Link to="/service">للحصول النشرة</Link>
                    </li>
                    <li>
                      <Link to="/service">التحديثات للحصول</Link>
                    </li>
                    <li>
                      <Link to="/service">الإخبارية لدينا للحصول</Link>
                    </li>
                    <li>
                      <Link to="/service">الإخبارية</Link>
                    </li>
                    <li>
                      <Link to="/service">الإخبارية لدينا</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-auto">
              <div className="widget footer-widget">
                <h3 className="widget_title"> لدينا</h3>
                <div className="widget-contact2">
                  <div className="widget-contact-grid">
                    <div className="icon">
                      <i className="fas fa-map-marker-alt" />
                    </div>
                    <div className="contact-grid-details">
                      <p>الإخبارية</p>
                      <h6>
                        66 Broklyant, New York
                        <p />
                      </h6>
                    </div>
                  </div>
                  <div className="widget-contact-grid">
                    <div className="icon">
                      <i className="fas fa-phone-alt" />
                    </div>
                    <div className="contact-grid-details">
                      <p>الإخبارية لدينا</p>
                      <h6>
                        <Link to="tel:888123456765">012 345 678 9101</Link>
                        <p />
                      </h6>
                    </div>
                  </div>
                  <div className="widget-contact-grid">
                    <div className="icon">
                      <i className="fas fa-envelope" />
                    </div>
                    <div className="contact-grid-details">
                      <p>لدينا للحصول</p>
                      <h6>
                        <Link to="mailto:infoname@mail.com">abcd@gmail.com</Link>
                        <p />
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-wrap">
        <div className="container">
          <div className="row gy-3 justify-content-md-between justify-content-center">
            <div className="col-auto align-self-center">
              <p className="copyright-text text-center">
                © <Link to="#">Fixturbo</Link> 2024 | اشترك في النشرة الإخبارية
              </p>
            </div>
            <div className="col-auto">
              <div className="footer-links">
                <Link to="/contact">اشترك في النشرة</Link>
                <Link to="/contact">النشرة الإخبارية</Link>
                <Link to="/contact">اشترك في الإخبارية</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterAreaFour;
