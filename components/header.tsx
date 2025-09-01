"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Menu } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Header() {
  const navItems = [
    {
      name: "Solutions",
      href: "#solutions-section",
      dropdown: [
        { name: "AI Agents", href: "#ai-agents" },
        { name: "WhatsApp API", href: "#whatsapp-api" },
        { name: "Monitoring", href: "#monitoring" },
        { name: "CRM Integration", href: "#crm-integration" },
      ],
    },
    {
      name: "Industries",
      href: "#industries-section",
      dropdown: [
        { name: "E-commerce", href: "#ecommerce" },
        { name: "Logistics", href: "#logistics" },
        { name: "Customer Service", href: "#customer-service" },
        { name: "Real Estate", href: "#real-estate" },
      ],
    },
    {
      name: "Resources",
      href: "#resources-section",
      dropdown: [
        { name: "Case Studies", href: "#case-studies" },
        { name: "Documentation", href: "#documentation" },
        { name: "Blog", href: "#blog" },
      ],
    },
    { name: "About", href: "#about-section" },
  ]

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.substring(1)
    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header className="w-full py-4 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3">
            <Image
              src="/images/new-logo-brain-hand.png"
              alt="Disruptive Technologies"
              width={40}
              height={40}
              className="w-10 h-auto object-contain max-h-10"
            />
            <span className="font-heading text-foreground text-xl font-bold tracking-tight">
              Disruptive Technologies
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-2">
            <NavigationMenu>
              <NavigationMenuList>
                {navItems.map((item) => (
                  <NavigationMenuItem key={item.name}>
                    {item.dropdown ? (
                      <>
                        <NavigationMenuTrigger className="font-body text-[#888888] hover:text-foreground px-4 py-2 rounded-full font-medium transition-colors bg-transparent">
                          {item.name}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                            {item.dropdown.map((subItem) => (
                              <NavigationMenuLink key={subItem.name} asChild>
                                <Link
                                  href={subItem.href}
                                  onClick={(e) => handleScroll(e, subItem.href)}
                                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                >
                                  <div className="text-sm font-medium leading-none">{subItem.name}</div>
                                </Link>
                              </NavigationMenuLink>
                            ))}
                          </div>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={(e) => handleScroll(e, item.href)}
                        className="font-body text-[#888888] hover:text-foreground px-4 py-2 rounded-full font-medium transition-colors"
                      >
                        {item.name}
                      </Link>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <Link href="#contact-section" className="hidden md:block">
            <Button className="font-accent relative bg-black border-2 border-black text-white hover:bg-gray-800 hover:text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.2)] hover:shadow-[0_0_25px_rgba(0,0,0,0.4)] w-full tracking-wide">
              BOOK DEMO
            </Button>
          </Link>

          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-foreground">
                <Menu className="h-7 w-7" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="bottom" className="bg-background border-t border-border text-foreground">
              <SheetHeader>
                <SheetTitle className="font-heading text-left text-xl font-bold text-foreground tracking-tight">
                  Navigation
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-4 mt-6">
                {navItems.map((item) => (
                  <div key={item.name}>
                    <Link
                      href={item.href}
                      onClick={(e) => handleScroll(e, item.href)}
                      className="font-body text-[#888888] hover:text-foreground justify-start text-lg py-2 block"
                    >
                      {item.name}
                    </Link>
                    {item.dropdown && (
                      <div className="ml-4 mt-2 space-y-2">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            onClick={(e) => handleScroll(e, subItem.href)}
                            className="font-body text-[#666666] hover:text-foreground text-sm py-1 block"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <Link href="#contact-section" className="w-full mt-4">
                  <Button className="font-accent relative bg-black border-2 border-black text-white hover:bg-gray-800 hover:text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.2)] hover:shadow-[0_0_25px_rgba(0,0,0,0.4)] w-full tracking-wide">
                    BOOK DEMO
                  </Button>
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
