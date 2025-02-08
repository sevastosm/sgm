"use server"

import { z } from "zod"
import { cookies } from "next/headers"

const formSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  message: z.string().min(10).max(1000),
})

const SUBMISSION_COOKIE = "last_submission"

export async function submitContactForm(prevState: any, formData: FormData) {
  const cookieStore = cookies()
  const lastSubmission = cookieStore.get(SUBMISSION_COOKIE)

  // Rate limiting
  if (lastSubmission && Date.now() - Number.parseInt(lastSubmission.value) < 60000) {
    return { error: "Please wait at least 1 minute before submitting again." }
  }

  // Validate form data
  const validatedFields = formSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  })

  if (!validatedFields.success) {
    return { error: "Invalid form data. Please check your inputs." }
  }

  // Process the form submission (e.g., send email, save to database, etc.)
  // This is where you'd typically integrate with your backend services

  // Set cookie for rate limiting
  cookieStore.set(SUBMISSION_COOKIE, Date.now().toString(), { httpOnly: true, maxAge: 60 })

  return { success: true }
}

