
import { useState } from "react"
import DottedLine from "../ui/dottedline"
import VerticalDottedLine from "../ui/verticaldotted"
import { ArrowRight } from "lucide-react"

interface FormData {
  fullName: string
  email: string
  message: string
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    console.log("Form submitted:", formData)
    setIsSubmitting(false)
    setFormData({ fullName: "", email: "", message: "" })
  }

  return (
    <section className="bg-white border-[--color-soft-gray] px-6 md:px-10 lg:px-16 py-20 w-full">
      <DottedLine className="mt-0 mb-6" />

      <div className="flex flex-col lg:flex-row min-h-[70vh]">
        <div className="lg:w-1/2 flex items-center justify-center p-6">
          <img
            src="/contact.png"
            alt="Contact"
            className="w-[60%] h-auto object-contain"
          />
        </div>

        <div className="hidden lg:flex justify-center">
          <VerticalDottedLine className="mx-6 h-[80%]" />
        </div>

        <div className="lg:w-1/2 flex items-center justify-start p-6">
          <div className="w-full max-w-sm">
            <div className="mb-6">
              <h1 className="text-xl lg:text-2xl font-bold text-[--color-dark] mb-3 tracking-tight font-display">
                CONTACT US
              </h1>
              <p className="mt-2 text-sm lg:text-lg font-medium text-[var(--color-soft-gray)] tracking-tight leading-tight font-medium">
  Questions, bulk orders, or just want to chat tools? We're listening.
</p>

            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="fullName" className="block text-sm font-semibold text-[--color-dark] mb-2 uppercase tracking-wide font-text">
                  FULL NAME
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Enter your name"
                  required
                  className="w-full px-0 py-2 border-0 border-b border-[--color-gray] bg-transparent text-[--color-dark] placeholder-[--color-soft-gray] focus:border-[--color-dark] focus:outline-none font-text"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-[--color-dark] mb-2 uppercase tracking-wide font-text">
                  EMAIL
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your Gmail"
                  required
                  className="w-full px-0 py-2 border-0 border-b border-[--color-gray] bg-transparent text-[--color-dark] placeholder-[--color-soft-gray] focus:border-[--color-dark] focus:outline-none font-text"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-[--color-dark] mb-5 uppercase tracking-wide font-text">
                  TELL US ABOUT YOUR PROJECTS
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Write your message"
                  rows={3}
                  required
                  className="w-full px-0 py-2 border-0 border-b border-[--color-gray] bg-transparent text-[--color-dark] placeholder-[--color-soft-gray] focus:border-[--color-dark] focus:outline-none resize-none font-text"
                />
              </div>

              <div className="pt-2">
  <button
      onClick={() => console.log("Button clicked")}
      className="flex items-center justify-between px-4 py-2 bg-gray-100 rounded-full shadow-sm hover:shadow-md transition-shadow duration-200"
    >
        <span className="text-base font-semibold text-black">SEND MESSAGE </span>

      <span className="ml-4 flex items-center justify-center w-8 h-8 rounded-full bg-orange-500 text-white shadow-md">
        <ArrowRight className="w-4 h-4" />
      </span>
    </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <DottedLine className="mt-6 " />
    </section>
  )
}
