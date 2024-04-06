import AboutFour from "@/components/AboutFour";
import BlogAreaTwo from "@/components/BlogAreaTwo";
import CTAAreaTwo from "@/components/CTAAreaTwo";
import ClientAreaThree from "@/components/ClientAreaThree";
import FaqAreaTwo from "@/components/FaqAreaTwo";
import FooterAreaOne from "@/components/FooterAreaOne";
import HeaderThree from "@/components/HeaderThree";
import HeroFour from "@/components/HeroFour";
import PortfolioTwo from "@/components/PortfolioTwo";
import PricingPlanTwo from "@/components/PricingPlanTwo";
import ProcessAreaTwo from "@/components/ProcessAreaTwo";
import ServiceAreaTwo from "@/components/ServiceAreaTwo";
import SubscribeOne from "@/components/SubscribeOne";
import Preloader from "@/helper/Preloader";

const page = () => {
  return (
    <>
      {/* Preloader */}
      <Preloader />

      {/* Header Three */}
      <HeaderThree />

      {/* Hero Four */}
      <HeroFour />

      {/* Service Area Two */}
      <ServiceAreaTwo />

      {/* About Four */}
      <AboutFour />

      {/* Portfolio Two */}
      <PortfolioTwo />

      {/* Process Area Two */}
      <ProcessAreaTwo />

      {/* CTA Area Two */}
      <CTAAreaTwo />

      {/* Pricing Plan Two */}
      <PricingPlanTwo />

      {/* Client Area three */}
      <ClientAreaThree />

      {/* Faq Area Two */}
      <FaqAreaTwo />

      {/* Blog Area Two */}
      <BlogAreaTwo />

      {/* Subscribe One */}
      <SubscribeOne />

      {/* Footer Area One */}
      <FooterAreaOne />
    </>
  );
};

export default page;
