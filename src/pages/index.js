import * as React from "react"

import Layout from "../components/global/layout"
import Seo from "../components/global/seo"
import Hero from "../components/LandingPage/Hero"
import WhyTelehealth from "../components/LandingPage/WhyTelehealth"
import Services from "../components/LandingPage/Services"
import HowItWorks from "../components/LandingPage/HowItWorks"
import Contact from "../components/LandingPage/Contact"

const IndexPage = () => (
  <Layout>
    <Hero />
    <WhyTelehealth />
    <Services />
    <HowItWorks />
    <Contact />
  </Layout>
)

export const Head = () => <Seo 
title="Diabetes Telehealth | Virtual Consultations & Personalized Care"
description="Control diabetes with virtual care: telehealth consultations, personalized management, and education from home. Start today—WhatsApp us at +1 (403) 903-9110." 
canonical="https://ediabetes.ca"
 />

export default IndexPage
