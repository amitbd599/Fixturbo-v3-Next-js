import AboutOne from "@/components/AboutOne";
import BlogAreaTwo from "@/components/BlogAreaTwo";
import ClientAreaThree from "@/components/ClientAreaThree";
import FooterAreaThree from "@/components/FooterAreaThree";
import HeaderFour from "@/components/HeaderFour";
import HeroFive from "@/components/HeroFive";
import IntroAreaTwo from "@/components/IntroAreaTwo";
import PortfolioThree from "@/components/PortfolioThree";
import ServiceAreaFour from "@/components/ServiceAreaFour";
import ServiceAreaThree from "@/components/ServiceAreaThree";
import TeamAreaFour from "@/components/TeamAreaFour";
import WhyChooseUsTwo from "@/components/WhyChooseUsTwo";
import Preloader from "@/helper/Preloader";

const page = () => {
  return (
    <>
      {/* Preloader */}
      <Preloader />

      {/* Header Four */}
      <HeaderFour />

      {/* Hero Five */}
      <HeroFive />

      {/* Service Area Three */}
      <ServiceAreaThree />

      {/* About One */}
      <AboutOne />

      {/* Service Area Four */}
      <ServiceAreaFour />

      {/* Why Choose Us Two */}
      <WhyChooseUsTwo />

      {/* Portfolio Three */}
      <PortfolioThree />

      {/* Intro Area Two */}
      <IntroAreaTwo />

      {/* Team Area Four */}
      <TeamAreaFour />

      {/* ClientAreaThree */}
      <ClientAreaThree />

      {/* BlogAreaTwo */}
      <div className="space-top">
        <BlogAreaTwo />
        </div>

      {/* Footer Area Three */}
      <FooterAreaThree />
    </>
  );
};

export default page;
