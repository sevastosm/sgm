import type { Metadata } from "next"
import { translations } from "../lib/translations"
import type React from "react" // Import React

// export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
//   const t = translations[params.lang as keyof typeof translations]

//   return {
//     title: t.metadata.title,
//     description: t.metadata.description,
//   }
// }

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: string }
}) {
  return (
    <html lang={params.lang}>
      <body className="min-h-screen bg-background text-foreground">{children}</body>
    </html>
  )
}

export function generateStaticParams() {
  return [{ lang: "en" }, { lang: "el" }]
}

