"use client"

import type React from "react"
import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqData = [
  {
    question: "What is Disruptive Technologies?",
    answer:
      "A platform that resells and integrates AI Octopus solutions — including AI agents, automation, and monitoring tools — to help businesses scale faster. We specialize in making advanced AI technology accessible and practical for companies of all sizes.",
  },
  {
    question: "How do your AI agents work?",
    answer:
      "Our agents automate complex tasks, from customer engagement to monitoring listings, learning and improving with every interaction. They understand context, make intelligent decisions, and execute workflows autonomously, operating 24/7 without human intervention.",
  },
  {
    question: "Do I need technical expertise to use your tools?",
    answer:
      "No — our solutions are built for business users, with simple dashboards and full support. We handle the technical complexity so you can focus on growing your business. Our team provides comprehensive onboarding and ongoing assistance.",
  },
  {
    question: "What industries can benefit most?",
    answer:
      "E-commerce, customer service, logistics, and real estate are seeing the fastest ROI, but our AI adapts across sectors. We've helped fashion retailers increase sales by 42%, logistics companies reduce costs by 28%, and service businesses improve response times by 75%.",
  },
  {
    question: "How secure is my data?",
    answer:
      "We leverage enterprise-grade security and encrypted API integrations, ensuring compliance and privacy at every step. Your data is protected with industry-standard encryption, secure transmission protocols, and strict access controls.",
  },
  {
    question: "What kind of support do you offer?",
    answer:
      "24/7 monitoring, onboarding support, and dedicated account managers for enterprise clients. We provide comprehensive training, regular check-ins, and immediate assistance whenever you need it to ensure your success.",
  },
]

interface FAQItemProps {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}

const FAQItem = ({ question, answer, isOpen, onToggle }: FAQItemProps) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    onToggle()
  }
  return (
    <div
      className={`w-full bg-foreground/[0.02] hover:bg-foreground/[0.04] shadow-[0_1px_3px_rgba(0,0,0,0.1)] overflow-hidden rounded-xl border border-foreground/5 hover:border-foreground/10 transition-all duration-300 cursor-pointer`}
      onClick={handleClick}
    >
      <div className="w-full px-5 py-[18px] pr-4 flex justify-between items-center gap-5 text-left transition-all duration-300 ease-out">
        <div className="flex-1 text-foreground text-base font-medium leading-6 break-words">{question}</div>
        <div className="flex justify-center items-center">
          <ChevronDown
            className={`w-6 h-6 text-muted-foreground-dark transition-all duration-500 ease-out ${isOpen ? "rotate-180 scale-110" : "rotate-0 scale-100"}`}
          />
        </div>
      </div>
      <div
        className={`overflow-hidden transition-all duration-500 ease-out ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
        style={{
          transitionProperty: "max-height, opacity, padding",
          transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <div
          className={`px-5 transition-all duration-500 ease-out ${isOpen ? "pb-[18px] pt-2 translate-y-0" : "pb-0 pt-0 -translate-y-2"}`}
        >
          <div className="text-foreground/80 text-sm font-normal leading-6 break-words">{answer}</div>
        </div>
      </div>
    </div>
  )
}

export function FAQSection() {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set())
  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems)
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index)
    } else {
      newOpenItems.add(index)
    }
    setOpenItems(newOpenItems)
  }
  return (
    <section className="w-full pt-[66px] pb-20 md:pb-40 px-5 relative flex flex-col justify-center items-center">
      <div className="w-[300px] h-[500px] absolute top-[150px] left-1/2 -translate-x-1/2 origin-top-left rotate-[-33.39deg] bg-primary/10 blur-[100px] z-0" />
      <div className="self-stretch pt-8 pb-8 md:pt-14 md:pb-14 flex flex-col justify-center items-center gap-2 relative z-10">
        <div className="flex flex-col justify-start items-center gap-4">
          <h2 className="w-full max-w-[435px] text-center text-foreground text-4xl font-semibold leading-10 break-words">
            Frequently Asked Questions
          </h2>
          <p className="self-stretch text-center text-muted-foreground text-sm font-medium leading-[18.20px] break-words">
            Everything you need to know about our AI solutions and how they can transform your business
          </p>
        </div>
      </div>
      <div className="w-full max-w-[600px] pt-0.5 pb-10 flex flex-col justify-start items-start gap-4 relative z-10">
        {faqData.map((faq, index) => (
          <FAQItem key={index} {...faq} isOpen={openItems.has(index)} onToggle={() => toggleItem(index)} />
        ))}
      </div>
    </section>
  )
}
