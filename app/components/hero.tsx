"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "../hooks/use-language"
import { translations } from "../lib/translations"

export default function Hero() {
  const { language } = useLanguage()
  const t = translations[language].hero

  return (
    <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-accent to-background">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-primary">{t.title}</h1>
        <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto text-primary/80">{t.subtitle}</p>
        <Button size="lg">{t.cta}</Button>
      </div>
    </section>
  )
}

