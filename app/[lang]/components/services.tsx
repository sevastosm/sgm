import Link from "next/link"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Code, Server, Smartphone, Database, RefreshCw } from "lucide-react"

const serviceIcons = {
  web: <Code className="h-8 w-8 text-primary" />,
  backend: <Server className="h-8 w-8 text-primary" />,
  mobile: <Smartphone className="h-8 w-8 text-primary" />,
  erp: <Database className="h-8 w-8 text-primary" />,
  legacy: <RefreshCw className="h-8 w-8 text-primary" />,
}

export default function Services({ lang, translations, id }: { lang: string; translations: any; id?: string }) {
  const services = [
    { key: "web", title: translations.web.title, description: translations.web.description },
    { key: "backend", title: translations.backend.title, description: translations.backend.description },
    { key: "mobile", title: translations.mobile.title, description: translations.mobile.description },
    { key: "erp", title: translations.erp.title, description: translations.erp.description },
    { key: "legacy", title: translations.legacy.title, description: translations.legacy.description },
  ];

  return (
    <section id={id} className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <h2 className="text-center mb-12">{translations.title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link href={`/${lang}/services/${service.key}`} key={service.key} passHref legacyBehavior>
              <a className="block">
                <Card className="h-full transition-shadow hover:shadow-md">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      {serviceIcons[service.key as keyof typeof serviceIcons]}
                      <span>{service.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>

                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <p className="text-sm text-primary font-medium">More info →</p>
                  </CardContent>
                </Card>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

