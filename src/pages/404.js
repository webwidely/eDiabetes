import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/global/layout";
import Seo from "../components/global/seo";

const NotFoundPage = () => (
  <Layout>
    <div className="min-h-screen w-full bg-primary/10 flex items-center justify-center">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-heading text-primary">
          Oops! Page Not Found
        </h1>
        <p className="font-body text-lg text-secondary mt-4">
          The page you're looking for doesn't seem to exist. Let’s help you find your way back.
        </p>
        
        <Link to="/" aria-label="Back to Home">
          <button
            className="px-8 py-4 rounded-lg bg-gradient-to-tl hover:bg-gradient-to-tr transition-all from-primary to-secondary text-white uppercase mt-8"
          >
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  </Layout>
);

// SEO setup for 404 page
export const Head = () => (
  <Seo 
    title="Oops! Page Not Found"
    description="The page you're looking for doesn't exist. Return to the homepage of Diabetes Telehealth."
    canonical={`${typeof window !== "undefined" ? window.location.origin : ''}/404`} // Correct canonical link
  />
);

export default NotFoundPage;
