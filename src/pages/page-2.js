import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <p>Welcome to page 2</p>
    <Link to="/">Home</Link>
  </Layout>
)

export default SecondPage
