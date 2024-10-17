import React, { useState, useRef } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
// Video import commented out for now
// import HeroVideo from "../../images/video/herovideo.mp4"

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility
  // Video ref commented out for now
  // const videoRef = useRef(null); // Ref to control video playback

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

  // Function to handle play button click commented out for now
  // const handlePlay = () => {
  //   setIsModalOpen(true); // Open modal when play button is clicked
  // }

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close modal
    // Video control commented out for now
    // if (videoRef.current) {
    //   videoRef.current.pause(); // Pause video when modal closes
    //   videoRef.current.currentTime = 0; // Reset video to start
    // }
  }

  const handleClickOutside = (e) => {
    // Close modal if clicked outside the video area
    if (e.target.classList.contains('modal-backdrop')) {
      handleCloseModal();
    }
  }

  return (
    <div className="min-h-screen w-full bg-primary/10 relative flex items-center" id="hero">
      {/* SVG Background only visible on larger screens */}
      <div className="hidden lg:block absolute right-0 top-0 z-0">
        {/* SVG element commented out for now */}
        {/* <svg width="100%" height="100vh" viewBox="0 0 1090 1080" alt="Hero SVG Background">
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
        </svg> */}
      </div>

      <div className="container m-auto z-10 flex flex-col-reverse lg:flex-row flex-wrap justify-between items-center px-4 md:px-8">
        {/* Left Content */}
        <div className="flex flex-col gap-4 max-w-xl lg:w-1/2 text-center lg:text-left mt-8 lg:mt-0">
          <h2 className="text-xl md:text-2xl font-subheading text-secondary">
            Managing diabetes has never been easier
          </h2>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary leading-snug -mt-2 lg:-mt-4">
            Comprehensive Diabetes Care from the Comfort of Your Home
          </h1>
          <p className="font-body max-w-sm mx-auto lg:mx-0 text-sm md:text-base">
            Our Diabetes Care Telehealth services provide personalized care, education, and resources—all from the convenience of your own home. Schedule your first virtual appointment today!
          </p>
          <button className="max-w-fit px-6 md:px-8 py-3 md:py-4 rounded-lg bg-gradient-to-tl hover:bg-gradient-to-tr transition-all from-primary to-secondary text-white uppercase mx-auto lg:mx-0">
            <Link to="https://www.halaxy.com/profile/dr-talib-muhammed/other/1555241" target="_blank">
              Schedule Your Appointment Today
            </Link>
          </button>
        </div>

        {/* Right Image */}
        <div className="imgdiv w-full md:w-1/2 lg:max-w-4xl lg:w-1/2 order-1 lg:order-2 relative mt-28 md:mt-0">
          <div className="relative">
            <GatsbyImage
              image={heroImage}
              alt="Hero Image: A person managing their diabetes at home"
              className="w-full h-auto rounded-xl shadow-lg"
            />
            {/* Play button and SVG element commented out for now */}
            {/* <button
              onClick={handlePlay}
              className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-20 rounded-xl"
            >
              <svg id="Group_57"  width="78" height="78" viewBox="0 0 512 512" alt="Play Icon">
                <path id="Path_62" data-name="Path 62" d="M256,0C114.62,0,0,114.62,0,256S114.62,512,256,512,512,397.38,512,256,397.38,0,256,0ZM359.2,274.18,290.81,313.5l-68.58,39.43a20.965,20.965,0,0,1-31.42-18.17V177.24a20.965,20.965,0,0,1,31.42-18.17l68.58,39.43,68.39,39.32A20.974,20.974,0,0,1,359.2,274.18Z" fill="#0f4f52"/>
              </svg>
            </button> */}
          </div>
        </div>
      </div>

      {/* Modal for Video Playback */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-75 modal-backdrop p-8" onClick={handleClickOutside}>
          <div className="relative w-full max-w-md">
            {/* Close Button */}
            <button
              onClick={() => handleCloseModal()}
              className="absolute top-14 md:top-0 right-0 m-4 text-white text-4xl z-50"
            >
              &times;
            </button>
            {/* Video element commented out for now */}
            {/* <video
              ref={videoRef}
              src={HeroVideo}
              className="w-full h-auto rounded-lg"
              controls
              autoPlay
              alt="Hero Video"
            /> */}
          </div>
        </div>
      )}
    </div>
  )
}

export default Hero
