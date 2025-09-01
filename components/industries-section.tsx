"use client"

import { motion } from "framer-motion"
import { ShoppingCart, Truck, Headphones, Home, TrendingUp, Clock, Shield, Zap } from "lucide-react"

const industries = [
  {
    id: "ecommerce",
    icon: ShoppingCart,
    title: "E-commerce",
    description: "Boost online sales with intelligent automation",
    benefits: [
      { icon: TrendingUp, text: "35% higher conversion rates through personalized recommendations" },
      { icon: Clock, text: "24/7 customer support with AI chatbots" },
      { icon: Shield, text: "Automated fraud detection and prevention" },
    ],
    caseStudy: "Fashion retailer increased sales by 42% using our AI agents for customer engagement",
  },
  {
    id: "logistics",
    icon: Truck,
    title: "Logistics",
    description: "Streamline operations with smart tracking",
    benefits: [
      { icon: Zap, text: "Real-time shipment tracking and automated updates" },
      { icon: TrendingUp, text: "30% reduction in delivery delays" },
      { icon: Clock, text: "Predictive maintenance for fleet management" },
    ],
    caseStudy: "Logistics company reduced operational costs by 28% with automated monitoring",
  },
  {
    id: "customer-service",
    icon: Headphones,
    title: "Customer Service",
    description: "Deliver exceptional support at scale",
    benefits: [
      { icon: Clock, text: "Instant response times with AI-powered support" },
      { icon: TrendingUp, text: "85% customer satisfaction improvement" },
      { icon: Shield, text: "Consistent service quality across all channels" },
    ],
    caseStudy: "SaaS company improved response time by 75% using WhatsApp API automation",
  },
  {
    id: "real-estate",
    icon: Home,
    title: "Real Estate",
    description: "Accelerate deals with intelligent insights",
    benefits: [
      { icon: TrendingUp, text: "Lead qualification and nurturing automation" },
      { icon: Clock, text: "Market analysis and pricing optimization" },
      { icon: Zap, text: "Automated property listing management" },
    ],
    caseStudy: "Real estate agency closed 50% more deals with AI-powered lead scoring",
  },
]

export function IndustriesSection() {
  return (
    <section id="industries-section" className="py-12 md:py-20 px-4 md:px-6 bg-white text-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-black">
            Industries We Serve
          </h2>
          <p className="font-body text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Tailored AI solutions delivering measurable results across key sectors
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.id}
              id={industry.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-transparent border border-gray-200 rounded-xl p-6 md:p-8 hover:border-gray-300 hover:shadow-lg transition-all duration-300">
                <div className="flex flex-col sm:flex-row items-start gap-3 md:gap-4 mb-6">
                  <div className="p-2 md:p-3 bg-gray-100 rounded-xl flex-shrink-0">
                    <industry.icon className="w-5 h-5 md:w-6 md:h-6 text-black" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading text-xl md:text-2xl font-bold mb-2 text-black">{industry.title}</h3>
                    <p className="font-body text-sm md:text-base text-gray-600">{industry.description}</p>
                  </div>
                </div>

                <div className="space-y-3 md:space-y-4 mb-6">
                  {industry.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <benefit.icon className="w-4 h-4 md:w-5 md:h-5 text-gray-500 mt-0.5 flex-shrink-0" />
                      <span className="font-body text-gray-700 text-sm md:text-base">{benefit.text}</span>
                    </div>
                  ))}
                </div>

                <div className="p-3 md:p-4 bg-gray-50 rounded-lg">
                  <p className="font-body text-xs md:text-sm text-gray-600 italic">"{industry.caseStudy}"</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
