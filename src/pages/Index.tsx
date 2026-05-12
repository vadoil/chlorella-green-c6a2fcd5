import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import CompanyStatsSection from "@/components/CompanyStatsSection";
import MarketOpportunitySection from "@/components/MarketOpportunitySection";
import InvestorRoiSection from "@/components/InvestorRoiSection";
import InvestmentCompareSection from "@/components/InvestmentCompareSection";
import ComparisonSection from "@/components/ComparisonSection";
import ConsultationCtaSection from "@/components/ConsultationCtaSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import ApplicationsTabsSection from "@/components/ApplicationsTabsSection";
import CalculatorSection from "@/components/CalculatorSection";
import ScenariosSection from "@/components/ScenariosSection";
import TimelineSection from "@/components/TimelineSection";
import GuaranteesSection from "@/components/GuaranteesSection";
import MarketplaceExamplesSection from "@/components/MarketplaceExamplesSection";
import PackageSection from "@/components/PackageSection";
import FranchiseeTestimonialsSection from "@/components/FranchiseeTestimonialsSection";
import ObjectionsFaqSection from "@/components/ObjectionsFaqSection";
import BlogPreviewSection from "@/components/BlogPreviewSection";
import LeadMagnetSection from "@/components/LeadMagnetSection";
import QuizSection from "@/components/QuizSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <SEO
      title="Франшиза хлореллы — окупаемость 4–6 мес, доход 2 млн ₽/год"
      description="Франшиза производства живой хлореллы под ключ: окупаемость 4–6 месяцев, маржа 55%+, доход от 2 млн ₽ в год. Оборудование, технология и B2B-клиенты."
      path="/"
      keywords="франшиза хлореллы, производство хлореллы, живая хлорелла, биореактор, франшиза АПК, биотехнология, хлорелла для животноводства, хлорелла для рыбоводства, хлорелла купить"
    />
    <Navbar />
    <HeroSection />
    <div id="problem"><ProblemSection /></div>
    <CompanyStatsSection />
    <div id="applications"><ApplicationsTabsSection /></div>
    <MarketOpportunitySection />
    <MarketplaceExamplesSection />
    <InvestorRoiSection />
    <InvestmentCompareSection />
    <ComparisonSection />
    <ConsultationCtaSection />
    <WhyChooseUsSection />
    <div id="calculator"><CalculatorSection /></div>
    <ScenariosSection />
    <div id="quiz"><QuizSection /></div>
    <div id="package"><PackageSection /></div>
    <div id="steps"><TimelineSection /></div>
    <FranchiseeTestimonialsSection />
    <GuaranteesSection />
    <div id="faq"><ObjectionsFaqSection /></div>
    <div id="blog"><BlogPreviewSection /></div>
    <LeadMagnetSection />
    <CtaSection />
    <Footer />
  </div>
);

export default Index;
