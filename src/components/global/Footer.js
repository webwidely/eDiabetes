import React from "react"
import { Link } from "gatsby"

const Footer = () => {
  const menuItems = [
    { name: "Home", link: "/" },
    { name: "Why Telehealth", link: "#why-telehealth" },
    { name: "Services", link: "#services" },
    { name: "How It Works", link: "#how-it-works" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <footer className="bg-primary text-white text-center p-4 min-h-[40vh] flex flex-col justify-center py-[5%]">
        <div className="container m-auto">
            
      <div className="flex flex-col items-center gap-12">
        <h3 className="font-heading text-5xl">Site Navigation</h3>
        <nav className="flex flex-row justify-center gap-4 flex-wrap lg:gap-20 font-body text-base">
          {menuItems.map((menuItem) => (
            <Link key={menuItem.name} to={menuItem.link} className="text-white uppercase">
              {menuItem.name}
            </Link>
          ))}
        </nav>
        <button className="px-8 py-4 rounded-lg bg-gradient-to-tl hover:bg-gradient-to-tr transition-all from-primary to-secondary text-white uppercase">
          <Link to="#contact">Schedule Your Appointment Today</Link>
        </button>
      </div>
      <hr className="my-8 border-t border-2 border-secondary max-w-2xl m-auto" />
      <p className="text-sm opacity-80 tracking-wide font-body">© {new Date().getFullYear()} eDiabetes.com | All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
