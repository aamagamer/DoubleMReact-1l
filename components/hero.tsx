"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

const slides = [
  {
    image: "/Media/BannerIE.webp", // Updated to use Media folder
    title: "Process Efficiency",
    description:
      "Proven and repeatable approach for client on-boarding, contingency planning, performance management and service delivery.",
  },
  {
    image: "/Media/BannerF.jpg", // Updated to use Media folder
    title: "Predictable Outcomes",
    description:
      "Consistency is key to building trust and achieving long-term success. Our proven methods reduce uncertainty, allowing you to plan with confidence.",
  },
  {
    image: "/Media/BannerO.jpg", // Updated to use Media folder
    title: "Prepare for Emergencies",
    description:
      "Be ready for the unexpected with strategies that keep you one step ahead. Our 24/7 response ensures swift action that protects your assets.",
  },
]

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)

  return (
    <>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
        <div className="container mx-auto px-4 py-3 flex items-center gap-4">
          <img src="/Media/logo.png" alt="Double M Electric Logo" className="w-12 h-12 object-contain" />
          <div>
            <h1 className="font-bold text-slate-800 text-lg leading-tight">Double M Electric</h1>
            <p className="text-sm text-slate-600">Facilities Maintenance - DFW Area</p>
          </div>
        </div>
      </header>

      {/* Hero Carousel */}
      <section className="relative h-screen overflow-hidden">
        <div
          className="absolute inset-0 flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="relative w-full h-full flex-shrink-0">
              <img src={slide.image || "/placeholder.svg"} alt={slide.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/50 to-transparent" />
              <div className="absolute inset-0 flex items-center">
                <div className="container mx-auto px-4">
                  <div className="max-w-2xl text-white">
                    <h2 className="text-5xl font-bold mb-6 leading-tight">{slide.title}</h2>
                    <p className="text-xl mb-8 leading-relaxed text-slate-200">{slide.description}</p>
                    <div className="flex gap-4">
                      <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8">
                        Get Started
                      </Button>
                      <Button
                        size="lg"
                        variant="outline"
                        className="border-white text-white hover:bg-white hover:text-slate-900 bg-transparent"
                      >
                        <Play className="w-4 h-4 mr-2" />
                        Watch Video
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-colors"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-colors"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>

        {/* Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </section>
    </>
  )
}
