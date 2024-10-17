import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Helmet } from "react-helmet";

function Seo({ description, title, keywords, children, canonical, image }) {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          description
          author
          siteUrl
          title  
          keywords
        }
      }
    }
  `);

  // Use provided description or fallback
  const metaDescription = description || site.siteMetadata.description;

  // Default site title
  const defaultTitle = site.siteMetadata?.title || 'eDiabetes';

  // Fallback image
  const imageUrl = image || `${site.siteMetadata.siteUrl}/images/SiteIcon.png`;

  // Canonical URL
  const canonicalUrl = canonical || `${site.siteMetadata.siteUrl}${typeof window !== "undefined" ? window.location.pathname : ''}`;

  // Use provided title or fallback to default title
  const pageTitle = title || defaultTitle;

  // Use provided keywords or fallback
  const metaKeywords = keywords || site.siteMetadata.keywords || '';

  // Schema markup
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "WebSite", // Change to "Article" for blog posts
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
      <title>{pageTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:alt" content={pageTitle} />
      <meta property="og:site_name" content={defaultTitle} />
      <meta property="og:url" content={canonicalUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={site.siteMetadata?.author || `Abdul Rauf`} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:image:alt" content={pageTitle} />
      <link rel="canonical" href={canonicalUrl} />

      <script type="application/ld+json">
        {JSON.stringify(schemaMarkup)}
      </script>

      {children}
    </Helmet>
  );
}

export default Seo;
