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
      rounded-xl border border-white/[0.15]
      hover:translate-y-[-3px] hover:border-white/[0.3] hover:shadow-[0_12px_40px_rgba(0,0,0,0.2)]
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
            text-gray-300 font-body leading-relaxed mb-6 sm:mb-8
            ${size === "large" ? "text-base sm:text-lg" : "text-sm sm:text-base"}
          `}
          >
            {description}
          </p>
        </div>
        <motion.div
          whileHover={{ x: 5 }}
          className="flex items-center text-gray-400 hover:text-white text-xs sm:text-sm font-accent font-medium transition-colors duration-200 uppercase tracking-wider"
        >
          Explore solution →
        </motion.div>
      </div>
    </AnimatedCard>
  )
}

export function BentoSection() {
  const cards = [
    {
      title: "AI Agents Revolution",
      description:
        "Deploy intelligent automation that handles complex business processes, makes strategic decisions, and learns from every interaction to continuously improve your operations and drive unprecedented efficiency.",
      size: "large",
    },
    {
      title: "WhatsApp API Automation",
      description:
        "Seamlessly integrate WhatsApp messaging into your business workflows for enhanced customer engagement and automated support.",
      size: "medium",
    },
    {
      title: "Listing Monitoring",
      description: "Real-time monitoring and analysis across multiple platforms and marketplaces.",
      size: "medium",
    },
    {
      title: "CRM Integration",
      description: "Unified customer data synchronization across all platforms.",
      size: "small",
    },
  ]

  return (
    <section className="w-full px-5 flex flex-col justify-center items-center overflow-hidden relative">
      <div className="sliding-bg-1 absolute inset-0 opacity-30 z-0"></div>
      <div className="sliding-bg-2 absolute inset-0 opacity-20 z-0"></div>
      <div className="sliding-bg-3 absolute inset-0 opacity-15 z-0"></div>

      <div className="w-full py-8 md:py-16 relative flex flex-col justify-start items-start gap-6 z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="self-stretch py-8 md:py-14 flex flex-col justify-center items-center gap-2 z-10"
        >
          <div className="flex flex-col justify-start items-center gap-4">
            <h2 className="w-full max-w-[655px] text-center text-white text-4xl md:text-6xl font-heading font-bold leading-tight tracking-tight">
              What We Do
            </h2>
            <p className="w-full max-w-[600px] text-center text-gray-300 text-lg md:text-xl font-body font-medium leading-relaxed">
              Cutting-edge AI solutions that transform how businesses operate, automate, and scale in the digital age.
            </p>
          </div>
        </motion.div>

        <StaggeredCards className="w-full mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-4 sm:gap-6 auto-rows-auto sm:h-[600px] z-10">
          {cards.map((card) => (
            <EditorialCard key={card.title} {...card} />
          ))}
        </StaggeredCards>
      </div>

      <style jsx>{`
        .sliding-bg-1, .sliding-bg-2, .sliding-bg-3 {
          background-image: linear-gradient(-60deg, #1a1a1a 50%, #4a4a4a 50%);
          left: -50%;
          right: -50%;
          animation: slide 3s ease-in-out infinite alternate;
        }
        
        .sliding-bg-2 {
          animation-direction: alternate-reverse;
          animation-duration: 4s;
          background-image: linear-gradient(-60deg, #2a2a2a 50%, #666666 50%);
        }
        
        .sliding-bg-3 {
          animation-duration: 5s;
          background-image: linear-gradient(-60deg, #0a0a0a 50%, #333333 50%);
        }
        
        @keyframes slide {
          0% {
            transform: translateX(-25%);
          }
          100% {
            transform: translateX(25%);
          }
        }
      `}</style>
    </section>
  )
}
