import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/global/layout"
import Seo from "../components/global/seo"

const NotFoundPage = () => (
  <Layout>
    <div className="min-h-screen w-full bg-primary/10 relative flex items-center justify-center">
      <div className="container m-auto text-center">
        <h1 className="text-5xl font-heading text-primary">Oops! Page Not Found</h1>
        <p className="font-body text-lg text-secondary">It seems like the page you're looking for doesn't exist. Let's get you back on track.</p>
        <button className="px-8 py-4 rounded-lg bg-gradient-to-tl hover:bg-gradient-to-tr transition-all from-primary to-secondary text-white uppercase mt-8">
          <Link to="/">Back to Home</Link>
        </button>
      </div>
    </div>
  </Layout>
)

export const Head = () => <Seo title="Oops! Page Not Found" />

export default NotFoundPage
