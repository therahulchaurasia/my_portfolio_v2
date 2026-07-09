"use client"

import { useEffect, useRef, useState } from "react"
import Container from "@/components/container"

export default function Navbar() {
  const [hidden, setHidden] = useState(false)
  const lastY = useRef(0)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      if (y < 80) {
        setHidden(false)
      } else if (Math.abs(y - lastY.current) > 6) {
        setHidden(y > lastY.current)
      }
      lastY.current = y
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 w-full transition-transform duration-300 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <Container divider={false}>
        <nav className="flex h-14 w-full items-center justify-between">
          <a href="#hero" className="font-semibold tracking-[-0.03em]">
            Rahul
          </a>
          <div className="flex items-center gap-6 text-sm">
            <a href="#work" className="hover:text-primary">
              Work
            </a>
            <a href="#services" className="hover:text-primary">
              Services
            </a>
            <a href="#contact" className="hover:text-primary">
              Contact
            </a>
          </div>
        </nav>
      </Container>
    </header>
  )
}
