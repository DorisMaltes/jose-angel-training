import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import About from '@/components/About'
import WhyUs from '@/components/WhyUs'
import Results from '@/components/Results'
import HowItWorks from '@/components/HowItWorks'
import Pricing from '@/components/Pricing'
import CalendlySection from '@/components/CalendlySection'
import ContactCTA from '@/components/ContactCTA'
import Footer from '@/components/Footer'
import { Analytics } from "@vercel/analytics/next"

export default function Home() {
  return (
    <>
      <Analytics />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <WhyUs />
        <Results />
        <HowItWorks />
        <Pricing />
        <CalendlySection />
        <ContactCTA />
      </main>
      <Footer />
    </>
  )
}
