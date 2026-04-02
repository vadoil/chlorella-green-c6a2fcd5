import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import ApplicationsTabsSection from "@/components/ApplicationsTabsSection";
import CalculatorSection from "@/components/CalculatorSection";
import PackageSection from "@/components/PackageSection";
import StepsSection from "@/components/StepsSection";
import FaqSection from "@/components/FaqSection";
import BlogPreviewSection from "@/components/BlogPreviewSection";
import LeadMagnetSection from "@/components/LeadMagnetSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <div id="problem"><ProblemSection /></div>
    <div id="applications"><ApplicationsTabsSection /></div>
    <div id="calculator"><CalculatorSection /></div>
    <div id="package"><PackageSection /></div>
    <div id="steps"><StepsSection /></div>
    <div id="faq"><FaqSection /></div>
    <CtaSection />
    <Footer />
  </div>
);

export default Index;
