import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import About from '@/components/About'
import WhyUs from '@/components/WhyUs'
import HowItWorks from '@/components/HowItWorks'
import Pricing from '@/components/Pricing'
import CalendlySection from '@/components/CalendlySection'
import ContactCTA from '@/components/ContactCTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <WhyUs />
        <HowItWorks />
        <Pricing />
        <CalendlySection />
        <ContactCTA />
      </main>
      <Footer />
    </>
  )
}
