import React from "react";
import PersonalizedCareIcon from "../../images/svg/PersonalizedCareIcon";
import ConvenienceIcon from "../../images/svg/ConvenienceIcon";
import ContinuityOfCareIcon from "../../images/svg/ContinuityOfCareIcon";
import AccessToSpecialistsIcon from "../../images/svg/AccessToSpecialistsIcon";

const WhyTelehealth = () => {
    const sections = [
        {
            icon: <ConvenienceIcon />, 
            heading: "Convenience",
            text: "Skip the commute and long waiting times. Connect with your healthcare provider from anywhere.",
        },
        {
            icon: <PersonalizedCareIcon />, 
            heading: "Personalized Care",
            text: "Get tailored advice and treatment based on your unique health needs.",
        },
        {
            icon: <ContinuityOfCareIcon />, 
            heading: "Continuity of Care",
            text: "Regular virtual check-ins help you stay on track with health goals and medication.",
        },
        {
            icon: <AccessToSpecialistsIcon />, 
            heading: "Access to Specialists",
            text: "Consult with endocrinologists, dietitians, and diabetes educators without long wait times.",
        },
        
    ];

    return (
        <>
            <div className="min-h-screen w-full bg-white relative flex items-center" id="why-telehealth">
                <div className="container m-auto ">
                    <h2 className=" text-5xl font-heading font-bold max-w-3xl leading-snug m-auto text-center mb-[5%]">Why Choose Telehealth for Diabetes Care?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-20 max-w-5xl m-auto">
                        {sections.map((section, index) => (
                            <div key={index} className="flex gap-8">
                                {section.icon && <div className="max-w-16">{section.icon}</div>}
                                <div>
                                <h2 className="text-dark text-4xl font-heading leading-snug">{section.heading}</h2>
                                <p className="text-base font-body">{section.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default WhyTelehealth;