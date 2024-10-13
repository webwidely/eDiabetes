import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Hero = () => {
  const data = useStaticQuery(graphql`
    query HeroQuery {
      file(name: { eq: "heroimg" }) {
        childImageSharp {
          gatsbyImageData(
            webpOptions: { quality: 10 }
            quality: 100
            placeholder: DOMINANT_COLOR
            layout: FULL_WIDTH
          )
        }
      }
    }
  `)

  const heroImage = getImage(data.file)

  return (
    <div
      className="min-h-screen w-full bg-primary/10 relative flex items-center"
      id="hero"
    >
      {/* SVG Background only visible on larger screens */}
      <div className="hidden lg:block absolute right-0 top-0 z-0">
        <svg width="100%" height="100vh" viewBox="0 0 1090 1080">
          <defs>
            <linearGradient
              id="linear-gradient"
              x1="0.991"
              y1="0.145"
              x2="0.302"
              y2="1.095"
              gradientUnits="objectBoundingBox"
            >
              <stop offset="0" stopColor="#06847e" />
              <stop offset="1" stopColor="#0f4f52" />
            </linearGradient>
          </defs>
          <path
            id="Path_45"
            data-name="Path 45"
            d="M1090,0h0V1080H0Z"
            fill="url(#linear-gradient)"
          />
        </svg>
      </div>

      <div className="container m-auto z-10 flex flex-col-reverse lg:flex-row flex-wrap justify-between items-center px-4 md:px-8">
        {/* Left Content */}
        <div className="flex flex-col gap-4 max-w-xl lg:w-1/2 text-center lg:text-left mt-8 lg:mt-0">
          <h2 className="text-xl md:text-2xl font-subheading text-secondary">
            Managing diabetes has never been easier
          </h2>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary leading-tight -mt-2 lg:-mt-4">
            Comprehensive Diabetes Care from the Comfort of Your Home
          </h1>
          <p className="font-body max-w-sm mx-auto lg:mx-0 text-sm md:text-base">
            Our Diabetes Care Telehealth services provide personalized care,
            education, and resources—all from the convenience of your own home.
            Schedule your first virtual appointment today!
          </p>
          <button className="max-w-fit px-6 md:px-8 py-3 md:py-4 rounded-lg bg-gradient-to-tl hover:bg-gradient-to-tr transition-all from-primary to-secondary text-white uppercase mx-auto lg:mx-0">
            <Link
              to="https://www.halaxy.com/profile/dr-talib-muhammed/other/1555241"
              target="_blank"
            >
              Schedule Your Appointment Today
            </Link>
          </button>
        </div>

        {/* Right Image - Ensure it's visible */}
        <div className="imgdiv w-full md:w-1/2 lg:max-w-4xl lg:w-1/2 order-1 lg:order-2">
          {heroImage ? (
            <GatsbyImage
              image={heroImage}
              alt="Hero Image"
              className="w-full h-auto rounded-xl shadow-lg"
            />
          ) : (
            <p className="text-center text-red-500">Image not available</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default Hero
