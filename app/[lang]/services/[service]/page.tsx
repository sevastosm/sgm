import { notFound } from "next/navigation"
import { translations } from "../../../lib/translations"

export default function ServicePage({ params }: { params: { lang: string; service: string } }) {
  const t = translations[params.lang as keyof typeof translations]
  const serviceData = t.services[params.service as keyof typeof t.services]

  if (!serviceData) {
    notFound()
  }

  return (
    <div className="container mx-auto py-20 px-4">
      <h1 className="text-4xl font-bold mb-8 text-primary">{serviceData.title}</h1>
      <p className="text-xl mb-8 text-primary/80">{serviceData.description}</p>
      <div className="prose prose-invert max-w-none">
        <p>{serviceData.longDescription}</p>
      </div>
    </div>
  )
}

export function generateStaticParams() {
  return [
    { lang: "en", service: "web" },
    { lang: "en", service: "backend" },
    { lang: "en", service: "mobile" },
    { lang: "en", service: "erp" },
    { lang: "en", service: "legacy" },
    { lang: "el", service: "web" },
    { lang: "el", service: "backend" },
    { lang: "el", service: "mobile" },
    { lang: "el", service: "erp" },
    { lang: "el", service: "legacy" },
  ]
}

