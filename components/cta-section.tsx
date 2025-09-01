"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MessageCircle } from "lucide-react"
import { useState } from "react"

export function CTASection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/96566363363?text=Hi, I'd like to learn more about Disruptive Technologies AI solutions",
      "_blank",
    )
  }

  return (
    <section
      id="contact"
      className="w-full pt-20 md:pt-60 lg:pt-60 pb-10 md:pb-20 px-5 relative flex flex-col justify-center items-center overflow-visible"
    >
      <div className="absolute inset-0 top-[-90px]">
        <div className="w-full h-full bg-gradient-to-b from-transparent via-foreground/5 to-transparent" />
      </div>

      <div className="relative z-10 flex flex-col justify-start items-center gap-9 max-w-4xl mx-auto">
        <div className="flex flex-col justify-start items-center gap-4 text-center">
          <h2 className="text-foreground text-4xl md:text-5xl lg:text-[68px] font-semibold leading-tight md:leading-tight lg:leading-[76px] break-words max-w-[600px]">
            Ready to Disrupt?
          </h2>
          <p className="text-muted-foreground text-sm md:text-base font-medium leading-[18.20px] md:leading-relaxed break-words max-w-2xl">
            Get started with AI-powered business solutions today. Contact us for a personalized demo and see how we can
            transform your operations.
          </p>
        </div>

        <div className="w-full max-w-md space-y-4">
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="bg-foreground/10 border-foreground/20 text-foreground placeholder:text-muted-foreground"
            />
            <Input
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="bg-foreground/10 border-foreground/20 text-foreground placeholder:text-muted-foreground"
            />
            <Input
              placeholder="Company Name"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              className="bg-foreground/10 border-foreground/20 text-foreground placeholder:text-muted-foreground"
            />
            <Textarea
              placeholder="Tell us about your project..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="bg-foreground/10 border-foreground/20 text-foreground placeholder:text-muted-foreground min-h-[100px]"
            />
            <Button
              type="submit"
              className="w-full px-[30px] py-2 bg-foreground text-background text-base font-medium leading-6 rounded-[99px] hover:bg-foreground/90 transition-all duration-200"
              size="lg"
            >
              Send Message
            </Button>
          </form>

          <div className="flex items-center justify-center">
            <span className="text-muted-foreground text-sm">or</span>
          </div>

          <Button
            onClick={handleWhatsApp}
            variant="outline"
            className="w-full border-foreground/20 text-foreground hover:bg-foreground/10 px-[30px] py-2 text-base font-medium leading-6 rounded-[99px] transition-all duration-200 bg-transparent"
            size="lg"
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            Contact via WhatsApp
          </Button>
        </div>
      </div>
    </section>
  )
}
