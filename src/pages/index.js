import React from 'react'

import Layout from '../components/layout/index'
import SEO from '../components/seo'
import { Areas } from '../components/sections/areas'
import { About } from '../components/sections/about'
import { Expertise } from '../components/sections/expertise'
import { Reviews } from '../components/sections/reviews'
import { Team } from '../components/sections/team'

const IndexPage = (props) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]}/>
    
    <Areas />

    <About /> 

    <Expertise />

    <Reviews />

    <Team />

  </Layout>
)

export default IndexPage
