
import BlogAreaTwo from "@/components/BlogAreaTwo";
import CTAAreaTwo from "@/components/CTAAreaTwo";
import CategoryAreaOne from "@/components/CategoryAreaOne";
import ClientAreaFour from "@/components/ClientAreaFour";
import FaqAreaThree from "@/components/FaqAreaThree";
import FooterAreaFour from "@/components/FooterAreaFour";
import HeaderFive from "@/components/HeaderFive";
import HeroSix from "@/components/HeroSix";
import ProductAreaOne from "@/components/ProductAreaOne";
import ProductAreaTwo from "@/components/ProductAreaTwo";
import SubscribeTwo from "@/components/SubscribeTwo";
import Preloader from "@/helper/Preloader";

const page = () => {
  return (
    <>
      {/* Preloader */}
  <Preloader />

      {/* Header Five */}
      <HeaderFive />

      {/* Hero Six */}
      <HeroSix />

      {/* Category Area One */}
      <CategoryAreaOne />

      {/* Product Area One */}
      <ProductAreaOne />

      {/* CTA Area Two */}
      <CTAAreaTwo />

      {/* Product Area Two */}
      <ProductAreaTwo />

      {/* Faq Area three */}
      <FaqAreaThree />

      {/* Client Area Four */}
      <ClientAreaFour />

      {/* Blog Area Two */}
      <div className="space-top">
        <BlogAreaTwo />
      </div>

      {/* Subscribe Two */}
      <SubscribeTwo />

      {/* Footer Area Four */}
      <FooterAreaFour />
    </>
  );
};

export default page;
