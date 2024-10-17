import React from "react"
import PersonalizedCareIcon from "../../images/svg/PersonalizedCareIcon"
import ConvenienceIcon from "../../images/svg/ConvenienceIcon"
import ContinuityOfCareIcon from "../../images/svg/ContinuityOfCareIcon"
import AccessToSpecialistsIcon from "../../images/svg/AccessToSpecialistsIcon"

const WhyTelehealth = () => {
  const sections = [
    {
      icon: <ConvenienceIcon alt="Convenience Icon" />,
      heading: "Convenience",
      text: "Skip the commute and long waiting times. Connect with your healthcare provider from anywhere.",
    },
    {
      icon: <PersonalizedCareIcon alt="Personalized Care Icon" />,
      heading: "Personalized Care",
      text: "Get tailored advice and treatment based on your unique health needs.",
    },
    {
      icon: <ContinuityOfCareIcon alt="Continuity of Care Icon" />,
      heading: "Continuity of Care",
      text: "Regular virtual check-ins help you stay on track with health goals and medication.",
    },
    {
      icon: <AccessToSpecialistsIcon alt="Access to Specialists Icon" />,
      heading: "Access to Specialists",
      text: "Consult with endocrinologists, dietitians, and diabetes educators without long wait times.",
    },
  ]

  return (
    <div
      className="min-h-screen w-full bg-white py-[5%]  relative flex items-center"
      id="why-telehealth"
    >
      <div className="container m-auto px-4 md:px-0">
        <h2 className="text-3xl md:text-5xl font-heading font-bold max-w-3xl leading-snug m-auto text-center mb-12 md:mb-[5%]">
          Why Choose Telehealth for Diabetes Care?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 max-w-5xl m-auto">
          {sections.map((section, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center text-center md:text-left gap-4 md:gap-8"
            >
              {/* Icon Section */}
              {section.icon && (
                <div className="w-16 h-16 mx-auto md:mx-0">{section.icon}</div>
              )}
              {/* Text Section */}
              <div>
                <h2 className="text-dark text-2xl md:text-4xl font-heading leading-snug">
                  {section.heading}
                </h2>
                <p className="text-base font-body mt-2">{section.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default WhyTelehealth
