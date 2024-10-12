import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Footer from "./Footer"

import Header from "./header"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div>
        <main>{children}</main>
        
      </div>
      <Footer />
    </>
  )
}

export default Layout
