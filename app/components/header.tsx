import Link from "next/link"
import { Button } from "@/components/ui/button"
import Logo from "./logo"
import LanguageSwitcher from "./language-switcher"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Header() {
  return (
    <header className="w-full py-4 px-6 bg-background/80 backdrop-blur-sm fixed top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Logo className="h-8 w-8" />
          <span className="text-xl font-bold text-primary hidden sm:inline">SGM Software</span>
        </Link>
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li>
              <Link href="#services" className="text-primary/80 hover:text-primary">
                Services
              </Link>
            </li>
            <li>
              <Link href="#about" className="text-primary/80 hover:text-primary">
                About
              </Link>
            </li>
            <li>
              <Link href="#contact" className="text-primary/80 hover:text-primary">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex items-center space-x-4">
          <LanguageSwitcher />
          <Button className="hidden sm:inline-flex">Get Started</Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <nav className="flex flex-col space-y-4 mt-8">
                <Link href="#services" className="text-primary/80 hover:text-primary">
                  Services
                </Link>
                <Link href="#about" className="text-primary/80 hover:text-primary">
                  About
                </Link>
                <Link href="#contact" className="text-primary/80 hover:text-primary">
                  Contact
                </Link>
                <Button className="w-full">Get Started</Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

