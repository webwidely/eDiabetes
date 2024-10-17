import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Helmet } from "react-helmet"; // Importing Helmet to manage document head

function Seo({ description, title, keywords, children, canonical, image }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
            keywords 
          }
        }
      }
    `
  );

  // Use provided description or fallback to site metadata description
  const metaDescription = description || site.siteMetadata.description;
  const defaultTitle = site.siteMetadata?.title; // Default site title
  const imageUrl = image || `${site.siteMetadata.siteUrl}/images/SiteIcon.png`; // Fallback image
  const canonicalUrl = canonical || `${site.siteMetadata.siteUrl}${typeof window !== "undefined" ? window.location.pathname : ''}`;

  // Determine the full title based on whether a title is provided
  const pageTitle = title ? title : defaultTitle; // Use page title if available, otherwise default site title

  // Use provided keywords or fallback to site metadata keywords
  const metaKeywords = keywords || site.siteMetadata.keywords || '';

  // Define schema markup for structured data
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "WebSite", // Change to "Article" if this is for a blog post
    "name": defaultTitle,
    "url": site.siteMetadata.siteUrl,
    "description": metaDescription,
    "author": {
      "@type": "Person",
      "name": site.siteMetadata.author,
    },
    "image": imageUrl,
  };

  return (
    <Helmet>
      <title>{pageTitle}</title> {/* Only one title displayed */}
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} /> {/* Meta keywords */}
      <meta property="og:title" content={pageTitle} /> {/* Use page title */}
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:alt" content={pageTitle} />
      <meta property="og:site_name" content={defaultTitle} />
      <meta property="og:url" content={canonicalUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={site.siteMetadata?.author || ``} />
      <meta name="twitter:title" content={pageTitle} /> {/* Use page title */}
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:image:alt" content={pageTitle} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Include the schema markup */}
      <script type="application/ld+json">
        {JSON.stringify(schemaMarkup)}
      </script>

      {children}
    </Helmet>
  );
}

export default Seo;
