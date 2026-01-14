import CardFees from "./components/CardFees";
import FAQSection from "./components/FAQSection";
import Footer2 from "./components/Footer2";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HeroSection from "./components/HeroSection";
import HowItWorks from "./components/HowItWorks";
import StackingCardsSection from "./components/StackingCard";
import StatsSection from "./components/StatsSection";
import Testimonials from "./components/Testimonials";
import Thirdpage from "./components/Thirdpage";
// import UspsSection from "./components/UspsSection";
import UspsSection from "./components/uspsSection1";
import CanvasFrameSequenceWithLoco from "./components/CanvasFrameSequenceWithLoco";
import SyllabusAccordion from "./components/SyllabusAccordion";
import BentoGrid from "./components/BentoGrid";
import WhyBootcamp from "./components/WhyBootcamp";
import WhatsNew from "./components/WhatsNew";
import ChooseYourStyle from "./components/ChooseYourStyle";
import VideoSection from "./components/VideoSection";
import InstructorSection from "./components/InstructorSection";
import CertificationSection from "./components/CertificationSection";
import StudentGrowthSection from "./components/StudentGrowthSection";
import SimplePricingHeading from "./components/SimplePricingHeading";
import ContactFormSection from "./components/ContactFormSection";
import FAQSectionNew from "./components/FAQSectionNew";
import FooterNew from "./components/FooterNew";
import HeroIntroSection from "./components/HeroIntroSection";
import HeaderNav from "./components/HeaderNav";

export default function Home() {
  return (
    <main>
      {/* <Hero/> */}
      {/* <Header /> */}
      {/* <HeroSection /> */}
      <HeaderNav />
      <HeroIntroSection />
      <WhatsNew />
      <SyllabusAccordion />
      <BentoGrid />
      <WhyBootcamp />
      <CanvasFrameSequenceWithLoco />
      <ChooseYourStyle />
      <VideoSection />
      <InstructorSection />
      <CertificationSection />
      <StudentGrowthSection />
      <SimplePricingHeading />
      <ContactFormSection />
      <FAQSectionNew/>
      <FooterNew />
      {/* <StatsSection/> */}
      {/* <CardFees /> */}
      {/* <Thirdpage /> */}
      {/* <HowItWorks /> */}
      {/* <StackingCardsSection/> */}
      {/* <Testimonials /> */}
      {/* <UspsSection /> */}
      {/* <UspsSection/> */}
      {/* <FAQSection /> */}
      {/* <Footer2 /> */}
    </main>
  );
}
