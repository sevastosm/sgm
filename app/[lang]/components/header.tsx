"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import Logo from "./logo"
import LanguageSwitcher from "@/components/language-switcher"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import type React from "react"

export default function Header({ lang, translations }: { lang: string; translations: any }) {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      const yOffset = -80 // Adjust this value based on your header height
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: "smooth" })
    }
  }

  const MenuItem = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <li>
      <a
        href={href}
        onClick={(e) => {
          e.preventDefault()
          scrollToSection(href.slice(1))
        }}
        className="text-foreground/80 hover:text-primary transition-colors duration-200 font-medium cursor-pointer"
      >
        {children}
      </a>
    </li>
  )

  return (
    <header className="w-full py-4 px-6 bg-background/95 backdrop-blur-sm fixed top-0 z-50 shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <Link href={`/${lang}`} className="flex items-center space-x-2">
          <Logo className="h-8 w-8" />
          <span className="text-xl font-bold text-foreground hidden sm:inline">SGM Software</span>
        </Link>
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <MenuItem href="#services">{translations.services}</MenuItem>
            <MenuItem href="#about">{translations.about}</MenuItem>
            <MenuItem href="#contact">{translations.contact}</MenuItem>
          </ul>
        </nav>
        <div className="flex items-center space-x-4">
          <LanguageSwitcher currentLang={lang} />
          <Button className="hidden sm:inline-flex" onClick={() => scrollToSection("contact")}>
            {translations.getStarted}
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent className="bg-background">
              <nav className="flex flex-col space-y-4 mt-8">
                <a
                  href="#services"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection("services")
                    document.querySelector("[data-radix-collection-item]")?.click()
                  }}
                  className="text-foreground/80 hover:text-primary text-left transition-colors duration-200 font-medium cursor-pointer"
                >
                  {translations.services}
                </a>
                <a
                  href="#about"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection("about")
                    document.querySelector("[data-radix-collection-item]")?.click()
                  }}
                  className="text-foreground/80 hover:text-primary text-left transition-colors duration-200 font-medium cursor-pointer"
                >
                  {translations.about}
                </a>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection("contact")
                    document.querySelector("[data-radix-collection-item]")?.click()
                  }}
                  className="text-foreground/80 hover:text-primary text-left transition-colors duration-200 font-medium cursor-pointer"
                >
                  {translations.contact}
                </a>
                <Button
                  onClick={() => {
                    scrollToSection("contact")
                    document.querySelector("[data-radix-collection-item]")?.click()
                  }}
                  className="w-full mt-4"
                >
                  {translations.getStarted}
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

