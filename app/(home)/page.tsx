import CallToAction from "./sections/call-to-action";
import Footer from "./sections/footer";
import Header from "./sections/header";
import Hero from "./sections/hero";
import Pricing from "./sections/pricing";
import ProductShowcase from "./sections/product-showcase";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <ProductShowcase />
      <Pricing />
      <CallToAction />
      <Footer />
    </>
  );
};

export default Home;
