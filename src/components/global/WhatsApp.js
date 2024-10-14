import React from 'react'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import Siteicon from "../../images/SiteIcon.png"

const WhatsApp = () => {
  return (
    <div>
      {/* Other page content */}
      
      {/* WhatsApp Widget */}
      <FloatingWhatsApp 
        phoneNumber="+14039039110" 
        message="Hello! How can we help you?"
        style={{ zIndex: 999 }}
        accountName="Dr Talib Muhammed"
        avatar={Siteicon}
      />
    </div>
  );
};

export default WhatsApp;
