import { Github, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"

export default function Footer({ translations }: { translations: any }) {
  return (
    <footer className="bg-secondary py-8 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-muted-foreground">{translations.copyright}</p>
          </div>
          <div className="flex space-x-4">
            <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="h-6 w-6 text-foreground/60 hover:text-primary transition-colors" />
            </Link>
            <Link href="https://www.linkedin.com/in/sevastos-matzouranis/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-6 w-6 text-foreground/60 hover:text-primary transition-colors" />
            </Link>
            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Twitter className="h-6 w-6 text-foreground/60 hover:text-primary transition-colors" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

