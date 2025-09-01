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
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden pb-0">
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="organic-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="2" fill="currentColor" opacity="0.3" />
              <circle cx="80" cy="40" r="1.5" fill="currentColor" opacity="0.2" />
              <circle cx="50" cy="70" r="1" fill="currentColor" opacity="0.4" />
              <path d="M10,10 Q30,30 50,10 T90,10" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#organic-pattern)" />
        </svg>
      </div>

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
