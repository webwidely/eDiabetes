import React from "react";
import { Link } from "gatsby";
import Lenis from '@studio-freight/lenis'; // Import Lenis
import { useEffect, useRef } from 'react';

const Footer = () => {
  const menuItems = [
    { name: "Home", link: "#hero" },
    { name: "Why Telehealth", link: "#why-telehealth" },
    { name: "Services", link: "#services" },
    { name: "How It Works", link: "#how-it-works" },
    { name: "Contact", link: "#contact" },
  ];

  const lenisRef = useRef(null); // Reference for Lenis

  // Initialize Lenis
  useEffect(() => {
    lenisRef.current = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    function raf(time) {
      lenisRef.current.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenisRef.current = null; // Cleanup
    };
  }, []);

  // Smooth scrolling for footer links
  const handleMenuItemClick = (event, targetId) => {
    event.preventDefault(); // Prevent the default anchor link behavior

    const targetElement = document.getElementById(targetId.substring(1)); // Get the target section
    if (targetElement) {
      lenisRef.current.scrollTo(targetElement.offsetTop); // Use Lenis to scroll smoothly
    }
  };

  return (
    <footer className="bg-primary text-white text-center p-4 min-h-[40vh] flex flex-col justify-center py-[5%]">
      <div className="container m-auto">
        <div className="flex flex-col items-center gap-12">
          <h3 className="font-heading text-5xl">Site Navigation</h3>
          <nav className="flex flex-row justify-center gap-4 flex-wrap lg:gap-20 font-body text-base">
            {menuItems.map((menuItem) => (
              <Link
                key={menuItem.name}
                to={menuItem.link}
                className="text-white uppercase"
                onClick={(e) => handleMenuItemClick(e, menuItem.link)}
              >
                {menuItem.name}
              </Link>
            ))}
          </nav>
          <button className="px-8 py-4 rounded-lg bg-gradient-to-tl hover:bg-gradient-to-tr transition-all from-primary to-secondary text-white uppercase">
            <Link to="#contact" onClick={(e) => handleMenuItemClick(e, "#contact")}>
              Schedule Your Appointment Today
            </Link>
          </button>
        </div>
        <hr className="my-8 border-t border-2 border-secondary max-w-2xl m-auto" />
        <p className="text-sm opacity-80 tracking-wide font-body">© {new Date().getFullYear()} eDiabetes.com | All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
