import { Shield, Zap, Settings, Clock, Award, Users } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Trusted Expertise",
    description:
      "Years of experience delivering quality and dependable facilities maintenance services across the DFW area.",
  },
  {
    icon: Zap,
    title: "Fast Response",
    description: "Emergency response within 2-4 hours to ensure minimal disruption to your business operations.",
  },
  {
    icon: Settings,
    title: "Comprehensive Solutions",
    description: "From preventative maintenance to emergency repairs, we provide complete facilities management.",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Round-the-clock support for emergencies and urgent maintenance needs whenever you need us.",
  },
  {
    icon: Award,
    title: "Quality Guaranteed",
    description: "All work backed by our quality guarantee and performed by licensed, insured professionals.",
  },
  {
    icon: Users,
    title: "Dedicated Team",
    description: "Experienced technicians specializing in electrical, HVAC, plumbing, and general maintenance.",
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Why Choose Double M Electric</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We deliver exceptional facilities management services that improve your bottom line through proven processes
            and reliable execution.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-slate-200"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center mb-6">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
