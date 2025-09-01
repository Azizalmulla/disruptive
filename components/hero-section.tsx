"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { Header } from "./header"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section
      className="flex flex-col items-center text-center relative mx-auto rounded-2xl overflow-hidden my-6 py-0 px-4
         w-full h-[400px] md:h-[600px] lg:h-[810px] md:px-0"
    >
      <div className="absolute inset-0 z-0">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1220 810"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <g clipPath="url(#clip0_186_1134)">
            {/* Simple grid pattern */}
            {[...Array(35)].map((_, i) => (
              <React.Fragment key={`row1-${i}`}>
                {[...Array(23)].map((_, j) => (
                  <rect
                    key={`cell-${i}-${j}`}
                    x={-20.0891 + i * 36}
                    y={9.2 + j * 36}
                    width="35.6"
                    height="35.6"
                    stroke="hsl(var(--foreground))"
                    strokeOpacity="0.08"
                    strokeWidth="0.4"
                    strokeDasharray="2 2"
                  />
                ))}
              </React.Fragment>
            ))}
            {/* Subtle accent squares */}
            <rect x="699.711" y="81" width="36" height="36" fill="hsl(var(--foreground))" fillOpacity="0.05" />
            <rect x="195.711" y="153" width="36" height="36" fill="hsl(var(--foreground))" fillOpacity="0.05" />
            <rect x="1023.71" y="153" width="36" height="36" fill="hsl(var(--foreground))" fillOpacity="0.05" />
            <rect x="123.711" y="225" width="36" height="36" fill="hsl(var(--foreground))" fillOpacity="0.05" />
            <rect x="1095.71" y="225" width="36" height="36" fill="hsl(var(--foreground))" fillOpacity="0.05" />
          </g>
          <rect
            x="0.5"
            y="0.5"
            width="100%"
            height="100%"
            rx="15.5"
            stroke="hsl(var(--foreground))"
            strokeOpacity="0.1"
          />
          <defs>
            <clipPath id="clip0_186_1134">
              <rect width="100%" height="100%" rx="16" fill="hsl(var(--foreground))" />
            </clipPath>
          </defs>
        </svg>
      </div>

      {/* Header positioned at top of hero container */}
      <div className="absolute top-0 left-0 right-0 z-20">
        <Header />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="relative z-10 flex flex-col items-center space-y-6 md:space-y-8 lg:space-y-10 mb-6 md:mb-7 lg:mb-9 max-w-md md:max-w-[600px] lg:max-w-[700px] mt-16 md:mt-[120px] lg:mt-[160px] px-4"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          whileHover={{ scale: 1.1, rotate: 5 }}
          className="flex items-center justify-center mb-8"
        >
          <Image
            src="/images/disruptive-logo.png"
            alt="Disruptive Technologies Logo"
            width={120}
            height={120}
            className="w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 drop-shadow-lg animate-float"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-heading text-foreground text-3xl md:text-4xl lg:text-6xl font-bold leading-tight tracking-tight"
        >
          Disrupt the Norm. Build with AI.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-body text-muted-foreground text-base md:text-base lg:text-lg font-medium leading-relaxed max-w-lg mx-auto"
        >
          AI agents, automation, and monitoring tools designed to give businesses a competitive edge.
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="relative z-10 flex flex-col sm:flex-row gap-4 items-center"
      >
        <Link href="#contact" rel="noopener noreferrer">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button className="font-accent bg-foreground text-background hover:bg-foreground/90 px-8 py-3 rounded-full font-medium text-base shadow-lg hover:shadow-xl transition-all duration-300 animate-glow">
              GET STARTED
            </Button>
          </motion.div>
        </Link>
        <Link href="#contact" rel="noopener noreferrer">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outline"
              className="font-accent border-foreground/20 text-foreground hover:bg-foreground/10 px-8 py-3 rounded-full font-medium text-base bg-transparent hover:border-foreground/40 transition-all duration-300"
            >
              BOOK DEMO
            </Button>
          </motion.div>
        </Link>
      </motion.div>
    </section>
  )
}
