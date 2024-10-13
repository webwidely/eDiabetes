import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

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
  `);

  const heroImage = getImage(data.file);

  return (
    <div className="min-h-screen w-full bg-primary/10 relative flex items-center" id="hero">
      <div className="absolute right-0 top-0 z-0">
        <svg width="100%" height="100vh" viewBox="0 0 1090 1080">
          <defs>
            <linearGradient id="linear-gradient" x1="0.991" y1="0.145" x2="0.302" y2="1.095" gradientUnits="objectBoundingBox">
              <stop offset="0" stop-color="#06847e"/>
              <stop offset="1" stop-color="#0f4f52"/>
            </linearGradient>
          </defs>
          <path id="Path_45" data-name="Path 45" d="M1090,0h0V1080H0Z" fill="url(#linear-gradient)"/>
        </svg>
      </div>
    
   <div className="container m-auto z-10 flex flex-col lg:flex-row flex-wrap-reverse justify-between items-center" >
    <div className="flex flex-col gap-4 max-w-xl lg:w-1/2">
        <h2 className="text-2xl font-subheading text-secondary">Managing diabetes has never been easier</h2>
        <h1 className="text-5xl font-heading text-primary leading-tight -mt-4">Comprehensive Diabetes Care from the Comfort of Your Home</h1>
        <p className="font-body max-w-sm">Our Diabetes Care Telehealth services provide personalized care, education, and resources—all from the convenience of your own home. Schedule your first virtual appointment today!</p>
        <button className=" max-w-fit px-8 py-4 rounded-lg bg-gradient-to-tl hover:bg-gradient-to-tr transition-all from-primary to-secondary text-white uppercase">
          <Link to="#contact">Schedule Your Appointment Today</Link>
        </button>
    </div>
    <div className="imgdiv max-w-4xl lg:w-1/2">
      {heroImage && (
        <GatsbyImage
          image={heroImage}
          alt="Hero Image"
          className="w-full h-auto rounded-xl shadow-lg"
        />
      )}
    </div>
   </div>

    </div>
  );
}

export default Hero;
