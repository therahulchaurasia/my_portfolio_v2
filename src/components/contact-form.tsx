"use client"

import { useState } from "react"

const FRONT_SHADOW =
  "rgba(0, 0, 0, 0.12) 0px 0.602187px 0.602187px -0.916667px, rgba(0, 0, 0, 0.14) 0px 2.28853px 2.28853px -1.83333px, rgba(0, 0, 0, 0.18) 0px 10px 10px -2.75px"

const PRICING = ["Design Retainer", "Single Project"] as const
type Pricing = (typeof PRICING)[number]

const FIELD =
  "w-full rounded-xl bg-[#1e1e1e] px-4 py-3.5 text-base font-medium text-white placeholder:text-[#8a8a8a] outline-1 outline-[#ffffff14] transition-[outline-color] focus:outline-primary"
const LABEL = "text-sm font-semibold text-white"

export default function ContactForm() {
  const [pricing, setPricing] = useState<Pricing>("Design Retainer")

  return (
    <form
      // Markup only — submission wired to Resend later.
      onSubmit={(e) => e.preventDefault()}
      className="flex flex-col gap-6 rounded-[20px] bg-[#121212] p-6 text-white md:p-8"
      style={{ boxShadow: FRONT_SHADOW }}
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className={LABEL}>
          Your name<span className="text-primary">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="Your name"
          className={FIELD}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className={LABEL}>
          E-mail<span className="text-primary">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="Your email"
          className={FIELD}
        />
      </div>

      <div className="flex flex-col gap-2">
        <span className={LABEL}>Pricing model</span>
        <div className="grid grid-cols-2 gap-2.5">
          {PRICING.map((p) => (
            <button
              key={p}
              type="button"
              onClick={() => setPricing(p)}
              aria-pressed={pricing === p}
              className={`cursor-pointer rounded-xl px-4 py-3.5 text-sm font-semibold transition-colors ${
                pricing === p
                  ? "bg-white text-foreground"
                  : "bg-[#1e1e1e] text-white/80 outline-1 outline-[#ffffff14] hover:bg-[#242424]"
              }`}
            >
              {p}
            </button>
          ))}
        </div>
        <input type="hidden" name="pricing" value={pricing} />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className={LABEL}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Your message"
          className={`${FIELD} resize-y`}
        />
      </div>

      <button
        type="submit"
        className="mt-1 w-full cursor-pointer rounded-full bg-gradient-to-b from-[#2f8bff] to-primary py-4 text-center font-semibold text-white shadow-[0_10px_24px_-8px_rgba(6,86,186,0.7)] transition-transform duration-200 hover:scale-[1.01] active:scale-[0.99]"
      >
        Get in touch
      </button>
    </form>
  )
}
