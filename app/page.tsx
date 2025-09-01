import { HeroSection } from "@/components/hero-section"
import { SocialProof } from "@/components/social-proof"
import { BentoSection } from "@/components/bento-section"
import { LargeTestimonial } from "@/components/large-testimonial"
import { SolutionsSection } from "@/components/solutions-section"
import { IndustriesSection } from "@/components/industries-section"
import { CaseStudiesSection } from "@/components/case-studies-section"
import { FAQSection } from "@/components/faq-section"
import { CTASection } from "@/components/cta-section"
import { FooterSection } from "@/components/footer-section"
import { AnimatedSection } from "@/components/animated-section"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-300 text-gray-900 relative overflow-hidden pb-0">
      <div className="relative z-10">
        <main className="w-full relative" data-section="hero">
          <HeroSection />
        </main>
        <AnimatedSection className="relative z-10 w-full" delay={0.1} data-section="social-proof">
          <SocialProof />
        </AnimatedSection>
        <AnimatedSection id="features-section" className="relative z-10 w-full" delay={0.2} data-section="bento">
          <BentoSection />
        </AnimatedSection>
        <AnimatedSection className="relative z-10 w-full" delay={0.2} data-section="solutions">
          <SolutionsSection />
        </AnimatedSection>
        <AnimatedSection className="relative z-10 w-full" delay={0.2} data-section="industries">
          <IndustriesSection />
        </AnimatedSection>
        <AnimatedSection className="relative z-10 w-full" delay={0.2} data-section="testimonial">
          <LargeTestimonial />
        </AnimatedSection>
        <AnimatedSection className="relative z-10 w-full" delay={0.2} data-section="case-studies">
          <CaseStudiesSection />
        </AnimatedSection>
        <AnimatedSection id="faq-section" className="relative z-10 w-full" delay={0.2} data-section="faq">
          <FAQSection />
        </AnimatedSection>
        <AnimatedSection id="contact-section" className="relative z-10 w-full" delay={0.2} data-section="cta">
          <CTASection />
        </AnimatedSection>
        <AnimatedSection id="about-section" className="relative z-10 w-full" delay={0.2} data-section="footer">
          <FooterSection />
        </AnimatedSection>
      </div>
    </div>
  )
}
