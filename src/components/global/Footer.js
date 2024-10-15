import React from "react"
import { Link } from "gatsby"
import Lenis from "@studio-freight/lenis"
import { useEffect, useRef } from "react"
import { FaInstagram, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  const menuItems = [
    { name: "Home", link: "#hero" },
    { name: "Why Telehealth", link: "#why-telehealth" },
    { name: "Services", link: "#services" },
    { name: "How It Works", link: "#how-it-works" },
    { name: "Contact", link: "#contact" },
  ]

  const lenisRef = useRef(null)

  // Initialize Lenis for smooth scrolling
  useEffect(() => {
    lenisRef.current = new Lenis({
      duration: 1.2,
      easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    })

    function raf(time) {
      lenisRef.current.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenisRef.current = null // Cleanup
    }
  }, [])

  // Smooth scrolling for footer links
  const handleMenuItemClick = (event, targetId) => {
    event.preventDefault() // Prevent the default anchor link behavior
    const targetElement = document.getElementById(targetId.substring(1)) // Get the target section by ID
    if (targetElement) {
      lenisRef.current.scrollTo(targetElement.offsetTop) // Use Lenis for smooth scrolling
    }
  }

  return (
    <footer className="bg-primary text-white text-center p-6 md:p-8 flex flex-col justify-center py-[5%]">
      <div className="container m-auto">
        {/* Footer Content */}
        <div className="flex flex-col items-center gap-8 md:gap-12">
          <h3 className="font-heading text-3xl sm:text-4xl md:text-5xl">
            Site Navigation
          </h3>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-4 md:gap-8 lg:gap-12 font-body text-base">
            {menuItems.map(menuItem => (
              <Link
                key={menuItem.name}
                to={menuItem.link}
                className="text-white uppercase hover:text-secondary transition-colors"
                onClick={e => handleMenuItemClick(e, menuItem.link)}
              >
                {menuItem.name}
              </Link>
            ))}
          </nav>

          {/* Schedule Button */}
          <button className="px-6 py-3 md:px-8 md:py-4 rounded-lg bg-gradient-to-tl from-primary to-secondary hover:bg-gradient-to-tr transition-all text-white uppercase">
            <Link
              to="https://www.halaxy.com/profile/dr-talib-muhammed/other/1555241"
              target="_blank"
            >
              Schedule Your Appointment Today
            </Link>
          </button>
        </div>

        {/* Divider */}
        <hr className="my-8 border-t-2 border-secondary max-w-2xl m-auto" />

        {/* Copyright Text and Social Media Icons */}
        <div className="flex flex-col items-center gap-4">
          <p className="text-xs md:text-sm opacity-80 tracking-wide font-body">
            © {new Date().getFullYear()} eDiabetes.com | All Rights Reserved.
          </p>
          <div className="flex gap-4">
            <a href="https://www.instagram.com/diabetesth" target="_blank" rel="noopener noreferrer" className="text-white">
              <FaInstagram className="text-2xl" />
            </a>
            <a href="https://www.youtube.com/@internationalavenuemedical826" target="_blank" rel="noopener noreferrer" className="text-white">
              <FaYoutube className="text-2xl" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
