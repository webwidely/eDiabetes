import * as React from "react"

import Layout from "../components/global/layout"
import Seo from "../components/global/seo"

const IndexPage = () => (
  <Layout>
    <div>
      <h1 className="text-7xl font-subheading">
        Welcome to <b>Gatsby!</b>
      </h1>
    </div>
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
