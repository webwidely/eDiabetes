import React from "react"
import BookanAppointment from "../../images/svg/BookanAppointment"
import ConnectwithYourProvider from "../../images/svg/ConnectwithYourProvider"
import ReceiveYourPersonalizedPlan from "../../images/svg/ReceiveYourPersonalizedPlan"
import OngoingSupport from "../../images/svg/OngoingSupport"

const HowItWorks = () => {
  const sections = [
    {
      id: 1,
      icon: <BookanAppointment alt="Book an Appointment Icon" />,
      heading: "Book an Appointment",
      text: "Schedule online or call us.",
    },
    {
      id: 2,
      icon: <ConnectwithYourProvider alt="Connect with Your Provider Icon" />,
      heading: "Connect with Your Provider",
      text: "Join a virtual appointment through a secure video link.",
    },
    {
      id: 3,
      icon: <ReceiveYourPersonalizedPlan alt="Receive Your Personalized Plan Icon" />,
      heading: "Receive Your Personalized Plan",
      text: "Get a customized care plan based on your health goals.",
    },
    {
      id: 4,
      icon: <OngoingSupport alt="Ongoing Support Icon" />,
      heading: "Ongoing Support",
      text: "Continue meeting with your provider and accessing telehealth services for ongoing management.",
    },
  ]

  return (
    <div
      className="min-h-screen w-full bg-white relative flex items-center"
      id="how-it-works"
    >
      <div className="container m-auto bg-cover bg-center overflow-hidden relative rounded-2xl px-4 md:px-0">
        <div className="py-12 relative z-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold max-w-lg text-dark leading-snug m-auto text-center mb-8">
            How It Works
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {sections.map(section => (
              <div
                key={section.id}
                className="flex flex-col min-h-80 gap-4 relative rounded-lg overflow-hidden justify-center items-center bg-primary/10 p-6"
              >
                <div className="absolute top-2 left-2 bg-primary text-white p-2 rounded-full flex items-center justify-center w-10 h-10">
                  {section.id}
                </div>
                <div className="max-w-24">{section.icon}</div>

                <div className="text-center text-dark">
                  <h2 className="text-lg sm:text-xl font-bold leading-snug">
                    {section.heading}
                  </h2>
                  <p className="text-base sm:text-lg">{section.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HowItWorks
