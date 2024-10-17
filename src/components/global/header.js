import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { FaBars, FaTimes } from "react-icons/fa"
import Lenis from "@studio-freight/lenis" // Import Lenis

const menuItems = [
  { name: "Home", link: "#hero" },
  { name: "Why Telehealth", link: "#why-telehealth" },
  { name: "Services", link: "#services" },
  { name: "How It Works", link: "#how-it-works" },
  { name: "Contact", link: "#contact" },
]

const Header = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
    query LogoQuery {
      file(name: { eq: "logo" }) {
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

  const logoImage = getImage(data.file)
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const lenisRef = React.useRef(null) // Reference for Lenis

  // Initialize Lenis
  React.useEffect(() => {
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

  // Close menu when clicking outside of it
  const menuRef = React.useRef()
  React.useEffect(() => {
    const handleOutsideClick = event => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false)
      }
    }
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleOutsideClick)
    } else {
      document.removeEventListener("mousedown", handleOutsideClick)
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick)
    }
  }, [isMenuOpen])

  // Close menu on link click and enable smooth scrolling
  const handleMenuItemClick = (event, targetId) => {
    event.preventDefault() // Prevent the default anchor link behavior

    const targetElement = document.getElementById(targetId.substring(1)) // Get the target section
    if (targetElement) {
      lenisRef.current.scrollTo(targetElement.offsetTop) // Use Lenis to scroll smoothly
    }

    setIsMenuOpen(false) // Close the menu
  }

  return (
    <header className="bg-white shadow-md absolute top-0 right-0 left-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            {logoImage ? (
              <GatsbyImage
                image={logoImage}
                alt={`${siteTitle} logo`} // Updated alt text to be more descriptive
                className="w-[190px] md:w-[283px] h-auto"
              />
            ) : (
              <img
                src="../../images/logo.png"
                alt={`${siteTitle} logo`} // Updated alt text for fallback img
                className="w-[283px] h-auto"
              />
            )}
          </Link>

          {/* Hamburger Button */}
          <button
            className="lg:hidden text-primary text-2xl"
            id="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"} // Added aria-label
          >
            {isMenuOpen ? (
              <>
                <FaTimes aria-hidden="true" /> {/* Icon for closing */}
                <span className="sr-only">Close menu</span> {/* Screen reader only */}
              </>
            ) : (
              <>
                <FaBars aria-hidden="true" /> {/* Icon for opening */}
                <span className="sr-only">Open menu</span> {/* Screen reader only */}
              </>
            )}
          </button>

          {/* Mobile Menu */}
          <ul
            ref={menuRef}
            className={`flex flex-col lg:flex-row gap-6 lg:items-center lg:gap-6 uppercase transform transition-transform duration-300 ease-in-out fixed lg:static h-full top-0 left-0 lg:h-auto lg:translate-x-0 lg:opacity-100 ${
              isMenuOpen
                ? "translate-x-0 opacity-100"
                : "-translate-x-full opacity-0"
            } bg-white w-3/4 lg:w-auto pt-10 lg:pt-0 px-10 lg:px-0`}
          >
            {menuItems.map((menuItem, index) => (
              <li key={index}>
                <Link
                  to={menuItem.link}
                  className={`text-dark hover:text-primary font-heading ${
                    index === menuItems.length - 1
                      ? "text-white hover:!text-white px-8 py-2 rounded-lg bg-primary uppercase"
                      : ""
                  }`}
                  onClick={e => handleMenuItemClick(e, menuItem.link)}
                >
                  {menuItem.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header
