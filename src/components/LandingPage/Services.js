import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";
import servicesbg from "../../images/servicesbg.jpg"; // Import the background image

const OurTelehealthDiabetesServices = () => {
  // GraphQL query to get the images
  const data = useStaticQuery(graphql`
    query {
      s1: file(relativePath: { eq: "services/s1.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 300)
        }
      }
      s2: file(relativePath: { eq: "services/s2.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 300)
        }
      }
      s3: file(relativePath: { eq: "services/s3.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 300)
        }
      }
      s4: file(relativePath: { eq: "services/s4.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 300)
        }
      }
      s5: file(relativePath: { eq: "services/s5.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 300)
        }
      }
      s6: file(relativePath: { eq: "services/s6.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 300)
        }
      }
    }
  `);

  // Get images using getImage
  const services = [
    {
      image: getImage(data.s1),
      title: "Virtual Consultations",
      description: "Connect with healthcare professionals from the comfort of your home for diabetes management.",
    },
    {
      image: getImage(data.s2),
      title: "Diabetes Education",
      description: "Receive personalized education on managing your diabetes, including diet and exercise.",
    },
    {
      image: getImage(data.s3),
      title: "Continuous Glucose Monitoring",
      description: "Get access to tools and insights for real-time blood glucose monitoring remotely.",
    },
    {
      image: getImage(data.s4),
      title: "Medication Management",
      description: "Work with specialists to ensure your medication plan is optimized for your needs.",
    },
    {
      image: getImage(data.s5),
      title: "Dietary Counseling",
      description: "Consult with dietitians to develop a meal plan that supports your diabetes management.",
    },
    {
      image: getImage(data.s6),
      title: "Exercise Guidance",
      description: "Receive exercise recommendations tailored to your fitness level and diabetes goals.",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-white relative flex items-center" id="services">
    <div
      className="container m-auto bg-cover bg-center overflow-hidden relative rounded-2xl"
      style={{ backgroundImage: `url(${servicesbg})` }}
    >
      <div className="overlay bg-primary/85 absolute w-full h-full z-10"></div> {/* Ensure this has a z-index lower than the heading */}
  
      <div className="py-[5%] relative z-20"> {/* Add z-20 to bring it above the overlay */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold max-w-lg text-white leading-snug m-auto text-center mb-12 relative z-20">
            Our Telehealth Diabetes Services
          </h2>
  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 lg:gap-20 max-w-5xl px-4 m-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col min-h-96 gap-8 relative rounded-lg overflow-hidden"
            >
              {service.image && (
                <GatsbyImage
                  image={service.image}
                  alt={service.title}
                  className="h-full w-full bg-cover bg-center absolute top-0 right-0 bottom-0 left-0"
                />
              )}
              <div className="overlay bg-gradient-to-b from-transparent to-primary absolute w-full h-full z-0"></div>
  
              <div className="absolute bottom-4 text-center p-4 text-white">
                <h2 className=" text-2xl font-heading leading-snug">{service.title}</h2>
                <p className="text-base font-body">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
  
  );
};

export default OurTelehealthDiabetesServices;
