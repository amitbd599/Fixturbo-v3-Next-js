import Animation from "@/helper/Animation";
import Preloader from "@/helper/Preloader";
import Link from "next/link";

export default function Home() {
  return (
  
       <section className="demo">
      <Animation />
      {/* Preloader */}
      <Preloader />
       {/* Navigation */}
       <header className="navbar-area">
         <nav className="navbar navbar-expand-lg navbar-default navbar-fixed-top">
           <div className="container nav-container">
             <div className="logo">
               <Link className="main-logo" href="/">
                 <img src="assets/img/demo/logo.svg" alt="fixturbo_img" />
               </Link>
             </div>
             <div className="nav-right-part nav-right-part-mobile ms-auto"></div>
             <div className="collapse navbar-collapse" id="al_main_menu">
               <ul className="navbar-nav menu-open text-center m-auto">
                 <li>
                   <a className="page-scroll pe-4" href="#demo">
                     العروض التوضيحية
                   </a>
                 </li>
                 <li>
                   <a className="page-scroll" href="#inner">
                     الصفحات الداخلية
                   </a>
                 </li>
                 <li>
                   <a className="page-scroll" href="#header">
                     رأس
                   </a>
                 </li>
                 <li>
                   <a className="page-scroll" href="#footer">
                     تذييل
                   </a>
                 </li>
                 <li>
                   <a className="page-scroll" href="#featured">
                     سمات
                   </a>
                 </li>
               </ul>
             </div>
             <div className="nav-right-part nav-right-part-desktop">
               <ul>
                 <li>
                   <a
                     href="https://themeforest.net/user/wowtheme7"
                     className="btn btn-base"
                   >
                     شراء الآن
                   </a>
                 </li>
               </ul>
             </div>
           </div>
         </nav>
       </header>
       {/* Banner Area Start*/}
       <section id="banner" className="banner-area">
         <div className="sidebar-links">
           <a
             className="btn btn-white"
             href="https://themeforest.net/user/wowtheme7"
           >
             <i className="fa fa-cart-arrow-down" />
             أضف إلى السلة
           </a>
           <a
             className="btn btn-white"
             href="https://themeforest.net/user/wowtheme7"
           >
             <i className="fa fa-cog" />
             الرابط التجريبي
           </a>
         </div>
         <div className="container">
           <div className="row justify-content-center">
             <div className="col-lg-10 align-self-center">
               <div className="banner-inner text-center">
                 <img
                   className="banner-logo"
                   src="assets/img/demo/logo-big.png"
                   alt="logo"
                 />
                 <h1 className="mt-4">
                   Fixturbo - قالب Js لتصليح السيارات وخدمات السيارات
                 </h1>
                 <p className="me-5 mb-5">
                   Fixturbo هو قالب React Js لإصلاح السيارات وخدمات السيارات، وهو
                   مصمم لمجموعة من الخدمات مع وضع عدد من مؤسسات خدمة السيارات
                   وإصلاح السيارات في الاعتبار.
                 </p>
                 <div className="btn-area">
                   <a className="btn btn-border page-scroll" href="#demo">
                     جرب العروض التوضيحية
                   </a>
                   <a
                     className="btn btn-base me-0"
                     href="https://themeforest.net/user/wowtheme7"
                   >
                     اشتري الآن
                   </a>
                 </div>
               </div>
             </div>
           </div>
         </div>
         <div className="container-fluid">
           <div className="hero-thumb-wrap">
             <div className="hero-thumb1">
               <img src="assets/img/demo/01.png" alt="fixturbo_img" />
             </div>
             <div className="hero-thumb2 jump">
               <img src="assets/img/demo/06.png" alt="fixturbo_img" />
             </div>
             <div className="hero-thumb3 jump">
               <img src="assets/img/demo/03.png" alt="fixturbo_img" />
             </div>
             <div className="hero-thumb4 jump-reverse">
               <img src="assets/img/demo/04.png" alt="fixturbo_img" />
             </div>
             <div className="hero-thumb5 jump-reverse">
               <img src="assets/img/demo/05.png" alt="fixturbo_img" />
             </div>
             <div className="hero-thumb6 jump-reverse">
               <img src="assets/img/demo/02.png" alt="fixturbo_img" />
             </div>
           </div>
         </div>
       </section>
       {/* Banner Area End */}
       {/* counter start */}
       <div className="counter-area pd-top-115 pd-bottom-90">
         <div className="container">
           <div
             className="counter-area-inner wow fadeInUp animated"
             data-wow-duration="1.5s"
             data-wow-delay="0.2s"
           >
             <div className="row">
               <div className="col-md-4 col-sm-6">
                 <div className="single-counter-inner text-center">
                   <div className="details">
                     <h2>
                       <span className="counter">20</span>+
                     </h2>
                     <p>إجمالي الصفحات</p>
                   </div>
                 </div>
               </div>
               <div className="col-md-4 col-sm-6">
                 <div className="single-counter-inner text-center">
                   <div className="details">
                     <h2>
                       <span className="counter">06</span>
                     </h2>
                     <p>مجموع المنازل</p>
                   </div>
                 </div>
               </div>
               <div className="col-md-4 col-sm-6">
                 <div className="single-counter-inner text-center">
                   <div className="details">
                     <h2>
                       <span className="counter">14</span>+
                     </h2>
                     <p>الصفحات الداخلية</p>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>
       {/* counter end */}
       {/* demo Section */}
       <section id="demo" className="demo-section pd-top-100">
         <div className="container">
           <div className="row justify-content-center">
             <div className="col-lg-8 text-center">
               <div
                 className="section-title wow animated fadeInUp"
                 data-wow-duration="1.5s"
                 data-wow-delay="0.2s"
               >
                 <h5 className="subtitle">عروض توضيحية رائعة</h5>
                 <h2 className="title">الصفحات الرئيسية العظيمة</h2>
               </div>
             </div>
           </div>
           <div className="row justify-content-center">
             <div className="col-lg-4 col-md-6">
               <div
                 className="inner-item style-large wow animated fadeInUp"
                 data-wow-duration="1.5s"
                 data-wow-delay="0.2s"
               >
                 <Link href="#">
                   <span className="thumb">
                     <img src="assets/img/demo/1.png" alt="fixturbo_img" />
                   </span>
                   الصفحة الرئيسية V.1
                   <div className="item-title">إصلاح السيارات المنزلية</div>
                 </Link>
                 <div className="btn-group">
                   <Link
                     className="btn btn-base"
                     href="https://fixturbo.wowtheme7.com/home-1"
                   >
                     عرض حي
                   </Link>
                   <Link
                     className="btn btn-base"
                     href="https://fixturbo-rtl.wowtheme7.com/home-1"
                   >
                     عرض RTL
                   </Link>
                 </div>
               </div>
             </div>
             <div className="col-lg-4 col-md-6">
               <div
                 className="inner-item style-large wow animated fadeInUp"
                 data-wow-duration="1.5s"
                 data-wow-delay="0.3s"
               >
                 <Link href="#">
                   <span className="thumb">
                     <img src="assets/img/demo/2.png" alt="fixturbo_img" />
                   </span>
                   الصفحة الرئيسية V.2
                   <div className="item-title">الصفحة الرئيسية السيارات</div>
                 </Link>
                 <div className="btn-group">
                   <Link
                     className="btn btn-base"
                     href="https://fixturbo.wowtheme7.com/home-2"
                   >
                     عرض حي
                   </Link>
                   <Link
                     className="btn btn-base"
                     href="https://fixturbo-rtl.wowtheme7.com/home-2"
                   >
                     عرض RTL
                   </Link>
                 </div>
               </div>
             </div>
             <div className="col-lg-4 col-md-6">
               <div
                 className="inner-item style-large wow animated fadeInUp"
                 data-wow-duration="1.5s"
                 data-wow-delay="0.4s"
               >
                 <Link href="#">
                   <span className="thumb">
                     <img src="assets/img/demo/3.png" alt="fixturbo_img" />
                   </span>
                   الصفحة الرئيسية V.3
                   <div className="item-title">
                     الصفحة الرئيسية مصلحي السيارات
                   </div>
                 </Link>
                 <div className="btn-group">
                   <Link
                     className="btn btn-base"
                     href="https://fixturbo.wowtheme7.com/home-3"
                   >
                     عرض حي
                   </Link>
                   <Link
                     className="btn btn-base"
                     href="https://fixturbo-rtl.wowtheme7.com/home-3"
                   >
                     عرض RTL
                   </Link>
                 </div>
               </div>
             </div>
             <div className="col-lg-4 col-md-6">
               <div
                 className="inner-item style-large wow animated fadeInUp"
                 data-wow-duration="1.5s"
                 data-wow-delay="0.4s"
               >
                 <Link href="#">
                   <span className="thumb">
                     <img src="assets/img/demo/4.png" alt="fixturbo_img" />
                   </span>
                   الصفحة الرئيسية V.4
                   <div className="item-title">
                     الصفحة الرئيسية إحياء السيارات
                   </div>
                 </Link>
                 <div className="btn-group">
                   <Link
                     className="btn btn-base"
                     href="https://fixturbo.wowtheme7.com/home-4"
                   >
                     عرض حي
                   </Link>
                   <Link
                     className="btn btn-base"
                     href="https://fixturbo-rtl.wowtheme7.com/home-4"
                   >
                     عرض RTL
                   </Link>
                 </div>
               </div>
             </div>
             <div className="col-lg-4 col-md-6">
               <div
                 className="inner-item style-large wow animated fadeInUp"
                 data-wow-duration="1.5s"
                 data-wow-delay="0.4s"
               >
                 <Link href="#">
                   <span className="thumb">
                     <img src="assets/img/demo/5.png" alt="fixturbo_img" />
                   </span>
                   الصفحة الرئيسية V.5
                   <div className="item-title">العناية بالسيارات المنزلية</div>
                 </Link>
                 <div className="btn-group">
                   <Link
                     className="btn btn-base"
                     href="https://fixturbo.wowtheme7.com/home-5"
                   >
                     عرض حي
                   </Link>
                   <Link
                     className="btn btn-base"
                     href="https://fixturbo-rtl.wowtheme7.com/home-5"
                   >
                     عرض RTL
                   </Link>
                 </div>
               </div>
             </div>
             <div className="col-lg-4 col-md-6">
               <div
                 className="inner-item style-large wow animated fadeInUp"
                 data-wow-duration="1.5s"
                 data-wow-delay="0.4s"
               >
                 <Link href="#">
                   <span className="thumb">
                     <img src="assets/img/demo/6.png" alt="fixturbo_img" />
                   </span>
                   الصفحة الرئيسية V.6
                   <div className="item-title">
                     الصفحة الرئيسية لقطع غيار السيارات
                   </div>
                 </Link>
                 <div className="btn-group">
                   <Link
                     className="btn btn-base"
                     href="https://fixturbo.wowtheme7.com/home-6"
                   >
                     عرض حي
                   </Link>
                   <Link
                     className="btn btn-base"
                     href="https://fixturbo-rtl.wowtheme7.com/home-6"
                   >
                     عرض RTL
                   </Link>
                 </div>
               </div>
             </div>
             <div className="col-lg-4 col-md-6">
               <div
                 className="inner-item style-large wow animated fadeInUp coming-soon"
                 data-wow-duration="1.5s"
                 data-wow-delay="0.4s"
               >
                 <Link href="#">
                   <span className="thumb">
                     <img src="assets/img/demo/4.png" alt="fixturbo_img" />
                   </span>
                   <span className="cm-soon-title">سآتي قريبا</span>
                 </Link>
               </div>
             </div>
           </div>
         </div>
       </section>
       {/* inner Section */}
       <section id="inner" className="inner-section pd-top-130">
         <div className="container">
           <div className="row justify-content-center">
             <div className="col-lg-8 text-center">
               <div
                 className="section-title wow animated fadeInUp"
                 data-wow-duration="1.5s"
                 data-wow-delay="0.2s"
               >
                 <h2 className="title">الصفحات الداخلية العظيمة</h2>
               </div>
             </div>
           </div>
           <div className="row justify-content-center">
             <div className="col-lg-4 col-md-6">
               <div
                 className="inner-item style-large wow animated fadeInUp"
                 data-wow-duration="1.5s"
                 data-wow-delay="0.4s"
               >
                 <Link href="#">
                   <span className="thumb">
                     <img src="assets/img/demo/about.png" alt="fixturbo_img" />
                   </span>
                   حول الصفحة
                 </Link>
                 <div className="btn-group">
                   <Link
                     className="btn btn-base"
                     href="https://fixturbo-rtl.wowtheme7.com/about"
                   >
                     عرض حي
                   </Link>
                 </div>
               </div>
             </div>
             <div className="col-lg-4 col-md-6">
               <div
                 className="inner-item style-large wow animated fadeInUp"
                 data-wow-duration="1.5s"
                 data-wow-delay="0.4s"
               >
                 <Link href="#">
                   <span className="thumb">
                     <img src="assets/img/demo/service.png" alt="fixturbo_img" />
                   </span>
                   صفحة الخدمة
                 </Link>
                 <div className="btn-group">
                   <Link
                     className="btn btn-base"
                     href="https://fixturbo-rtl.wowtheme7.com/service"
                   >
                     عرض حي
                   </Link>
                 </div>
               </div>
             </div>
             <div className="col-lg-4 col-md-6">
               <div
                 className="inner-item style-large wow animated fadeInUp"
                 data-wow-duration="1.5s"
                 data-wow-delay="0.4s"
               >
                 <Link href="#">
                   <span className="thumb">
                     <img
                       src="assets/img/demo/service-details.png"
                       alt="fixturbo_img"
                     />
                   </span>
                   تفاصيل الخدمة
                 </Link>
                 <div className="btn-group">
                   <Link
                     className="btn btn-base"
                     href="https://fixturbo-rtl.wowtheme7.com/service-details"
                   >
                     عرض حي
                   </Link>
                 </div>
               </div>
             </div>
             <div className="col-lg-4 col-md-6">
               <div
                 className="inner-item style-large wow animated fadeInUp"
                 data-wow-duration="1.5s"
                 data-wow-delay="0.4s"
               >
                 <Link href="#">
                   <span className="thumb">
                     <img src="assets/img/demo/project.png" alt="fixturbo_img" />
                   </span>
                   صفحة المشروع
                 </Link>
                 <div className="btn-group">
                   <Link
                     className="btn btn-base"
                     href="https://fixturbo-rtl.wowtheme7.com/project"
                   >
                     عرض حي
                   </Link>
                 </div>
               </div>
             </div>
             <div className="col-lg-4 col-md-6">
               <div
                 className="inner-item style-large wow animated fadeInUp"
                 data-wow-duration="1.5s"
                 data-wow-delay="0.4s"
               >
                 <Link href="#">
                   <span className="thumb">
                     <img
                       src="assets/img/demo/project-details.png"
                       alt="fixturbo_img"
                     />
                   </span>
                   تفاصيل المشروع
                 </Link>
                 <div className="btn-group">
                   <Link
                     className="btn btn-base"
                     href="https://fixturbo-rtl.wowtheme7.com/project-details"
                   >
                     عرض حي
                   </Link>
                 </div>
               </div>
             </div>
             <div className="col-lg-4 col-md-6">
               <div
                 className="inner-item style-large wow animated fadeInUp"
                 data-wow-duration="1.5s"
                 data-wow-delay="0.4s"
               >
                 <Link href="#">
                   <span className="thumb">
                     <img src="assets/img/demo/team.png" alt="fixturbo_img" />
                   </span>
                   صفحة الفريق
                 </Link>
                 <div className="btn-group">
                   <Link
                     className="btn btn-base"
                     href="https://fixturbo-rtl.wowtheme7.com/team"
                   >
                     عرض حي
                   </Link>
                 </div>
               </div>
             </div>
             <div className="col-lg-4 col-md-6">
               <div
                 className="inner-item style-large wow animated fadeInUp"
                 data-wow-duration="1.5s"
                 data-wow-delay="0.4s"
               >
                 <Link href="#">
                   <span className="thumb">
                     <img
                       src="assets/img/demo/team-details.png"
                       alt="fixturbo_img"
                     />
                   </span>
                   تفاصيل الفريق
                 </Link>
                 <div className="btn-group">
                   <Link
                     className="btn btn-base"
                     href="https://fixturbo-rtl.wowtheme7.com/team-details"
                   >
                     عرض حي
                   </Link>
                 </div>
               </div>
             </div>
             <div className="col-lg-4 col-md-6">
               <div
                 className="inner-item style-large wow animated fadeInUp"
                 data-wow-duration="1.5s"
                 data-wow-delay="0.4s"
               >
                 <Link href="#">
                   <span className="thumb">
                     <img src="assets/img/demo/blog.png" alt="fixturbo_img" />
                   </span>
                   صفحة المدونة
                 </Link>
                 <div className="btn-group">
                   <Link
                     className="btn btn-base"
                     href="https://fixturbo-rtl.wowtheme7.com/blog"
                   >
                     عرض حي
                   </Link>
                 </div>
               </div>
             </div>
             <div className="col-lg-4 col-md-6">
               <div
                 className="inner-item style-large wow animated fadeInUp"
                 data-wow-duration="1.5s"
                 data-wow-delay="0.4s"
               >
                 <Link href="#">
                   <span className="thumb">
                     <img
                       src="assets/img/demo/blog-details.png"
                       alt="fixturbo_img"
                     />
                   </span>
                   تفاصيل المدونة
                 </Link>
                 <div className="btn-group">
                   <Link
                     className="btn btn-base"
                     href="https://fixturbo-rtl.wowtheme7.com/blog-details"
                   >
                     عرض حي
                   </Link>
                 </div>
               </div>
             </div>
             <div className="col-lg-4 col-md-6">
               <div
                 className="inner-item style-large wow animated fadeInUp"
                 data-wow-duration="1.5s"
                 data-wow-delay="0.4s"
               >
                 <Link href="#">
                   <span className="thumb">
                     <img src="assets/img/demo/shop.png" alt="fixturbo_img" />
                   </span>
                   صفحة المتجر
                 </Link>
                 <div className="btn-group">
                   <Link
                     className="btn btn-base"
                     href="https://fixturbo-rtl.wowtheme7.com/shop"
                   >
                     عرض حي
                   </Link>
                 </div>
               </div>
             </div>
             <div className="col-lg-4 col-md-6">
               <div
                 className="inner-item style-large wow animated fadeInUp"
                 data-wow-duration="1.5s"
                 data-wow-delay="0.4s"
               >
                 <Link href="#">
                   <span className="thumb">
                     <img
                       src="assets/img/demo/shop-details.png"
                       alt="fixturbo_img"
                     />
                   </span>
                   تفاصيل المتجر
                 </Link>
                 <div className="btn-group">
                   <Link
                     className="btn btn-base"
                     href="https://fixturbo-rtl.wowtheme7.com/shop-details"
                   >
                     عرض حي
                   </Link>
                 </div>
               </div>
             </div>
             <div className="col-lg-4 col-md-6">
               <div
                 className="inner-item style-large wow animated fadeInUp"
                 data-wow-duration="1.5s"
                 data-wow-delay="0.4s"
               >
                 <Link href="#">
                   <span className="thumb">
                     <img src="assets/img/demo/contact.png" alt="fixturbo_img" />
                   </span>
                   صفحة الاتصال
                 </Link>
                 <div className="btn-group">
                   <Link
                     className="btn btn-base"
                     href="https://fixturbo-rtl.wowtheme7.com/contact"
                   >
                     عرض حي
                   </Link>
                 </div>
               </div>
             </div>
             <div className="col-lg-4 col-md-6">
               <div
                 className="inner-item style-large wow animated fadeInUp coming-soon"
                 data-wow-duration="1.5s"
                 data-wow-delay="0.4s"
               >
                 <Link href="#">
                   <span className="thumb">
                     <img src="assets/img/demo/4.png" alt="fixturbo_img" />
                   </span>
                   <span className="cm-soon-title">يأتي قريبا</span>
                 </Link>
               </div>
             </div>
           </div>
         </div>
       </section>
       {/* demo Section */}
       <section id="header" className="widget-section pd-top-87">
         <div className="container">
           <div className="row justify-content-center">
             <div className="col-lg-8 text-center">
               <div
                 className="section-title wow animated fadeInUp"
                 data-wow-duration="1.5s"
                 data-wow-delay="0.2s"
               >
                 <h2 className="title">نمط الرأس</h2>
               </div>
             </div>
           </div>
           <div className="row justify-content-center">
             <div className="col-lg-12">
               <div className="header-item mb-4">
                 <span className="thumb">
                   <img
                     className="w-100"
                     src="assets/img/demo/header.png"
                     alt="fixturbo_img"
                   />
                 </span>
               </div>
             </div>
             <div className="col-lg-12">
               <div className="header-item mb-4">
                 <span className="thumb">
                   <img
                     className="w-100"
                     src="assets/img/demo/header2.png"
                     alt="fixturbo_img"
                   />
                 </span>
               </div>
             </div>
             <div className="col-lg-12">
               <div className="header-item mb-4">
                 <span className="thumb">
                   <img
                     className="w-100"
                     src="assets/img/demo/header3.png"
                     alt="fixturbo_img"
                   />
                 </span>
               </div>
             </div>
           </div>
         </div>
       </section>
       {/* demo Section */}
       <section id="footer" className="widget-section">
         <div className="container">
           <div className="row justify-content-center">
             <div className="col-lg-8 text-center pd-top-130">
               <div className="section-title">
                 <h2 className="title">نمط التذييل</h2>
               </div>
             </div>
           </div>
           <div className="row justify-content-center">
             <div className="col-lg-12">
               <div className="header-item mb-4">
                 <span className="thumb">
                   <img
                     className="w-100"
                     src="assets/img/demo/footer.png"
                     alt="fixturbo_img"
                   />
                 </span>
               </div>
             </div>
           </div>
         </div>
       </section>
       {/* inner Section */}
       <section
         id="featured"
         className="featured-section pd-top-87 pd-bottom-110"
       >
         <div className="container">
           <div className="row justify-content-center">
             <div className="col-lg-8 text-center">
               <div
                 className="section-title wow animated fadeInUp"
                 data-wow-duration="1.5s"
                 data-wow-delay="0.2s"
               >
                 <h2 className="title">الميزات الأساسية</h2>
                 {/* <p>We have created a new product that will help designers, developers and com-panies create websites for their startups quickly and easily.</p> */}
               </div>
             </div>
           </div>
           <div className="row justify-content-center">
             <div className="col-lg-4 col-md-6">
               <div
                 className="featured-item wow animated fadeInUp"
                 data-wow-duration="1.5s"
                 data-wow-delay="0.2s"
               >
                 <img src="assets/img/demo/featured/3.png" alt="fixturbo_img" />
                 بوتستراب 5+
               </div>
             </div>
             <div className="col-lg-4 col-md-6">
               <div
                 className="featured-item wow animated fadeInUp"
                 data-wow-duration="1.5s"
                 data-wow-delay="0.4s"
               >
                 <img src="assets/img/demo/featured/1.png" alt="fixturbo_img" />
                 ساس
               </div>
             </div>
             <div className="col-lg-4 col-md-6">
               <div
                 className="featured-item wow animated fadeInUp"
                 data-wow-duration="1.5s"
                 data-wow-delay="0.6s"
               >
                 <img src="assets/img/demo/featured/4.png" alt="fixturbo_img" />
                 الخط-رائع
               </div>
             </div>
             <div className="col-lg-4 col-md-6">
               <div
                 className="featured-item wow animated fadeInUp"
                 data-wow-duration="1.5s"
                 data-wow-delay="0.2s"
               >
                 <img src="assets/img/demo/featured/2.png" alt="fixturbo_img" />
                 سوايبر شبيبة
               </div>
             </div>
             <div className="col-lg-4 col-md-6">
               <div
                 className="featured-item wow animated fadeInUp"
                 data-wow-duration="1.5s"
                 data-wow-delay="0.4s"
               >
                 <img src="assets/img/demo/featured/5.png" alt="fixturbo_img" />
                 HTML5 جي إس إكس
               </div>
             </div>
             <div className="col-lg-4 col-md-6">
               <div
                 className="featured-item wow animated fadeInUp"
                 data-wow-duration="1.5s"
                 data-wow-delay="0.6s"
               >
                 <img src="assets/img/demo/featured/6.png" alt="fixturbo_img" />
                 سي اس اس 3
               </div>
             </div>
 
             <div className="col-lg-4 col-md-6">
               <div
                 className="featured-item wow animated fadeInUp"
                 data-wow-duration="1.5s"
                 data-wow-delay="0.4s"
               >
                 <img src="assets/img/demo/featured/8.png" alt="fixturbo_img" />
                 التحقق من صحة W3C
               </div>
             </div>
             <div className="col-lg-4 col-md-6">
               <div
                 className="featured-item wow animated fadeInUp"
                 data-wow-duration="1.5s"
                 data-wow-delay="0.6s"
               >
                 <img src="assets/img/demo/featured/9.png" alt="fixturbo_img" />
                 كود نظيف
               </div>
             </div>
 
             <div className="col-lg-4 col-md-6">
               <div
                 className="featured-item wow animated fadeInUp"
                 data-wow-duration="1.5s"
                 data-wow-delay="0.4s"
               >
                 <img src="assets/img/demo/featured/12.png" alt="fixturbo_img" />
                 استجابة 100%
               </div>
             </div>
             <div className="col-lg-4 col-md-6">
               <div
                 className="featured-item wow animated fadeInUp"
                 data-wow-duration="1.5s"
                 data-wow-delay="0.6s"
               >
                 <img src="assets/img/demo/featured/11.png" alt="fixturbo_img" />
                 خطوط جوجل
               </div>
             </div>
             <div className="col-lg-4 col-md-6">
               <div
                 className="featured-item wow animated fadeInUp"
                 data-wow-duration="1.5s"
                 data-wow-delay="0.2s"
               >
                 <img src="assets/img/demo/featured/14.png" alt="fixturbo_img" />
                 وثق بشكل جيد
               </div>
             </div>
             <div className="col-lg-4 col-md-6">
               <div
                 className="featured-item wow animated fadeInUp"
                 data-wow-duration="1.5s"
                 data-wow-delay="0.4s"
               >
                 <img src="assets/img/demo/featured/15.png" alt="fixturbo_img" />
                 مكافحة لأعلى
               </div>
             </div>
           </div>
         </div>
       </section>
       {/* footer area start */}
       <footer
         className="footer-area pd-top-100"
         style={{ backgroundImage: 'url("assets/img/demo/01.png")' }}
       >
         <div className="container">
           <div className="row justify-content-center">
             <div className="col-lg-8">
               <div className="footer-widget widget text-center pd-bottom-100">
                 <a className="logo" href="index">
                   <img src="assets/img/demo/logo-white.svg" alt="#" />
                 </a>
                 <h5 className="text-white mb-5 mt-5 lh-base">
                   إنه قالب رد فعل حديث وجميل لإصلاح السيارات وخدمات السيارات.
                   إنه موقع ويب خاص بشركة إصلاح السيارات وخدمات السيارات.
                 </h5>
                 <a
                   className="btn btn-white"
                   href="https://themeforest.net/user/wowtheme7"
                 >
                   شراء الآن
                 </a>
               </div>
             </div>
           </div>
         </div>
         <div className="footer-bottom">
           <div className="container">
             <div className="row">
               <div className="col-md-12 text-center align-self-center">
                 <p>حقوق الطبع والنشر بواسطة wowtheme7</p>
               </div>
             </div>
           </div>
         </div>
       </footer>
       {/* footer area end */}
     </section>
  );
}
