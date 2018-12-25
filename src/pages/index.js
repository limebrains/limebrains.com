import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import { Button } from 'rendition'
import { Link } from '../components/link';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    </div>

    <Link to="/page-2/">
      <Button primary>go to page 2</Button>
    </Link>
  </Layout>
)

export default IndexPage
