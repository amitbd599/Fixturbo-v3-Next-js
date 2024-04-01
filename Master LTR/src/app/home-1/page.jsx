import AboutOne from "@/components/AboutOne";
import BlogAreaOne from "@/components/BlogAreaOne";
import CTAAreaOne from "@/components/CTAAreaOne";
import ClientAreaOne from "@/components/ClientAreaOne";
import CounterOne from "@/components/CounterOne";
import FaqAreaOne from "@/components/FaqAreaOne";
import FooterAreaOne from "@/components/FooterAreaOne";
import HeaderOne from "@/components/HeaderOne";
import HeroOne from "@/components/HeroOne";
import MarqueeOne from "@/components/MarqueeOne";
import PortfolioOne from "@/components/PortfolioOne";
import PricingPlanOne from "@/components/PricingPlanOne";
import ProcessAreaOne from "@/components/ProcessAreaOne";
import ServiceAreaOne from "@/components/ServiceAreaOne";
import SubscribeOne from "@/components/SubscribeOne";
import TeamAreaOne from "@/components/TeamAreaOne";
import TestimonialOne from "@/components/TestimonialOne";
import Animation from "@/helper/Animation";
import Preloader from "@/helper/Preloader";

const page = () => {
  return (
    <>
      {/* Preloader */}
      <Preloader />

      {/* Animation init */}
      <Animation />

      {/* Header one */}
      <HeaderOne />

      {/* Hero One */}
      <HeroOne />

      {/* Counter One */}
      <CounterOne />

      {/* About One */}
      <AboutOne />

      {/* Service Area One */}
      <ServiceAreaOne />

      {/* Marquee One */}
      <MarqueeOne />

      {/* Portfolio One */}
      <PortfolioOne />

      {/* Client Area One */}
      <ClientAreaOne />

      {/* Pricing Plan One */}
      <PricingPlanOne />

      {/* Team Area One */}
      <TeamAreaOne />

      {/* CTA Area One */}
      <CTAAreaOne />

      {/* Testimonial One */}
      <TestimonialOne />

      {/* Process Area One */}
      <ProcessAreaOne />

      {/* Faq Area One */}
      <FaqAreaOne />

      {/* Blog Area One */}
      <BlogAreaOne />

      {/* Subscribe One */}
      <SubscribeOne />

      {/* Footer Area One */}
      <FooterAreaOne />
    </>
  );
};

export default page;
