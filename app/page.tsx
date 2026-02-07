import { PortfolioNavbar } from "@/components/PortfolioNavbar"
import { ProductTeaserCard } from "@/components/ProductTeaserCard"
import { BankingScaleHero } from "@/components/BankingScaleHero"
import { FeaturesShowcase } from "@/components/FeaturesShowcase"
import { HowItWorks } from "@/components/HowItWorks"
import { CaseStudiesCarousel } from "@/components/CaseStudiesCarousel"
import { Testimonials } from "@/components/Testimonials"
import { IntegrationCarousel } from "@/components/IntegrationCarousel"
import { StatsMetrics } from "@/components/StatsMetrics"
import { PricingSection } from "@/components/PricingSection"
import { FAQSection } from "@/components/FAQSection"
import { CTASection } from "@/components/CTASection"
import { Footer } from "@/components/Footer"

export default function Page() {
  return (
    <>
      <PortfolioNavbar />
      <ProductTeaserCard />
      <StatsMetrics />
      <BankingScaleHero />
      <FeaturesShowcase />
      <HowItWorks />
      <IntegrationCarousel />
      <CaseStudiesCarousel />
      <Testimonials />
      <PricingSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </>
  )
}
