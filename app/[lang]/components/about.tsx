import Image from "next/image"

export default function About({ translations, id }: { translations: any; id?: string }) {
  return (
    <section id={id} className="py-20 px-4 bg-secondary">
      <div className="container mx-auto">
        <h2 className="text-center mb-12">{translations.title}</h2>
        <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12">
          <div className="w-64 h-64 relative rounded-full overflow-hidden border-4 border-primary">
            <Image src="/placeholder.svg" alt="SGM Software Development" layout="fill" objectFit="cover" />
          </div>
          <div className="max-w-2xl">
            <h3 className="mb-4">{translations.subtitle}</h3>
            <p className="mb-4 text-muted-foreground">{translations.description1}</p>
            <p className="text-muted-foreground">{translations.description2}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

