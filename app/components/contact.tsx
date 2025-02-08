"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useLanguage } from "../hooks/use-language"
import { translations } from "../lib/translations"

export default function Contact() {
  const { language } = useLanguage()
  const t = translations[language].contact

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">{t.title}</h2>
        <div className="max-w-md mx-auto">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-primary/80">
                {t.name}
              </label>
              <Input id="name" type="text" placeholder={t.name} required className="bg-secondary text-primary" />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-primary/80">
                {t.email}
              </label>
              <Input id="email" type="email" placeholder={t.email} required className="bg-secondary text-primary" />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-primary/80">
                {t.message}
              </label>
              <Textarea id="message" placeholder={t.message} rows={4} required className="bg-secondary text-primary" />
            </div>
            <Button type="submit" className="w-full">
              {t.submit}
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}

