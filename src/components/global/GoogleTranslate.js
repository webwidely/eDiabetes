import React, { useEffect } from "react";

const GoogleTranslate = () => {
  useEffect(() => {
    const googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          autoDisplay: false,
        },
        "google_translate_element"
      );
    };

    // Add Google Translate script to the page
    const addScript = document.createElement("script");
    addScript.setAttribute(
      "src",
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    );
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit;

    // Function to replace "Powered by Google" with "Translate Website"
    const replaceAttribution = () => {
      const intervalId = setInterval(() => {
        const poweredByGoogle = document.querySelector(".goog-te-gadget span");
        if (poweredByGoogle) {
          poweredByGoogle.innerHTML = "Google Translate"; // Replaces the text with custom text
          clearInterval(intervalId);
        }
      }, 100);
    };

    replaceAttribution();
  }, []);

  return (
    <div
      id="google_translate_element"
      className="flex flex-col justify-center items-center mx-auto p-4 bg-red-600 text-dark rounded-lg shadow-md z-50"
    >
   
    </div>
  );
};

export default GoogleTranslate;
