"use client"

import Image from "next/image"
import { useLanguage } from "../hooks/use-language"
import { translations } from "../lib/translations"

export default function About() {
  const { language } = useLanguage()
  const t = translations[language].about

  return (
    <section id="about" className="py-20 px-4 bg-accent">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">{t.title}</h2>
        <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12">
          <div className="w-64 h-64 relative rounded-full overflow-hidden border-4 border-primary">
            <Image src="/placeholder.svg" alt="SGM Software Development" layout="fill" objectFit="cover" />
          </div>
          <div className="max-w-2xl">
            <h3 className="text-2xl font-semibold mb-4 text-primary">{t.subtitle}</h3>
            <p className="mb-4 text-primary/80">{t.description1}</p>
            <p className="text-primary/80">{t.description2}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

