"use client"

import { motion } from "framer-motion"
import { ArrowRight, Bot, MessageSquare, Monitor, Database } from "lucide-react"
import { Button } from "@/components/ui/button"

const solutions = [
  {
    id: "ai-agents",
    icon: Bot,
    title: "AI Agents",
    subtitle: "Intelligent automation that learns and adapts",
    howItWorks: "Deploy AI agents that understand context, make decisions, and execute complex workflows autonomously.",
    benefits: "Reduce manual work by 80%, operate 24/7, and scale instantly without hiring.",
    impact: "Companies see 40% faster task completion and 60% reduction in operational costs.",
    features: [
      "Natural language processing",
      "Decision-making algorithms",
      "Continuous learning",
      "Multi-platform integration",
    ],
  },
  {
    id: "whatsapp-api",
    icon: MessageSquare,
    title: "WhatsApp API",
    subtitle: "Direct customer engagement at scale",
    howItWorks: "Integrate WhatsApp Business API to automate customer communications, support, and sales processes.",
    benefits: "Reach customers where they are, automate responses, and maintain personal touch at scale.",
    impact: "Businesses achieve 3x higher engagement rates and 50% faster response times.",
    features: ["Automated messaging", "Rich media support", "Template management", "Analytics dashboard"],
  },
  {
    id: "monitoring",
    icon: Monitor,
    title: "Monitoring Tools",
    subtitle: "Real-time insights and alerts",
    howItWorks: "Monitor listings, prices, inventory, and competitor activity with AI-powered tracking systems.",
    benefits: "Stay ahead of market changes, prevent stockouts, and optimize pricing strategies automatically.",
    impact: "Retailers see 25% increase in revenue through dynamic pricing and inventory optimization.",
    features: ["Real-time tracking", "Automated alerts", "Competitive analysis", "Custom dashboards"],
  },
  {
    id: "crm-integration",
    icon: Database,
    title: "CRM Integration",
    subtitle: "Unified customer data and workflows",
    howItWorks: "Connect all your tools and data sources into a single, intelligent CRM system with AI insights.",
    benefits: "Eliminate data silos, automate lead scoring, and personalize customer journeys at scale.",
    impact: "Sales teams close 35% more deals with AI-powered lead prioritization and insights.",
    features: ["Data synchronization", "Lead scoring", "Workflow automation", "Predictive analytics"],
  },
]

export function SolutionsSection() {
  return (
    <section id="solutions-section" className="py-12 md:py-20 px-4 md:px-6 bg-black">
      <div className="w-full mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="font-heading text-4xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight tracking-tight text-white">
            Our Solutions
          </h2>
          <p className="font-body text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-4">
            Comprehensive AI-powered tools designed to transform how your business operates
          </p>
        </motion.div>

        <div className="grid gap-6 md:gap-8 lg:gap-12">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.id}
              id={solution.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-transparent border border-white/10 rounded-xl p-6 md:p-8 lg:p-12 hover:border-white/20 transition-all duration-300">
                <div className="flex flex-col sm:flex-row items-start gap-4 md:gap-6 mb-6 md:mb-8">
                  <div className="p-3 md:p-4 bg-white/5 rounded-xl flex-shrink-0">
                    <solution.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading text-xl md:text-2xl lg:text-3xl font-bold mb-2 text-white">
                      {solution.title}
                    </h3>
                    <p className="font-body text-gray-400 text-base md:text-lg">{solution.subtitle}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
                  <div>
                    <h4 className="font-heading text-base md:text-lg font-semibold mb-3 text-white">How It Works</h4>
                    <p className="font-body text-sm md:text-base text-gray-300 leading-relaxed">
                      {solution.howItWorks}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-heading text-base md:text-lg font-semibold mb-3 text-white">Benefits</h4>
                    <p className="font-body text-sm md:text-base text-gray-300 leading-relaxed">{solution.benefits}</p>
                  </div>
                  <div>
                    <h4 className="font-heading text-base md:text-lg font-semibold mb-3 text-white">Impact</h4>
                    <p className="font-body text-sm md:text-base text-gray-300 leading-relaxed">{solution.impact}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 md:gap-3 mb-6">
                  {solution.features.map((feature) => (
                    <span
                      key={feature}
                      className="font-accent text-xs md:text-sm px-2 md:px-3 py-1 bg-white/5 rounded-full text-gray-300"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <Button className="font-accent bg-transparent border border-white/20 text-white hover:bg-white hover:text-black px-4 md:px-6 py-2 rounded-full font-semibold transition-all duration-300 group-hover:border-white/40 text-sm md:text-base w-full sm:w-auto">
                  Learn More <ArrowRight className="w-3 h-3 md:w-4 md:h-4 ml-2" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
