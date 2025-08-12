import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { WhyChooseUs } from "@/components/why-choose-us"
import { ServiceTabs } from "@/components/service-tabs"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <WhyChooseUs />
      <Services />
      <ServiceTabs />
      <Contact />
      <Footer />
    </main>
  )
}
