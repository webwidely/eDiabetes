/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/
 */

/**
 * @type {import('gatsby').GatsbySSR['onRenderBody']}
 */
exports.onRenderBody = ({ setHtmlAttributes, setPostBodyComponents }) => {
  // Set the lang attribute to 'en'
  setHtmlAttributes({ lang: `en` });

  // Add script to dynamically set alt tags for images and SVGs
  setPostBodyComponents([
    <script
      key="altTagScript"
      dangerouslySetInnerHTML={{
        __html: `
          document.addEventListener('DOMContentLoaded', function() {
            const images = document.querySelectorAll('img, svg');

            images.forEach(img => {
              if (!img.hasAttribute('alt') || img.getAttribute('alt') === '') {
                const src = img.getAttribute('src') || '';
                img.setAttribute('alt', src.includes('.svg') ? 'SVG image' : 'Image without alt text');
              }
            });
          });
        `,
      }}
    />,
  ]);
};
