/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/
 */

// You can delete this file if you're not using it
import "./src/styles/global.css"
import Lenis from "@studio-freight/lenis"

let lenis;

export const onInitialClientRender = () => {
  // Initialize Lenis for smooth scrolling
  lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smooth: true,
  });

  // Request Animation Frame for Lenis
  function raf(time) {
    if (lenis) {
      lenis.raf(time);
    }
    requestAnimationFrame(raf);
  }
  
  requestAnimationFrame(raf);

  // Adding Google Tag Manager script
  const script = document.createElement('script');
  script.defer = true;  // Use defer for better loading
  script.src = 'https://www.googletagmanager.com/gtag/js?id=G-M9TG3HJC9V';
  document.head.appendChild(script);

  // Adding Google Tag Manager configuration
  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  
  // Ensure gtag is called only after script is loaded
  script.onload = () => {
    gtag('js', new Date());
    gtag('config', 'G-M9TG3HJC9V');
  };
};
