import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import MarketOpportunitySection from "@/components/MarketOpportunitySection";
import InvestorRoiSection from "@/components/InvestorRoiSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import ApplicationsTabsSection from "@/components/ApplicationsTabsSection";
import CalculatorSection from "@/components/CalculatorSection";
import ScenariosSection from "@/components/ScenariosSection";
import PackageSection from "@/components/PackageSection";
import StepsSection from "@/components/StepsSection";
import FaqSection from "@/components/FaqSection";
import BlogPreviewSection from "@/components/BlogPreviewSection";
import LeadMagnetSection from "@/components/LeadMagnetSection";
import QuizSection from "@/components/QuizSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <div id="problem"><ProblemSection /></div>
    <MarketOpportunitySection />
    <InvestorRoiSection />
    <WhyChooseUsSection />
    <div id="applications"><ApplicationsTabsSection /></div>
    <div id="calculator"><CalculatorSection /></div>
    <ScenariosSection />
    <div id="quiz"><QuizSection /></div>
    <div id="package"><PackageSection /></div>
    <div id="steps"><StepsSection /></div>
    <div id="faq"><FaqSection /></div>
    <div id="blog"><BlogPreviewSection /></div>
    <LeadMagnetSection />
    <CtaSection />
    <Footer />
  </div>
);

export default Index;

