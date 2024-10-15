import React, { useState } from "react";
import { Link } from "gatsby";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import { FaInstagram, FaYoutube } from 'react-icons/fa'


const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    whatsappNumber: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState(null); // success or error message
  const [loading, setLoading] = useState(false); // to manage loading state

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission
    setLoading(true); // set loading to true when form is submitting

    const formDataToSend = new FormData(); // Create FormData to send via fetch
    formDataToSend.append("fullName", formData.fullName);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("whatsappNumber", formData.whatsappNumber);
    formDataToSend.append("subject", formData.subject);
    formDataToSend.append("message", formData.message);

    // Send a POST request to the FormSubmit.php file
    fetch("/FormSubmit.php", {
      method: "POST",
      body: formDataToSend,
    })
      .then((response) => response.text()) // Handle as text since PHP usually returns plain text
      .then((result) => {
        setLoading(false); // stop loading
        if (result.toLowerCase().includes("success")) {
          setFormStatus("success");
        } else {
          setFormStatus("error");
        }
      })
      .catch(() => {
        setLoading(false);
        setFormStatus("error");
      });
  };

  return (
    <>
      <div
        id="contact"
        className="min-h-screen w-full bg-primary/10 relative flex py-[5%]"
      >
        <div className="container m-auto px-4 md:px-8">
          {/* Section Heading */}
          <div className="mb-12 max-w-md m-auto text-primary">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold leading-snug m-auto text-center">
              Get Started Today!
            </h2>
            <p className="font-body text-center mt-4 text-base sm:text-lg">
              Take control of your diabetes management with our Telehealth
              services. Contact us today to schedule your first virtual
              appointment.
            </p>
          </div>

          {/* Contact Info and Form Section */}
          <div className="flex flex-col lg:flex-row items-center lg:items-center max-w-7xl m-auto gap-12 lg:gap-24">
            {/* Contact Information Section */}
            <div className="contactinfo space-y-6 w-full lg:w-1/3 text-center lg:text-left">
              <h3 className="text-2xl sm:text-3xl font-heading text-dark mb-6">
                Contact Information
              </h3>

              <div className="flex items-center justify-center lg:justify-start space-x-4">
                <FaPhone className="text-secondary text-2xl" />
                <p className="text-lg font-medium text-primary">
                  <a
                    href="tel:(403) 457-5900"
                    className="hover:text-secondary transition-colors"
                  >
                    Phone: (403) 457-5900
                  </a>
                </p>
              </div>

              <div className="flex items-center justify-center lg:justify-start space-x-4">
                <FaEnvelope className="text-secondary text-2xl" />
                <p className="text-lg font-medium text-primary">
                  <a
                    href="mailto:info@ediabetes.ca"
                    className="hover:text-secondary transition-colors"
                  >
                    Email: info@ediabetes.ca
                  </a>
                </p>
              </div>
              <div className="flex gap-4 justify-center lg:justify-start">
            <a href="https://www.instagram.com/diabetesth" target="_blank" rel="noopener noreferrer" className="text-primary bg-white p-2 rounded-full shadow-2xl">
              <FaInstagram className="text-2xl" />
            </a>
            <a href="https://www.youtube.com/@internationalavenuemedical826" target="_blank" rel="noopener noreferrer" className="text-primary bg-white p-2 rounded-full shadow-2xl">
              <FaYoutube className="text-2xl" />
            </a>
          </div>

              <button className="w-full lg:w-auto px-8 py-4 rounded-lg bg-gradient-to-tl from-primary to-secondary hover:bg-gradient-to-tr transition-all text-white uppercase font-semibold shadow-md hover:shadow-lg">
                <Link
                  to="https://www.halaxy.com/profile/dr-talib-muhammed/other/1555241"
                  target="_blank"
                >
                  Schedule Your Appointment Today
                </Link>
              </button>
            </div>

            {/* Contact Form Section */}
            <div className="contactform bg-white p-6 md:p-8 rounded-lg w-full lg:w-2/3 shadow-lg">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-sm font-medium text-primary"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      id="fullName"
                      className="mt-1 block w-full pl-3 pr-3 py-2 border border-primary rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                      placeholder="Enter your full name"
                      value={formData.fullName}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-primary"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="mt-1 block w-full pl-3 pr-3 py-2 border border-primary rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                      placeholder="Enter your email address"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="whatsappNumber"
                      className="block text-sm font-medium text-primary"
                    >
                      WhatsApp Number
                    </label>
                    <input
                      type="text"
                      name="whatsappNumber"
                      id="whatsappNumber"
                      className="mt-1 block w-full pl-3 pr-3 py-2 border border-primary rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                      placeholder="Enter your WhatsApp number"
                      value={formData.whatsappNumber}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-primary"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      className="mt-1 block w-full pl-3 pr-3 py-2 border border-primary rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                      placeholder="Enter the subject"
                      value={formData.subject}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-primary"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="mt-1 block w-full pl-3 pr-3 py-2 border border-primary rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                    placeholder="Enter your message"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>

                {/* Display success or error message */}
                {formStatus === "success" && (
                  <p className="text-green-600 text-center mt-4">
                    Your message has been sent successfully!
                  </p>
                )}
                {formStatus === "error" && (
                  <p className="text-red-600 text-center mt-4">
                    Something went wrong. Please try again.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
