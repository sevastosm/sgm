"use client"

import { useRef } from "react"
import { useActionState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { submitContactForm } from "../actions/contact"

export default function Contact({ lang, translations, id }: { lang: string; translations: any; id?: string }) {
  const [state, formAction] = useActionState(submitContactForm, null)
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = async (formData: FormData) => {
    const result = await formAction(formData)
    if (result?.success) {
      formRef.current?.reset()
    }
  }

  return (
    <section id={id} className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-center mb-12">{translations.title}</h2>
        <div className="max-w-md mx-auto">
          <form ref={formRef} action={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-foreground/80">
                {translations.name}
              </label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder={translations.name}
                required
                className="bg-background"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-foreground/80">
                {translations.email}
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder={translations.email}
                required
                className="bg-background"
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-foreground/80">
                {translations.message}
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder={translations.message}
                rows={4}
                required
                className="bg-background"
              />
            </div>
            {state?.error && <p className="text-destructive text-sm">{state.error}</p>}
            {state?.success && <p className="text-green-600 text-sm">Message sent successfully!</p>}
            <Button type="submit" className="w-full">
              {translations.submit}
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}

