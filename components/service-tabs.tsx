"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

const services = [
  {
    id: "demand",
    title: "Demand & Reactive Services",
    image: "/Media/techo.jpeg", // Updated to use Media folder
    description:
      "These facilities maintenance services cover all labor trades we offer on a demand service response (2-hour emergency, 4-hour emergency, same day, and standard 24-48 hour onsite response).",
    features: [
      "Plumbing",
      "Backflow",
      "Electrical",
      "HVAC",
      "Signage",
      "Carpentry",
      "Gates",
      "Glass",
      "Locks",
      "Pest Control",
    ],
  },
  {
    id: "preventative",
    title: "Preventative Maintenance",
    image: "/Media/electrico.jpeg", // Updated to use Media folder
    description:
      "Preventive maintenance involves the systematic inspection of equipment and assets where potential problems are identified and proactively corrected to prevent equipment failure.",
    features: [
      "Keep assets performing well year-round",
      "Track and manage critical asset data",
      "Better manage repair and maintenance budgets",
      "Frequency/scope analysis and definition",
      "Reduce overall reactive HVAC spend",
      "Customized by asset requirements",
    ],
  },
  {
    id: "project",
    title: "Project & Program Rollout",
    image: "/Media/interiorwork.jpeg", // Updated to use Media folder
    description:
      "We help clients achieve project goals and strategic objectives within specific timeframe and budget, improving efficiencies with technology and best practices.",
    features: ["High Traffic Painting", "Restroom Refreshes", "Fixture Upgrades", "Demolition", "Rebranding"],
  },
  {
    id: "corrective",
    title: "Corrective Maintenance",
    image: "/Media/disaster.jpeg", // Updated to use Media folder
    description:
      "Corrective maintenance is performed to identify, isolate and rectify faults so that failed equipment can be restored to operational condition within established tolerances.",
    features: [
      "24/7/365 Emergency Response",
      "Rapid Fault Diagnosis",
      "Equipment Restoration",
      "Damage Minimization",
      "Business Continuity Support",
    ],
  },
  {
    id: "professional",
    title: "Professional Services",
    image: "/Media/tablero.jpeg", // Updated to use Media folder
    description:
      "Implementing solutions to streamline real estate, design, construction, and maintenance projects, ensuring success on time and budget.",
    features: ["Engineering", "Architectural", "Site Surveys", "Asset Collection", "Consulting"],
  },
]

export function ServiceTabs() {
  const [activeTab, setActiveTab] = useState("demand")

  const activeService = services.find((service) => service.id === activeTab)

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Additional Services</h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Comprehensive maintenance solutions tailored to your specific business needs.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {services.map((service) => (
            <Button
              key={service.id}
              variant={activeTab === service.id ? "default" : "outline"}
              onClick={() => setActiveTab(service.id)}
              onMouseEnter={() => setActiveTab(service.id)}
              className={`px-6 py-3 text-sm font-medium transition-all duration-300 ${
                activeTab === service.id
                  ? "bg-emerald-600 hover:bg-emerald-700 text-white"
                  : "border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white"
              }`}
            >
              {service.title.split(" ").map((word, index) => (
                <span key={index}>
                  {word}
                  {index < service.title.split(" ").length - 1 && <br />}
                </span>
              ))}
            </Button>
          ))}
        </div>

        {/* Content */}
        {activeService && (
          <div className="bg-white rounded-2xl p-8 text-slate-800 shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              <div>
                <img
                  src={activeService.image || "/placeholder.svg"}
                  alt={activeService.title}
                  className="w-full h-64 object-cover rounded-xl shadow-lg"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">{activeService.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">{activeService.description}</p>
                <ul className="space-y-3">
                  {activeService.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0" />
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
