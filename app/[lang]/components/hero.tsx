import { Button } from "@/components/ui/button"

export default function Hero({ translations }: { translations: any }) {
  return (
    <section className="pt-32 pb-10 px-4 bg-gradient-to-b from-secondary to-background">
      <div className="container mx-auto text-center">
        <h1 className="mb-6 text-balance">{translations.title}</h1>
        <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto text-muted-foreground">{translations.subtitle}</p>
        {/* <Button size="lg" className="font-semibold">
          {translations.cta}
        </Button> */}
      </div>
    </section>
  )
}

