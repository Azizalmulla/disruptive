"use client"

import { motion } from "framer-motion"
import { TrendingUp, Clock, DollarSign, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

const caseStudies = [
  {
    id: "ecommerce-success",
    company: "StyleHub Fashion",
    industry: "E-commerce",
    challenge: "Low conversion rates and high cart abandonment",
    solution: "Implemented AI agents for personalized recommendations and WhatsApp API for cart recovery",
    results: [
      { icon: TrendingUp, metric: "42%", description: "Increase in sales" },
      { icon: DollarSign, metric: "35%", description: "Higher conversion rate" },
      { icon: Clock, metric: "60%", description: "Faster customer response" },
    ],
    testimonial:
      "Disruptive Technologies transformed our customer engagement. The AI agents understand our customers better than we ever could manually.",
    author: "Sarah Chen, CEO at StyleHub Fashion",
  },
  {
    id: "logistics-optimization",
    company: "SwiftLogistics",
    industry: "Logistics",
    challenge: "Manual tracking processes and delayed shipment notifications",
    solution: "Deployed monitoring tools with automated alerts and CRM integration for seamless operations",
    results: [
      { icon: Clock, metric: "28%", description: "Reduction in operational costs" },
      { icon: TrendingUp, metric: "40%", description: "Improvement in efficiency" },
      { icon: Users, metric: "90%", description: "Customer satisfaction rate" },
    ],
    testimonial:
      "The monitoring tools gave us visibility we never had before. Our customers now receive real-time updates automatically.",
    author: "Marcus Rodriguez, Operations Director at SwiftLogistics",
  },
]

export function CaseStudiesSection() {
  return (
    <section id="case-studies" className="py-12 md:py-20 px-4 md:px-6 bg-black">
      <div className="w-full mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-white">
            Success Stories
          </h2>
          <p className="font-body text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-4">
            Real results from businesses that chose to disrupt their industry
          </p>
        </motion.div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 md:gap-12">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-transparent border border-white/10 rounded-xl p-6 md:p-8 hover:border-white/20 transition-all duration-300">
                <div className="mb-6">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 md:gap-3 mb-2">
                    <h3 className="font-heading text-xl md:text-2xl font-bold text-white">{study.company}</h3>
                    <span className="font-accent text-xs md:text-sm px-2 md:px-3 py-1 bg-white/10 rounded-full text-gray-300 w-fit">
                      {study.industry}
                    </span>
                  </div>
                </div>

                <div className="space-y-4 md:space-y-6 mb-6 md:mb-8">
                  <div>
                    <h4 className="font-heading text-base md:text-lg font-semibold mb-2 text-white">Challenge</h4>
                    <p className="font-body text-sm md:text-base text-gray-300">{study.challenge}</p>
                  </div>

                  <div>
                    <h4 className="font-heading text-base md:text-lg font-semibold mb-2 text-white">Solution</h4>
                    <p className="font-body text-sm md:text-base text-gray-300">{study.solution}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 mb-6 md:mb-8">
                  {study.results.map((result, idx) => (
                    <div key={idx} className="text-center p-3 md:p-4 bg-white/5 rounded-lg">
                      <result.icon className="w-5 h-5 md:w-6 md:h-6 text-white mx-auto mb-2" />
                      <div className="font-heading text-xl md:text-2xl font-bold text-white mb-1">{result.metric}</div>
                      <div className="font-body text-xs text-gray-400">{result.description}</div>
                    </div>
                  ))}
                </div>

                <div className="p-4 md:p-6 bg-white/5 rounded-lg mb-6">
                  <p className="font-body text-sm md:text-base text-gray-300 italic mb-3">"{study.testimonial}"</p>
                  <p className="font-accent text-xs md:text-sm text-gray-400">— {study.author}</p>
                </div>

                <Button className="font-accent bg-transparent border border-white/20 text-white hover:bg-white hover:text-black px-4 md:px-6 py-2 rounded-full font-semibold transition-all duration-300 text-sm md:text-base w-full sm:w-auto">
                  Read Full Case Study
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
