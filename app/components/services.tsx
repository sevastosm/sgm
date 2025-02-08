"use client"

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Code, Server, Smartphone, Database, RefreshCw } from "lucide-react"
import { useLanguage } from "../hooks/use-language"
import { translations } from "../lib/translations"
import Link from "next/link"
const serviceIcons = {
  web: <Code className="h-8 w-8 text-primary" />,
  backend: <Server className="h-8 w-8 text-primary" />,
  mobile: <Smartphone className="h-8 w-8 text-primary" />,
  erp: <Database className="h-8 w-8 text-primary" />,
  legacy: <RefreshCw className="h-8 w-8 text-primary" />,
}

export default function Services() {
  const { language } = useLanguage()
  const t = translations[language].services

  const services = [
    { key: "web", title: t.web.title, description: t.web.description },
    { key: "backend", title: t.backend.title, description: t.backend.description },
    { key: "mobile", title: t.mobile.title, description: t.mobile.description },
    { key: "erp", title: t.erp.title, description: t.erp.description },
    { key: "legacy", title: t.legacy.title, description: t.legacy.description },
  ];

  return (
    <section id="services" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">{t.title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.key} className="bg-secondary border-accent">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-primary">
                  {serviceIcons[service.key as keyof typeof serviceIcons]}
                  <span>{service.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-primary/80">{service.description}</p>
                <Link href={`/${language}/services/${service.key}`} className="text-primary/80">
                  Learn More
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

