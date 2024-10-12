import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { FaBars, FaTimes } from "react-icons/fa";

const menuItems = [
  { name: "Home", link: "/" },
  { name: "Why Telehealth", link: "#why-telehealth" },
  { name: "Services", link: "#services" },
  { name: "How It Works", link: "#how-it-works" },
  { name: "Contact", link: "#contact" }, // This will be the button
];

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
  `);

  const logoImage = getImage(data.file);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  // Close menu when clicking outside of it
  const menuRef = React.useRef();
  React.useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isMenuOpen]);

  // Close menu on link click and enable smooth scrolling
  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            {logoImage ? (
              <GatsbyImage
                image={logoImage}
                alt="Logo"
                className=" w-[283px] h-auto"
              />
            ) : (
              <img
                src="../../images/logo.png"
                alt={siteTitle}
                className="w-[283px] h-auto"
              />
            )}
          </Link>

          {/* Hamburger Button */}
          <button
            className="lg:hidden text-primary text-2xl"
            id="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Mobile Menu */}
          <ul
            ref={menuRef}
            className={`flex flex-col lg:flex-row gap-6 lg:items-center lg:gap-6 uppercase transform transition-transform duration-300 ease-in-out fixed lg:static h-full top-0 left-0 lg:h-auto lg:translate-x-0 lg:opacity-100 ${
              isMenuOpen
                ? "translate-x-0 opacity-100"
                : "-translate-x-full opacity-0"
            } bg-white  w-3/4 lg:w-auto pt-10 lg:pt-0 px-10 lg:px-0`}
          >
            {menuItems.map((menuItem, index) => (
              <li key={index}>
                {index < menuItems.length - 1 ? (
                  <Link
                    to={menuItem.link}
                    className="text-dark hover:text-secondary font-heading"
                    onClick={handleMenuItemClick}
                    style={{ scrollBehavior: "smooth" }}
                  >
                    {menuItem.name}
                  </Link>
                ) : (
                  <button
                    onClick={handleMenuItemClick}
                    className="text-white px-8 py-2 rounded-lg bg-primary uppercase"
                  >
                    {menuItem.name}
                  </button>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
