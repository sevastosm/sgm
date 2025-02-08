import Image from "next/image"

export default function Clients({ translations }: { translations: any }) {
  const clients = [
    { name: "Company A", logo: "/placeholder.svg?height=80&width=80" },
    { name: "Company B", logo: "/placeholder.svg?height=80&width=80" },
    { name: "Company C", logo: "/placeholder.svg?height=80&width=80" },
    { name: "Company D", logo: "/placeholder.svg?height=80&width=80" },
    { name: "Company E", logo: "/placeholder.svg?height=80&width=80" },
    { name: "Company F", logo: "/placeholder.svg?height=80&width=80" },
  ]

  return (
    <section className="py-20 px-4 bg-secondary/50">
      <div className="container mx-auto">
        <h2 className="text-center mb-12">{translations.title}</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {clients.map((client) => (
            <div key={client.name} className="flex justify-center">
              <Image
                src={client.logo || "/placeholder.svg"}
                alt={client.name}
                width={80}
                height={80}
                className="opacity-70 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

