"use client"

import { motion } from "framer-motion"
import { StaggeredCards, AnimatedCard } from "./animated-section"

const EditorialCard = ({ title, description, size = "medium" }) => {
  const sizeClasses = {
    large: "col-span-2 sm:col-span-2 row-span-2 p-6 sm:p-8 md:p-14",
    medium: "col-span-2 sm:col-span-1 row-span-1 p-6 sm:p-8 md:p-10",
    small: "col-span-2 sm:col-span-1 row-span-1 p-6 sm:p-8 md:p-8",
  }

  return (
    <AnimatedCard
      className={`
      ${sizeClasses[size]} 
      rounded-xl border border-white/[0.12]
      hover:translate-y-[-3px] hover:border-white/[0.25] hover:shadow-[0_12px_40px_rgba(255,255,255,0.08)]
      transition-all duration-300 ease-out group cursor-pointer
      relative overflow-hidden bg-transparent
    `}
    >
      <div className="relative z-10 h-full flex flex-col justify-between">
        <div>
          <h3
            className={`
            text-white font-heading font-bold mb-4 sm:mb-6 leading-tight tracking-tight
            ${size === "large" ? "text-xl sm:text-2xl md:text-3xl lg:text-4xl" : size === "medium" ? "text-lg sm:text-xl md:text-2xl" : "text-base sm:text-lg md:text-xl"}
          `}
          >
            {title}
          </h3>
          <p
            className={`
            text-gray-400 font-body leading-relaxed mb-6 sm:mb-8
            ${size === "large" ? "text-base sm:text-lg" : "text-sm sm:text-base"}
          `}
          >
            {description}
          </p>
        </div>
        <motion.div
          whileHover={{ x: 5 }}
          className="flex items-center text-gray-500 hover:text-white text-xs sm:text-sm font-accent font-medium transition-colors duration-200 uppercase tracking-wider"
        >
          Learn more →
        </motion.div>
      </div>
    </AnimatedCard>
  )
}

export function SocialProof() {
  const features = [
    {
      title: "Lightning-Fast AI Processing",
      description:
        "Experience unprecedented speed with our cutting-edge AI infrastructure that delivers real-time results and immediate business impact across all your operations.",
      size: "large",
    },
    {
      title: "Precision Engineering",
      description: "Advanced algorithms ensure reliable and consistent performance with 99.9% accuracy rates.",
      size: "medium",
    },
    {
      title: "Enterprise Scale",
      description: "Infrastructure that grows seamlessly with your business needs.",
      size: "medium",
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock monitoring and expert assistance.",
      size: "small",
    },
  ]

  return (
    <section className="self-stretch py-16 flex flex-col justify-center items-center gap-8 overflow-hidden bg-black">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-8"
      >
        <h2 className="text-white text-4xl md:text-6xl font-heading font-bold mb-4 leading-tight tracking-tight">
          Why Choose Us
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto font-body">
          Experience the difference with our cutting-edge AI solutions designed for modern businesses.
        </p>
      </motion.div>

      <StaggeredCards className="w-full mx-auto px-4 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-4 sm:gap-6 auto-rows-auto sm:h-[600px]">
        {features.map((feature, i) => (
          <EditorialCard key={i} {...feature} />
        ))}
      </StaggeredCards>
    </section>
  )
}
