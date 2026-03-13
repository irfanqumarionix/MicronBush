import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import ProductsSection from '../components/ProductsSection';
import WhyChooseMBM from '../components/WhyChooseMBM';
import CustomersSection from '../components/CustomersSection';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ProductsSection />
      <WhyChooseMBM />
      <CustomersSection />
      <Footer />
    </>
  );
}
