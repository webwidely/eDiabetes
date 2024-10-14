import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

const WhatsApp = () => {
  return (
    <div className="fixed bottom-0 right-0 m-4 z-50">
      <a href="https://wa.me/+14039039110?text=Hello! How can we help you?" target="_blank" rel="noopener noreferrer">
        <FaWhatsapp className="text-white text-6xl bg-green-500 p-2 rounded-full " style={{ boxShadow: '0 0 8px #00ff00' }} />
      </a>
    </div>
  );
};

export default WhatsApp;
