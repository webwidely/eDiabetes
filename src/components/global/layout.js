import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Footer from "./Footer"

import Header from "./header"
import GoogleTranslate from "./GoogleTranslate"

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
      <div className=" fixed bottom-2 left-2 z-50">
        <GoogleTranslate/>
      </div>
      <Footer />
    </>
  )
}

export default Layout
