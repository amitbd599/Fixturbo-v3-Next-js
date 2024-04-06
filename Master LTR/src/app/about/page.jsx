
import AboutTwo from "@/components/AboutTwo";
import Breadcrumb from "@/components/Breadcrumb";
import CTAAreaOne from "@/components/CTAAreaOne";
import FooterAreaOne from "@/components/FooterAreaOne";
import HeaderOne from "@/components/HeaderOne";
import ProcessAreaOne from "@/components/ProcessAreaOne";
import SubscribeOne from "@/components/SubscribeOne";
import TeamAreaTwo from "@/components/TeamAreaTwo";
import TestimonialOne from "@/components/TestimonialOne";
import Preloader from "@/helper/Preloader";

const page = () => {
  return (
    <>
      {/* Preloader */}
  <Preloader />

      {/* Header one */}
      <HeaderOne />

      {/* Breadcrumb */}
      <Breadcrumb title={"About Us"} />

      {/* About Area */}
      <AboutTwo />

      {/* Process Area One */}
      <ProcessAreaOne />

      {/* CTA Area One */}
      <CTAAreaOne />

      {/* Testimonial One */}
      <TestimonialOne />

      {/* Team Area Two */}
      <TeamAreaTwo />

      {/* Subscribe One */}
      <SubscribeOne />

      {/* Footer Area One */}
      <FooterAreaOne />
    </>
  );
};

export default page;
