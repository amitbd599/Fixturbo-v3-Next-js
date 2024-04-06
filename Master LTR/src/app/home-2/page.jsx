import AboutTwo from "@/components/AboutTwo";
import AppointmentAreaTwo from "@/components/AppointmentAreaTwo";
import BlogAreaTwo from "@/components/BlogAreaTwo";
import CTAAreaTwo from "@/components/CTAAreaTwo";
import ClientAreaTwo from "@/components/ClientAreaTwo";
import CounterTwo from "@/components/CounterTwo";
import FaqAreaTwo from "@/components/FaqAreaTwo";
import FooterAreaTwo from "@/components/FooterAreaTwo";
import HeaderTwo from "@/components/HeaderTwo";
import HeroTwo from "@/components/HeroTwo";
import PortfolioTwo from "@/components/PortfolioTwo";
import PricingPlanTwo from "@/components/PricingPlanTwo";
import ProcessAreaTwo from "@/components/ProcessAreaTwo";
import ServiceAreaTwo from "@/components/ServiceAreaTwo";
import TeamAreaTwo from "@/components/TeamAreaTwo";
import WhyChooseUsOne from "@/components/WhyChooseUsOne";
import Preloader from "@/helper/Preloader";

const page = () => {
  return (
    <>
      {/* Preloader */}
      <Preloader />

      {/* Header Two */}
      <HeaderTwo />

      {/* Hero Two */}
      <HeroTwo />

      {/* Service Area Two */}
      <ServiceAreaTwo />

      {/* About Two */}
      <div className="about-area-2 bg-smoke">
        <AboutTwo />
      </div>

      {/* Counter Two */}
      <CounterTwo />

      {/* Portfolio Two */}
      <PortfolioTwo />

      {/* Why Choose Us One */}
      <WhyChooseUsOne />

      {/* Process Area Two */}
      <ProcessAreaTwo />

      {/* CTA Area Two */}
      <CTAAreaTwo />

      {/* Pricing Plan Two */}
      <PricingPlanTwo />

      {/* Appointment Area Two */}
      <AppointmentAreaTwo />

      {/* Team Area Two */}
      <TeamAreaTwo />

      {/* Client Area Two */}
      <ClientAreaTwo />

      {/* Faq Area Two */}
      <FaqAreaTwo />

      {/* Blog Area Two */}
      <BlogAreaTwo />

      {/* Footer Area Two */}
      <FooterAreaTwo />
    </>
  );
};

export default page;
