import ActionSection from "./components/ActionSection";
import FeaturesSection from "./components/FeaturesSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import IntroSection from "./components/Introsection";


export default function HomePage() {
  return (
    <>
      <Header />
      <IntroSection />
      <FeaturesSection />
      <ActionSection />
      <Footer />
    </>
  );
}