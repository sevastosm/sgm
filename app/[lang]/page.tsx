import Header from "./components/header"
import Hero from "./components/hero"
import Services from "./components/services"
import Clients from "./components/clients"
import About from "./components/about"
import Contact from "./components/contact"
import Footer from "./components/footer"
import { translations } from "../lib/translations"

export default function Home({ params }: { params: { lang: string } }) {
  const t = translations[params.lang as keyof typeof translations]

  return (
    <div className="min-h-screen flex flex-col">
      <Header lang={params.lang} translations={t.header} />
      <main>
        <Hero translations={t.hero} />
        <Services lang={params.lang} translations={t.services} id="services" />
        <Clients translations={t.clients} />
        <About translations={t.about} id="about" />
        <Contact lang={params.lang} translations={t.contact} id="contact" />
      </main>
      <Footer translations={t.footer} />
    </div>
  )
}

