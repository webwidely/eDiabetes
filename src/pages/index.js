import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <div>
      <h1 className="text-7xl">
        Welcome to <b>Gatsby!</b>
      </h1>
    </div>
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
