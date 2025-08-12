"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const services = [
  {
    title: "Exterior Maintenance",
    description: "From power washing to landscaping, we help you maintain a beautiful and professional exterior.",
    items: ["Gates", "Glass", "Land/Snow Management", "Masonry", "Power Washing", "and More"],
  },
  {
    title: "Interior Maintenance",
    description:
      "Plumbing, electrical, lighting, and more - keep the inside of your buildings functioning at their best.",
    items: ["Carpentry", "Drywall & Painting", "Electrical / Lighting", "HVAC / Plumbing", "and More"],
  },
]

export function Services() {
  const [hoveredService, setHoveredService] = useState<number | null>(null)

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Our Core Services</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Comprehensive maintenance solutions for both interior and exterior facilities management.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-8 border border-slate-200 hover:shadow-lg transition-all duration-300 cursor-pointer"
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-semibold text-slate-800">{service.title}</h3>
                <ChevronDown
                  className={`w-6 h-6 text-slate-600 transition-transform duration-300 ${
                    hoveredService === index ? "rotate-180" : ""
                  }`}
                />
              </div>
              <p className="text-slate-600 leading-relaxed mb-4">{service.description}</p>

              <div
                className={`overflow-hidden transition-all duration-500 ${
                  hoveredService === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="border-t border-slate-300 pt-4">
                  <ul className="space-y-2">
                    {service.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-center gap-3 text-slate-700 bg-white rounded-lg px-4 py-2 shadow-sm border-b border-slate-200 last:border-b-0"
                      >
                        <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
