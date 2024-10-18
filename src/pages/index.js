import * as React from "react";
import Layout from "../components/global/layout";
import Hero from "../components/LandingPage/Hero";
import WhyTelehealth from "../components/LandingPage/WhyTelehealth";
import Services from "../components/LandingPage/Services";
import HowItWorks from "../components/LandingPage/HowItWorks";
import Contact from "../components/LandingPage/Contact";

const IndexPage = () => (
  <Layout>
    <Hero />
    <WhyTelehealth />
    <Services />
    <HowItWorks />
    <Contact />
  </Layout>
);

// Directly adding SEO meta tags in the Head component
export const Head = () => (
  <>
    {/* Primary Meta Tags */}
    <title>Diabetes Telehealth | Virtual Consultations & Personalized Care</title>
    <meta
      name="description"
      content="Control diabetes with virtual care: telehealth consultations, personalized management, and education from home. Start today—WhatsApp us at +1 (403) 903-9110."
    />
    <meta
      name="keywords"
      content="diabetes management, telehealth, virtual consultations, diabetes education, personalized care, diabetes monitoring, remote healthcare, diabetes support, health technology, online healthcare, diabetes treatment, chronic disease management, patient care, wellness programs, diabetes resources, nutrition for diabetes, blood sugar control, diabetes prevention, healthcare technology, telemedicine, digital health, Diabetic Foot assessment, Diabetic foot care, Diabetic vaccinations"
    />
    <link rel="canonical" href="https://ediabetes.ca" />

    {/* Open Graph Meta Tags */}
    <meta property="og:title" content="Diabetes Telehealth | Virtual Consultations & Personalized Care" />
    <meta
      property="og:description"
      content="Control diabetes with virtual care: telehealth consultations, personalized management, and education from home. Start today—WhatsApp us at +1 (403) 903-9110."
    />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="https://ediabetes.ca/images/SiteIcon.png" />
    <meta property="og:image:alt" content="Diabetes Telehealth | Virtual Consultations & Personalized Care" />
    <meta property="og:site_name" content="Diabetes Telehealth | Virtual Consultations & Personalized Care" />
    <meta property="og:url" content="https://ediabetes.ca" />

    {/* Twitter Meta Tags */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:creator" content="@webwidely" />
    <meta name="twitter:title" content="Diabetes Telehealth | Virtual Consultations & Personalized Care" />
    <meta
      name="twitter:description"
      content="Control diabetes with virtual care: telehealth consultations, personalized management, and education from home. Start today—WhatsApp us at +1 (403) 903-9110."
    />
    <meta name="twitter:image" content="https://ediabetes.ca/images/SiteIcon.png" />
    <meta name="twitter:image:alt" content="Diabetes Telehealth | Virtual Consultations & Personalized Care" />

    {/* Schema Markup for SEO */}
    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Diabetes Telehealth | Virtual Consultations & Personalized Care",
        url: "https://ediabetes.ca",
        description:
          "Control diabetes with virtual care: telehealth consultations, personalized management, and education from home. Start today—WhatsApp us at +1 (403) 903-9110.",
        author: {
          "@type": "Organization",
          name: "Diabetes Telehealth",
        },
        image: "https://ediabetes.ca/images/SiteIcon.png",
        potentialAction: {
          "@type": "SearchAction",
          target: "https://ediabetes.ca/search?q={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      })}
    </script>
  </>
);

export default IndexPage;
