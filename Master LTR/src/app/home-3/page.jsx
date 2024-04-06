import AboutThree from "@/components/AboutThree";
import BlogAreaThree from "@/components/BlogAreaThree";
import CTAAreaOne from "@/components/CTAAreaOne";
import FaqAreaTwo from "@/components/FaqAreaTwo";
import FeatureAreaOne from "@/components/FeatureAreaOne";
import FooterAreaOne from "@/components/FooterAreaOne";
import HeaderOne from "@/components/HeaderOne";
import HeroThree from "@/components/HeroThree";
import IntroAreaOne from "@/components/IntroAreaOne";
import MarqueeOne from "@/components/MarqueeOne";
import PortfolioTwo from "@/components/PortfolioTwo";
import ServiceAreaOne from "@/components/ServiceAreaOne";
import SubscribeOne from "@/components/SubscribeOne";
import TeamAreaThree from "@/components/TeamAreaThree";
import TestimonialOne from "@/components/TestimonialOne";
import Preloader from "@/helper/Preloader";

const page = () => {
  return (
    <>
      {/* Preloader */}
      <Preloader />

      {/* Header Two */}
      <HeaderOne />

      {/* Hero Three */}
      <HeroThree />

      {/* Feature Area One */}
      <FeatureAreaOne />

      {/* About Three */}
      <AboutThree />

      {/* Intro Area One */}
      <IntroAreaOne />

      {/* Service Area One */}
      <ServiceAreaOne />

      {/* Portfolio Two */}
      <PortfolioTwo />

      {/* Faq Area Two */}
      <FaqAreaTwo />

      {/* Marquee One */}
      <MarqueeOne />

      {/* TeamAreaThree */}
      <TeamAreaThree />

      {/* CTA Area One */}
      <CTAAreaOne />

      {/* Testimonial One */}
      <TestimonialOne />

      {/* Blog Area Three */}
      <BlogAreaThree />

      {/* Subscribe One */}
      <SubscribeOne />

      {/* Footer Area One */}
      <FooterAreaOne />
    </>
  );
};

export default page;
